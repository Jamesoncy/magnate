<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Create Bottled Watter</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Transaction #</th>
                  <th>Item</th>
                  <th>Raw Materials</th>
                  <th>Produce</th>
                  <th>Transact By</th>
                  <th>Received</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.transaction_no}}</td>
                  <td>{{item.item}}</td>
                  <td>
                    <div class = "row" v-for="(row, ind) in item.raw_materials" :key="ind">
                      <div class = "col-sm-12">
                        {{ row.name }} - {{row.qty}}
                      </div>
                    </div>
                  </td>
                  <td>
                    <table class = "table-hover table-striped table-bordered">
                      <tr v-for="(row, ind) in item.produce" :key="ind">
                        <td class = "col-sm-12">
                          {{ row.date_entered }}
                        </td>
                        <td class = "col-sm-12">
                          <span class = "alert alert-success">{{row.qty}}</span>
                        </td>
                        <td class = "col-sm-12">
                          <span class = "alert alert-danger">{{row.damage}}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>{{item.transact_by}}</td>
                  <td><button class = "btn btn-info btn-sm" v-on:click="receiving(item.transaction_no)"><i class = "fa fa-search"></i></button></td>
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
            <h4>Produce Bottled Water</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Bottled Water</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <select class="form-control selectpicker bs-select" data-live-search="true" title="Choose one of the following...">
                  <option
                    v-for="(option, index) in bottled_water"
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
                <label class = "pull-left">Transact By:</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <select class="form-control selectpicker bs-select" data-live-search="true" title="Choose one of the following...">
                  <option
                    v-for="(option, index) in user"
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
                <label class = "pull-left">Materials:</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="table-responsive m-t-40">
                  <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                      <th>Item</th>
                      <th>Average Cost</th>
                      <th>Qty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in materials" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.ave_cost}}</td>
                      <td><input type = "number"  class = "form-control"/>></td>
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
    <div class="modal" id="receiving">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4># {{ transaction_pick }}</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Received</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "text" class = "form-control"/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Damage</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "text" class = "form-control"/>
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
import moment from 'moment'
export default {
  name: 'CreateWater',
  data () {
    const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    return {
      transaction_pick: '',
      data: [
        {
          transact_by: 'Unkown Name',
          transaction_no: '412321321',
          item: 'SRS BOTTLED WATER 350 ML',
          raw_materials: [
            {
              name: 'caps',
              qty: 50,
              ave_cost: 1.02
            },
            {
              name: 'carton',
              qty: 50,
              ave_cost: 1.02
            },
            {
              name: 'plastic',
              qty: 50,
              ave_cost: 1.02
            }
          ],
          produce: [
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            },
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            }
          ]
        },
        {
          transact_by: 'Unkown Name',
          transaction_no: '5521321',
          item: 'SRS BOTTLED WATER 350 ML',
          raw_materials: [
            {
              name: 'caps',
              qty: 50
            },
            {
              name: 'carton',
              qty: 50
            },
            {
              name: 'plastic',
              qty: 50
            }
          ],
          produce: [
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            },
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            }
          ]
        },
        {
          transact_by: 'Unkown Name',
          transaction_no: '9931321',
          item: 'SRS BOTTLED WATER 350 ML',
          raw_materials: [
            {
              name: 'caps',
              qty: 50
            },
            {
              name: 'carton',
              qty: 50
            },
            {
              name: 'plastic',
              qty: 50
            }
          ],
          produce: [
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            },
            {
              date_entered: date,
              qty: 5000,
              damage: 0
            }
          ]
        }
      ],
      bottled_water: [
        {
          id: 1,
          name: 'SRS BOTTLED WATER 350 ML'
        },
        {
          id: 2,
          name: 'SRS BOTTLED WATER 350 ML'
        },
        {
          id: 3,
          name: 'SRS BOTTLED WATER 350 ML'
        }
      ],
      user: [
        {
          id: 1,
          name: 'Unknown Name'
        },
        {
          id: 2,
          name: 'James Roncesvalles'
        },
        {
          id: 3,
          name: 'Ashley Palma'
        }
      ],
      materials: [
        {
          id: 1,
          name: 'CARTON',
          ave_cost: '1.03'
        },
        {
          id: 2,
          name: 'Plastic',
          ave_cost: '1.03'
        },
        {
          id: 3,
          name: 'CLEAR PLASTIC (PAMBALOT)',
          ave_cost: '1.03'
        }
      ]
    }
  },
  mounted () {
    $('.selectpicker').selectpicker()
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    receiving (transactionNo) {
      this.transaction_pick = transactionNo
      $('#receiving').modal('show')
    }
  }
}
</script>
