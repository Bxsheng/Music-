var MV = {
	//获取视频链接地址
	getMvMove:function(MvId){
		var params={
			url:'mv/detail?mvid='+MvId,
			sCallback:function(res){
				console.log(res);
				var url =res.data.brs['480'];
				window.open(url,'newindow','height=600,width=900,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
			},
			eCallback:function(res){
				console.log(res);
			}
		}
		window.base.getData(params);
	}
}