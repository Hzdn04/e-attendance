<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#"><sidebar/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-brand href="#">
            <b-img src="https://placekitten.com/g/30/30" rounded="circle" alt="Circle image"></b-img>
        </b-navbar-brand>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Admin Hafiz</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import sidebar from '@/components/admin/sidebar.vue'

export default {
name: 'Navbar',
components: {
    sidebar
  }
}
</script>

<style>

</style>