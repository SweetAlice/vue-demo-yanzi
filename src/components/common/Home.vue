<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content minWidth800">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
<style type="text/css">
	.wrapper{;position: relative;height: 100%;}
	.content{margin: 20px 10px 20px 260px;height: calc(100% - 120px);background-color: white;overflow: auto;}
</style>