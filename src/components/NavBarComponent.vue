<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#"><b-button variant="dark" size="sm" v-b-toggle.sidebar-menu><b-icon icon="list"></b-icon></b-button>
</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><img src="../assets/logo.png" style="width:50px; height:50px"></b-nav-item>
        <b-nav-item tag="h1" class="mt-3">PT. DATAMAX INTERNASIONAL</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="clock ml-auto" v-if="hourtime != ''">
        <!-- <b-nav-item class="nav-link mt-2" to="/" active @click="hide"><b-icon icon="bell"></b-icon></b-nav-item> -->
        <b-nav-item href="#" disabled class=" mt-1">{{currentDate()}} , </b-nav-item>
        <b-nav-item href="#" disabled class="clock__hours mt-1">{{ hours }} : {{ minutes }} : {{ seconds }} : {{ hourtime }}</b-nav-item>
      </b-navbar-nav>

          

    </b-collapse>
  </b-navbar>
  <!-- <div class="clock" v-if="hourtime != ''">
    <div class="clock__hours">
    <p>{{ hours }} : {{ minutes }} : {{ seconds }} : {{ hourtime }}</p>

    </div>
  </div> -->
</div>
</template>

<script>
import { SECOND, HOUR, getHourTime, getZeroPad } from './Filters';

export default {
  name: 'NavBarComponent',
 data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: '',
    };
  },
  mounted() {
    const timer = window.setTimeout(this.updateDateTime, SECOND);
    this.$on('hook:destroyed', () => window.clearTimeout(timer))
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;      
      return date;
    },
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = getZeroPad(now.getMinutes());
      this.seconds = getZeroPad(now.getSeconds());
      this.hourtime = getHourTime(this.hours);
      this.hours = this.hours % HOUR || HOUR;
      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
      
    },
  },
};

</script>

<style scoped>

</style>
