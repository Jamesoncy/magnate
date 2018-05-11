<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4" v-on:click="showStockStatus('Out Of Stock')">
        <div class="card bg-danger p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">3</h2>
              <p class="m-b-0">Items to be Out Of Stock</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-on:click="showStockStatus('Over Stock')">
        <div class="card bg-info p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">3</h2>
              <p class="m-b-0">Items to be OverStock</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-on:click="showDelivery()">
        <div class="card bg-primary p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">3</h2>
              <p class="m-b-0">Pending Items to be Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Item Inventory</h4>
            <canvas id="speedChart" style="height:420px"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>{{ reportTitle }}</h4>
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
                      <th>Offtake for 30 days</th>
                      <th>Current</th>
                      <th>{{reportTitle}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in stock" :key="index">
                      <td>{{item.item}}</td>
                      <td>{{item.offtake}}</td>
                      <td>{{item.inv}}</td>
                      <td>{{item.stock}}</td>
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
    <div class="modal" id="delivery">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4>Items To Be Delivered</h4>
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
                      <th>Truck #</th>
                      <th>Transaction #</th>
                      <th>Items</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in delivery" :key="index">
                      <td>{{item.truck_no}}</td>
                      <td>{{item.transaction}}</td>
                      <td>
                        <table>
                          <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Receive</th>
                          </tr>
                          <tr v-for="(row, pos) in item.details" :key="pos">
                            <td>{{row.item}}</td>
                            <td>{{row.qty}}</td>
                            <td>{{row.receive}}</td>
                          </tr>
                        </table>

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
import Chart from 'chart.js'
export default {
  name: 'CreateWater',
  data () {
    return {
      stock: [
        {
          item: 'SRS 500 ML',
          offtake: 4.50,
          inv: 1000,
          stock: 300
        },
        {
          item: 'SRS 350 ML',
          offtake: 4.50,
          inv: 1000,
          stock: 300
        },
        {
          item: 'SRS 1L',
          offtake: 4.50,
          inv: 1000,
          stock: 300
        }
      ],
      reportTitle: '',
      delivery: [
        {
          transaction: '1232142',
          truck_no: '141241231',
          details: [
            {
              item: 'SRS 500 ML',
              qty: 50,
              receive: 0
            },
            {
              item: 'SRS 350 ML',
              qty: 350,
              receive: 0
            }
          ]
        },
        {
          transaction: '1232142',
          truck_no: '141241231',
          details: [
            {
              item: 'SRS 500 ML',
              qty: 50,
              receive: 0
            },
            {
              item: 'SRS 350 ML',
              qty: 350,
              receive: 0
            }
          ]
        },
        {
          transaction: '1232142',
          truck_no: '141241231',
          details: [
            {
              item: 'SRS 500 ML',
              qty: 50,
              receive: 0
            },
            {
              item: 'SRS 350 ML',
              qty: 350,
              receive: 0
            }
          ]
        }
      ]
    }
  },
  mounted () {
    $('.selectpicker').selectpicker()
    var speedCanvas = document.getElementById('speedChart')

    Chart.defaults.global.defaultFontFamily = 'Lato'
    Chart.defaults.global.defaultFontSize = 18
    const labels = [ 'SRS 350ML', 'SRS 500ML', 'SRS 1L' ]
    const data = {
      label: 'Quantity Per Piece',
      data: [100000, 56000, 96000],
      lineTension: 0.3,
      fill: false
    }

    const speedData = {
      labels: labels,
      datasets: [data]
    }

    const chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    }
    /* eslint-disable */
    new Chart(speedCanvas, {
      type: 'bar',
      data: speedData,
      options: chartOptions
    })
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    showStockStatus(name) {
      this.reportTitle = name
      $('#myModal').modal('show')
    },
    showDelivery () {
      $('#delivery').modal('show')
    }
  }
}
</script>
