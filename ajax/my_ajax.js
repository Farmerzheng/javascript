/**
 * 青牛后台通信函数(jsonp)
 * @param data {object} 上传参数集合
 * @param ajaxBtn {string|Element} 上传按钮
 * @param fnSuccess  {function}  成功后的回调函数, 参数为返回的json对象
 * @param fnError {function}  失败后的回调函数
 */
window.Nemo.tourajax = function (url,data,fnSuccess,fnError,method){

    var msg = "ok" ;

    method=method|| "get";

    var timeout = 5000 ; // 5秒超时

    var backtime = 3000 ; // 3秒恢复按钮状态

    fnSuccess = fnSuccess || function(){} ;

    fnError = fnError || function(){} ;

    //config url + request url .
    // url = Nemo.config.apiServer+url ;
    

    var dataType = "jsonp";

     //对$.ajax網絡請求函數进行再封装    
    $.ajax({
        
        dataType: dataType,
        url: url,
        data: data,
        timeout: timeout,
        type:method,

        success: function(data,textStatus,jqXHR){
            console.log(data);
            if(data.code==200)
            {
              // fnSsuccess:  function (responseText){

              //   }

                fnSuccess(data.rz) ;

            }else if(data.code==300){
                if(typeof(data.rz)== "string")
                //TODO modal window
                if(data.rz=="sessionid错误"){
                    alert("sessionid错误，请先登录！！！");
                    window.location.href="index.html";
                }else{
                    alert(data.rz);
                }
            }
       },
        complete : function(jqXHR, textStatus){//请求完成后最终执行参数
            var msg = "失败" ;
            switch (textStatus){
                case "success" :
                    msg = "成功" ;
                    break ;
                case "notmodified" :
                    msg = "未修改" ;
                    break ;
                case "nocontent" :
                    msg = "无内容" ;
                    break ;
                case "error" :
                    msg = "错误" ;
                    break ;
                case "timeout" :
                    msg = "超时" ;
                    break ;
                case "abort" :
                    msg = "被取消" ;
                    break ;
                case "parsererror" :
                    msg = "数据解析错误" ;
                    break ;
            }
            if(msg != "成功"){
                fnError() ;
            }
        }
    });//$.ajax end
    console.log("tourajax called!");
}
