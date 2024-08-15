$(function(){
	$(".search-submit").click(function(event) {
		$(this).removeAttr("name");
		/* Act on the event */
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".search-window").find("form").submit();
			
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	/*复制下拉*/
	$(".navbox .wp_nav > .nav-item").each(function(index,val){
		$(this).find("a").removeAttr("title");
		var html = $(this).find(".sub-nav").html();
		$(".navlist").append("<div class='navlist-li navlist-li-"+index+"'></div>");
		$(".navlist").find(".navlist-li").eq(index).html(html);
		$(".navlist").children(".navlist-li").find("ul").remove();
	});
	$(".navlist").append("<div class='clear'></div>");
		
	$("body,html").click(function(){
			$(".search-window").animate({"width":"42px"});
			$(".searchbtn").stop(true,true).fadeIn();
			$(".navlist").slideUp();
				
	});
	
	$(".searchbtn").click(function(){
		$(this).stop(true,true).fadeOut();
		$(".search-window").stop(true,true).animate({"width":"200px"});
		return false;
	});	
	$(".search-title").click(function(){
		return false;
	});

});
