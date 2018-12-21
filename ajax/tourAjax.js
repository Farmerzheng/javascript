
//method:get
//url:www.app.sencha.com.cn
//$.ajax不能用了

// Nemo.ajax=function(url,method,data,success,error,timeout,dataType){
// 	var method=method||"get";
// 	timeout=timeout||3000;
// 	dataType=dataType||"jsonp";
// 	$.ajax({
// 		url:url,
// 		method:method,
// 		data:data,
// 		success:function(responstText){
//             success(responstText);
// 		},
// 		error:function(error){
// 			error(error)
// 		},
// 		timeout:timeout,
// 		dataType:dataType
// 	})
// }


// //客户端调用封装好的ajax
// Nemo.ajax("www.baidu.com",
// 	"post",
// 	{page:"1","perpage":20},
// 	function(responstText){
// 		console.log(responstText)
// 		},
// 	function(error){
// 		console.log(error)
// 	},
// 	5000,
// 	"jsonp"	
// )