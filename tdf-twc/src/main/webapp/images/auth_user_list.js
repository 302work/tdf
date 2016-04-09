cola(function(model) {

    model.describe("pageItems", {
        provider: {
            url: CONTEXT_PATH + "/authUser/query",
            pageSize: 10
        }
    });

    model.widgetConfig({// 表格
        templateTable: {
            $type: "table",
            bind: "item in pageItems",
            showHeader: true,
            currentPageOnly: true,
            columns: [{
                $type: "select",
                width: "60"
            }, {
                bind: ".userName",
                caption: "用户名",
                align: "center"
            }, {
                bind: ".crTime",
                caption: "创建时间",
                align: "center"
            },{
                caption: "修改",
                template: "operations",
                align: "center"
            }]
        }
    });

    model.action({
        modify: function(item) {
            var curId = item.get("id");
            window.location.href = CONTEXT_PATH + "/authUser/addEditPage?id=" + curId;
        }
    });


});
