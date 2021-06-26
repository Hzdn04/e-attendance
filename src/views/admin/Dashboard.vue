<template>
  <div>
    <div class="head">
        <Navbar />
    </div>
    <div class="main">
    <div class="row ml-2 mr-2">
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="danger" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="Horizontal Card">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-archway fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
      <div class="col-lg-4 col-sm-6 mt-3">
        <b-card bg-variant="success" text-variant="white">
            <b-row no-gutters>
            <b-col md="8">
                <b-card-body title="Horizontal Card">
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
                <b-card-body title="Horizontal Card">
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
                <b-card-body title="Horizontal Card">
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
                <b-card-body title="Horizontal Card">
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
                <b-card-body title="Horizontal Card">
                </b-card-body>
            </b-col>
            <b-col md="4">
               <i class="fas fa-stopwatch-20 fa-5x"></i>
            </b-col>
            </b-row>
        </b-card>
      </div>
    </div>
            <div>
              <p class="text-success" v-if="token">
                Halaman ini diakses DENGAN autentikasi login dan token !!
              </p>
              <p class="text-danger" v-else>
                Halaman ini diakses TANPA autentikasi login dan token !!
              </p>
            </div>

    <div class="row isi mt-3 ml-4 mr-2">
        <ChartUser />
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/admin/Navbar.vue'
import ChartUser from '@/components/admin/ChartUser.vue'

export default {
name: 'Dashboard',
  components: {
    Navbar,
    ChartUser
  },

  data() {
    return {
      token: "",
      currentRouteName: ""
    };
  },
  created() {
    this.currentRouteName = this.$route.name;
    const token = this.$route.params.token;
    if (token) {
      this.token = token;
      alert("Anda mengakses halaman Backend dengan token : " + "\n\n" + token);
    }
  }
}

</script>

<style>
    .main{
    position: absolute;
  height: 100%;
  width: 100%;
        overflow-y: scroll;
    }
    .isi{
      background-color: white;
      position: absolute;
      width: 950px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
</style>