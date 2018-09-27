$(".list_dt").on("click",function () {
		$('.list_dd').stop();
		$(this).siblings("dt").removeAttr("id");
		if($(this).attr("id")=="open"){
			$(this).removeAttr("id").siblings("dd").slideUp();
		}else{
			$(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
		}
	});

	$(function(){
  		$(".tablea").find(".sect:first").show();    //为每个sect的第一个元素显示
	  	$(".inn_tab").on("click",function(){ //给a标签添加事件
	     	var index=$(this).index();  //获取当前a标签的个数
	     	$(this).parent().next().find(".sect").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示
	     	$(this).addClass("select").siblings().removeClass("select"); //a标签显示，同辈元素隐藏
	  	})
	})
	var listLis=document.getElementsByClassName("list_li");
	var centerRights=document.getElementsByClassName("centerRight");

	for(var i=0;i<listLis.length;i++){
		listLis[i].onclick=function(){
			for(var j=0;j<listLis.length;j++){
				if(listLis[j]==this){
					listLis[j].id="show";
					centerRights[j].style.display="block";
				}else{
					listLis[j].id="";
					centerRights[j].style.display="";
				}
			}
		}
	}