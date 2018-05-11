<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Transaction List</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#sellBottle"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction</th>
                  <th>Total Amount</th>
                  <th>Cost Of Sales</th>
                  <th>Profit</th>
                  <th>View</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.date}}</td>
                  <td>{{item.transaction}}</td>
                  <td>{{formatPrice(item.amount)}}</td>
                  <td>{{formatPrice(item.cost_of_sales)}}</td>
                  <td>{{formatPrice(item.profit)}}</td>
                  <td><button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal" v-on:click="showDetails(item)"><i class="fa fa-search" ></i></button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4># {{transaction}}</h4>
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
                      <th>Cost Of Sales</th>
                      <th>Qty</th>
                      <th>Price Per Piece</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, pos) in transaction_details" :key="pos">
                      <td>{{row.item}}</td>
                      <td>{{row.cost_of_sales}}</td>
                      <td>{{row.qty}}</td>
                      <td>{{row.price}}</td>
                      <td>{{formatPrice(row.qty * row.price)}}</td>
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
    <div class="modal" id="sellBottle">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>Sell To Customer</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Customer</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <select class="form-control selectpicker bs-select" data-live-search="true" title="Choose one of the following..." v-on:change="customerDetails()">
                  <option
                    v-for="(option, index) in customer"
                    :key="index"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Contact: {{customer_details.contact}}</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Email: {{customer_details.email}}</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Address: {{customer_details.address}}</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Items</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11">
                <select class="form-control selectpicker bs-select" v-model="item_pick" data-live-search="true" title="Choose one of the following..." >
                  <option
                    v-for="(option, index) in items"
                    :key="index"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class = "col-sm-1"><button type="button" class="btn btn-info btn-sm pull-right" v-on:click="addSales()"><i class = "fa fa-plus"></i></button></div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Total: {{formatPrice(total)}}</label>
              </div>
            </div>
            <div class = "row">
              <div class="table-responsive m-t-40">
                <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                  <thead>
                  <tr>
                    <th>Item</th>
                    <th>Inventory</th>
                    <th>Cost Of Sales</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, index) in sales" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.inv }}</td>
                    <td>{{ item.cost_of_sales }}</td>
                    <td><input type = "number" v-model = "item.qty" v-on:change="multiply(item, index)" class = "form-control" /></td>
                    <td><input type = "text" :value = "formatNumber(item.total)"  class = "form-control" /></td>
                  </tr>
                  </tbody>
                </table>
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
  name: 'User',
  data () {
    return {
      item_pick: null,
      item: '',
      transaction: '',
      transaction_details: '',
      customer_id: null,
      customer_details: {},
      customer: [
        {
          id: 1,
          name: 'James F. Roncesvalles',
          contact: '412421421',
          email: '312dasdsa@gmail.com',
          address: 'Novaliches Qc'
        },
        {
          id: 2,
          name: 'Melvin Ramos',
          contact: '55513541',
          email: 'fasdas@gmail.com',
          address: 'MAligaya Qc'
        },
        {
          id: 3,
          name: 'Ashley Palma',
          contact: '5135133',
          email: 'd12333@gmail.com',
          address: 'Tala Qc'
        }
      ],
      data: [
        {
          date: '2017-01-01',
          transaction: '12312412412421',
          amount: 50000,
          cost_of_sales: 25000,
          profit: 25000,
          details: [
            {
              item: 'SRS WATER 500 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 4.50
            },
            {
              item: 'SRS WATER 250 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 1L',
              cost_of_sales: 1.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 750 ML',
              cost_of_sales: 3.30,
              qty: 50,
              price: 4.50
            }
          ]
        },
        {
          date: '2017-01-01',
          transaction: '12312412412421',
          amount: 50000,
          cost_of_sales: 25000,
          profit: 25000,
          details: [
            {
              item: 'SRS WATER 500 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 4.50
            },
            {
              item: 'SRS WATER 250 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 1L',
              cost_of_sales: 1.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 750 ML',
              cost_of_sales: 3.30,
              qty: 50,
              price: 4.50
            }
          ]
        },
        {
          date: '2017-01-01',
          transaction: '12312412412421',
          amount: 50000,
          cost_of_sales: 25000,
          profit: 25000,
          details: [
            {
              item: 'SRS WATER 500 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 4.50
            },
            {
              item: 'SRS WATER 250 ML',
              cost_of_sales: 2.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 1L',
              cost_of_sales: 1.30,
              qty: 50,
              price: 3.50
            },
            {
              item: 'SRS WATER 750 ML',
              cost_of_sales: 3.30,
              qty: 50,
              price: 4.50
            }
          ]
        }
      ],
      total: 0,
      items: [
        {
          id: 1,
          name: 'SRS 500 ML',
          cost_of_sales: 3.25,
          qty: 0,
          inv: 50,
          total: 0
        },
        {
          id: 2,
          name: 'SRS 250 ML',
          cost_of_sales: 1.25,
          qty: 0,
          inv: 50,
          total: 0
        },
        {
          id: 3,
          name: 'SRS 750 ML',
          cost_of_sales: 2.25,
          qty: 0,
          inv: 50,
          total: 0
        }
      ],
      sales: []
    }
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    showDetails (item) {
      this.item = item.name
      this.transaction = item.transaction
      this.transaction_details = item.details
    },
    customerDetails () {
      this.customer_details = {}
      this.customer_details.contact = '412421421'
      this.customer_details.email = '312dasdsa@gmail.com'
      this.customer_details.address = 'Novaliches Qc'
    },
    addSales () {
      const self = this
      const item = _.findIndex(this.items, function (obj) {
        return obj.id === self.item_pick
      })
      self.sales.push(this.items[item])
    },
    multiply (item, index) {
      const total = item.qty * item.cost_of_sales
      const self = this
      self.total = 0
      this.sales[index].total = total
      _.each(self.sales, function (row) {
        self.total = self.total + row.total
      })
    }
  }
}
</script>
