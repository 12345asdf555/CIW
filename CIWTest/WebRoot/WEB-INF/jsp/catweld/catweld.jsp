<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>CAT焊工信息</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="resources/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/datagrid.css" />
	<link rel="stylesheet" type="text/css" href="resources/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/base.css" />
	
	<script type="text/javascript" src="resources/js/jquery.min.js"></script>
	<script type="text/javascript" src="resources/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="resources/js/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="resources/js/easyui-extend-check.js"></script>
	<script type="text/javascript" src="resources/js/catweld/catweld.js"></script>
	<script type="text/javascript" src="resources/js/search/search.js"></script>
	<script type="text/javascript" src="resources/js/catweld/addcatweld.js"></script>
	<script type="text/javascript" src="resources/js/catweld/removecatweld.js"></script>
	
  </head>
  
  <body>
  	<div id="body">
	  	
	  	<div class="functiondiv">
			<div>
				<a href="javascript:addCatweld();" class="easyui-linkbutton" iconCls="icon-newadd">新增</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="javascript:importclick();" class="easyui-linkbutton" iconCls="icon-import">导入</a>&nbsp;&nbsp;&nbsp;&nbsp;
<!-- 				<a href="javascript:insertsearchWJ();" class="easyui-linkbutton" iconCls="icon-select" >查找</a> -->
			</div>
		</div>
		
		<div id="importdiv" class="easyui-dialog" style="width:300px; height:200px;" closed="true">
			<form id="importfm" method="post" class="easyui-form" data-options="novalidate:true" enctype="multipart/form-data"> 
				<div>
					<span><input type="file" name="file" id="file"></span>
					<input type="button" value="上传" onclick="importWeldingMachine()" class="upButton"/>
				</div>
			</form>
		</div>
	    <table id="weldedJunctionTable" style="table-layout: fixed; width:100%;"></table>
	    
	    <!-- 自定义多条件查询 -->
	    <div id="searchdiv" class="easyui-dialog" style="width:800px; height:400px;" closed="true" buttons="#searchButton" title="自定义条件查询">
	    	<div id="div0">
		    	<select class="fields" id="fields"></select>
		    	<select class="condition" id="condition"></select>
		    	<input class="content" id="content"/>
		    	<select class="joint" id="joint"></select>
		    	<a href="javascript:newSearchWJ();" class="easyui-linkbutton" iconCls="icon-add"></a>
		    	<a href="javascript:removeSerach();" class="easyui-linkbutton" iconCls="icon-remove"></a>
	    	</div>
	    </div>
	    <div id="searchButton">
			<a href="javascript:searchWJ();" class="easyui-linkbutton" iconCls="icon-ok">查询</a>
			<a href="javascript:close();" class="easyui-linkbutton" iconCls="icon-cancel">取消</a>
		</div>
		<!-- 添加修改 -->
		<div id="dlg" class="easyui-dialog" style="width: 850px; height: 600px; padding:10px 20px" closed="true" buttons="#dlg-buttons">
			<form id="fm" class="easyui-form" method="post" data-options="novalidate:true">
				<div class="fitem">
					<lable>工号</lable>
					<input class="easyui-textbox" id="weldnum"  name="weldnum"/>
					<lable><span class="required">*</span>入职时间</lable>
					<input class="easyui-datetimebox" id="checkintime"  name="checkintime"/>
				</div>
				<div class="fitem">
					<lable>钢印号</lable>
					<input class="easyui-textbox" id="ssnum" name="ssnum"/>
					<lable>首次认证时间</lable>
					<input class="easyui-datetimebox" id="firstsuretime"  name="firstsuretime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>部门</lable>
					<input class="easyui-textbox" id="department" name="department"/>
					<lable>车间</lable>
					<input class="easyui-textbox" id="workship" name="workship"/>
				</div>
<!-- 				<div class="fitem"> -->
<!-- 					<lable>管线号</lable> -->
<!-- 					<input class="easyui-textbox" id="workmaintime"  name="workmaintime" /> -->
<!-- 					<lable>房间号</lable> -->
<!-- 					<input class="easyui-textbox" id="roomNo" name="roomNo"/> -->
<!-- 				</div> -->
				<div class="fitem">
					<lable>主岗位名称</lable>
					<input class="easyui-textbox" id="workkmainname" name="workkmainname"/>
					<lable>主岗位上岗时间</lable>
					<input class="easyui-datetimebox" id="workmaintime"  name="workmaintime"/>
				</div>
				<div class="fitem">
					<lable>岗位一名称</lable>
					<input class="easyui-textbox" id="workfirstname" name="workfirstname"/>
					<lable>岗位一上岗时间</lable>
					<input class="easyui-datetimebox" id="workfirsttime"  name="workfirsttime"/>
				</div>
				<div class="fitem">
					<lable>岗位二名称</lable>
					<input class="easyui-textbox" id="worksecondname" name="worksecondname"/>
					<lable>岗位二上岗时间</lable>
					<input class="easyui-datetimebox" id="worksecondtime"  name="worksecondtime"/>
				</div>
				<div class="fitem">
					<lable>从事1E2111焊接</lable>
					<input class="easyui-textbox" id="ifwelding"  name="ifwelding"/>
					<lable>分类</lable>
					<input class="easyui-textbox" id="classify" name="classify"/>
				</div>
				<div class="fitem">
					<lable>姓名</lable>
					<input class="easyui-textbox"  id="weldername" name="weldername"/>
					<lable>技能等级</lable>
					<input class="easyui-textbox"  id="level" name="level"/>
				</div>
				<div class="fitem">
					<lable>理论考试成绩</lable>
					<input class="easyui-numberbox"  min="0.001" precision="3"  id="score" name="score"/>
					<lable>认证状态</lable>
					<input class="easyui-textbox"  id="ifpass"  name="ifpass"/>
				</div>
				<div class="fitem">
					<lable>IC卡有效期</lable>
					<input class="easyui-datetimebox" id="icworkime"  name="icworkime"/>
					<lable>半年确认时间</lable>
					<input class="easyui-datetimebox" id="halfyearsure"  name="halfyearsure"/>
				</div>
				<div class="fitem">
					<lable>年度认证</lable>
					<input class="easyui-datetimebox" id="yearsure"  name="yearsure"/>
					<lable>次年年度认证</lable>
					<input class="easyui-datetimebox" id="nextyear"  name="nextyear"/>
<!-- 					<lable>完成时间</lable> -->
<!-- 					<input class="easyui-datetimebox" id="endTime"  name="endTime"/> -->
				</div>
			</form>
		</div>
		<div id="dlg-buttons">
			<a href="javascript:save();" class="easyui-linkbutton" iconCls="icon-ok">保存</a>
			<a href="javascript:$('#dlg').dialog('close');" class="easyui-linkbutton" iconCls="icon-cancel" >取消</a>
		</div>
		
		<!-- 删除 -->
		<div id="rdlg" class="easyui-dialog" style="width: 850px; height: 600px; padding:10px 20px" closed="true" buttons="#remove-buttons">
			<form id="rfm" class="easyui-form" method="post" data-options="novalidate:true"><br/>
				<div class="fitem">
					<lable>工号</lable>
					<input class="easyui-textbox" id="weldnum"  name="weldnum" readonly="readonly"/>
					<lable>入职时间</lable>
					<input class="easyui-textbox" id="checkintime"  name="checkintime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>钢印号</lable>
					<input class="easyui-textbox" id="ssnum" name="ssnum" readonly="readonly"/>
					<lable>首次认证时间</lable>
					<input class="easyui-textbox" id="firstsuretime"  name="firstsuretime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>部门</lable>
					<input class="easyui-textbox" id="department" name="department" readonly="readonly"/>
					<lable>车间</lable>
					<input class="easyui-textbox" id="workship" name="workship" readonly="readonly"/>
				</div>
<!-- 				<div class="fitem"> -->
<!-- 					<lable>管线号</lable> -->
<!-- 					<input class="easyui-textbox" id="workmaintime"  name="workmaintime" /> -->
<!-- 					<lable>房间号</lable> -->
<!-- 					<input class="easyui-textbox" id="roomNo" name="roomNo"/> -->
<!-- 				</div> -->
				<div class="fitem">
					<lable>主岗位名称</lable>
					<input class="easyui-textbox" id="workkmainname" name="workkmainname" readonly="readonly"/>
					<lable>主岗位上岗时间</lable>
					<input class="easyui-textbox" id="workmaintime"  name="workmaintime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>岗位一名称</lable>
					<input class="easyui-textbox" id="workfirstname" name="workfirstname" readonly="readonly"/>
					<lable>岗位一上岗时间</lable>
					<input class="easyui-textbox" id="workfirsttime"  name="workfirsttime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>岗位二名称</lable>
					<input class="easyui-textbox" id="worksecondname" name="worksecondname" readonly="readonly"/>
					<lable>岗位二上岗时间</lable>
					<input class="easyui-textbox" id="worksecondtime"  name="worksecondtime" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>从事1E2111焊接</lable>
					<input class="easyui-textbox" id="ifwelding"  name="ifwelding" readonly="readonly"/>
					<lable>分类</lable>
					<input class="easyui-textbox" id="classify" name="classify" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>姓名</lable>
					<input class="easyui-textbox"  id="weldername" name="weldername" readonly="readonly"/>
					<lable>技能等级</lable>
					<input class="easyui-textbox"  id="level" name="level" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>理论考试成绩</lable>
					<input class="easyui-numberbox"  min="0.001" precision="3"  id="score" name="score" readonly="readonly"/>
					<lable>认证状态</lable>
					<input class="easyui-textbox"  id="ifpass"  name="ifpass" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>IC卡有效期</lable>
					<input class="easyui-textbox" id="icworkime"  name="icworkime" readonly="readonly"/>
					<lable>半年确认时间</lable>
					<input class="easyui-textbox" id="halfyearsure"  name="halfyearsure" readonly="readonly"/>
				</div>
				<div class="fitem">
					<lable>年度认证</lable>
					<input class="easyui-textbox" id="yearsure"  name="yearsure" readonly="readonly"/>
					<lable>次年年度认证</lable>
					<input class="easyui-textbox" id="yearsure"  name="yearsure" readonly="readonly"/>
<!-- 					<lable>完成时间</lable> -->
<!-- 					<input class="easyui-datetimebox" id="endTime"  name="endTime"/> -->
				</div>
			</form>
		</div>
		<div id="remove-buttons">
			<a href="javascript:remove();" class="easyui-linkbutton" iconCls="icon-ok">删除</a>
			<a href="javascript:$('#rdlg').dialog('close');" class="easyui-linkbutton" iconCls="icon-cancel" >取消</a>
		</div>
	</div>
  </body>
</html>
