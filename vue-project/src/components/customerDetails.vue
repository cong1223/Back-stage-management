<template>
  <div class="customerDetails container">
      <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">
          {{name}}
          <span class="pull-right">
              <router-link :to="{name: 'Edit',params:{id:id}}" class="btn btn-primary">编辑</router-link>
              <button class="btn btn-danger" @click="deleteCustomer(id)">删除</button>
          </span>
      </h1>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{phone}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{email}}</span></li>
      </ul>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-education"> {{education}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-home"> {{graduationschool}}</span></li>
      </ul>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-briefcase"> {{profession}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-user"> {{profile}}</span></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'customerDetails',
  data () {
    return {
        name: '',
        phone: '',
        email: '',
        education: '',
        graduationschool: '',
        profile: '',
        profession: '',
        id: ''
    }
  },
  created() {
      this.$axios.get('http://localhost:3000/users/'+this.$route.params.id).then((res) => {
          this.name = res.data.name;
          this.phone = res.data.phone;
          this.email = res.data.email; 
          this.education = res.data.education;
          this.graduationschool = res.data.graduationschool;
          this.profile = res.data.profile;
          this.profession = res.data.profession;
          this.id = res.data.id;
      })
  },
  methods: {
      deleteCustomer(id){
          this.$axios.delete('http://localhost:3000/users/'+this.id).then((res) => {
              this.$router.push({name:'customers',params:{alert:"用户删除成功!"}});
          })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
