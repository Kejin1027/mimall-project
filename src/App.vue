<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import jsonp from 'jsonp'
export default {
  data() {
    return {
      data: '',
      res: {}
    }
  },
  mounted(){

    this.getUser()
    this.getCartCount()
    // let url = "/activity/servicetime"
    // jsonp(url, (err, res) => {
    //   let result = res
    //   this.data = result
    // })
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // 通过easy-mock平台实现数据mock
    // 本地继承mockjs实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
  },

  methods:{
    getUser(){
      this.axios.get('/user').then((res={}) => {
        // to-do 保存到vuex里面
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0) => {
        // to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';

</style>
