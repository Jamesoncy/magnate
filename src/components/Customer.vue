<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Customer List</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{item.full_name}}</td>
                  <td>{{item.address}}</td>
                  <td>{{item.contact}}</td>
                  <td>{{item.email}}</td>
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
            <h4>Customer Form</h4>
            <button type="button" class="btn btn-danger btn-sm pull-right" data-dismiss="modal"><i class = "fa fa-close"></i></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Full Name</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "" class = "form-control"/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Address</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "" class = "form-control"/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Contact</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "" class = "form-control"/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type = "" class = "form-control"/>
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
      data: [
        {
          id: 1,
          full_name: 'James F. Roncesvalles',
          address: 'IT',
          email: 'SampleEmail@email.com',
          contact: '412412321'
        },
        {
          id: 2,
          full_name: 'Melvin Ramos',
          address: 'Purchaser',
          email: 'SampleEmail@email.com',
          contact: '412412321'
        },
        {
          id: 3,
          full_name: 'Sales Person',
          address: 'Sales',
          email: 'SampleEmail@email.com',
          contact: '412412321'
        }
      ],
      department: [
        {
          id: 1,
          name: 'IT'
        },
        {
          id: 2,
          name: 'Sales'
        },
        {
          id: 3,
          name: 'Purchaser'
        }
      ],
      access: ['System Access', 'Raw Mats', 'Products']
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
    removeSelected (index) {
      _.remove(this.item_select, function (n) {
        return n.id === index
      })
      console.log(this.item_select)
    }
  }
}
</script>
