<template>
    <div class="login-wrap">
    	<div class="login-content">
    		<div class="ms-title">跑马灯和卡片</div>
	        
    	</div>
        
    </div>
    
</template>

<script>
    import qs from 'qs'
    export default {
        data: function(){
            return {
            	checked:true,
            	size:"mini",
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
//              self.$router.push('/home');
                self.$refs[formName].validate((valid) => {
//              	console.log(valid)
                    if (self.ruleForm.username == "alice" && self.ruleForm.password == "6666" && valid) {
                    	let obj = {'ms_username':self.ruleForm.username,"ms_password":self.ruleForm.password};
                    	sessionStorage.setItem('obj',JSON.stringify(obj));
                    	self.$router.push('/home');
//                  	localStorage存储数组或者对象
//                  	let arr = [self.ruleForm.username,self.ruleForm.password];
//                  	let obj = {'ms_username':self.ruleForm.username,"ms_password":self.ruleForm.password};
//                  	localStorage.setItem('obj',JSON.stringify(obj));
//                      console.log(JSON.parse(localStorage.obj))
                       
                       //ajax请求数据
//                      let url  = self.Interface();
//                      self.$axios.post(url.loginUrl,qs.stringify({
//                          userName: self.ruleForm.username,
//                          password: self.ruleForm.password
//                      }))
//                      .then(function (response) {
//                          console.log(response)
//                          sessionStorage.setItem('username',JSON.stringify(response.data.t.username));
//
//                          if(response.data.status=='SUCCESS'){
//                              self.$router.push('/home');
//                          }else{
//                              self.$message.error(response.data.text);
//                              return false;
//
//                          }
//                      })
//                      .catch(function (response) {
//                          self.$message.error('服务器错误，请稍等！');
//                          return false;
//                      });

                        
                    }else{
                        self.$message.error('输入的账号或者密码不正确！');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
	body{background-color: #324157;}
    .login-wrap{width:100%;height:100%;background-color:#F9F9F9;}
    .login-content{width:500px;height: 400px;margin: 0 auto;position: absolute;top:calc(50% - 300px);left: calc(50% - 250px);background-color: white;border-radius: 5px;box-shadow: #2C3E50;/*background: url(../../../static/img/login-bg.png) no-repeat 0px 0px;*/ }
    /*.ms-title{width:100%;text-align: center;font-size:30px;margin: 0 auto;height: 120px;line-height: 120px;background: url(../../../static/img/login-topbg.jpg) no-repeat 0px 0px;background-size: 100% 100%;color: #7DBF4A;}*/
    .ms-login{width:450px;height:230px;padding:50px;border-radius: 5px;background: #fff;margin: 0 auto;}
    /*.ms-login:after{content: '';background: url(../../../static/img/login-bg.png) no-repeat 0px 0px;display: block;width: 550px;height: 10px;background-size: 100%;position: absolute;bottom: -9px;left: -7%;z-index: 0;}*/
    .login-btn{text-align: center;}
    .login-btn button{width:100%;height:36px;}
    .login-btn .login-btn-pass{font-size: 14px;text-align: left;padding: 5px 0;}
    .login-btn .login-btn-pass>.lightblue{cursor: pointer;display: inline-block;width: 265px;text-align: right;}
    .login-btn .login-btn-admin{font-size: 14px;text-align: left;padding: 5px 0;}
    .login-btn .login-btn-admin>.lightblue{cursor: pointer;}
</style>