// 授权
cola(function(model) {



    model.action({
        // 一级栏目选择
        checkClick: function() {
            var selectCheck = cola.widget($(this)[0]._dom.id).get("checked")
            $('#' + $(this)[0]._dom.id).parents('td').next('td').find('.checkbox').each(function() {
                cola.widget($(this).attr('id')).set("checked", selectCheck)
                if (selectCheck) {
                    $('#' + $(this).attr('id')).addClass('checked');
                } else {
                    $('#' + $(this).attr('id')).removeClass('checked');
                }
            })

            if ($('#' + $(this)[0]._dom.id).parents('td').prev('td').length > 0) {
                if ($('#' + $(this)[0]._dom.id).parents('td').find('.checkbox').length == $('#' + $(this)[0]._dom.id).parents('td').find('.checked').length) {
                    cola.widget($('#' + $(this)[0]._dom.id).parents('td').prev('td').find('.checkbox').attr('id')).set("checked", true)
                    $('#' + $('#' + $(this)[0]._dom.id).parents('td').prev('td').find('.checkbox').attr('id')).addClass('checked');
                } else {
                    cola.widget($('#' + $(this)[0]._dom.id).parents('td').prev('td').find('.checkbox').attr('id')).set("checked", false)
                    cola.widget('selectAll').set("checked", false)
                    $('#' + $('#' + $(this)[0]._dom.id).parents('td').prev('td').find('.checkbox').attr('id')).removeClass('checked');
                }
            } else {
                if ($('.checkbox').length == $('.checked').length + 1) {
                    cola.widget('selectAll').set("checked", true)
                } else {
                    cola.widget('selectAll').set("checked", false)
                }
            }
        },
        // 全选
        selectAll: function() {
            var selectCheck = cola.widget('selectAll').get("checked")
            if (selectCheck) {
                $('.checkbox').each(function() {
                    var checkId = $(this).attr('id')
                    cola.widget(checkId).set("checked", false)
                    $('#' + checkId).removeClass('checked');
                })
            } else {

                $('.checkbox').each(function() {
                    var checkId = $(this).attr('id')
                    cola.widget(checkId).set("checked", true)
                    $('#' + checkId).addClass('checked');
                })
            }
        }
    });



    // 权限情况
    model.describe("pageItems", {
        provider: {
            url: "images/authorization.json",
        }
    });

    model.widgetConfig({
        authorizationTable: {
            $type: "table",
            /**
             * 表格控件
             * {@link http://cola-ui.com/api/cola.Table.html}
             * @memberof cola
             * @name cola.Table
             * @property {String} bind -绑定组建属性
             * @property {Bool} showHeader -表格中的列的声明
             * @property {Json} columns -是否显示表格标题栏
             * 
             */
            bind: "item in pageItems",
            showHeader: true,
            columns: [{
                caption: "菜单",
                width: "190px",
                template: "authorization-left"
            }, {
                caption: "权限",
                template: "authorization-right"
            }]
        }
    });





});