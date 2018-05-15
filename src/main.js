// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueI18n from 'vue-i18n'//多语言
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';
import 'element-ui/lib/theme-chalk/index.css';//css主题
//import locale from 'element-ui/lib/locale/lang/en';//国际化
import enLocale from 'element-ui/lib/locale/lang/en';//国际化
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';//国际化
import '../static/css/reset.css';    // 默认主题
import '../static/css/common-style.css';    // 默认主题

// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(VueI18n);
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages: {
      'zh-CN': require('./components/common/lang/zh'),   // 中文语言包
      'en-US': require('./components/common/lang/en')    // 英文语言包
    } // set locale messages
})
Vue.use(ElementUI,{
	 i18n: (key, value) => i18n.t(key, value)
//	  i18n: function (path, options) {
//	    // ...
//	  }
  });
//Vue.config.lang = 'zh-cn';
//Vue.locale('en', enLocale);
//Vue.locale('zh-cn', zhLocale);


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
//接口挂在在vue对象上进行集体处理
Vue.prototype.Interface = function(){
	return {
//	 	loginUrl:'http://59.110.228.218:15555/oauth/login',//http://59.110.228.218:15555/oauth/login',//登录接口地址
//	 	enumUrl:'http://59.110.228.218:15555/manage/manage/preferences/list',//枚举值http://59.110.228.218:15555/manage/manage/preferences/list
//	 	userInsert:'http://59.110.228.218:15555/manage/manage/user/insert',// 用户新增 http://59.110.228.218:15555/manage/manage/user/insert 
//	 	userSearch:'http://59.110.228.218:15555/manage/manage/user/search',// 用户列表查询分页
//	 	userEdiu:'http://59.110.228.218:15555/manage/manage/user/update',//用户编辑
//	 	resetPw:'http://59.110.228.218:15555/manage/manage/user/resetPassword',//重置用户密码
//	 	memberSearch:'http://59.110.228.218:15555/manage/manage/user/search',//'http://59.110.228.218:15555/payday/payday/member/search'
//		juese:'http://59.110.228.218:15555/manage/manage/role/search',//角色管理
//		addjuese:'http://59.110.228.218:15555/manage/manage/role/insert',//新增角色
//		quanxian:'http://59.110.228.218:15555/manage/manage/permission/search',//权限管理
//		loansRecord:'http://192.168.1.123:9400/manage/loan/loansRecord',//打款列表http://59.110.228.218:15555/manage/manage/loan/loansRecord
	}
	
	
};
/* eslint-disable no-new */
//Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。new Vue时，el和$mount并没有本质上的不同。
new Vue({
//el: '#app',//自动挂载
  router,
  i18n ,
  //render的两种方式：1.render: h => h(App)；2.render: x => x(App)
  render: h => h(App)
  // render: x => x(App)
	// 这里的render: x => x(App)是es6的写法
	// 转换过来就是：  暂且可理解为是渲染App组件
	// render:(function(x){
	//  return x(App);
	// });
}).$mount('#app');//手动挂载


//路由跳转时拦截判断没有登录自动跳到登录界面
console.log("00000------main-js")
console.log(sessionStorage.obj)
router.beforeEach((to,from,next) => {
	console.log("llll-----router.beforeEach")
	console.log(to,from,next)
    if(to.meta.auth){//判断该路由是否需要登录权限
        // 对路由进行验证
        if(sessionStorage.obj && (JSON.parse(sessionStorage.obj).ms_username == "alice")) { // 已经登陆
            next()
        }else{
            // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
            next({path:'/login',query:{ referrer: to.fullPath} })  
        }
    }else{
        next()
        
    }
})