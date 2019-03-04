<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>cat产商和设备</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="resources/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/datagrid.css" />
	<link rel="stylesheet" type="text/css" href="resources/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/base.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/common.css">
	<link rel="stylesheet" type="text/css" href="resources/css/iconfont.css">
	
	<script type="text/javascript" src="resources/js/jquery.min.js"></script>
	<script type="text/javascript" src="resources/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="resources/js/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="resources/js/Mathine/Mathine.js"></script>
  </head>
  
  <body>
    <div id="body">
    	<div class="functiondiv">
        	<a href="javascript:addfactory()" class="easyui-linkbutton" iconCls="icon-newadd" >新增</a>
    	</div>
    	<div data-options="region:'center',title:'信息',iconCls:'icon-ok'">
       		<table id="dg" style="table-layout:fixed;width:100%"></table>
        </div>
    	<!-- 添加修改 -->
		<div id="dlg" class="easyui-dialog" style="width: 800px; height: 500px; padding:10px 20px" closed="true" buttons="#dlg-buttons">
			<form id="fm" class="easyui-form" method="post" data-options="novalidate:true"><br/>
    			<div class="fitem">
    				<lable><span class="required">*</span>制造厂家</lable>
					<select class="easyui-combobox" name="desc" id="desc" data-options="required:true,editable:false""></select>
    			</div>
	            <div align="center">
                	<table id="tt" title="焊机型号列表" checkbox="true" style="table-layout:fixed"></table>
           		</div>
			</form>
		</div>
		<div id="dlg-buttons">
			<a href="javascript:save();" class="easyui-linkbutton" iconCls="icon-ok">保存</a>
			<a href="javascript:$('#dlg').dialog('close');" class="easyui-linkbutton" iconCls="icon-cancel" >取消</a>
		</div>
		
    </div>
  </body>
</html>
