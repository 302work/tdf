cola(function(model) {

    // 左侧菜单展开、收起效果
    $('.switch').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.content-box').animate({ 'margin-left': "0" }, function() {
                $('.sidebar  .switch').show();
                $('.switch').removeClass('active')
            })
        }else{
            $('.content-box').animate({ 'margin-left': "-235" }, function() {
                $('.content-box  .switch').show();
                $('.switch').addClass('active')
            });
        }
    });


    // 定义dataType
    model.dataType({
        name: "Node",
        properties: {
            nodes: {
                dataType: "Node",
                // 从server端装载数据 ajax
                provider: {
                    // 子节点数据
                    url: CONTEXT_PATH + "/authMenu/list",
                    parameter: {
                        root: ":id"
                    }
                }
            }
        }
    });

    // 组件描述
    model.describe("nodes", {
        dataType: "Node",
        provider: CONTEXT_PATH + "/authMenu/list"
    });

    // 配置
    model.widgetConfig({
        menuTree: {
            $type: "tree",
            bind: {
                hasChildProperty: "isDir",
                expression: "node in nodes",
                child: {
                    recursive: true,
                    hasChildProperty: "isDir",
                    expression: "node in node.nodes",
                }
            }
        }
    });

    model.action({
        goPage:function(url,menuId){
            if (url){
                window.location.href = CONTEXT_PATH + url + "?menuId=" + menuId;
            }
        }
    });

});
