<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title pull-left">Products</h4>
                        <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
                        <div class="table-responsive m-t-40">
                        <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Details</th>
                                    <th>inventory</th>
                                    <th>Cost Of Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <td>{{item.name}}</td>
                                    <td>
                                        <ul v-for="(details, pos) in item.details" :key="pos">
                                          <li>{{details}}</li>
                                        </ul>
                                    </td>
                                    <td>{{item.inventory}}</td>
                                    <td>{{item.cof}}</td>
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
          <h4>Add Products</h4>
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
                        <input type="text" v-model="name" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class = "pull-left">Details:</label>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="checkbox" v-for="(option, index) in details"
                            :key="index"
                            :value="option.id">
                        <label><input type="checkbox" :value="option.id">{{option.name}}</label>
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
  name: 'RawMats',
  data () {
    return {
      details: [
        {
          id: 1,
          name: 'Caps'
        },
        {
          id: 2,
          name: 'Plastic'
        }
      ],
      data: [
        {
          name: 'SRS 300ml',
          details: ['Caps', 'Clear Plastic'],
          inventory: '1000',
          cof: 3.90
        },
        {
          name: 'SRS 500 ml',
          details: ['Caps', 'Clear Plastic'],
          inventory: '1000',
          cof: 3.90
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
    }
  }
}
</script>
