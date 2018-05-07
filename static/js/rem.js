(function(win,doc){
	change();
	function change(){
	  doc.documentElement.style.fontSize = doc.documentElement.clientWidth *20/750+'px';
	}
	win.addEventListener('resize',change,false);
	win.addEventListener('orientationchange',change,false);  /* 这个是移动端设备横屏、竖屏转换时触发的事件处理函数 */
})(window,document);