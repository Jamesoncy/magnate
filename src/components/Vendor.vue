<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title pull-left">Vendor List</h4>
            <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
            <div class="table-responsive m-t-40">
              <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Raw Mats</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.contact }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <div class = "row" v-for="(item, ind) in item.raw_mats" :key="ind">
                      <div class = "col-sm-12 text-left">
                        {{ item.name }} - P {{ item.price }}.00
                      </div>
                    </div>
                  </td>
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
                <label class = "pull-left">Name</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Contact</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">Contact</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label class = "pull-left">For</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-11"><select class="form-control selectpicker bs-select" v-model="item_pick" data-live-search="true" title="Choose one of the following...">
                <option
                  v-for="(option, index) in raw_mats"
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
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in item_select" :key="index">
                  <td>{{ item.name }}</td>
                  <td><input type = 'number' class = 'form-control' /></td>
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
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Vendor',
  data () {
    return {
      item_pick: '',
      raw_mats: [
        {
          id: 1,
          name: 'HDPE RESIN',
          material: 'For Caps',
          price: 500
        },
        {
          id: 2,
          name: 'COLORANT FOR CAPS',
          material: 'For Caps',
          price: 500
        },
        {
          id: 3,
          name: 'CLEAR PLASTIC (PAMBALOT)',
          material: 'For Caps',
          price: 500
        },
        {
          name: 'PET RESIN ',
          material: 'For Pet Bottles',
          price: 500
        },
        {
          id: 4,
          name: 'CLEAR PLASTIC (PAMBALOT)',
          material: 'For Pet Bottles',
          price: 500
        },
        {
          id: 5,
          name: 'CARTON',
          material: 'For Bottled Water',
          price: 500
        },
        {
          id: 6,
          name: 'LABELS',
          material: 'For Bottled Water',
          price: 500
        },
        {
          id: 7,
          name: 'CAPSEAL',
          material: 'For Bottled Water',
          price: 500
        },
        {
          id: 8,
          name: 'SHRINK PLASTIC',
          material: 'For Bottled Water',
          price: 500
        }
      ],
      data: [
        {
          id: 1,
          name: 'Company A',
          address: 'Company A',
          contact: '0941231231',
          email: 'companya@gmail.com',
          raw_mats: [
            {
              name: 'HDPE RESIN',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'COLORANT FOR CAPS',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'PET RESIN ',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CARTON',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'LABELS',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'CAPSEAL',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'SHRINK PLASTIC',
              material: 'For Bottled Water',
              price: 500
            }
          ]
        },
        {
          id: 2,
          name: 'Company B',
          address: 'Company B',
          contact: '0941231231',
          email: 'companyB@gmail.com',
          raw_mats: [
            {
              name: 'HDPE RESIN',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'COLORANT FOR CAPS',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'PET RESIN ',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CARTON',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'LABELS',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'CAPSEAL',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'SHRINK PLASTIC',
              material: 'For Bottled Water',
              price: 500
            }
          ]
        },
        {
          id: 3,
          name: 'Company C',
          address: 'Company C',
          contact: '0941231231',
          email: 'companyC@gmail.com',
          raw_mats: [
            {
              name: 'HDPE RESIN',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'COLORANT FOR CAPS',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Caps',
              price: 500
            },
            {
              name: 'PET RESIN ',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CLEAR PLASTIC (PAMBALOT)',
              material: 'For Pet Bottles',
              price: 500
            },
            {
              name: 'CARTON',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'LABELS',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'CAPSEAL',
              material: 'For Bottled Water',
              price: 500
            },
            {
              name: 'SHRINK PLASTIC',
              material: 'For Bottled Water',
              price: 500
            }
          ]
        }
      ],
      item_select: []
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
