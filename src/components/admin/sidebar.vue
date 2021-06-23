<template>
  <div>
  <b-button v-b-toggle.sidebar-backdrop variant="light"><i class="fas fa-tachometer-alt fa-2x"></i></b-button><span class="hai">Hai, Admin Hafiz!</span>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <div class="mb-2">
          <router-link to="/employee"><b-button block variant="primary">Employee</b-button></router-link>
        </div>
         <div class="mb-2">
          <router-link to="/task"><b-button block variant="primary">Task</b-button></router-link>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
name:'sidebar',

}
</script>

<style scope>
  .hai{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #205186;
  }
  #sidebar-backdrop{
    background: linear-gradient(180deg, #205186 0%, #2F72BB 100%);
  }
</style>