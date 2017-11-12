

function checkform(){
	//提交表单检测
	var name = document.getElementById('username1').value;
	if(name.length <= 0){
		showTips('用户名不能为空');
		return false;
	}

	var pass1 = document.getElementById('userpass1').value;
	if(pass1.length <=0){
		showTips('密码不能为空');
		return false;
	}
	var pass2 = document.getElementById('userpass2').value;
	if(pass2.length <=0){
		showTips('确认密码不能为空');
		return false;
	}
	if(pass1 != pass2){
		showTips('两次密码输入不一致');
		return false;
	}

	var email = document.getElementById('useremail').value;
	if(email.length <= 0){
		showTips('邮箱不能为空');
		return false;
	}
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if(!emailReg.test(email)){
		showTips('邮箱输入有误，请重新输入');
		return false;
	}
	// var mobile = document.getElementById('usermobile').value;
	// if(mobile.length <= 0){
	// 	showTips('手机号不能为空');
	// }

	// var requ = /^[1][3][4][5][7][8][0-9]{9}$/qi;
	// var re = new RegExp(requ);
	// if(!re.test(mobile)){
	// 	showTips('手机号码输入有误，请重新输入');
	// 	return false；
	// }

	// var code = document.getElementById('vcode').value;
	// if(code.length<= 0){
	// 	showTips('验证码不能为空');
	// 	return false;
	// }
	return true;
}


function clearTips (argument) {
	//清除提示
	document.getElementById('tips').style.display = "none";
	document.getElementById('tips').innerHTML = '';
	document.getElementById('submit').disabled = false;
}

function showTips(msg){
	tipObj = document.getElementById('tips');
	tipObj.style.display = "block";
	tipObj.innerHTML = msg;
	document.getElementById('submit').disabled = true;
}

function checkName(){
	var name = document.getElementById('username1').value;
	if(isNull(name)){
		showTips('请输入用户名');
	}
}

function checkEmail(){


	var strEmail = document.getElementById('useremail').value;

	if(isNull(strEmail)){
		showTips('邮箱不能为空');
		return false;
	}
	var emailReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/ ;
	if(!emailReg.test(strEmail)){
		showTips('邮箱输入有误，请重新输入');
		return false;
	} 
}

function checkMobile(s){
	var obj = document.getElementById('usermobile');
	var regu = /^[1][3|4|5|8][0-9]{9}$/gi;
	var re = new RegExp(regu);
	if(!re.test(obj.value)){
		showTips('手机号码输入有误，请重新输入');
		return false;
	}
}

function checkPassFirst(){
	var pass = document.getElementById('userpass1').value;
	if(pass.length <= 0){
		showTips('请输入密码');
		return false;
	}
}

function checkPass () {
	// 检查确认密码
	var pass1 = document.getElementById('userpass1').value;
	var pass2 = document.getElementById('userpass2').value;
	if(pass2.length <=0){
		showTips('请输入确认密码');
		return false;
	}
	if(pass1!=pass2){
		showTips('两次密码输入不一致');
		return false;
	}

}

function checkCode(){
	var obj1 = document.getElementById('vcode');
	if(obj1.value <= 0){
		showTips('请输入验证码');
		return false;
	}
	if(obj1.value.length !=4){
		showTips('请输入正确的验证码');
		return false;
	}
}

function isNull(str){
	if(str == "")return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}

function addCookie(objName,objValue,objHours){
	var str= objName + "=" + escape(objValue);
	if(objHours > 0){
		//为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours*3600*1000;
		date.setTime(date.getTime()+ms);
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str;
}

function showdiv() { 
	document.getElementById("bg").style.display ="block";
	document.getElementById("lginpanel").style.display ="block";
	document.getElementById("regpanel").style.display ="none";
}
function hidediv() {
	document.getElementById("bg").style.display ='none';
	document.getElementById("regpanel").style.display ='none';
	document.getElementById("lginpanel").style.display ='none';


}
function showdiv2() { 
	document.getElementById("bg").style.display ="block";
	document.getElementById("regpanel").style.display ="block";
		document.getElementById("lginpanel").style.display ="none";
}
