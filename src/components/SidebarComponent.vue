<template>
 <div>
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" 
    no-header 
    shadow 
    bg-variant="primary" 
    text-variant="light"
    backdrop
    backdrop-variant="dark">
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
          <b-avatar src="https://placekitten.com/300/300" variant="primary" text="User" class="mb-3 mt-3" size="6rem"> </b-avatar>
          <h4 id="sidebar-no-header-title" v-if="user">@ {{ user.data.name }}</h4>
          <div class="divider-menu mb-5 mt-1"></div>
          </div>

          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item class="nav-link" to="/dashboard" active @click="hide"><b-icon icon="house-door-fill"></b-icon> Dashboard</b-nav-item>
              <b-nav-item class="nav-link" to="/profil" @click="hide"><b-icon icon="person-fill"></b-icon> Profile</b-nav-item>
              <b-nav-item class="nav-link" to="/absensi" @click="hide"><b-icon icon="journal-check"></b-icon> Absensi</b-nav-item>
              <b-nav-item class="nav-link" to="/task" @click="hide"><b-icon icon="list-task"></b-icon> Task</b-nav-item>
              <b-nav-item class="nav-link" to="/absen" @click="hide"><b-icon icon="person-check-fill"></b-icon> Absen Pegawai</b-nav-item>
              <b-nav-item class="nav-link" to="/employee" @click="hide"><b-icon icon="person-badge"></b-icon> Data Pegawai</b-nav-item>
            </b-nav>
          </nav>
           <a href="javascript:void(0)" @click="handleClick" class="nav-link btn btn-success btn-block"> Logout</a>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SidebarComponent',
 // props: ['user'],

  methods: {
    handleClick(){
      localStorage.removeItem('token');
      this.$router.push('/');
    }
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

<style scoped>
#sidebar-menu{
  background: linear-gradient(180deg, #205186 0%, #2F72BB 100%);
}
.nav-item{
  margin-bottom: 20px;
}
.nav-item > .nav-link{
  color: #FFF;
}
.nav-item > .nav-link:hover{
  color: aquamarine;
}
.divider-menu{
  border: 1px solid#FFF;
  width: 100%;

}
</style>
