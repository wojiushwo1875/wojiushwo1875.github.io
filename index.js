// http 服务
let http = require("http");
// 文件
let fs = require("fs");
// 创建服务
let server = http.createServer(function (request,response) { 
    // 设置响应头
    response.setHeader("content-type","text/html;charset=utf-8");
    // 读取文件并返回
    fs.readFile("./tem.html","utf-8",function(err,data) { 
        if(err){
            console.log(err);
        }else{
            response.end(data);
        }
     });
 });
//  开启监听
server.listen(80,"127.0.0.1",function () { 
    console.log("success");
    
 });