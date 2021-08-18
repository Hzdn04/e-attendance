<template>
 <div class="container-admin">
  <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-6 m-auto">
            <!-- jquery validation -->
            <div class="card card-primary">
              <!-- form start -->
              <form @submit.prevent="handleSubmit">
                <div class="card-body">
                  <center><h3>Register</h3></center>
                  <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" v-model="name" placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" class="form-control" v-model="email"  placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" v-model="password" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label>Role</label>
                            <input type="text" name="role" class="form-control" v-model="role"  placeholder="Enter role">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label>Birth Date</label>
                            <input type="date" name="birthDate" class="form-control" v-model="birthDate"  placeholder="Enter birthDate">
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" class="form-control" v-model="phoneNumber"  placeholder="Enter phoneNumber">
                        </div>
                        <div class="form-group">
                            <label>Position</label>
                            <input type="text" name="position" class="form-control" v-model="position"  placeholder="Enter position">
                        </div>
                        <div class="form-group">
                            <label>Status</label>
                            <input type="text" name="status" class="form-control" v-model="status"  placeholder="Enter status">
                        </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>Address</label>
                            <textarea name="address" id="address" class="form-control" v-model="address"></textarea>
                        </div>
                    </div>
                  </div> 
                  <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                  </div>
                </div>
                <!-- /.card-body -->
              </form>
            </div>
            <!-- /.card -->
            </div>
          <!--/.col (left) -->
          <!-- right column -->
          <div class="col-md-6">

          </div>
          <!--/.col (right) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
name: 'Register',
  components: {
    
  },
  data(){
      return{
          form:{
              name:'',
              email:'',
              password:'',
              address:'',
              birthDate:'',
              phoneNumber:'',
              position:'',
              status:'',
              role:'',
          }
      }
  },
  methods: {
     async handleSubmit(){
        //const response = axios.post('http://localhost:8000/token/login', this.form) 
        await axios.post('http://localhost:8000/backOffice/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            address: this.address,
            birthDate: this.birthDate,
            phoneNumber: this.phoneNumber,
            position: this.position,
            status: this.status,
            role: this.role,
        });

        this.$router.push('/');
      }
  },
}
</script>

<style>
  .container-admin{
    position: absolute;
    width: 1366px;
    height: 768px;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, #205186 0%, #2F72BB 100%);
  }
</style>