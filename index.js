'use strict';  //使用严格模式
//创建一个服务器
var http=require('http');  
//创建一个服务
var server=http.createServer(function(request,response){
	console.log(request.url);
	response.writeHead(200,{
		//告诉客户端我给你的是html
		'Content-Type':'text/html',
		'key1':'value1'
	})
	//往响应体中放数据
	response.write('<h1>HAHAHA</h1>');
	response.end();    //结束响应
});
//启动服务
server.listen(8080,function(error){
	console.log('成功监听8080端口');
});
