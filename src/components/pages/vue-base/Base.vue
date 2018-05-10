<template>
	<div class="base">
		<h1>base基础用法</h1>
		<div class="base-content">
			<p>1.vue和vue实例以及他的属性和方法</p>
			<ul>
				<li>
					<h5>vue全局配置（Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列属性：）</h5>
					<p>  ①silent的用法：(是否取消Vue 所有的日志与警告。)  <br />
					     类型：boolean,默认值：false,用法：Vue.config.silent = true（取消 Vue 所有的日志与警告。）
					</p>
					<p>②optionMergeStrategies的用法：(自定义合并策略的选项.合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入。)<br />
					     类型：{ [key: string]: Function },默认值：{},用法：Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {<br />
                                                                                                                 return child + 1 <br />
                                                                    }<br />
																	const Profile = Vue.extend({<br />
																			_my_option: 1<br />
																	})<br />
                                                                    // Profile.options._my_option = 2

					</p>
					<p>  ③devtools：(配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查)<br />
					     类型：boolean,默认值：true(生产版本为false),用法：Vue.config.devtools = true // 务必在加载 Vue 之后，立即同步设置以下内容<br />
					     特别注意：（vue-devtools是一款基于chrome游览器的插件，用于调试vue应用，这可以极大地提高我们的调试效率。接下来我们就介绍一下vue-devtools的安装。）安装插件方法：https://segmentfault.com/a/1190000009682735
					</p>
					<p>  ④errorHandler：(指定组件的渲染和观察期间未铺货错误的处理函数。这个处理函数被调用时，可获取错误信息和vue实例)<br />
					     类型：Function,默认值：undefine,用法：Vue.config.errorHandler = function(err,vm,info){//handle error //info 是vue特定的错误信息，比如错误所在的生命周期钩子//只在vue2.2.0+可用}	<br />
					 特别注意：从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩溃。；从 2.4.0 起这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了。；错误追踪服务 Sentry 和 Bugsnag 都通过此选项提供了官方支持。
					</p>
					<p>  ⑤warnHandler：(2.4.0 新增,为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。)<br />
					     类型：Function,默认值：undefine,用法Vue.config.warnHandler = function (msg, vm, trace) {// `trace` 是组件的继承关系追踪}
					</p>
					<p>  ⑥ignoredElements：(须使Vue忽略在Vue之外的自定义元素（eg,使用了web components APIs)。否则，它假设你忘记注册全局组件或者拼错了组件名称，从而跑出一个关于Unknown custom element 的警告<br />
					     类型：Array[string | RegExp],默认值：[],用法Vue.config.ignoredElements = [<br />
						  'my-custom-web-component',<br />
						  'another-web-component',<br />
						 // 用一个 `RegExp` 忽略所有“ion-”开头的元素// 仅在 2.5+ 支持/^ion-/]<br />
					</p>
					<p>  ⑦keyCodes：(给v-on自定义键位别名)<br />
					     类型：{[key:string:number]| Array[number]},默认值：{},用法Vue.config.keyCodes = {
						  v: 86,<br />
						  f1: 112,<br />
						  // camelCase 不可用<br />
						  mediaPlayPause: 179,<br />
						  // 取而代之的是 kebab-case 且用双引号括起来<br />
						  "media-play-pause": 179,<br />
						  up: [38, 87]<br />
						}<br />
						<input type="text" @keyup.media-play-pause="method"/><br />
					</p>
					<p>  ⑧performance：(2.2.0 新增,设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。)<br />
					     类型：boolean,默认值：false(自2.2.3起),用法：Vue.config.ignoredElements = true;
					</p>
					<p>  ⑨productionTip：(2.2.0 新增,设置为 false 以阻止 vue 在启动时生成生产提示。<br />
					     类型：boolean,默认值：true,用法：Vue.config.productionTip = true;
					</p>
				</li>
				<li><h5>vue全局API</h5>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				    <p></p>
				</li>
				<li>vue的选项/数据</li>
				<li>vue的选项/DOM</li>
				<li>vue的选项/生命周期函数</li>
				<li>vue的选项/资源</li>
				<li>vue的选项/组合</li>
				<li>vue的选项/其他全部</li>
				<li>vue的属性</li>
				<li>实例（vue）属性</li>
				<li>实例（vue）方法/数据</li>
				<li>实例（vue）方法/事件</li>
				<li>实例（vue）方法/生命周期</li>
			</ul>
			<p>2.特殊特性</p>
			<ul>
				<li>key</li>
				<li>ref</li>
				<li>slot</li>
				<li>slot-scope</li>
				<li>scope</li>
				<li>is</li>
			</ul>
			<p>3.指令（v-*）</p>
			<ul>
				<li>v-text</li>
				<li>v-html</li>
				<li>v-show</li>
				<li>v-if</li>
				<li>v-else</li>
				<li>v-else-if</li>
				<li>v-for</li>
				<li>v-on</li>
				<li>v-bind</li>
				<li>v-model</li>
				<li>v-pre</li>
				<li>v-cloak</li>
				<li>v-once</li>
			</ul>
			<p>4.内置的组件</p>
			<ul>
				<li>component</li>
				<li>transition</li>
				<li>transition-group</li>
				<li>keep-alive</li>
				<li>slot</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
	h1{padding: 20px 0;border-bottom: solid 1px lightgray;}
	.base-content{font-size: 16px;text-align: left;padding: 10px;}
	.base-content>p{font-weight: 600;font-size: 18px;color: #20A0FF;}
</style>