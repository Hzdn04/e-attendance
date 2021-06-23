<template>
  <div class="container">
     
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'User',

  async created(){
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      const response = await axios.get('http://localhost:8000/user/', {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
      console.log(response)

  }
};
</script>

<style>

</style>