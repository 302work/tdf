/**
 * Created by Vincent.Liu on 2016/3/31.
 */
// 获取url中的参数
function getUrlParamVal(keyName){

    var url = window.location.href;
    //url解码
    url = decodeURIComponent(url);
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");

    var paraObj = {};

    for (var i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j
                .indexOf("=") + 1, j.length);
    }

    return paraObj[keyName.toLowerCase()];
}

// 处理后台请求
function doRequest(data,url,type){
    var rType = "POST";
    if (type) {
        rType = type;
    }
    var result = {};
    $.ajax({
        type:rType,
        url:url,
        async:false,
        dataType:"json",
        data:data,
        success:function(data){
            result = data;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            result.isSuccess = false;
        }
    });
    return result;
}
