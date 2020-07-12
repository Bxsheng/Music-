window.base = {
	g_result:'http://musicapi.leanapp.cn/',
	getData:function(params){
		if(!params.type){
			params.type='get';
		}
		var that =this;
		$.ajax({
			type:params.type,
			url:that.g_result+params.url,
			data:params.data,
			datatype:'json',
			success:function(res){
				params.sCallback && params.sCallback(res);
			},
			error:function(res){
				params.eCallback && params.eCallback(res);
			}
		})
	}
}