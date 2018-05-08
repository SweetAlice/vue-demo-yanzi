<template>
  <div class="hello clearflex">
  	<div class="logo floatLeft ">
  		<img class="logoimg" src="../../../static/img/logohai.jpg" alt="" />
  	</div>
    <h1 class="title-msg floatLeft">{{ msg }}</h1>
    <div class="login-btn floatLeft">
    	<div class="login-btn-icon el-icon-setting"></div>
    	<!--实现路由嵌套和跳转http://www.jb51.net/article/116678.htm-->
    	<!--第一种方法使用 <router-link> 映射路由-->
    	 <!--<router-link class="login-btn-text"  to="/login">安全退出</router-link>-->
    	 <!--第二种编程式导航-->
    	 <p  class="login-btn-text"  @click="signOut">安全退出</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue后台管理---yanzi'
    }
  },
  methods:{
  	//退出登录
  	signOut(){
//		     字符串
			this.$router.push('/login')
		  	// 对象
//			this.$router.push({ path: '/login' })
			  // 命名的路由
//			this.$router.push({ name: 'login', params: { userId: "/login" }})
  	}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{height: 80px;min-width: 1070px;background-color: #324157;color: #BFCBD9;}
	.logo{width: 250px;height: 100%;}
	.logoimg{width:250px;height: 80px;margin: 0 auto;}
  .title-msg{width:calc(100% - 400px);height: 80px;line-height: 80px;}
  .login-btn{width: 150px;height: 80px;font-size: 14px;}
  .login-btn-icon{width: 100%;height:40px;line-height:40px;font-size: 20px;}
  .login-btn-text{width: 100%;height:40px;line-height:30px;color: #BFCBD9;}
</style>
