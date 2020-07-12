
var Htmljs = {
	//最新歌单html渲染数据信息
	NewHtml:function(data){
		let html = '';
		for(let var1 in data) {
			 html += '<div class="col-md-2 col-xs-12" id="Music"><img src="'+data[var1].picUrl+'" alt="'+data[var1].name+'" class="img-responsive img-rounded hidden-xs" ><button type="button" class="btn btn-primary btn-xs  hidden-xs">'+data[var1].song.artists[0].name+'</button><div class="detailed text-center hidden-xs"> <small class="danger">'+data[var1].name+'</small></div><span data_id="'+data[var1].id+'" data_url="'+data[var1].picUrl+'" class="glyphicon glyphicon-play-circle hidden-xs md-glyphicon"></span><div class="Mobile hidden-md hidden-lg hidden-lg"><div class="media"><div class="media-left"><a href="#"><img class="media-object img-rounded" src="'+data[var1].picUrl+'" alt="..."  width="60"> </a> </div> <div class="media-body"><h4 class="media-heading">'+data[var1].name+'</h4><small class="text-danger">'+data[var1].song.artists[0].name+'</small><br></span><span class="glyphicon glyphicon-play-circle pull-right " data_id="'+data[var1].id+'" id="Mobile_play"></span></div></div> </div></div>'
		};
		// <--<span   class="glyphicon glyphicon-comment"><small class="text-info">360</small>-->
		return html;
	},
	ArtistsHtml:function(data){
		let html = '';
		for(let var1 in data) {
			 html += '<div class="row" data_id="'+data[var1].id+'"><div class="col-xs-4 col-md-4"><img class="img-rounded img-responsive" src="'+data[var1].img1v1Url+'" alt="..." width="60"></div><div class="col-xs-4 col-md-8"><div id="M_details"><h5>'+data[var1].name+'</h5></div></div></div>'
		};
		return html;
	},
	MvHtml:function(data){
		let html = '';
		for(let var1 in data) {
			 html += '<div class="col-md-3 col-xs-12" ><div class="MvdDtailed"><div class="Mv-img"><img src="'+data[var1].cover+'"  ><span data_id="'+data[var1].id+'" class="glyphicon glyphicon-play-circle Mv-glyphicon"></span></div><article><a href="#" title="'+data[var1].name+'"> '+data[var1].name+'</a><section class="aouth">'+data[var1].artistName+'</section><footer><span class="glyphicon glyphicon-film">&nbsp;'+data[var1].playCount+'</span></footer></article></div></div>'
		};
		return html;
	},
	//歌手信息
	SingerInfoHtml:function(data){
		let html = '<div class="S_info"><img src="'+data.img1v1Url+'" alt="" class="img-responsive pull-left img-circle " width="200"  style="margin-right: 20px;" /><article ><small class="text-danger">'+data.name+'</small><br /><p>'+data.briefDesc+'</p></article></div>'
		return html;
	},
	SingerSongHtml:function(data){
		let html = '<h4>单曲</h4>';
		for(let var1 in data) {
			let i = parseInt(var1)+1;
			 html += '<div class="col-md-12 col-xs-12" "  ><div class="col-md-1 col-xs-1">'+i+'</div><div class="col-md-2 col-xs-2"><img src="'+data[var1].al.picUrl+'" class="img-circle" width="50" /></div><div class="col-md-2 col-xs-3  text-primary"  >'+data[var1].name+'</div><div class="col-md-2 col-xs-2"  >昇`Music</div><div class="col-md-2 col-xs-2"  >'+data[var1].al.name+'</div><div class="col-md-2 col-xs-2"> <span  onclick="SingerM(this)" class="glyphicon glyphicon-play-circle" data_id="'+data[var1].privilege.id+'"></span></div></div>'
		};
		return html;					
	},
	SingerListHtml:function(data){
		let html='';
		for(let var1 in data) {
			 html += '<div class="col-md-2 col-xs-4" data_id="'+data[var1].id+'" ><img src="'+data[var1].img1v1Url+'" class="img-responsive img-rounded"  /><div class="text-center"><a type="button" href="SingerInfo.html?singer='+data[var1].id+'" class="btn btn-default btn-xs">By:'+data[var1].name+'</a></div></div>'
		};
		return html;	
	},
	
	PageHtml:function(index){
		let pageHtml = '';
		//初始化 分页
		for (var i = 2; i < index+1; i++) {
			pageHtml += '<li id="'+i+'"><a>'+i+'</a></li>';
		}
		var html ='<nav aria-label="..."  style="margin:0 auto; width: 400px;"><ul class="pagination"><li  class="disabled"><a  aria-label="Previous"><span aria-hidden="true" class="glyphicon glyphicon-star-empty"></span></a></li><li id="1" class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>'+pageHtml+'<li  class="disabled"><a disabled="disabled"  class="glyphicon glyphicon-star-empty" aria-label="Next"><span aria-hidden="true"></span></a></li></ul></nav>';
		return html;
	},
	SearchHtml:function(data){
		let html = '';
		for(let var1 in data) {
			 html += '<div class="col-md-2 col-xs-12" id="Music"><img src="'+data[var1].pic+'" alt="" class="img-responsive img-rounded hidden-xs" ><button type="button" class="btn btn-primary btn-xs  hidden-xs">'+data[var1].author+'</button><div class="detailed text-center hidden-xs"><small class="danger">'+data[var1].title+'</small></div><span data_id="'+data[var1].songid+'" data_url="'+data[var1].pic+'" class="glyphicon glyphicon-play-circle hidden-xs md-glyphicon"></span><div class="Mobile hidden-md hidden-lg hidden-lg"><div class="media"><div class="media-left"><a href="#"><img class="media-object img-rounded" src="'+data[var1].pic+'" alt="..."  width="60"> </a> </div> <div class="media-body"><h4 class="media-heading">'+data[var1].title+'</h4><small class="text-danger">'+data[var1].author+'</small><br><span class="glyphicon glyphicon-play-circle pull-right " data_id="'+data[var1].songid+'" id="Mobile_play"></span></div></div> </div></div>'
		};
		return html;
	}
	
}