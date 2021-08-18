import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import Dashboard from '../views/admin/Dashboard.vue'
import Employee from '../views/admin/Employee.vue'
import Register from '../views/admin/Register.vue'
import Task from '../views/admin/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/task',
  name: 'Task',
  component: Task
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router