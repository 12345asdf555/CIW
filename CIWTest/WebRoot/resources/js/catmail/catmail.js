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
		url : "weldedjunction/getweldmain",
		singleSelect : true,
		rownumbers : true,
		showPageList : false,
		columns : [ [ {
			field : 'id',
			title : '序号',
			width : 30,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'mailName',
			title : '邮件名',
//			width : 90,
			halign : "center",
			align : "left"
		}, {
			field : 'mailAddress',
			title : '邮件地址',
//			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'mailDesc',
			title : '邮件描述',
//			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
		}, {
			field : 'radios',
			title : '状态',
//			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
		},  {
			field : 'mailed',
			title : '邮件id',
//			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		},{
			field : 'mailAddressed',
			title : '邮件地址id',
//			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'radioed',
			title : '状态id',
//			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		},{
			field : 'writed',
			title : '描述id',
//			width : 90,
			halign : "center",
			align : "left",
			hidden:true
		}, {
			field : 'leavetime',
			title : '发送时间',
//			width : 90,
			halign : "center",
			align : "left",
//			hidden:true
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
			url : "import/importWeldedJunction",
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

