 var swiper = new Swiper('.swiper-container', {
	      spaceBetween: 30,
	      centeredSlides: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
});

$(function(){
	var data = localStorage.getItem('NewMusic');
	data = JSON.parse(data)
	if(data){
	$('#NewMusic .row .col-md-12').append(Htmljs.NewHtml(data));	
	}else{
		var params={
			url:'personalized/newsong',
			sCallback:function(res){
				console.log(res);
				var data = res.result;
				localStorage.setItem('NewMusic',JSON.stringify(data));
				$('#NewMusic .row .col-md-12').append(Htmljs.NewHtml(data));	
				Click();
			}
		}
		window.base.getData(params);
	}
	data = localStorage.getItem('Artists');
	data = JSON.parse(data)
	if(data){
	$('#ListRecommend').append(Htmljs.ArtistsHtml(data));	
	}else{
		var params={
			url:'top/artists?offset=0&limit=5',
			sCallback:function(res){
				console.log(res);
				var data = res.artists;
				localStorage.setItem('Artists',JSON.stringify(data));
				$('#ListRecommend').append(Htmljs.ArtistsHtml(data));
				Click();	
			}
		}
		window.base.getData(params);
	}
	
	
	
	Click();
	//所有的点击事件
	function Click(){
		$('#ListRecommend .row').click(function(){
			//转跳新页面
			window.open('SingerInfo.html?singer='+$(this).attr('data_id'));
		})	
		//获取点击事件信息
		$('#Music .md-glyphicon').click(function(){
			 palyWbtn.show();
			 let musicId =$(this).attr("data_id");
			 MusicPlay.getMusicInfo(musicId);
		});	
		$('#Music .Mobile .media-body span:last-child').click(function(){
			palyWbtn.show();
			let musicId =$(this).attr("data_id");
			MusicPlay.getMusicInfo(musicId);
		})
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
				$(this).attr('class','glyphicon glyphicon-pause');
				MusicPlay.playMusic();
			}else{
				$(this).attr('class','glyphicon glyphicon-play');
				MusicPlay.pauseMusic();
			}
			
		})
		$('.MvdDtailed .Mv-img span').click(function(){
			var MvId = $(this).attr('data_id');
			MV.getMvMove(MvId);
		})
	}
	//获取视频接口
	data = localStorage.getItem('Mv');
	data = JSON.parse(data)
	if(data){
	$('#home').append(Htmljs.MvHtml(data));	
	}else{
		var params={
			url:'mv/first?limit=12',
			sCallback:function(res){
				console.log(res);
				var data = res.data;
				localStorage.setItem('Mv',JSON.stringify(data));
				$('#home').append(Htmljs.MvHtml(data));
			}
		}
		window.base.getData(params);
	}
	$('.MvdDtailed .Mv-img span').click(function(){
			var MvId = $(this).attr('data_id');
			MV.getMvMove(MvId);
		})
		
})
		