cola(function(model) {

    // 搜索菜单
    $('#searchBtn').on('click',function(){
        if ($(this).hasClass('active')) {
            $('.search-bar').hide();
            $(this).removeClass('active')
        }else{
            $('.search-bar').show();
            $(this).addClass('active')
        }
    })

    // 树选择
    $('#structTree').on('click', '.tree.node', function() {
        $('.tree.node').removeClass('selected')
        $(this).addClass('selected')
    })

   // 表格
    model.describe("pageItems", {
        provider: {
            url: LOCAL_PATH + "/cola-table-test.json",
            pageSize: 10
        }
    });

    // 声明控件属性
    // 搜索下来菜单
    model.widgetConfig({
        // 树
        structTree: {
            $type: "tree",
            bind: {
                hasChildProperty: "isDir",
                expression: "node in nodes",
                child: {
                    recursive: true,
                    hasChildProperty: "isDir",
                    expression: "node in node.nodes"
                }
            }
        },
        filter1: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        filter2: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        filter3: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        filter4: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        filter5: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        filter6: {
            $type: "select",
            options: ["任务名称", "任务名称", "任务名称", "任务名称", "任务名称"]
        },
        operator1: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        operator2: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        operator3: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        operator4: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        operator5: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        operator6: {
            $type: "select",
            options: ["=", "!=", ">", ">=", "<","<=","包含","介于","不包含","从属于"]
        },
        andOr1: {
            $type: "select",
            options: ["并且", "或者"]
        },
        andOr2: {
            $type: "select",
            options: ["并且", "或者"]
        },
        andOr3: {
            $type: "select",
            options: ["并且", "或者"]
        },
        andOr4: {
            $type: "select",
            options: ["并且", "或者"]
        },
        andOr5: {
            $type: "select",
            options: ["并且", "或者"]
        },
        myQuery: {
            $type: "select",
            options: ["我的查询", "我的查询", "我的查询"]
        },
        // 分页下拉 
        pages: {
            $type: "select",
            options: ["20", "50", "100"],
            width:"50px"
        },
        // 表格
        templateTable: {
            $type: "table",
            /**
             * 表格控件
             * {@link http://cola-ui.com/api/cola.Table.html}
             * @memberof cola
             * @name cola.Table
             * @property {String} bind -绑定组建属性
             * @property {Bool} showHeader -表格中的列的声明
             * @property {Json} columns -是否显示表格标题栏
             * @property {Bool} currentPageOnly -是否只显示当前页数据
             * 
             */
            bind: "item in pageItems",
            showHeader: true,
            currentPageOnly: true,
            columns: [{
                /**
                 * 普通的表格列
                 * {@link http://cola-ui.com/api/cola.TableDataColumn.html}
                 * @memberof cola
                 * @name cola.TableDataColumn
                 * @property {String} template -列的单元格使用的渲染模板
                 * @property {String} caption -列的标题
                 * 
                 */
                $type: "select",
                width: "60"
            }, {
                bind: ".name",
                caption: "用户名",
                align: "center",
                template: "org-name"

            }, {
                bind: ".describe",
                caption: "当前状态",
                align: "center"

            }, {
                bind: ".user",
                caption: "真实姓名",
                align: "center"

            }, {
                bind: ".date",
                caption: "注册时间",
                align: "center"
            }, {
                bind: ".name",
                caption: "登陆时间",
                template: "set1",
                align: "center"
            }, {
                caption: "访问控制",
                template: "set2",
                align: "center"
            }, {
                caption: "控制",
                template: "operations",
                align: "center"
            }, {
                caption: "修改",
                template: "operations",
                align: "center"
            }]
        }
    });



    // 搜索筛选
    $('#searchMore').on('click',function(){
        $('.search-bar').css({'height':'135px'});
        $('.search-button').css({'margin-top':'50px'});
        $('.search-bar .one').css({'margin-top':'40px'});
    })  

    $('#searchClose').on('click',function(){
        $('.search-bar').css({'height':'50px'});
        $('.search-button').css({'margin-top':'10px'});
        $('.search-bar .one').css({'margin-top':'0px'});
    })

});
