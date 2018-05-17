<template>
    <div>
    	 <h1>国际化语言切换</h1>
    	 <p>（参考文章：https://blog.csdn.net/DOCALLEN/article/details/78408137?locationNum=2&fps=1）</p>
	     <p>{{$t('music')}}</p>
	     <p>{{$t('findMusic')}}</p>
	     <p>{{$t('myMusic')}}</p>
	     <p>{{$t('friend')}}</p>
	     <p>{{$t('musician')}}</p>
	     <p>{{$t('download')}}</p>
	     <button @click="changeLangEvent">汉语/en</button>
	     <p class="line"></p>
	     <h1>自定义主题</h1>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        methods:{
//			  切换语言 
			changeLangEvent() {
				this.$confirm('确定切换语言吗?','提示',{
				       confirmButtonText: '确定',
				       cancelButtonText: '取消',
				       type: 'warning'
			    }).then(() => {
			    	alert(this.lang);
			    	console.log(this.lang)
				       if ( this.lang === 'zh-CN' ) {
				          this.lang = 'en-US';
				          this.$i18n.locale = this.lang;//关键语句
				       }else {
				          this.lang = 'zh-CN';
				          this.$i18n.locale = this.lang;//关键语句
				       }
			    }).catch(() => {
				        this.$message.error('取消切换语言！');          
				});
			}
	} 
    }
</script>

<style scoped>
h1{font-size: 30px;color:lightseagreen;}
  p{text-align: left;padding: 5px;font-size: 20px;}
  .line{width: 100%;height: 0.5px;background-color: lightgrey;margin: 50px auto;}
</style>