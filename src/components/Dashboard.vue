<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="card bg-primary p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">278,000</h2>
              <p class="m-b-0">Cost Of Sales for the Month of May</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-success p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">P 2,000,000.00</h2>
              <p class="m-b-0">Sales for the Month Of May</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-pink p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">P 1,000,000.00</h2>
              <p class="m-b-0">Profit for the Month Of May</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-danger p-20">
          <div class="media widget-ten">
            <div class="media-left meida media-middle">
              <span><i class="ti-bag f-s-40"></i></span>
            </div>
            <div class="media-body media-text-right">
              <h2 class="color-white">P 5,000.00</h2>
              <p class="m-b-0">Losses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">Company Money</h4>
            <canvas id="speedChart" style="height:420px"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Chart from 'chart.js'
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
    var speedCanvas = document.getElementById('speedChart')

    Chart.defaults.global.defaultFontFamily = 'Lato'
    Chart.defaults.global.defaultFontSize = 18
    const labels = [ 'June', 'July', 'August', 'Semptember', 'October', 'November', 'December' ]
    const losses = {
      label: 'Losses',
      data: [100000, 56000, 96000, 30000, 25000, 12000, 10000],
      lineTension: 0.3,
      fill: false,
      borderColor: 'red'
    }

    const sales = {
      label: 'Sales',
      data: [10000, 200000, 300000, 10000, 450000, 30000, 200000],
      lineTension: 0.3,
      fill: false,
      borderColor: '#00dcd4'
    }

    const profit = {
      label: 'Sales',
      data: [30000, 30000, 30000, 35000, 10000, 20000, 30000],
      lineTension: 0.3,
      fill: false,
      borderColor: '#eaa2f3'
    }

    const costOfSales = {
      label: 'Cost Of Sales',
      data: [25000, 17000, 35000, 20000, 50000, 25000, 19000],
      lineTension: 0.3,
      fill: false,
      borderColor: '#0882ff'
    }

    const speedData = {
      labels: labels,
      datasets: [losses, sales, profit, costOfSales]
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
      type: 'line',
      data: speedData,
      options: chartOptions
    })
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
