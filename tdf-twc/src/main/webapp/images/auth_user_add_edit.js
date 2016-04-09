cola(function(model) {

    // 1、组件描述
	model.describe({
        name: {
            validators: ["required",{
            	$type:"required",
            	message:"用户名不可为空"
            },function(value) {
                if (value && value.length > 20) {
                    return  "用户名长度不可超过20";
                }
            }]
        },
        password: {
            validators: ["required",{
            	$type:"required",
            	message:"密码不可为空"
            },function(value) {
                if (value && value.length > 20) {
                    return "密码长度不可超过20";
                }
            }]
        }
    });

    // 2、获取判断修改还是新增的判断参数
    var curId = getUrlParamVal("id");

    // 3、如果为修改时，初始化修改内容
    if (curId){
        var data = {};
        data.id = curId;
        var result = doRequest(data,CONTEXT_PATH + "/authUser/getOne");
        if (result.isSuccess){
            model.set("name",result.data.userName);
            // TODO 设置用户名不可修改
        }
    }

    // 4、定义动作
    model.action({
        save: function() {
            if (!model.get().validate()){
                return;
            }

            var data = {};
            if (curId){
                data.id = curId;
            }
            data.userName = model.get("name");
            data.passWord = model.get("password");

            var url = CONTEXT_PATH + "/authUser/save";
            var result = doRequest(data,url);
            if (result.isSuccess){
                alert("添加成功");
                return;
            }

            if (result.resultMsg.indexOf("empty input")>-1){
                alert("用户名或密码不可为空");
                return;
            }

            if (result.resultMsg.indexOf("occupied username")>-1){
                alert("用户已存在");
                return;
            }
            if (result.resultMsg.indexOf("invalid input's length")>-1){
                alert("用户名或密码长度超过限制");
            }
        }
    });


});
