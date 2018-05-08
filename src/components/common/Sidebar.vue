<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item> 
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-upload',
                        index: 'base',
                        title: 'vue基本语法',
                        subs: [
                            {
                                index: 'base',
                                title: '基本属性和语法'
                            },
                            {
                                index: 'Methods',
                                title: '生命周期和事件'
                            },
                            {
                                index: 'Template',
                                title: '模板'
                            },
                            {
                                index: 'Components',
                                title: '组件'
                            },
                            {
                                index: 'Directive',
                                title: '指令'
                            },
                            {
                                index: 'Filter',
                                title: '过滤器'
                            },
                            {
                                index: 'Router',
                                title: '路由'
                            }
                            ,
                            {
                                index: 'Axios',
                                title: 'http/$axios'
                            },
                            {
                                index: 'Vuex',
                                title: 'vuex'
                            },
                            {
                                index: 'Cache',
                                title: 'vue缓存'
                            },
                            {
                                index: 'Plugs',
                                title: '引用jquery,jquery-ui,bootstrap等'
                            },
                            {
                                index: 'Webpack',
                                title: 'webpack的基本配置和代理跨域'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'userlist',
                        title: 'vue组件',
                        subs: [
                            
                            {
                                index: 'Mac',
                                title: 'mac实例'
                            },{
                                index: 'Echarts',
                                title: 'echarts实例'
                            },{
                                index: 'DateMapColor',
                                title: '时间,日历,颜色,地址,地图选择插件'
                            },{
                                index: 'EditUploadCode',
                                title: '富文本编辑，上传，评分'
                            },{
                                index: 'WindowNotice',
                                title: '弹窗，文字提示，对话框和notice'
                            },{
                                index: 'NavCollection',
                                title: '导航（nav)和折叠面板'
                            },{
                                index: 'Data',
                                title: 'Data模块儿'
                            },{
                                index: 'LightCard',
                                title:'跑马灯和卡片'
                            },{
                                index: 'Layout',
                                title: '布局basic'
                            },{
                                index: 'BtnInput',
                                title: 'btn,input,单选，多选和输入框'
                            },{
                                index: 'CounterSelector',
                                title: '计数器，选择器，级联选择器'
                            },{
                                index: 'OffonSlide',
                                title: '开关和滑块'
                            },{
                                index: 'Form',
                                title: '表单'
                            },{
                                index: 'Animation',
                                title: '动画'
                            },{
                                index: 'InternationalizationCustom',
                                title: '国际化和自定义主题'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-d-caret',
                        index: 'transactionList',
                        title: '交易管理',
                        subs: [
                            {
                                index: 'transactionMoney',
                                title: '打款'
                            },
                            {
                                index: 'transactionLoan',
                                title: '借款列表'
                            },
                            {
                                index: 'transactionPlayList',
                                title: '打款列表'
                            },
                            {
                                index: 'transactionBill',
                                title: '账单列表'
                            },
                            {
                                index: 'transactionWrite',
                                title: '手动销账'
                            }
                        ],
                    },
                    {
                        icon: 'el-icon-date',
                        index: 'feedback',
                        title: '运营配置',
                        subs: [
                            {
                                index: 'feedback',
                                title: '用户反馈'
                            },
                            {
                                index: 'product',
                                title: '产品配置'
                            },
                            {
                                index: 'closedArea',
                                title: '关闭区域'
                            },
                            {
                                index: 'authentication',
                                title: '认证配置'
                            },
                            {
                                index: 'repaymentMethods',
                                title: '还款方式配置'
                            },
                            {
                                index: 'versionUpgrade',
                                title: '版本升级'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-minus',
                        index: 'channel',
                        title: '渠道管理',
                        subs: [
                            {
                                index: 'channelList',
                                title: '渠道列表'
                            },
                            {
                                index: 'channelInfor',
                                title: '渠道数据'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'reconciliation',
                        title: '财务对账',
                        subs: [
                            {
                                index: 'reconciliationPlay',
                                title: '打款金额'
                            },
                            {
                                index: 'reconciliationRepayment',
                                title: '还款金额'
                            },
                            {
                                index: 'reconciliationChannel',
                                title: '渠道对账'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'jurisdictio',
                        title: '权限管理',
                        subs: [
                            {
                                index: 'jurisdictioLists',
                                title: '用户列表'
                            },
                            {
                                index: 'juese',
                                title: '角色管理'
                            },
                            {
                                index: 'quanxian',
                                title: '权限管理'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                //return this.$route.path.replace('/','');

                var returnData=this.$route.name ? this.$route.name : this.$route.path.replace('/','');
                return returnData;
                
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 80px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
