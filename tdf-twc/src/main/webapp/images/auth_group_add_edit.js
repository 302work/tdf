cola(function(model) {

    // 1、组件描述
	model.describe({
        name: {
            validators: ["required",{
            	$type:"required",
            	message:"组织名不可为空"
            },function(value) {
                if (value && value.length > 40) {
                    return  "组织名长度不可超过40";
                }
            }]
        },
        desc: {
            validators: [function(value) {
                if (value.length > 100) {
                    return  "组织描述长度不可超过100";
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
        var result = doRequest(data,CONTEXT_PATH + "/authGroup/getOne");
        if (result.isSuccess){
            model.set("name",result.data.name);
            model.set("desc",result.data.desc);
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
            data.name = model.get("name");
            data.desc = model.get("desc");

            var url = CONTEXT_PATH + "/authGroup/save";
            var result = doRequest(data,url);
            if (result.isSuccess){
                alert("添加成功");
                return;
            }

            if (result.resultMsg.indexOf("empty input")>-1){
                alert("组织名不可为空");
                return;
            }

            if (result.resultMsg.indexOf("occupied name")>-1){
                alert("组织已存在");
                return;
            }
            if (result.resultMsg.indexOf("invalid input's length")>-1){
                alert("组织名长度超过限制");
            }
        }
    });


});
