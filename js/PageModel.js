var Page ={
	//当前页
	currentPage:1,
	//分页大小
	pageSixe:10,
	// 总记录数
	totalRecords:null,
	//数据
	data:null,
	//总页数
	totalPageNum:null,
	Alldata:null,
	setPage:function(params){
		this.currentPage = params.currentPage;
		this.Alldata  = params.data;
		if(params.pageSixe){
			this.pageSixe = params.pageSixe;
		}
		this.totalRecords = params.data.length;
		this.totalPageNum =parseInt(this.totalRecords%this.pageSixe==0?this.totalRecords/this.pageSixe:(this.totalRecords/this.pageSixe)+1) ;
		this._getDataList();
	},
	// _数据获取信息
	_getDataList:function(){
		// 计算截取位置
		var index = (this.currentPage-1)*this.pageSixe;
		var newList;
		if(this.currentPage == this.totalPageNum){
			 newList =this.Alldata.slice(index,this.Alldata.length);
			 this.data = newList;
		}else{
			newList =this.Alldata.slice(index,this.pageSixe+index);
			 this.data = newList;
		}
	},
	getPageData:function(){
		this._getDataList();
	}
	
}