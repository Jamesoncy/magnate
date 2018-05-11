<template>
  <div id="main-wrapper">
    <div class="header">
      <nav class="navbar top-navbar navbar-expand-md navbar-light">
        <!-- Logo -->
        <div class="navbar-header">
          <a class="navbar-brand">
            <!-- Logo icon -->
            <b style = "color: black">Test-App</b>
          </a>
        </div>
        <!-- End Logo -->
        <div class="navbar-collapse">
          <!-- toggle and nav items -->
          <ul class="navbar-nav mr-auto mt-md-0">
            <!-- This is  -->
            <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted  " href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
            <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted  " href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
            <!-- End Messages -->
          </ul>
          <!-- User profile and search -->
          <ul class="navbar-nav my-lg-0">
            <a class="btnLogout nav-link dropdown-toggle text-muted  " v-on:click="logout()" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Logout</a>
          </ul>
        </div>
      </nav>
    </div>
    <!-- End header header -->
    <!-- Left Sidebar  -->
    <div class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="nav-devider"></li>
                        <li class="nav-label"> <router-link :to="{ path: '/dashboard'}"><span class="hide-menu">Dashboard</span></router-link></li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-arrow-circle-right"></i><span class="hide-menu">System Access</span></a>
                          <ul aria-expanded="false" class="collapse">
                            <router-link :to="{ path: '/system-setup/user'}"><span class="hide-menu">User</span></router-link>
                            <router-link :to="{ path: '/system-setup/role'}"><span class="hide-menu">Role</span></router-link>
                            <router-link :to="{ path: '/system-setup/branches'}"><span class="hide-menu">Branches</span></router-link>
                          </ul>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-product-hunt"></i><span class="hide-menu">Products Setup</span></a>
                            <ul aria-expanded="false" class="collapse">
                              <router-link :to="{ path: '/products-setup/raw-materials'}"><span class="hide-menu">Raw Materials</span></router-link>
                              <router-link :to="{ path: '/products-setup/Products'}"><span class="hide-menu">Products</span></router-link>
                              <router-link :to="{ path: '/products-setup/vendor'}"><span class="hide-menu">Vendor</span></router-link>
                              <router-link :to="{ path: '/products-setup/purchase-raw-materials'}"><span class="hide-menu">Request Raw Mats</span></router-link>
                            </ul>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-refresh"></i><span class="hide-menu">Transaction</span></a>
                        <ul aria-expanded="false" class="collapse">
                          <router-link :to="{ path: '/transaction/bottled-water'}"><span class="hide-menu">Bottled Water</span></router-link>
                          <router-link :to="{ path: '/transaction/create-bottled-water'}"><span class="hide-menu">Create Bottled Water</span></router-link>
                          <router-link :to="{ path: '/transaction/transfer-bottled-water'}"><span class="hide-menu">Transfer Bottled Water</span></router-link>
                          <router-link :to="{ path: '/transaction/uom'}"><span class="hide-menu">Uom</span></router-link>
                        </ul>
                      </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-file"></i><span class="hide-menu">Inquiries</span></a>
                        <ul aria-expanded="false" class="collapse">
                          <router-link :to="{ path: '/inquiry/sales-profit'}"><span class="hide-menu">Sales Profit</span></router-link>
                          <router-link :to="{ path: '/inquiry/loss-bottle-water'}"><span class="hide-menu">Loss Bottle Report</span></router-link>
                          <router-link :to="{ path: '/inquiry/top-customer'}"><span class="hide-menu">Top Customers</span></router-link>
                        </ul>
                      </li>
                        <li class="nav-label"> <router-link :to="{ path: '/branch-dashboard/inventory-graph'}"><span class="hide-menu">Dashboard</span></router-link></li>
                        <li> <router-link :to="{ path: '/customer'}"><i class="fa fa-user"></i><span class="hide-menu">Customer</span></router-link></li>
                        <li> <router-link :to="{ path: '/receiving'}"><i class="fa fa-truck"></i><span class="hide-menu">Receiving</span></router-link></li>
                        <li> <router-link :to="{ path: '/inventory'}"><i class="fa fa-bar-chart"></i><span class="hide-menu">Inventory</span></router-link></li>
                        <li> <router-link :to="{ path: '/sell-bottles'}"><i class="fa fa-money"></i><span class="hide-menu">Sell Bottled Water</span></router-link></li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </div>
    <!-- End Left Sidebar  -->
    <!-- Page wrapper  -->
    <div class="page-wrapper">
      <!-- Bread crumb -->
      <div class="row page-titles">
        <div class="col-md-5 align-self-center">
          <h3 class="text-primary title-page">{{title}}</h3> </div>
        <div class="col-md-7 align-self-center">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active"></li>
          </ol>
        </div>
      </div>
      <div class="container-fluid">
      <!-- Start Page Content -->
      <router-view></router-view>
      <!-- End PAge Content -->
      </div>
      <!-- End Container fluid  -->
      <!-- footer -->
      <footer class="footer"></footer>
      <!-- End footer -->
    </div>
    <!-- End Page wrapper  -->
  </div>
</template>
<script>
export default {
  name: 'MainPage',
  data () {
    return {
      title: 'Main Page'
    }
  },
  mounted () {
    $('.datatable').DataTable()
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    })
  },
  updated () {
    $('.datatable').DataTable()
    this.changeTitle()
  },
  methods: {
    changeTitle () {
      const path = this.$router.history.current.path

      // eslint-disable-next-line
      const pathArray = path.split('\/')
      let titleRoute = pathArray.pop()
      this.title = titleRoute.replace(new RegExp('-', 'g'), ' ')
    }
  }
}
</script>
<style>
  .title-page {
    text-transform:capitalize;
  }
  .btnLogout {
    cursor: pointer;
    border-radius: 5px;
  }
  .btnLogout:hover {
    background-color: #b3c6ff;
  }
</style>

<style>
  .modal-dialog {
    width: 900px;
  }
  .modal-content {
    width: 900px;
  }
  .modal-content {
    width: 900px;
    margin-left: -150px;
  }
</style>
