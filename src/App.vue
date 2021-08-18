<template>
  <div id="app"> 
      <body>
      
        <router-view/>
      </body>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  components:{
    
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #eeecec;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>
