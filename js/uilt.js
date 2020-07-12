var Uilt = {
	getUrlId:function(){
			var url = window.location.href;
			var start = url.indexOf('=');//获得字符串的开始位置
			var id = url.substring(start+1,start+(url.length-start));
			return id
	}
}