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
                  <th>Item</th>
                  <th>Inventory</th>
                  <th>Details</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.name}}</td>
                  <td>{{item.inv}}</td>
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
            <h4>{{item}}</h4>
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
                      <th>Date</th>
                      <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(row, pos) in transaction_details" :key="pos">
                      <td>{{row.date}}</td>
                      <td>{{row.details}}</td>
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
      item: '',
      transaction_details: '',
      data: [
        {
          name: 'SRS water 500 mml',
          inv: 50,
          details: [
            {
              date: '2017-01-01',
              details: 'Receive 50 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            },
            {
              date: '2017-01-01',
              details: 'Receive 1000 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Receive 50 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            }
          ]
        },
        {
          name: 'SRS water 1l',
          inv: 50,
          details: [
            {
              date: '2017-01-01',
              details: 'Receive 50 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            },
            {
              date: '2017-01-01',
              details: 'Receive 50 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            }
          ]
        },
        {
          name: 'SRS water 250 mml',
          inv: 50,
          details: [
            {
              date: '2017-01-01',
              details: 'Receive 50 pcs from transaction 41231231'
            },
            {
              date: '2017-01-01',
              details: 'Sell 25 pcs to Customner SRS'
            }
          ]
        }
      ]
    }
  },
  methods: {
    hide () {
      $('#myModal').modal('hide')
    },
    showDetails (item) {
      this.item = item.name
      this.transaction_details = item.details
    }
  }
}
</script>
