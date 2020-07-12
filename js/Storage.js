var Stroage ={
	NewMusicData:JSON.parse(localStorage.getItem('NewMusic')),
	//根据音乐ID在缓存中获取播放音乐信息
	getMusicInfo:function(musicId){
	//	console.log(JSON.parse(localStorage.getItem('NewMusic')))
		this.NewMusicData = JSON.parse(localStorage.getItem('NewMusic'));
		for (let i = 0; i < this.NewMusicData.length; i++) {
			if(musicId==this.NewMusicData[i].id){
				return this.NewMusicData[i];
			}
		}
		
	},
	//根据音乐id获取下标
	getNusicId:function(musicId){
		for (let i = 0; i < this.NewMusicData.length; i++) {
			if(musicId==this.NewMusicData[i].id){
				return i;
			}
		}
	},
	//根据歌手音乐id获取下标
	getSingerMusicId:function(musicId,SingerlocId,type='next'){
		var SingerData  = localStorage.getItem(SingerlocId);
		SingerData = JSON.parse(SingerData);
		var data = SingerData.hotSongs;
		for (let i = 0; i < data.length; i++) {
			if(musicId==data[i].privilege.id){
				if(type == 'next'){
					if (i==data.length) data[i];
					return data[++i];
				}else{
					if (i==0) data[i];
					return data[--i];
				}
			}
		}
	},
	//根据歌手所在获取信息
	getSingerMusicInfo:function(musicId,SingerlocId){
		var SingerData  = localStorage.getItem(SingerlocId);
		SingerData = JSON.parse(SingerData);
		var data = SingerData.hotSongs;
		for (let i = 0; i < data.length; i++) {
			if(musicId==data[i].privilege.id){
				return data[i];
			}
		}
	},
	//根据id获取歌曲信息
	getMusicIdInfo:function(i){
		return this.NewMusicData[i];
	},
	//获取下一首歌曲信息
	getMusicNext:function(musicId,type='next'){
		//获取上一首歌的数据
		if(type=='last'){
			var i = this.getNusicId(musicId);
			if(parseInt(i)!=0)
			return this.getMusicIdInfo(parseInt(i)-1);
		}else{
			var i = this.getNusicId(musicId);
			if(parseInt(i)!=this.NewMusicData.length)
			return this.getMusicIdInfo(parseInt(i)+1);
		}
		
	},
	//歌手相关
	getArtistsData:function(){
		
	},
	//歌手下的单曲信息
	getSingerDataList:function(SingerlocId){
		var SingerData  = localStorage.getItem(SingerlocId);
		return JSON.parse(SingerData);
	},
	getSearchMusicInfo:function(musicId){
		var SearchData  = localStorage.getItem('Search');
		SearchData = JSON.parse(SearchData);
		var data = SearchData.result;
		for (let i = 0; i < data.length; i++) {
			if(musicId==data[i].songid){
				return data[i];
			}
		}
	},
	getSearchMusicId:function(musicId,SingerlocId,type='next'){
		var SearchData  = localStorage.getItem('Search');
		SearchData = JSON.parse(SearchData);
		var data = SearchData.result;
		for (let i = 0; i < data.length; i++) {
			if(musicId==data[i].songid){
				if(type == 'next'){
					if (i==data.length) data[i];
					return data[++i];
				}else{
					if (i==0) data[i];
					return data[--i];
				}
			}
		}
		console.log(this.SingerindexId);
	}
}