<template>
  <div class="hello clearflex">
  	<div class="logo floatLeft ">
  		<img class="logoimg" src="../../../static/img/logohai.jpg" alt="" />
  	</div>
    <h1 class="title-msg floatLeft">{{ msg }}</h1>
    <div class="login-btn floatLeft">
    	<div class="login-btn-icon el-icon-setting"></div>
    	<p   class="login-btn-text">安全退出</p>
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
  .login-btn-text{width: 100%;height:40px;line-height:30px;}
</style>
