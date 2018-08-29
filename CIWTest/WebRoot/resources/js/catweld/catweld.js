$(function(){
	weldedJunctionDatagrid();
});

function weldedJunctionDatagrid(){
	$("#weldedJunctionTable").datagrid( {
//		fitColumns : true,
		height : $("#body").height(),
		width : $("#body").width(),
		idField : 'id',
		pageSize : 10,
		pageList : [ 10, 20, 30, 40, 50 ],
		url : "catweld/getCatWeldList",
		singleSelect : true,
		rownumbers : true,
		showPageList : false,
		columns : [ [ {
			field : 'weldnum',
			title : '工号',
			width : 30,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'checkintime',
			title : '入职时间',
			width : 140,
			halign : "center",
			align : "left"
		}, {
			field : 'ssnum',
			title : '钢印号',
			width : 50,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'firstsuretime',
			title : '首次认证时间',
			width : 80,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'department',
			title : '部门',
			width : 50,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'workship',
			title : '车间',
			width : 50,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'workmaintime',
			title : '主岗位上岗时间',
			width : 100,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'workkmainname',
			title : '主岗位名称',
			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'workfirsttime',
			title : '岗位一上岗时间',
			width : 100,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'workfirstname',
			title : '岗位一名称',
			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'worksecondtime',
			title : '岗位二上岗时间',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'worksecondname',
			title : '岗位二名称',
			width : 90,
			halign : "center",
			align : "left"
		}, {
			field : 'ifwelding',
			title : '1E2111焊接',
			width : 50,
			halign : "center",
			align : "left"
		}, {
			field : 'classify',
			title : '分类',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'weldername',
			title : '姓名',
			width : 50,
			halign : "center",
			align : "left"
		}, {
			field : 'level',
			title : '技能等级',
			width : 60,
			halign : "center",
			align : "left"
		}, {
			field : 'score',
			title : '理论考试结果',
			width : 60,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'ifpass',
			title : '认证状态',
			width : 60,
			halign : "center",
			align : "left"
		}, {
			field : 'icworkime',
			title : 'IC卡有效期',
			width : 100,
			halign : "center",
			align : "left"
		},{
			field : 'yearsure',
			title : '年度认证',
			width : 100,
			halign : "center",
			align : "left",
//			hidden:true
		},  {
			field : 'halfyearsure',
			title : '半年确认时间',
			width : 100,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'nextyear',
			title : '次年年度认证',
			width : 100,
			halign : "center",
			align : "left",
//			hidden:true
		},{
			field : 'itemname',
			title : '所属项目',
//			width : 150,
			halign : "center",
			align : "left",
			hidden:true
		},{
			field : 'startTime',
			title : '开始时间',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'endTime',
			title : '完成时间',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'creatTime',
			title : '创建时间',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'updateTime',
			title : '修改时间',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'updatecount',
			title : '修改次数',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'valtage_unit',
			title : '电压单位',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'electricity_unit',
			title : '电流单位',
			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'edit',
			title : '编辑',
			width : 115,
			halign : "center",
			align : "left",
			formatter: function(value,row,index){
				var str = '<a id="edit" class="easyui-linkbutton" href="javascript:editCatweld()"/>';
				str += '<a id="remove" class="easyui-linkbutton" href="javascript:removeCatweld()"/>';
				str += '<a id="look" class="easyui-linkbutton" href="weldedjunction/goShowMoreJunction?id='+row.id+'"/>';
				return str;
			}
		}] ],
		pagination : true,
		rowStyler: function(index,row){
            if ((index % 2)!=0){
            	//处理行代背景色后无法选中
            	var color=new Object();
                color.class="rowColor";
                return color;
            }
        },
		onLoadSuccess: function(data){
	        $("a[id='edit']").linkbutton({text:'修改',plain:true,iconCls:'icon-update'});
	        $("a[id='remove']").linkbutton({text:'删除',plain:true,iconCls:'icon-delete'});
			$("a[id='look']").linkbutton({text:'查看更多',plain:true,iconCls:'icon-newadd'});
		}
	});
}


//导入
function importclick(){
	$("#importdiv").dialog("open").dialog("setTitle","从excel导入数据");
}

function importWeldingMachine(){
	var file = $("#file").val();
	if(file == null || file == ""){
		$.messager.alert("提示", "请选择要上传的文件！");
		return false;
	}else{
		$('#importfm').form('submit', {
			url : "import/importWelder",
			success : function(result) {
				if(result){
					var result = eval('(' + result + ')');
					if (!result.success) {
						$.messager.show( {
							title : 'Error',
							msg : result.msg
						});
					} else {
						$('#importdiv').dialog('close');
						$('#weldedJunctionTable').datagrid('reload');
						$.messager.alert("提示", result.msg);
					}
				}
				
			},  
		    error : function(errorMsg) {  
		        alert("数据请求失败，请联系系统管理员!");  
		    } 
		});
	}
}


//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#weldedJunctionTable").datagrid('resize', {
		height : $("#body").height(),
		width : $("#body").width()
	});
}

