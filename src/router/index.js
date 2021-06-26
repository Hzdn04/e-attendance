import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Dashboard from '../views/admin/Dashboard.vue'
import Employee from '../views/admin/Employee.vue'
import RegisterAdmin from '../views/admin/RegisterAdmin.vue'
import User from '../views/admin/User.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
