<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title pull-left">Raw Materials</h4>
                        <button class="btn btn-info m-b-10 m-l-5 pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i></button>
                        <div class="table-responsive m-t-40">
                        <table class="display nowrap table datatable table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Used For</th>
                                    <th>inventory</th>
                                    <th>Cost Of Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <td>{{item.name}}</td>
                                    <td>{{item.material}}</td>
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
                    <label class = "pull-left">For</label>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <select class="form-control selectpicker bs-select" data-live-search="true" title="Choose one of the following...">
                        <option
                            v-for="(option, index) in for_select"
                            :key="index"
                            :value="option.id"
                        >
                            {{ option.name }}
                        </option>
                    </select>
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
      for_select: [
        {
          id: 1,
          name: 'caps'
        },
        {
          id: 2,
          name: 'Bottles'
        },
        {
          id: 3,
          name: 'Bottled Watter'
        }
      ],
      data: [
        {
          name: 'HDPE RESIN',
          material: 'For Caps',
          inventory: '1000',
          cof: 2.90
        },
        {
          name: 'COLORANT FOR CAPS',
          material: 'For Caps',
          inventory: '1000',
          cof: 2.90
        },
        {
          name: 'CLEAR PLASTIC (PAMBALOT)',
          material: 'For Caps',
          inventory: '1000',
          cof: 2.90
        },
        {
          name: 'PET RESIN ',
          material: 'For Pet Bottles',
          inventory: '1000',
          cof: 2.90
        },
        {
          name: 'CLEAR PLASTIC (PAMBALOT)',
          material: 'For Pet Bottles',
          inventory: '1000',
          cof: 1.90
        },
        {
          name: 'CARTON',
          material: 'For Bottled Water',
          inventory: '1000',
          cof: 1.90
        },
        {
          name: 'LABELS',
          material: 'For Bottled Water',
          inventory: '1000',
          cof: 2.90
        },
        {
          name: 'CAPSEAL',
          material: 'For Bottled Water',
          inventory: '1000',
          cof: 5.90
        },
        {
          name: 'SHRINK PLASTIC',
          material: 'For Bottled Water',
          inventory: '1000',
          cof: 5.90
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
