<template>
    <div id="app" >
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/users">用户管理</el-menu-item>
            <el-menu-item index="/order">消息中心</el-menu-item>
            <el-menu-item index="/message">订单管理</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-button type='primary' @click='axiosClick'>确定</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import qs from 'qs'
    var Mock = require('mockjs');
    var Random = Mock.Random;
    export default {
      name: "App",
      data() {
        return {
          activeIndex: this.$route.path,
          pathKey: '/home',
          obj: {
            username: 'admin',
            password: '123'
          }
        };
      },

      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          if(this.pathKey != key ){
            this.pathKey = key;
            this.$router.push(this.pathKey);
          }else if(this.pathKey == key){
            return;
          }
        },
        axiosClick(){
          axios.post('http://bufantec.com/api/test/user/doLogin',qs.stringify(this.obj))
          .then(res => {
            console.log(res);
            
          })
          // axios.get('http://bufantec.com/api/douban/movie/in_theaters')
          // .then(res =>{
          //   console.log(res);
          // })
          // axios.get('http://bufantec.com/api/douban/movie/subject',{
          //   params: {
          //     mId: "27087724"
          //     }
          //   })
          //   .then(res =>{
          //     console.log(res);
          //   })
        }
    }
      }   
 
</script>

<style scoped>
  
</style>
