$(function(){
	var PageModel  = null;
	var singerId = Uilt.getUrlId();
	var data = localStorage.getItem('Singer'+singerId);
	data = JSON.parse(data);
	
	//分页初始化
	function setPageInit(){
		PageModel = Page;
		var params = {
			currentPage:1,
			pageSixe:Base.pageSize,
			data:Stroage.getSingerDataList('Singer'+singerId).hotSongs
		}
		PageModel.setPage(params);
		$('#M_Page').html(Htmljs.PageHtml(PageModel.totalPageNum));
		$('.pagination li').click(function(){
			$('.pagination li').attr('class','');
			$(this).attr('class','active');
			PageModel.currentPage = parseInt($(this).attr('id'));
			PageModel.getPageData();
			$('#SingerSong .row').html(Htmljs.SingerSongHtml(PageModel.data));
		})
	}
	//下一首
	$('.playTitle .glyphicon-step-backward').click(function(){
		MusicPlay.lastMusic();
	})
	
	//上一首
	$('.playTitle .glyphicon-step-forward').click(function(){
		MusicPlay.nextMusic();
	})
	$('#Buttonplay').click(function(){
		if('glyphicon glyphicon-play'==$(this).attr('class')){
			var musicId=$(this).attr('data_id');
			$(this).attr('class','glyphicon glyphicon-pause');
			MusicPlay.playMusic();
		}else{
			$(this).attr('class','glyphicon glyphicon-play');
			MusicPlay.pauseMusic();
		}
		
	})
	if(Base.page && data){
		setPageInit();
	}
	if(data){
			$('#SingerI .row .col-md-12').html(Htmljs.SingerInfoHtml(data.artist));
			if(PageModel!=null){
				$('#SingerSong .row').html(Htmljs.SingerSongHtml(PageModel.data));
				return ;
			}
			$('#SingerSong .row').html(Htmljs.SingerSongHtml(data.hotSongs));
	}else{
			var params={
				url:'artists?id='+singerId,
				sCallback:function(res){
					localStorage.setItem('Singer'+singerId,JSON.stringify(res));
					$('#SingerI .row .col-md-12').html(Htmljs.SingerInfoHtml(res.artist));
					if(Base.page){
						setPageInit();
					}
					if(PageModel!=null){
						$('#SingerSong .row').html(Htmljs.SingerSongHtml(PageModel.data));
						return ;
					}
					$('#SingerSong .row').append(Htmljs.SingerSongHtml(res.hotSongs));
				}
			}
			window.base.getData(params);
	}
})