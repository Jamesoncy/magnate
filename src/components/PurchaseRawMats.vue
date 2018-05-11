<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Purchase Order List</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>P.O. #</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Total Price</th>
                  <th>Received</th>
                  <th>View</th>
                  <th>Supply</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{ item.po_no }}</td>
                  <td>2017-01-01</td>
                  <td>{{ item.name }}</td>
                  <td>{{ formatPrice(item.total_price) }}</td>
                  <td v-bind:class="priceIdentifier(item.total_price, item.received)">{{ formatPrice(item.received) }}</td>
                  <td>
                    <button class = "btn btn-sm btn-info" v-on:click="viewDetails(item.po_no)"><i class = "fa fa-search"></i></button>
                  </td>
                  <td><button class = "btn btn-sm btn-success" v-on:click="receiveDetails(item)"><i class = "fa fa-caret-square-o-left"></i></button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>Raw Materials</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Vendor</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11"><select class="form-control selectpicker bs-select" v-model="selected" v-on:change="addVendorItems()" data-live-search="true" title="Choose one of the following...">
                <option
                  v-for="(option, index) in vendor"
                  :key="index"
                  :value="option.id"
                >
                  {{ option.name }}
                </option>
              </select></div>
              <div class="col-sm-1"><button type="button" v-on:click="addRow()" class="btn btn-success btn-sm pull-right"><i class="fa fa-plus"></i></button></div>
            </div>
            <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in cart" :key="index">
                <td>{{ item.item }}</td>
                <td>{{ item.price }}</td>
                <td><input type = 'number' class = 'form-control' v-model="cart[index].qty" /></td>
                <td>{{ formatPrice(item.price * item.qty) }}</td>
                <td><button class = 'btn btn-danger btn-sm' v-on:click="removeSelected(item.id)"><i class = "fa fa-close"></i></button></td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" v-on:click="hide()" class="btn btn-info pull-right">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="view_details">
      <div class="modal-dialog modal-80">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>{{selected_vendor}}</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="table-responsive m-t-40">
                  <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Received</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in selectedData" :key="index">
                      <td>{{ item.item }}</td>
                      <td>{{ item.price_per_piece }}</td>
                      <td>{{ item.qty }}</td>
                      <td v-bind:class="priceIdentifier(item.qty, item.received)">{{ item.received }}</td>
                      <td>
                        {{ formatPrice(item.received * item.price_per_piece) }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" v-on:click="hide()" class="btn btn-info pull-right">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="receive_details">
      <div class="modal-dialog modal-80">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>{{selected_vendor}}</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="table-responsive m-t-40">
                  <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Received</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in selectedData" :key="index">
                      <td>{{ item.item }}</td>
                      <td>{{ item.price_per_piece }}</td>
                      <td>{{ item.qty }}</td>
                      <td ><input type = "number" class = "form-control" v-model = "item.received"/></td>
                      <td>
                        {{ formatPrice(item.received * item.price_per_piece) }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" v-on:click="hide()" class="btn btn-info pull-right">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'PurchaseRawMats',
  data () {
    return {
      view_details: {},
      selectedData: [],
      selected: [],
      selected_vendor: '',
      data: [
        {
          po_no: '123124213',
          name: 'Company A',
          total_price: '124424.00',
          received: '124424.00',
          details: [
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 50
            },
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 50
            },
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 50
            }
          ]
        },
        {
          po_no: '55555',
          name: 'Company B',
          total_price: '124424.00',
          received: '1000.00',
          details: [
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 40
            },
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 40
            },
            {
              item: 'Caps',
              qty: 50,
              price_per_piece: 100,
              total_price: 5000,
              received: 40
            }
          ]
        }
      ],
      vendor: [
        {
          id: 1,
          name: 'Company A'
        },
        {
          id: 2,
          name: 'Company B'
        }
      ],
      cart: []
    }
  },
  mounted () {
    $('.selectpicker').selectpicker()
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    viewDetails (poNo) {
      const searchId = poNo
      const key = _.findLastIndex(this.data, function (o) { return o.po_no === searchId })
      const item = this.data[key]
      this.view_details = item
      this.selected_vendor = `#${item.po_no} - ${item.name}`
      this.selectedData = item.details
      $('#view_details').modal('show')
    },
    receiveDetails (item) {
      this.selectedData = item.details
      this.selected_vendor = `#${item.po_no} - ${item.name}`
      $('#receive_details').modal('show')
    },
    priceIdentifier (priceA, priceB) {
      return priceA === priceB ? 'alert alert-success' : 'alert alert-danger'
    },
    addVendorItems () {
      this.cart = [
        {
          item: 'Caps',
          qty: 0,
          price: 500
        },
        {
          item: 'Carton',
          qty: 0,
          price: 500
        },
        {
          item: 'Plastic',
          qty: 0,
          price: 500
        }
      ]
    }
  }
}
</script>
