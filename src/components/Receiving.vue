<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Receiving List</h4>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Transaction #</th>
                  <th>Truck No</th>
                  <th>Amount</th>
                  <th>Receive</th>
                  <th>View</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.transaction}}</td>
                  <td>{{item.truck_no}}</td>
                  <td>{{item.amount}}</td>
                  <td>{{item.receive}}</td>
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
            <h4>{{transaction_no}}</h4>
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
                      <th>Qty</th>
                      <th>Receive</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, pos) in transaction_details" :key="pos">
                      <td>{{row.item}}</td>
                      <td>{{row.qty}}</td>
                      <td><input type = "text" class = "form-control" /></td>
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
  name: 'User',
  data () {
    return {
      transaction_no: '',
      transaction_details: [],
      data: [
        {
          id: 1,
          transaction: '151231231',
          truck_no: '412412412',
          amount: 30000,
          receive: 0,
          details: [
            {
              item: 'SRS 500 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 250 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 100 ML',
              qty: 5000,
              receive: 0
            }
          ]
        },
        {
          id: 1,
          transaction: '44154231',
          truck_no: '412412421',
          amount: 20000,
          receive: 500,
          details: [
            {
              item: 'SRS 500 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 250 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 100 ML',
              qty: 5000,
              receive: 0
            }
          ]
        },
        {
          id: 1,
          transaction: '551511',
          truck_no: '412412321',
          amount: 3000,
          receive: 1000,
          details: [
            {
              item: 'SRS 500 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 250 ML',
              qty: 5000,
              receive: 0
            },
            {
              item: 'SRS 100 ML',
              qty: 5000,
              receive: 0
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
    showDetails (item) {
      this.transaction_no = item.transaction
      this.transaction_details = item.details
    }
  }
}
</script>
