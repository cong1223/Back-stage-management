<template>
  <div class="Edit container">
      <h1 class="page-header">用户信息</h1>
      <form @submit="updateCustomer">
          <div class="well">
              <div class="form-group">
                  <label for="name">姓名</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
              </div>
              <div class="form-group">
                  <label for="phone">电话</label>
                  <input type="text" class="form-control" id="phone" placeholder="Phone" v-model="phone">
              </div>
              <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
              </div>
              <div class="form-group">
                  <label for="education">学历</label>
                  <input type="text" class="form-control" id="education" placeholder="Education" v-model="education">
              </div>
              <div class="form-group">
                  <label for="graduationschool">毕业学校</label>
                  <input type="text" class="form-control" id="graduationschool" placeholder="Graduationschool" v-model="graduationschool">
              </div>
              <div class="form-group">
                  <label for="profession">职业</label>
                  <input type="text" class="form-control" id="profession" placeholder="Profession" v-model="profession">
              </div>
              <div class="form-group">
                  <label for="profile">个人简介</label>
                  <textarea rows="10" class="form-control" id="profile" placeholder="Profile" v-model="profile" />>
              </div>
              <button type="submit" class="btn btn-primary">确认提交</button>
          </div>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
        name: '',
        phone: '',
        email: '',
        education: '',
        graduationschool: '',
        profile: '',
        profession: '',
    }
  },
  methods: {
      updateCustomer(e){
          if (!this.name || !this.phone || !this.email) {
              console.log('请输入对应信息')
          }else{
              let updateCustomer = {
                  name: this.name,
                  phone: this.phone,
                  email: this.email,
                  education: this.education,
                  graduationschool: this.graduationschool,
                  profile: this.profile,
                  profession: this.profession
              };
              this.$axios.put('http://localhost:3000/users/'+this.$route.params.id,updateCustomer).then((res) => {
                  this.$router.push({name:'customers',params:{alert:"用户信息更新成功"}})
              })
          }
          e.preventDefault();
      },
  },
  created() {
        this.$axios.get('http://localhost:3000/users/'+this.$route.params.id).then((res) => {
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
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
