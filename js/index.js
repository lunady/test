$(function(){
	var contentH = $(document).height();
	var headerH = $(".top-nav").height();
	$(".left-nav").height(contentH);
	//var leftH = $(".left-nav").height();
	//$(".content").height(leftH-headerH);
	
	//学员主页左侧nav点击切换iframe内容
	$("#myStudent").click(function(){
		$("#myiframe").attr("src","active-myStudents.html");
		$(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#myRecommend").click(function(){
		$("#myiframe").attr("src","active-queryMyRecommend.html");
		$(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#applyAccount").click(function(){
		$("#myiframe").attr("src","active-applyAccount.html");
		$(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#myInfo").click(function(){
		$("#myiframe").attr("src","active-myInfo.html");
		$(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	//加盟商管理页左侧nav点击切换iframe内容
	$("#school-student").click(function(){
		$("#myiframe").attr("src","school-tree.html");
        $(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#school-student-info").click(function(){
		$("#myiframe").attr("src","school-student-info.html");
        $(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#school-student-recommend").click(function(){
		$("#myiframe").attr("src","school-student-recommend.html");
        $(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#school-account").click(function(){
		$("#myiframe").attr("src","school-account.html");
        $(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})
	$("#school-info").click(function(){
		$("#myiframe").attr("src","school-info.html");
        $(this).addClass('left-btn-active').siblings().removeClass("left-btn-active");
	})

    //隐藏侧边栏
    var leftNav=  $("#left_nav");
    var rightMain = $("#right_main");
    var windoeWidth = $(window).width();
    var phoneMedia =  function () {
    		leftNav.css({"display":"none"});
            rightMain.removeClass("col-md-10 col-sm-9 hidden-xs").addClass("col-md-12 col-sm-12 col-xs-12")
    }
    if(windoeWidth< 768){
    	$(".left-buttons p").click(phoneMedia);
   	}
    /*$(window).resize(function () {
    	windoeWidth = $(window).width();
    	if(windoeWidth< 768){
    		$(".left-buttons p").click(phoneMedia);
   		}
    	
    })*/
    
    $("#hide_left").click(function () {
        console.log(leftNav.css("display") )
        if(leftNav.css("display") == "block"){
        	 //console.log("block")
            //leftNav.css({"display":"none"});
            leftNav.hide();
            rightMain.removeClass("col-md-10 col-sm-9 hidden-xs").addClass("col-md-12 col-sm-12 col-xs-12")
            
        }else{
        	 //console.log("none")
            //leftNav.css({"display":"block"});
            leftNav.show(200);
        	leftNav.removeClass("hidden-sm hidden-xs").addClass("col-sm-3 col-xs-12");
            rightMain.removeClass("col-md-12 col-xs-12").addClass("col-md-10 col-sm-9  hidden-xs")
            
        }

        
    });
    
})