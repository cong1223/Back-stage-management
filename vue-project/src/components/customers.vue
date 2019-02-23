<template>
  <div class="customers container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link :to="{name:'customerDetails',params:{id:customer.id}}" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers: [],
      alert: '',
    }
  },
  created() {
    if (this.$route.params.alert) {
      this.alert = this.$route.params.alert;
    }
    this.$axios.get('http://localhost:3000/users').then((res) => {
      this.customers = res.data;
    })
  },
  updated() {
    this.$axios.get('http://localhost:3000/users').then((res) => {
      this.customers = res.data;
    })
  },
  components: {
    Alert
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
