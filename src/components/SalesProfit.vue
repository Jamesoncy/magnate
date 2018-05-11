<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-title">
            <h4>Generate Sales Profit</h4>
          </div>
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group">
                  <h6 >Date Range:</h6>
                  <input type="text" name="daterange"  class = "form-control ui-flat" value="01/01/2018 - 01/15/2018" />
                </div>
                 <div class="form-group">
                   <h6 >Select Branch:</h6>
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
                <div class="form-group">
                  <a :href="generateReport()"  target = "_blank" class="btn btn-info pull-right">Generate</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'SalesProfit',
  data () {
    return {
      branches: [
        {
          id: 1,
          name: 'Company A'
        },
        {
          id: 2,
          name: 'Company B'
        },
        {
          id: 3,
          name: 'Company C'
        }
      ],
      report: [
        {
          name: 'Company A',
          data: [
            {
              date: '2017-01-01',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            },
            {
              date: '2017-01-02',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            },
            {
              date: '2017-01-03',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            },
            {
              date: '2017-01-04',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            },
            {
              date: '2017-01-05',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            },
            {
              date: '2017-01-06',
              sales: 190000,
              cost_of_sales: 10000,
              profit: 90000
            }
          ]
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
    addRow () {
      const searchId = this.item_pick
      const key = _.findLastIndex(this.raw_mats, function (o) { return o.id === searchId })
      const item = this.raw_mats[key]
      this.item_select.push(item)
    },
    generateReport () {
      return require('../assets/files/sales_profit.xlsx')
    },
    removeSelected (index) {
      _.remove(this.item_select, function (n) {
        return n.id === index
      })
      console.log(this.item_select)
    }
  }
}
</script>
