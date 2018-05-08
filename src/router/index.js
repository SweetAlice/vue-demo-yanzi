import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta: {
		        auth: false
		    }
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/base',
                    name:'base',
                    component: resolve => require(['../components/pages/vue-base/Base.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Methods',
                    name:'Methods',
                    component: resolve => require(['../components/pages/vue-base/Methods.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Template',
                    name:'Template',
                    component: resolve => require(['../components/pages/vue-base/Template.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
               }, {
                    path: '/Components',
                    name:'Components',
                    component: resolve => require(['../components/pages/vue-base/Components.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Directive',
                    name:'Directive',
                    component: resolve => require(['../components/pages/vue-base/Directive.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Filter',
                    name:'Filter',
                    component: resolve => require(['../components/pages/vue-base/Filter.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Router',
                    name:'Router',
                    component: resolve => require(['../components/pages/vue-base/Router.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Axios',
                    name:'Axios',
                    component: resolve => require(['../components/pages/vue-base/Axios.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Vuex',
                    name:'Vuex',
                    component: resolve => require(['../components/pages/vue-base/Vuex.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Cache',
                    name:'Cache',
                    component: resolve => require(['../components/pages/vue-base/Cache.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Plugs',
                    name:'Plugs',
                    component: resolve => require(['../components/pages/vue-base/Plugs.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Webpack',
                    name:'Webpack',
                    component: resolve => require(['../components/pages/vue-base/Webpack.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }, {
                    path: '/Mac',
                    name:'Mac',
                    component: resolve => require(['../components/pages/vue-ui/Mac.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Echarts',
                    name:'Echarts',
                    component: resolve => require(['../components/pages/vue-ui/Echarts.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/DateMapColor',
                    name:'DateMapColor',
                    component: resolve => require(['../components/pages/vue-ui/DateMapColor.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/EditUploadCode',
                    name:'EditUploadCode',
                    component: resolve => require(['../components/pages/vue-ui/EditUploadCode.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/WindowNotice',
                    name:'WindowNotice',
                    component: resolve => require(['../components/pages/vue-ui/WindowNotice.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/NavCollection',
                    name:'NavCollection',
                    component: resolve => require(['../components/pages/vue-ui/NavCollection.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Data',
                    name:'Data',
                    component: resolve => require(['../components/pages/vue-ui/Data.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/LightCard',
                    name:'LightCard',
                    component: resolve => require(['../components/pages/vue-ui/LightCard.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Layout',
                    name:'Layout',
                    component: resolve => require(['../components/pages/vue-ui/Layout.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/BtnInput',
                    name:'BtnInput',
                    component: resolve => require(['../components/pages/vue-ui/BtnInput.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/CounterSelector',
                    name:'CounterSelector',
                    component: resolve => require(['../components/pages/vue-ui/CounterSelector.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/OffonSlide',
                    name:'OffonSlide',
                    component: resolve => require(['../components/pages/vue-ui/OffonSlide.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Form',
                    name:'Form',
                    component: resolve => require(['../components/pages/vue-ui/Form.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/Animation',
                    name:'Animation',
                    component: resolve => require(['../components/pages/vue-ui/Animation.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                },{
                    path: '/InternationalizationCustom',
                    name:'InternationalizationCustom',
                    component: resolve => require(['../components/pages/vue-ui/InternationalizationCustom.vue'], resolve),
                    meta:{
					      auth:true,
					      keep:true
					}
                }
            ]
       },
        {
            path: '/login',
            component: resolve => require(['../components/pages/Login.vue'], resolve)
        }
    ]
})

