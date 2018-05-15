<template>
	<div class="base">
		<h1>日期，时间，地图，地址，颜色选择器基础用法</h1>
		<h1 class="title">(一)颜色选择器</h1>
		<p><span class="demonstration">有默认值</span><el-color-picker v-model="color1"></el-color-picker></p>
		<p><span class="demonstration">无默认值</span><el-color-picker v-model="color2"></el-color-picker></p>	
			  <!--show-alpha属性即可控制是否支持透明度的选择-->
	    <p><span class="demonstration">设置透明度</span><el-color-picker v-model="color3" show-alpha></el-color-picker></p> 
	    <p><span class="demonstration">设置预定义颜色</span><el-color-picker v-model="color5" show-alpha :predefine="predefineColors"></el-color-picker></p>
		<p>
			<span>不同尺寸的颜色选择器：</span>
			<span>默认大小：</span><el-color-picker v-model="color4"></el-color-picker>
			<span>中等大小：</span><el-color-picker v-model="color4" size="medium"></el-color-picker>
			<span>小的：</span><el-color-picker v-model="color4" size="small"></el-color-picker>
			<span>迷你版的：</span><el-color-picker v-model="color4" size="mini"></el-color-picker>
        </p>
		<p class="line"></p>
		<h1 class="title">(二)时间选择器</h1>
		<p>
			<span>固定时间点：</span>
			<el-time-select
			  v-model="timevalue1"
			  :picker-options="{
			    start: '00:00',
			    step: '00:30',
			    end: '23:59'
			  }"
			  placeholder="选择时间">
			</el-time-select><br /><br />
			<span>固定时间范围:</span>
			<el-time-select
			    placeholder="起始时间"
			    v-model="startTime"
			    :picker-options="{
			      start: '08:30',
			      step: '00:15',
			      end: '18:30'
			    }">
			  </el-time-select>
			  <el-time-select
			    placeholder="结束时间"
			    v-model="endTime"
			    :picker-options="{
			      start: '08:30',
			      step: '00:15',
			      end: '18:30',
			      minTime: startTime
			    }">
			</el-time-select><br /><br />
			<span>任意时间点：</span>
				<el-time-picker
				    v-model="value2"
				    :picker-options="{
				      selectableRange: '00:30:00 - 23:59:59'
				    }"
				    placeholder="任意时间点">
				</el-time-picker>
				<el-time-picker
				    arrow-control
				    v-model="value3"
				    :picker-options="{
				      selectableRange: '18:30:00 - 20:30:00'
				    }"
				    placeholder="任意时间点">
				</el-time-picker>
			<br /><br />
			<span>任意时间范围：</span>
			<!--（添加is-range属性即可选择时间范围，同样支持arrow-control属性。）-->
				<el-time-picker
				    is-range
				    v-model="value4"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				</el-time-picker>
				<el-time-picker
				    is-range
				    arrow-control
				    v-model="value5"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				</el-time-picker>
		</p>
		<p class="line"></p>
		<h1 class="title">(三)日期（日历）选择器</h1>
		<p>
			 <span>默认</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			    <span>带快捷选项</span>
			    <el-date-picker
			      v-model="value2"
			      align="right"
			      type="date"
			      placeholder="选择日期"
			      :picker-options="pickerOptions1">
			    </el-date-picker>
			
		</p>
		<p class="line"></p>
		<!--<h1 class="title">(四)地图选择器</h1>-->
		<!--<p class="line"></p>-->
		<!--<h1 class="title">(五)地址选择器</h1>-->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				color1:"#409EFF",
//				'#409EFF';"blue"
				color2:null,
				color3:'rgba(19, 206, 102, 0.8)',
//				可以是普通颜色不参加透明度的
				color4:"#FF00D0",
				color5: 'rgba(255, 69, 0, 0.68)',
		        predefineColors: [
		          '#ff4500',
		          '#ff8c00',
		          '#ffd700',
		          '#90ee90',
		          '#00ced1',
		          '#1e90ff',
		          '#c71585',
		          'rgba(255, 69, 0, 0.68)',
		          'rgb(255, 120, 0)',
		          'hsv(51, 100, 98)',
		          'hsva(120, 40, 94, 0.5)',
		          'hsl(181, 100%, 37%)',
		          'hsla(209, 100%, 56%, 0.73)',
		          '#c7158577'
		        ],
		        timevalue1:"",
		        startTime:"",
		        endTime:"",
		        value2:"",
		        value3:"",
		        value4:[new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
		        value5:[new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
			}
		}
	}
</script>

<style scoped>
h1{font-size: 30px;color:lightseagreen;}
  p{text-align: left;padding: 5px;font-size: 16px;}
  .line{width: 100%;height: 0.5px;background-color: lightgrey;margin: 50px auto;}
  .title{font-size: 20px;color: #20A0FF;text-align: left;}
</style>