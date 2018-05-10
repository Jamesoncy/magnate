<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Transfer Bottled Water List</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Branch</th>
                  <th>Truck Plate #</th>
                  <th>Delivery #</th>
                  <th>Items</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.name}}</td>
                  <td>{{item.truck}}</td>
                  <td>{{item.delivery_no}}</td>
                  <td>
                    <table class = "display nowrap table table-hover table-striped table-bordered">
                      <tr>
                        <th>
                          Items
                        </th>
                        <th>
                          Pieces
                        </th>
                        <th>
                          Cost Of Sales
                        </th>
                        <th>
                          Returned
                        </th>
                      </tr>
                      <tbody>
                        <tr  v-for="(row, lvl) in item.items" :key="lvl">
                          <td> {{ row.name }} </td>
                          <td> {{ formatNumber(row.pieces) }} </td>
                          <td> {{ formatPrice(row.cost_of_sales) }} </td>
                          <td> {{ formatNumber(row.returned) }} </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td><button class = "btn btn-info btn-sm" v-on:click="returnBoxes(item)" ><i class = "fa fa-recycle"></i></button></td>
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
            <h4>Create Delivery</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Branches</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <select class="form-control selectpicker bs-select" data-live-search="true" title="Choose one of the following...">
                  <option
                    v-for="(option, index) in branches"
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
                <label class = "pull-left">Items</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                  <thead>
                  <tr>
                    <th>Item</th>
                    <th>Cost Of Sales</th>
                    <th>Qty</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, ind) in items" :key="ind">
                      <td>{{ row.name }}</td>
                      <td>{{ row.cost_of_sales }}</td>
                      <td><input type = "number" class = "form-control"></td>
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
    <div class="modal" id="receiving">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4># {{ transfer_no }}</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Details</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="table-responsive m-t-40">
                  <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                      <th>Item</th>
                      <th>Cost Of Sales</th>
                      <th>Pieces</th>
                      <th>Returned</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, index) in row_data" :key="index">
                      <td>{{ row.name }}</td>
                      <td>{{ row.cost_of_sales }}</td>
                      <td>{{ row.cost_of_sales }}</td>
                      <td><input type = "number" class = "form-control"></td>
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
export default {
  name: 'TransferBottledWater',
  data () {
    return {
      branches: [
        {
          id: 1,
          name: 'Branch A'
        },
        {
          id: 2,
          name: 'Branch B'
        },
        {
          id: 3,
          name: 'Branch C'
        }
      ],
      data: [
        {
          name: 'Branch A',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        },
        {
          name: 'Branch B',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        },
        {
          name: 'Branch C',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        },
        {
          name: 'Branch D',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        },
        {
          name: 'Branch A',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        },
        {
          name: 'Branch A',
          truck: '321312321312',
          delivery_no: '312dsadsa',
          date: '2017-01-01',
          items: [
            {
              name: 'SRS WATER 350 ML',
              pieces: 5000,
              cost_of_sales: '3.50',
              returned: 5
            },
            {
              name: 'SRS WATER 500 ML',
              pieces: 500,
              cost_of_sales: '3.50',
              returned: 5
            }
          ],
          'return': 0
        }
      ],
      items: [
        {
          name: 'SRS BOTTLE 350 ML',
          cost_of_sales: 3.40
        },
        {
          name: 'SRS BOTTLE 500 ML',
          cost_of_sales: 3.80
        }
      ],
      transfer_no: '',
      row_data: []
    }
  },
  mounted () {
    $('.selectpicker').selectpicker()
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    returnBoxes (item) {
      this.transfer_no = item.delivery_no
      this.row_data = item.items
      $('#receiving').modal('show')
    }
  }
}
</script>

<style>
  .modal-dialog {
    width: 900px;
  }
  .modal-content {
    width: 900px;
  }
  .modal-content {
    width: 900px;
    margin-left: -150px;
  }
</style>
