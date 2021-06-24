<template>
<div class="back">
   <div class="container">
      <div class="row">
        <div class="mt-4"></div>
        <div class="col-md-4 offset-md-4 mb-3 text-center mt-5">
          <img src="@/assets/img/main.png" width="255px" alt="">
        </div>
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="onSubmit()">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <div class="input-group" id="show_hide_password">              
                  <input type="password" class="form-control" v-model="password" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-eye"></i>
                    </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                      <a class="btn btn-danger" href="/home"></a>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      currentRouteName: ""
    };
  },

  created() {
    this.currentRouteName = this.$route.name;
  },

  methods: {
    onSubmit() {
      if (this.email.trim() && this.password.trim()) {
        let formData = new FormData();
        formData.append("email", this.email.trim());
        formData.append("password", this.password);

        const options = {
          url: "localhost:8000/token/login",
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data: formData
        };

        axios(options)
          .then(response => {
            const token = response.data.token;

            if (token) {
              this.$router.push({
                name: "Backend",
                params: {
                  token: token
                }
              });
            }
          })
          .catch(e => {
            alert(e + "\n" + "email / password yang dimasukkan salah.");
          });
      }
    }
  }
};
</script>

<style>
  .back{
    bottom: 0;
    height: 100vh;
    background: linear-gradient(180deg, #205186 0%, #2F72BB 100%);
  }
</style>