$(function(){
	//typeCombobox();
	manuCombobox();
	//DictionaryDataGrid();
	$('#dlg').dialog( {
		onClose : function() {
			$('#desc').combobox('clear');
			$("#fm").form("disableValidation");
		}
	})
	$("#fm").form("disableValidation");
});

function weldmachine(){
	var urls="";
	//var row = $('#dg').datagrid('getSelected');
	if(flag==1){
		urls="weldingMachine/findAllweldmachine";
	}else{
		urls=urls;
	}
	$("#tt").datagrid( {
		fitColumns : true,
		height : '250px',
		width : '80%',
		idField : 'roles_name',
		url : urls,
		rownumbers : false,
		showPageList : false,
		checkOnSelect:true,
		selectOnCheck:true,
		columns : [ [ {
		    field:'ck',
			checkbox:true
		},{
			field : 'id',
			title : 'id',
			width : 100,
			halign : "center",
			align : "left",
			hidden: true
		},{
			field : 'machinevalue',
			title : '焊机型号value',
			width : 100,
			halign : "center",
			align : "left",
			hidden:true
		},{
			field : 'weldmachinetype',
			title : '焊机型号',
			width : 100,
			halign : "center",
			align : "left"
		}]],
		rowStyler: function(index,row){
            if ((index % 2)!=0){
            	//处理行代背景色后无法选中
            	var color=new Object();
                color.class="rowColor";
                return color;
            }
		},
		onBeforeLoad:function(data){
			 $('#tt').datagrid('clearChecked');
		},
		onLoadSuccess:function(data){
			 if(data){
				 $.each(data.rows, function(index, item){
					 if(item.symbol==1){
				         $('#tt').datagrid('checkRow', index);
					 }
				 })
			 }
		}
	});
}

var url = "";
var flag = 1;
function addfactory(){
	flag = 1;
	$('#dlg').window( {
		title : "厂家焊机型号绑定",
		modal : true
	});
	$('#dlg').window('open');
	$('#fm').form('clear');
	weldmachine();
	url = "weldingMachine/getfactoryType";
}

//提交
function save(){
	 var back = $("#desc").combobox("getValue");
	//var back=$("#desc").combobox('getText');
	var rows = $('#tt').datagrid('getSelections');
	var str="";
		for(var i=0; i<rows.length; i++){
			str += rows[i].machinevalue+",";
		}
	var url2 = ""; 
	var fmachingname;
	if(flag==1){
		messager = "新增成功！";
		url2 = url+"?back="+back+"&str="+str+"&fmachingname="+"";
	}else{
		messager = "修改成功！";
		url2 = url+"&back="+back;
	}
	$('#fm').form('submit', {
		url : url2,
		onSubmit : function() {
			return $(this).form('enableValidation').form('validate');
		},
		success : function(result) {
			if(result){
				var result = eval('(' + result + ')');
				if (!result.success) {
					$.messager.show( {
						title : 'Error',
						msg : result.errorMsg
					});
				} else {
					$.messager.alert("提示", messager);
					$('#dlg').dialog('close');
					$('#dg').datagrid('reload');
				}
			}
			
		},  
	    error : function(errorMsg) {  
	        alert("数据请求失败，请联系系统管理员!");  
	    } 
	});
}

////设备类型
//function typeCombobox(){
//	$.ajax({  
//      type : "post",  
//      async : false,
//      url : "weldingMachine/getfactoryType",  
//      data : {},  
//      dataType : "json", //返回数据形式为json  
//      success : function(result) {
//          var optionStr = "";
//          if (result) {
//              for (var i = 0; i < result.ary.length; i++) {  
//                  optionStr += "<option value=\""  + "\" >"  
//                          + result.ary[i].name + "</option>";  
//              }
//              $("#desc").html(optionStr);
//          }  
//      }
//	}); 
//	$("#desc").combobox();
//}
//厂商
function manuCombobox(){
	$.ajax({  
	  type : "post",  
	  async : false,
	  url : "weldingMachine/getManuAll",  
	  data : {},  
	  dataType : "json", //返回数据形式为json  
	  success : function(result) {  
	      if (result) {
	          var optionStr = '';
	          for (var i = 0; i < result.ary.length; i++) {  
	              optionStr += "<option value=\"" + result.ary[i].id + "\" >"  
	                      + result.ary[i].name + "</option>";
	          }
	          $("#desc").html(optionStr);
	      }  
	  },  
	  error : function(errorMsg) {  
	      alert("数据请求失败，请联系系统管理员!");  
	  }  
	}); 
	$("#desc").combobox();
}

//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#dg").datagrid('resize', {
		height : $("#body").height(),
		width : $("#body").width()
	});
}