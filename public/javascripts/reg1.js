function checkReaded(){
	var read = document.getElementById("checkRead").checked;
	var span1 = document.getElementById('affirm')
	if(read){
		$('#regbtn').animate({left:'0',duration:'slow'});//这行控制登录按钮从左边滑入，通过控制left属性
		$('#regMSG').animate({left:'300px',duration:'slow'})//同样控制锁定按钮向右滑动消失
	}
	else {
		$('#regbtn').animate({left:'-300px',duration:'slow'});//这行控制登录按钮从左边滑入，通过控制left属性
		$('#regMSG').animate({left:'0',duration:'slow'})//同样控制锁定按钮向右滑动消失

		showMSG("请确认已阅读并同意Flyme服务协议条款");
	}
}
function showMSG(msg){
	tipObj = document.getElementById('regMSG');
	tipObj.style.display = "block";
	tipObj.innerHTML = msg;
}

function checkform2(){
			//验证手机 号码
			reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

			if( $(".phone").val()=="")
			{ 
				$(".phone").parent().addClass("errorC");
				$(".error1").html("请输入手机号");
				$(".error1").css("display","block");
				document.getElementById("checkRead").disabled = true;
				return false;
			}
			else if($(".phone").val().length<11)
	        {   
	        	$(".phone").parent().addClass("errorC");
	            $(".error1").html("手机号长度有误！");
	            $(".error1").css("display","block");
	            document.getElementById("checkRead").disabled = true;
	            return false;
	        }
	        else if(!reg.test($(".phone").val()))
	        {   
	        	$(".phone").parent().addClass("errorC");
	            $(".error1").html("逗我呢吧，你确定这是你的手机号!!");
	            $(".error1").css("display","block");
	            document.getElementById("checkRead").disabled = true;
	            return false;
	        }

	        //验证验证码
    		reg=/^.*[\u4e00-\u9fa5]+.*$/;
    		if( $(".kapkey").val()=="")
    		{
    			$(".kapkey").parent().addClass("errorC");
    			$(".error2").html("请填写验证码");
    			$(".error2").css("display","block");
    			document.getElementById("checkRead").disabled = true;
    			return false;
    		}
            else if($(".kapkey").val().length<6)
            {   
            	$(".kapkey").parent().addClass("errorC");
                $(".error2").html("验证码长度有误！");
                $(".error2").css("display","block");
                document.getElementById("checkRead").disabled = true;
                return false;
            }
            else if(reg.test($(".kapkey").val()))
            {
            	$(".kapkey").parent().addClass("errorC");
                $(".error2").html("验证码里无中文！");
                $(".error2").css("display","block");
                document.getElementById("checkRead").disabled = true;
                return false;
            }
            else if($(".kapkey").val()!="123456"){
            	$(".kapkey").parent().addClass("errorC");
                $(".error2").html("验证码错误！");
                $(".error2").css("display","block");
                document.getElementById("checkRead").disabled = true;
                return false;
            }

            // 验证密码
    		reg1=/^.*[\d]+.*$/;
    		reg2=/^.*[A-Za-z]+.*$/;
    		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码

    		var Pval = $(".password3").val();

    		
    		if( Pval =="")
    		{
    			$(".password3").parent().addClass("errorC");
    			$(".error3").html("请填写密码");
    			$(".error3").css("display","block");
    			document.getElementById("checkRead").disabled = true;
    			return false;
    		}
            else if(Pval.length>16 || Pval.length<8)
            {   
            	$(".password3").parent().addClass("errorC");
                $(".error3").html("密码应为8-16个字符，区分大小写");
                $(".error3").css("display","block");
                document.getElementById("checkRead").disabled = true;
            	return false;
            }
            else if(!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)) ))
            {
            	$(".password3").parent().addClass("errorC");
                $(".error3").html("需至少包含数字、字母和符号中的两种类型");
                $(".error3").css("display","block");
                document.getElementById("checkRead").disabled = true;
            	return false;
            }
            //验证确认密码
			var Pval2 = $(".password4").val();
    		if( Pval2 =="")
    		{
    			$(".password3").parent().addClass("errorC");
    			$(".error3").html("请填写确认密码");
    			$(".error3").css("display","block");
    			document.getElementById("checkRead").disabled = true;
    			return false;
    		}
            else if(Pval != Pval2)
            {   
            	$(".password3").parent().addClass("errorC");
                $(".error3").html("两次密码输入不一致");
                $(".error3").css("display","block");
                document.getElementById("checkRead").disabled = true;
                return false;
            }

			document.getElementById("checkRead").disabled = false;
			return true;

}
function submitReg1(){
	if(checkform2()){
		document.getElementById("mainForm1").submit();

	}
	else{

		$('#regbtn').animate({left:'-300px',duration:'slow'});//这行控制登录按钮从左边滑入，通过控制left属性
		$('#regMSG').animate({left:'0',duration:'slow'})//同样控制锁定按钮向右滑动消失

	}
}

function regChange(){
	if(document.getElementById("checkRead").checked){
		document.getElementById("checkRead").checked = false;
		$('#regbtn').animate({left:'-300px',duration:'slow'});//这行控制登录按钮从左边滑入，通过控制left属性
		$('#regMSG').animate({left:'0',duration:'slow'})//同样控制锁定按钮向右滑动消失
	}
}

$(function(){

	//页面切换初始化
	$(".number2").click(function(){
		$(".mainForm1").show();
		$(".mainForm2").hide();
		$(".error").hide();
		$(".normalInput").removeClass("errorC");
		$(".normalInput").removeClass("checkedN");
		$(".mainForm input").val("");
	});
	$(".number1").click(function(){
		$(".mainForm2").show();
		$(".mainForm1").hide();
		$(".error").hide();
		$(".normalInput").removeClass("errorC");
		$(".normalInput").removeClass("checkedN");
		$(".mainForm input").val("");
	});
	//文本框失去焦点
	$(".mainForm input").blur(function(){
		$("#mz_Float").css("top","");
	});





	
	// //手机号栏失去焦点
	// $(".phone").blur(function(){
	// 	reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

	// 	if( $(".phone").val()=="")
	// 	{ 
	// 		$(".phone").parent().addClass("errorC");
	// 		$(".error1").html("请输入手机号");
	// 		$(".error1").css("display","block");
	// 	}
	// 	else if($(".phone").val().length<11)
 //        {   
 //        	$(".phone").parent().addClass("errorC");
 //            $(".error1").html("手机号长度有误！");
 //            $(".error1").css("display","block");
 //        }
 //        else if(!reg.test($(".phone").val()))
 //        {   
 //        	$(".phone").parent().addClass("errorC");
 //            $(".error1").html("逗我呢吧，你确定这是你的手机号!!");
 //            $(".error1").css("display","block");
 //        }
 //        else
 //        {
 //        	$(".phone").parent().addClass("checkedN");
 //        }
	// });

	// //验证码栏失去焦点
	// $(".kapkey").blur(function(){
	// 	reg=/^.*[\u4e00-\u9fa5]+.*$/;
	// 	if( $(".kapkey").val()=="")
	// 	{
	// 		$(".kapkey").parent().addClass("errorC");
	// 		$(".error2").html("请填写验证码");
	// 		$(".error2").css("display","block");
	// 	}
 //        else if($(".kapkey").val().length<6)
 //        {   
 //        	$(".kapkey").parent().addClass("errorC");
 //            $(".error2").html("验证码长度有误！");
 //            $(".error2").css("display","block");
 //        }
 //        else if(reg.test($(".kapkey").val()))
 //        {
 //        	$(".kapkey").parent().addClass("errorC");
 //            $(".error2").html("验证码里无中文！");
 //            $(".error2").css("display","block");
 //        }
 //        else if($(".kapkey").val()!="123456"){
 //        	$(".kapkey").parent().addClass("errorC");
 //            $(".error2").html("验证码错误！");
 //            $(".error2").css("display","block");
 //        }
 //        else 
 //        {
 //        	$(".kapkey").parent().addClass("checkedN");
 //        }
	// });

	// //密码栏失去焦点(mainform1)

	// 	$(".password3").blur(function(){
	// 		reg1=/^.*[\d]+.*$/;
	// 		reg2=/^.*[A-Za-z]+.*$/;
	// 		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码

	// 		var Pval = $(".password3").val();

			
	// 		if( Pval =="")
	// 		{
	// 			$(".password3").parent().addClass("errorC");
	// 			$(".error3").html("请填写密码");
	// 			$(".error3").css("display","block");
	// 		}
	//         else if(Pval.length>16 || Pval.length<8)
	//         {   
	//         	$(".password3").parent().addClass("errorC");
	//             $(".error3").html("密码应为8-16个字符，区分大小写");
	//             $(".error3").css("display","block");
	//         }
	//         else if(!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)) ))
	//         {
	//         	$(".password3").parent().addClass("errorC");
	//             $(".error3").html("需至少包含数字、字母和符号中的两种类型");
	//             $(".error3").css("display","block");
	//         }
	//         else
	//         {
	//         	$(".password3").parent().addClass("checkedN");
	//         }
	// 	});

	// $(".password4").blur(function(){
	// 	reg1=/^.*[\d]+.*$/;
	// 	reg2=/^.*[A-Za-z]+.*$/;
	// 	reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码

	// 		var Pval1 = $(".password3").val();

	// 		var Pval2 = $(".password4").val();
		
	// 	if( Pval1 =="")
	// 	{
	// 		$(".password3").parent().addClass("errorC");
	// 		$(".error3").html("请填写密码");
	// 		$(".error3").css("display","block");
	// 	}
	// 	if( Pval2 =="")
	// 	{
	// 		$(".password3").parent().addClass("errorC");
	// 		$(".error3").html("请填写确认密码");
	// 		$(".error3").css("display","block");
	// 	}
 //        else if(Pval1 != Pval2)
 //        {   
 //        	$(".password3").parent().addClass("errorC");
 //            $(".error3").html("两次密码输入不一致");
 //            $(".error3").css("display","block");
 //        }
 //        else
 //        {
 //        	$(".password3").parent().addClass("checkedN");
 //        }
	// });


	//手机号栏获得焦点
	$(".phone").focus(function(){
		$(".phone").parent().removeClass("errorC");
		$(".phone").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		regChange();
	});
	//验证码栏获得焦点
	$(".kapkey").focus(function(){
		$(".kapkey").parent().removeClass("errorC");
		$(".kapkey").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		regChange();
	});
	//密码栏获得焦点(mainform1)
	$(".password3").focus(function(){
		$(".password3").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block" && $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		regChange();
		
	});
	$(".password4").focus(function(){
		$(".password3").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		 $(".error3").hide();
		if($(".error1").css("display")=="block" && $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		regChange();
		
	});

	//mainform1end



	//mainForm2
	//密码是否可见(mainform2)
	$(".pwdBtnShowN").click(function(){
		if($(".pwdBtnShowN").attr("isshow")=="false")
		{
			$(".pwdBtnShowN i").css("background-position","-60px -93px");
			$(".passwordN").hide();
			$(".password1N").val($(".passwordN").val());
			$(".password1N").show();
			$(".pwdBtnShowN").attr("isshow","true");
		}
		else
		{
			$(".pwdBtnShowN i").css("background-position","-30px -93px");
			$(".password1N").hide();
			$(".passwordN").val($(".password1N").val());
			$(".passwordN").show();
			$(".pwdBtnShowN").attr("isshow","false");
		}
		
	});


	//账户名栏获得焦点
	$(".username").focus(function(){
		$(".username").parent().removeClass("errorC");
		$(".username").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("长度为4-32个字符支持数字、字母、下划线，字母开头，字母或数字结尾");
	});
	//邮箱栏获得焦点
	$(".email").focus(function(){
		$(".email").parent().removeClass("errorC");
		$(".email").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block" && $(".error3").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error3").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		
		$("#mz_Float").find(".bRadius2").html("用于找回密码，提高账户安全等级");
	});
	//密码栏获得焦点(mainform2)
	$(".passwordN,.password1N").focus(function(){
		$(".passwordN").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		
		$("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
	});

	//账户名栏失去焦点
	$(".username").blur(function(){
		reg=/^[a-zA-Z][0-9a-zA-Z_]{2,30}[0-9a-zA-Z]$/;//验证手机正则(输入前7位至11位)

		if( $(".username").val()=="")
		{ 
			$(".username").parent().addClass("errorC");
			$(".error1").html("请输入账户名");
			$(".error1").css("display","block");
		}
		else if($(".username").val().length>32 || $(".username").val().length<4)
        {   
        	$(".username").parent().addClass("errorC");
            $(".error1").html("账户名长度有误！");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".username").val()))
        {   
        	$(".username").parent().addClass("errorC");
            $(".error1").html("账户名格式有误!!");
            $(".error1").css("display","block");
        }
        else
        {
        	$(".username").parent().addClass("checkedN");
        }
	});
	//密码栏失去焦点(mainform2)
	$(".passwordN,.password1N").blur(function(){
		reg1=/^.*[\d]+.*$/;
		reg2=/^.*[A-Za-z]+.*$/;
		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码
		if($(".pwdBtnShow").attr("isshow")=="false")
		{
			var Pval = $(".passwordN").val();
		}
		else
		{
			var Pval = $(".password1N").val();
		}
		
		if( Pval =="")
		{
			$(".passwordN").parent().addClass("errorC");
			$(".error3").html("请填写密码");
			$(".error3").css("display","block");
		}
        else if(Pval.length>16 || Pval.length<8)
        {   
        	$(".passwordN").parent().addClass("errorC");
            $(".error3").html("密码应为8-16个字符，区分大小写");
            $(".error3").css("display","block");
        }
        else if(!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)) ))
        {
        	$(".passwordN").parent().addClass("errorC");
            $(".error3").html("需至少包含数字、字母和符号中的两种类型");
            $(".error3").css("display","block");
        }
        else
        {
        	$(".passwordN").parent().addClass("checkedN");
        }
	});
	

	//邮箱栏键盘操作
	$(".email").keyup(function(){//键盘监听keyup,keydown,keypress
		var emailVal = $(".email").val();
		emailValN = emailVal.replace(/\s/g,'');//去空
		emailValN = emailValN.replace(/[\u4e00-\u9fa5]/g,'');//屏蔽中文
		if(emailValN!=emailVal)
		{
			$(".email").val(emailValN);
		}
		
		var mailVal = emailValN.split("@");
		var mailHtml=mailVal[0];
		if(mailHtml.length>15)
		{
			mailHtml=mailHtml.slice(0,15)+"...";//字数超加省略
		}
		
		for(var i=1;i<6;i++)
		{
			var M = $(".item"+i).attr("data-mail");
			$(".item"+i).html(mailHtml+M);
		}
	});

	//邮箱提示
	$(".item").click(function(){
		var a= $(".email").val();
		var b= $(this).attr("data-mail");
		$(".email").val(a+b);
		$(".email").trigger("focus");//setTimeout($(".email").("focus") );效果同，时间设多少无所谓
	});


	$(".email").click(function(){
		if($(".error1").css("display")=="block" && $(".error3").css("display")=="block")
		{
			$(".mail").css("top","489px");
		}
		else if($(".error1").css("display")=="block" || $(".error3").css("display")=="block")
		{
			$(".mail").css("top","459px");
		}
		else
		{
			$(".mail").css("top","429px");
		}
		$(".mail").show(); 
		return false;
	});
	$(document).click(function(){
		$(".mail").hide();
	});

	//邮箱栏失去焦点
	$(".email").blur(function(){
		reg=/^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/;
		if( $(".email").val()=="")
		{
			$(".email").parent().addClass("errorC");
			$(".error2").html("邮箱不能为空!");
			$(".error2").css("display","block");
		}
        else if(!reg.test($(".email").val()))
        {
        	$(".email").parent().addClass("errorC");
            $(".error2").html("邮箱格式错误！");
            $(".error2").css("display","block");
        }
        else 
        {
        	$(".email").parent().addClass("checkedN");
        }
	});

});

