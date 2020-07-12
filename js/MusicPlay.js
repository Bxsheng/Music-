var MusicPlay={
	Musicplay:null,//音乐对象 包含音乐id
	_getMusic:function(){
		return Stroage.getMusicInfo(this.Musicplay.musicId);
	},
	_getSingerMusic:function(){
		return Stroage.getSingerMusicInfo(this.Musicplay.musicId,this.Musicplay.SingerLocID);
	},
	_getSearchMusic:function(){
		return Stroage.getSearchMusicInfo(this.Musicplay.musicId);
	},
	//一个是新歌数据信息 一个是歌手数据信息
	M_Play:function(){
		this.playMusic();
		if ( this.Musicplay.Type =='Singer') {
			this._setSingerPlayHtml();
		}else if ( this.Musicplay.Type =='Search') {
			this._setSearchPlayHtml();
		}
		 else{
			this._setPlayHtml();
		}
		
	},
	
	_setPlayHtml:function(){
		var  MusicInfo = this._getMusic();
		$('#M_Paly .panel-title').html(MusicInfo.name+' ('+MusicInfo.song.artists[0].name+')');
		$('#M_Paly .panel-body img').attr({
				"src":MusicInfo.picUrl,
		});
		var data ={
			getLast:function(res){
			 $('.progress_top .music_time .last').html(res);
			}
			
		}
		this._setGetLasttime(data);
		this._setgetFristtime();
		$('#Buttonplay').attr('class','glyphicon glyphicon-pause');
		
	},
	_setSingerPlayHtml:function(){
		var  MusicInfo = this._getSingerMusic();
		$('#M_Paly .panel-title').html(MusicInfo.name+' ('+MusicInfo.ar[0].name+')');
		$('#M_Paly .panel-body img').attr({
				"src":MusicInfo.al.picUrl,
		});
		var data ={
			getLast:function(res){
			 $('.progress_top .music_time .last').html(res);
			}
			
		}
		this._setGetLasttime(data);
		this._setgetFristtime();
		$('#Buttonplay').attr('class','glyphicon glyphicon-pause');
		
	},
	_setSearchPlayHtml:function(){
		var  MusicInfo = this._getSearchMusic();
		console.log(MusicInfo);
		$('#M_Paly .panel-title').html(MusicInfo.title+' ('+MusicInfo.author+')');
		$('#M_Paly .panel-body img').attr({
				"src":MusicInfo.pic,
		});
		var data ={
			getLast:function(res){
			 $('.progress_top .music_time .last').html(res);
			}
			
		}
		this._setGetLasttime(data);
		this._setgetFristtime();
		$('#Buttonplay').attr('class','glyphicon glyphicon-pause');
		
	},
	_setGetLasttime:function(data){
		var that = this;
		var lastTime=3;
		setTimeout(()=>{
			 lastTime = parseInt(that.Musicplay.player.duration/60)+":"+parseInt(that.Musicplay.player.duration%60);
			 data.getLast(lastTime);
		},1000);
		
	},
	_setgetFristtime:function(){
		var that = this;
		 setInterval(time_fnc,1000);
		 function time_fnc(){
			 var  time =parseInt(that.Musicplay.player.currentTime/60)+":"+parseInt(that.Musicplay.player.currentTime%60);	
			 var  lastTime = parseInt(that.Musicplay.player.duration/60)+":"+parseInt(that.Musicplay.player.duration%60);
			 $('.progress_top .music_time .frist').html(time);
			 var dateTime =	(Math.round(that.Musicplay.player.currentTime / that.Musicplay.player.duration * 10000) / 100.00)+"%";
			  $('.progress_top .progress .progress-bar').css('width',dateTime);
			  if(time==lastTime){
				  if (that.Musicplay.Type =='Singer'){
				  //获取下一首歌曲信息
					var music =Stroage.getSingerMusicId(that.Musicplay.musicId,that.Musicplay.SingerLocID);
					that.getMusicInfo(music.id,that.Musicplay.SingerLocID,that.Musicplay.Type);
				  }else{
					  var music =Stroage.getMusicNext(that.Musicplay.musicId);
					  that.getMusicInfo(music.id);
				  }
			  }
			 
		}
	},
	//获取歌曲链接设置新的信息 获取歌手链接信息
	getMusicInfo:function(MusicID,SingerLocID='',type=''){
		var that  =this;
		var params={
			url:'music/url?id='+MusicID,
			sCallback:function(res){
					var musicUrl = res.data[0].url
					$('#myAudio').attr('src',musicUrl);
					var MusicInfo= {
						musicId:MusicID,
						player:$("#myAudio")[0],
						SingerLocID:SingerLocID,
						Type:type
					}
					that.Musicplay = MusicInfo;
					that.M_Play();
			}
		}
		window.base.getData(params);
	},
	nextMusic:function(){
		if ( this.Musicplay.Type =='Singer'){
			var music =Stroage.getSingerMusicId(this.Musicplay.musicId,this.Musicplay.SingerLocID);
			this.getMusicInfo(music.id,this.Musicplay.SingerLocID,this.Musicplay.Type);
		}else if(this.Musicplay.Type =='Search'){
			var music =Stroage.getSearchMusicId(this.Musicplay.musicId,this.Musicplay.SingerLocID);
			this.getMusicInfo(music.songid,this.Musicplay.SingerLocID,this.Musicplay.Type);
		}else{
			var music =Stroage.getMusicNext(this.Musicplay.musicId);
			this.getMusicInfo(music.id);
		}
		
	},
	lastMusic:function(){
		if ( this.Musicplay.Type =='Singer'){
			//console.log(this.Musicplay);
			var music =Stroage.getSingerMusicId(this.Musicplay.musicId,this.Musicplay.SingerLocID,'last');
			this.getMusicInfo(music.id,this.Musicplay.SingerLocID,this.Musicplay.Type);
		}else if(this.Musicplay.Type =='Search'){
			var music =Stroage.getSearchMusicId(this.Musicplay.musicId,this.Musicplay.SingerLocID,'last');
			this.getMusicInfo(music.songid,this.Musicplay.SingerLocID,this.Musicplay.Type);
		}else{
			var music =Stroage.getMusicNext(this.Musicplay.musicId,'last');
			this.getMusicInfo(music.id);
		}
	},
	playMusic:function(){
		this.Musicplay.player.play();
	},
	pauseMusic:function(){
		this.Musicplay.player.pause();
	}
	
	
	
	
	
}

