$(function(){
				var PageModel  = null;
				var data = localStorage.getItem('Singer');
				data = JSON.parse(data);
				//分页初始化
				function setPageInit(){
					PageModel = Page;
					var params = {
						currentPage:1,
						pageSixe:Base.pageSingerSize,
						data:Stroage.getSingerDataList('Singer').list.artists
					}
					PageModel.setPage(params);
					$('#M_Page').html(Htmljs.PageHtml(PageModel.totalPageNum));
					$('.pagination li').click(function(){
						console.log()
						if($(this).attr('class')!='disabled'){
							$('.pagination li').attr('class','');
							$('.pagination li').first().attr('class','disabled');
							$('.pagination li').last().attr('class','disabled');
							$(this).attr('class','active');
							PageModel.currentPage = parseInt($(this).attr('id'));
							PageModel.getPageData();
							$('#singerList').html(Htmljs.SingerListHtml(PageModel.data));
						}
						
					})
				}
				
				if(Base.page && data){
					setPageInit();
				}
				if(data){
					//alert(Htmljs.SingerListHtml(data.artists))
					if(PageModel!=null){
						$('#singerList').html(Htmljs.SingerListHtml(PageModel.data));
						return ;
					}
					$('#singerList').html(Htmljs.SingerListHtml(data.list.artists));
				}else{
					var params={
						url:'toplist/artist',
						sCallback:function(res){
							localStorage.setItem('Singer',JSON.stringify(res));
							if(Base.page){
								setPageInit();
							}
							if(PageModel!=null){
								$('#singerList').html(Htmljs.SingerListHtml(PageModel.data));
								return ;
							}
							$('#singerList').html(Htmljs.SingerListHtml(res.list.artists));
						}
					}
					window.base.getData(params);
				}
				
			})