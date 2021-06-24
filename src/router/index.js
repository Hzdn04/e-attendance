import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import Dashboard from '../views/admin/Dashboard.vue'
import Employee from '../views/admin/Employee.vue'
import RegisterAdmin from '../views/admin/RegisterAdmin.vue'
import User from '../views/admin/User.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
// Route for Admin
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
},
{
  path: '/employee',
  name: 'Employee',
  component: Employee
},
{
  path: '/registerAdmin',
  name: 'RegisterAdmin',
  component: RegisterAdmin
},
{
  path: '/User',
  name: 'User',
  component: User
},
// Route for user
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
