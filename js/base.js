var Base = {
	pageSize:10,//分页显示数据
	pageSingerSize:12,//歌手具体分页
	page:true,//是否开启分页数据
	
	
}
//写入缓存时间
var time = localStorage.getItem("Time");
if (time) {
	if(new Date().getTime()>time){
		localStorage.clear();
		setlocalStorage();
	}
}else{
	setlocalStorage();
}
//设置缓存过期时间
function setlocalStorage(){
	var exp=new Date().getTime()+60*60*1000;  //缓存过期时间
	localStorage.setItem("Time",exp);
}

