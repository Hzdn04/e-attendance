<template>
  <div>
    <nav-bar-component/>
      <sidebar-component/>

    <div class="main">
    <div class="row ml-2 mr-2">
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="danger" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="TASK">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-clipboard fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="success" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="PRESENT">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-running fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="warning" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="CHEKLIST">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-tasks fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="info" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="EMPLOYEE">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-user-tie fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="primary" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="CUTI">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-hourglass-half fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="secondary" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="DATA">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-database fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
    </div>

    <div class="row isi mt-3 ml-4">
        <ChartUser />
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBarComponent from '@/components/NavBarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import ChartUser from '@/components/admin/ChartUser.vue'

export default {
name: 'Dashboard',
//props: ['user'],

  components: {
    ChartUser,
    NavBarComponent,
    SidebarComponent
  },

 data () {
    return {
      user: null
    }
  },

  async created() {
    const response = await axios.get('user');
    
    this.user = response.data;
}

}

</script>

<style>
    .isi{
      background-color: white;
      position: absolute;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
</style>