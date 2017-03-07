$(function(){
	var contentH = $(document).height();
	var headerH = $(".top-nav").height();
	$(".left-nav").height(contentH);
	//申请激活按钮事件
	$("#apply-active").click(function(){
		var phoneNumber = $("#active-phone").val();
		var studentType = $("#student-type").val(); 
		$.ajax({
			type:"post",
			url:"http://192.168.0.9:8080/wisdomlucky/user/act",
			dataType:"json",
			data:{
				phoneNumber:phoneNumber,
				type:studentType
			},
			success :function(result){
				if(result.success == true){
					alert("激活中,请耐心等待");
				}
				
			}

		})
	})
	
	

})
