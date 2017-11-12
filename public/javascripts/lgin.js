function showLginError () {
	// 登录框的错误消息

}
function check_value(){
	//判断用户名 密码 不为空
	if($('#username').val().length != 0 && $('#password').val().length!=0){
		//调用jquery 的 animate方法重新定义css
		$('#loginbtn').animate({left:'0',duration:'slow'});//这行控制登录按钮从左边滑入，通过控制left属性
		$('#lockbtn').animate({left:'310px',duration:'slow'})//同样控制锁定按钮向右滑动消失
	}
}
