$(function(){
	$(".go-login").click(function(){
		$(".login").show();
		$(".register").hide();
	});
	$(".go-register").click(function(){
		$(".login").hide();
		$(".register").show();
	});
	// 


	//点击注册按钮事件
	$("#register").click(function(){
		$(".remind-infor").text("");
		//推荐码非空验证
		var recommended = $("#recommended").val();
		if(recommended.length == 0){
			$("#recommended").parent().after("<span class='remind-infor'>推荐码不能为空！</span>");
			 return ;
		}
		var name = $("#name").val();
		if(name.length == 0){
			$("#name").parent().after("<span class='remind-infor'>推荐码不能为空！</span>");
			 return ;
		}
		//手机号非空验证
		var phone = $("#phone").val();
		if(phone.length == 0){
			$("#phone").parent().after("<span class='remind-infor'>手机号不能为空！</span>");
			return ;
		}
		//手机号格式验证
		if(!(/^1[34578]\d{9}$/.test(phone))){
			$("#phone").parent().after("<span class='remind-infor'>请输入正确的手机号！</span>");
			return ;
		}
		//邮箱非空及格式验证
		var mail = $("#email").val();
		if(mail.length == 0){
			$("#email").parent().after("<span class='remind-infor'>邮箱不能为空！</span>");
			return ;
		}
		if(!(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail))){
			$("#email").parent().after("<span class='remind-infor'>请输入正确的邮箱！</span>");
			return ;
		}	
		//密码非空及两次密码相同验证
		var password = $("#password").val();
		var password2 = $("#password2").val();
		if(password.length < 6){
			$("#password").parent().after("<span class='remind-infor'>密码不能少于6位！</span>");
			return ;
		}
		if(password !== password2){
			$("#password2").parent().after("<span class='remind-infor'>两次输入密码不一致！请重新输入！</span>");
			return ;
		}
		$.ajax({
			type:"post",
			url:"http://192.168.0.9:8080/wisdomlucky/user/add",
			data:{
				otherCode:recommended,
				mail:mail,
				phoneNumber:phone,
				password:password2,
				name:name,
			},
			dataType:'json',
			success:function(result){
				if(result.success == true){
					alert("注册成功，快去登录吧！");
				}
			}
		})
	})
	//点击登录按钮事件
	$("#login").click(function(){
		//手机号格式验证
		var loginPhone = $("#login-phone").val();
		
		var password = $("#login-password").val();
		if(password.length == 0){
			$("#login-password").parent().after("<span class='remind-infor'>请输入密码！</span>");
			return ;
		}
		$.ajax({
			type:"post",
			url:"http://192.168.0.9:8080/wisdomlucky/user/login",
			data:{
				phoneNumber:loginPhone,
				password:password,
			},
			dataType:"json",
			success:function(result){
				if(result.success == true){
					$.cookie('signinToken', JSON.stringify(result.data), {expires: 7  ,path: '/' });
					if(result.data.state == "未激活"){
						location.href = "file:///C:/work/workspace/offlineSchool/student-index-notactive.html";

					}
					if(result.data.state == "激活"){
						location.href = "file:///C:/work/workspace/offlineSchool/active-index.html";
					}
					if(result.data.state == "school"){
						location.href = "file:///C:/work/workspace/offlineSchool/school-index.html";
					}
					 
				}
			}
		})
	})
})