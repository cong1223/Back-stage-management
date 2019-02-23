import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import About from '@/components/About'
import customers from '@/components/customers'
import Add from '@/components/Add'
import customerDetails from '@/components/customerDetails'
import Edit from '@/components/Edit'

Vue.prototype.$axios = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'customers',
      component: customers
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer',
      name: 'customerDetails',
      component: customerDetails
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
