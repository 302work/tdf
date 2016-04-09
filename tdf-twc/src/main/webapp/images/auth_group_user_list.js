cola(function(model) {

    // -----  group start ------
    model.dataType({
        name: "dtGroupTree",
        properties: {
            nodes: {
                dataType: "dtGroupTree",
                provider: {
                    // 子节点数据
                    url: CONTEXT_PATH + "/authGroup/list",
                    parameter: {
                        root: ":id"
                    }
                }
            }
        }
    });
    model.describe("groupTreeNodes", {
        dataType: "dtGroupTree",
        provider: CONTEXT_PATH + "/authGroup/list"
    });
    model.widgetConfig({
        // 树
        groupTree: {
            $type: "tree",
            bind: {
                hasChildProperty: "isDir",
                expression: "node in groupTreeNodes",
                child: {
                    recursive: true,
                    hasChildProperty: "isDir",
                    expression: "node in node.nodes"
                }
            }
        }
    });


    // -----  group's user start ------
    model.describe("dtUserListTable", {
        provider: {
            url: CONTEXT_PATH + "/authUser/query",
            pageSize: 10,
            parameter: ":id"
        }
    });
    model.widgetConfig({// 表格
        userTable: {
            $type: "table",
            bind: "item in dtUserListTable",
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


    // ----- action definitions start ------

    // refresh group's users table
    model.action({
        // 显示弹层
        showUsers: function(id) {
            alert(id);
            model.get("dtUserListTable", function(dtUserListTable) {
                alert(dtUserListTable.length);
            });
        }
    });




    // ------ style sheet start -----

    $('.tree-title>a').on('click', function() {
        $('.content-detail').animate({ 'margin-left': "-234" }, function() {
            $('.tree-title>a').hide();
            $('.content-box  .switch').show();
            $('.detailSwitch').show();
        });
    });

    $('.detailSwitch').on('click',function(){
        $('.detailSwitch').hide();
        $('.content-detail').animate({ 'margin-left': "0" }, function() {
            $('.tree-title>a').show();
        })
    });


});
