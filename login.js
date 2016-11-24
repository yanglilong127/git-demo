'use strict';   //使用严格模式
//创建一个http服务器
var http=require('http');
//创建一个服务
var server=http.createServer(function(request,response){
	var requestUrl=request.url;   //客户端网址
	switch(requestUrl){
		case '/singin':
			//请求登录页面
			singin(request,response);
			break;
		case '/post':
			//提交表单
			post(request,response);
			break;
		default:
			defaultUrl(request,response);
			break;
	};
	
});
//启动服务
server.listen(8080,function(error){
	console.log('成功监听8080端口');
});
function singin(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('<!DOCTYPE html>');
	response.write('<html>');
	response.write('<head>');
	response.write('<meta charset="UTF-8">');
	response.write('<title></title>');
	response.write('</head>');
	response.write('<body>');
	response.write('	<form action="/post" method="post">');
	response.write('		<table border="1">');
	response.write('			<tr>');
	response.write('				<td>用户名</td>');
	response.write('				<td><input type="text" name="username"/></td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td>密码</td>');
	response.write('				<td><input type="password" name="pwd"</td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td></td>');
	response.write('				<td><input type="submit" value="登录" /></td>');
	response.write('			</tr>');
	response.write('		</table>');
	response.write('	</form>');
	response.write('</body>');
	response.write('</html>');
	console.log('请求登录界面');
	response.end();
}
var querystring=require('querystring');
function post(request,response){
	var postData='';      //http传递的都是字符串
	request.on('data',function(part){
		postData+=part;
	});
	request.on('end',function(){
		var obj=querystring.parse(postData);  //将字符串转换为对象
		console.log(obj);
	});
	
	response.end();
}
function defaultUrl(request,response){
	response.write('haha');
	console.log('错误网址');
	response.end();
}
