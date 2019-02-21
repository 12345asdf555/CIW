/**
 * 
 */
/**
 * 
 */
var data1;
var da;
var yshu;
var yshu1 = new Array();
var node11;
var symbol = 0;
var symbol1 = 0;
var symbol2;
var chanelCount = 0;
var x = 0;
var xx = 0;
var rows1;
var itemrow;
var machga;
var machineModel;
var allMachineModel = new Array();
$(function() {
	gfsd();
	//	inscombobox();
	$('#dlg').dialog({
		onClose : function() {
			$("#fm").form("disableValidation");
		}
	})
	$("#fm").form("disableValidation");
	document.getElementById("body").style.display = "none";
	insframeworkTree();
	$.ajax({
		type : "post",
		async : false,
		url : "td/AllTdbf",
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (result) {
				data1 = eval(result.web_socket);
			}
		},
		error : function(errorMsg) {
			alert("数据请求失败，请联系系统管理员!");
		}
	});
	$.ajax({
		type : "post",
		async : false,
		url : "weldingMachine/getMachineModelAll",
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (result) {
				allMachineModel = eval(result.ary);
			}
		},
		error : function(errorMsg) {
			alert("数据请求失败，请联系系统管理员!");
		}
	});
	$.ajax({
		type : "post",
		async : false,
		url : "datastatistics/getAllInsframework",
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (result) {
				itemrow = eval(result);
				var optionStr = '';
				for (var i = 0; i < result.ary.length; i++) {
					optionStr += "<option value=\"" + result.ary[i].id + "\" >"
						+ result.ary[i].name + "</option>";
				}
				$("#item").html(optionStr);
			}
		},
		error : function(errorMsg) {
			alert("数据请求失败，请联系系统管理员!");
		}
	});

	$("#item").combobox();

	$.ajax({
		type : "post",
		async : false,
		url : "weldingMachine/getMachineGather",
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (result) {
				machga = eval(result.rows);
			}
		},
		error : function(errorMsg) {
			alert("数据请求失败，请联系系统管理员!");
		}
	});
})

$(document).ready(function() {
	$("#fchanel").combobox({
		onSelect : function(record) {
			if (node11 != null) {
				$.ajax({
					type : "post",
					async : false,
					url : "wps/getAllSpe?machine=" + node11.id + "&chanel=" + record.value,
					data : {},
					dataType : "json", //返回数据形式为json  
					success : function(result) {
						if (result) {
							comboboxCheck(machineModel);
							yshu = eval(result.rows);
							if (yshu.length != 0) {
								$('#fchanel').combobox('select', yshu[0].FWPSNum);
								$('#fselect').combobox('select', yshu[0].fselect);
								$("#ftime").numberbox('setValue', yshu[0].ftime);
								$("#fadvance").numberbox('setValue', yshu[0].fadvance);
								$("#fini_ele").numberbox('setValue', yshu[0].fini_ele);
								$("#fini_vol").numberbox('setValue', yshu[0].fini_vol);
								$("#fini_vol1").numberbox('setValue', yshu[0].fini_vol1);
								$("#fweld_vol").numberbox('setValue', yshu[0].fweld_vol);
								$("#fweld_vol1").numberbox('setValue', yshu[0].fweld_vol1);
								$("#farc_vol").numberbox('setValue', yshu[0].farc_vol);
								$("#farc_vol1").numberbox('setValue', yshu[0].farc_vol1);
								$("#fweld_ele").numberbox('setValue', yshu[0].fweld_ele);
								$("#farc_ele").numberbox('setValue', yshu[0].farc_ele);
								$("#fhysteresis").numberbox('setValue', yshu[0].fhysteresis);
								$("#fcharacter").numberbox('setValue', yshu[0].fcharacter);
								$('#fgas').combobox('select', yshu[0].fgas);
								$('#fdiameter').combobox('select', yshu[0].fdiameter);
								$('#fmaterial').combobox('select', yshu[0].fmaterial);
								$('#fweldprocess').combobox('select', yshu[0].fprocessid);
								$("#fweld_tuny_ele").numberbox('setValue', yshu[0].fweld_tuny_ele);
								$("#fweld_tuny_vol").numberbox('setValue', yshu[0].fweld_tuny_vol);
								$("#farc_tuny_ele").numberbox('setValue', yshu[0].farc_tuny_ele);
								$("#farc_tuny_vol").numberbox('setValue', yshu[0].Fdiameter);
								$("#farc_tuny_vol1").numberbox('setValue', yshu[0].Fdiameter);
								$("#fweld_tuny_vol1").numberbox('setValue', yshu[0].fweld_tuny_vol);
								$("#frequency").numberbox('setValue', yshu[0].frequency);
								$("#gasflow").numberbox('setValue', yshu[0].gasflow);
								if (yshu[0].finitial == "1") {
									$("#finitial").prop("checked", true);
								}
								$('#farc').combobox('select', yshu[0].farc);
								if (yshu[0].fcontroller == "1") {
									$("#fcontroller").prop("checked", true);
								}
								if (yshu[0].fmode == "1") {
									$("#fmode").prop("checked", true);
								}
								if (yshu[0].ftorch == "1") {
									$("#ftorch").prop("checked", true);
								}
							} else {
								alert("未查询到相关数据，已初始化，也可尝试索取。");
							}
						}
					},
					error : function(errorMsg) {
						alert("数据请求失败，请联系系统管理员!");
					}
				});
			}
		}
	});
});

function chushihua(value) {
	/*if (machineModel == 174) {
		EPWINIT(value);
	} else if (machineModel == 175) {
		EPSINIT(value);
	} else if (machineModel == 176) {
		WBMLINIT(value);
	} else if (machineModel == 177) {
		WBPINIT(value);
	} else if (machineModel == 178) {
		WBLINIT(value);
	} else if (machineModel == 172) {
		CPVESINIT(value);
	} else */if (machineModel == 171) {
		CPVEWINIT(value);
	} else if (machineModel == 173) {
		CPVETINIT(value);
	} else{
		alert("目前只支持CPVE-500和CPVE-250参数管理");
		return;
	}
	if(value==0){
		comboboxCheck(machineModel);
	}
	return;
}

function gfsd() {
	var mySelect = $("#fgas option");
	$("#fselect").combobox({
		onSelect : function(record) {
			if (node11 != null) {
				if (record.value == 102) {
					document.getElementById("yiyuan1").style.display = "none";
					document.getElementById("yiyuan3").style.display = "none";
					document.getElementById("gebie1").style.display = "block";
					document.getElementById("gebie3").style.display = "block";
				} else {
					document.getElementById("yiyuan1").style.display = "block";
					document.getElementById("yiyuan3").style.display = "block";
					document.getElementById("gebie1").style.display = "none";
					document.getElementById("gebie3").style.display = "none";
				}
			}
		}
	});
/*	$("#farc").combobox({
		onSelect : function(record) {
			if (record.value == 111) {
				$('#farc_ele').numberbox("disable", true);
				$('#farc_vol').numberbox("disable", true);
				$('#farc_tuny_ele').numberbox("disable", true);
				$('#farc_tuny_vol').numberbox("disable", true);
				$('#farc_tuny_vol1').numberbox("disable", true);
				$('#farc_vol1').numberbox("disable", true);
				$('#ftime').numberbox("disable", true);
				$('#fini_ele').numberbox("disable", true);
				$('#fini_vol').numberbox("disable", true);
				$('#fini_vol1').numberbox("disable", true);
			} else if (record.value == 112) {
				$('#farc_ele').numberbox("enable", true);
				$('#farc_vol').numberbox("enable", true);
				$('#farc_tuny_ele').numberbox("enable", true);
				$('#farc_tuny_vol').numberbox("enable", true);
				$('#farc_tuny_vol1').numberbox("enable", true);
				$('#farc_vol1').numberbox("enable", true);
				$('#ftime').numberbox("disable", true);
				if ($("#finitial").is(":checked")) {
					$('#fini_ele').numberbox("enable", true);
					$('#fini_vol').numberbox("enable", true);
					$('#fini_vol1').numberbox("enable", true);
				} else {
					$('#fini_ele').numberbox("disable", true);
					$('#fini_vol').numberbox("disable", true);
					$('#fini_vol1').numberbox("disable", true);
				}
			} else if (record.value == 113) {
				$('#farc_ele').numberbox("enable", true);
				$('#farc_vol').numberbox("enable", true);
				$('#farc_tuny_ele').numberbox("enable", true);
				$('#farc_tuny_vol').numberbox("enable", true);
				$('#farc_tuny_vol1').numberbox("enable", true);
				$('#farc_vol1').numberbox("enable", true);
				$('#ftime').numberbox("disable", true);
				if ($("#finitial").is(":checked")) {
					$('#fini_ele').numberbox("enable", true);
					$('#fini_vol').numberbox("enable", true);
					$('#fini_vol1').numberbox("enable", true);
				} else {
					$('#fini_ele').numberbox("disable", true);
					$('#fini_vol').numberbox("disable", true);
					$('#fini_vol1').numberbox("disable", true);
				}
			} else {
				$('#farc_ele').numberbox("disable", true);
				$('#farc_vol').numberbox("disable", true);
				$('#farc_tuny_ele').numberbox("disable", true);
				$('#farc_tuny_vol').numberbox("disable", true);
				$('#farc_tuny_vol1').numberbox("disable", true);
				$('#farc_vol1').numberbox("disable", true);
				$('#fini_ele').numberbox("disable", true);
				$('#fini_vol').numberbox("disable", true);
				$('#fini_vol1').numberbox("disable", true);
				$('#ftime').numberbox("enable", true);
				$('#ftime').numberbox("enable", true);
			}
		}
	});

	$("#finitial").click(function() {
		if ($("#finitial").is(":checked")) {
			if ($('#farc').combobox('getValue') == 112 || $('#farc').combobox('getValue') == 113) {
				$('#fini_ele').numberbox("enable", true);
				$('#fini_vol').numberbox("enable", true);
				$('#fini_vol1').numberbox("enable", true);
			} else {
				$('#fini_ele').numberbox("disable", true);
				$('#fini_vol').numberbox("disable", true);
				$('#fini_vol1').numberbox("disable", true);
			}
		} else {
			$('#fini_ele').numberbox("disable", true);
			$('#fini_vol').numberbox("disable", true);
			$('#fini_vol1').numberbox("disable", true);
		}
	});

	$("#fmaterial").combobox({
		onSelect : function(record) {
			if (record.value == 91) {
				$('#fgas').combobox('clear');
				$('#fgas').combobox('loadData', [ {
					"text" : "CO2",
					"value" : "121"
				}, {
					"text" : "MAG",
					"value" : "122"
				} ]);
				$('#fdiameter').combobox('clear');
				$('#fdiameter').combobox('loadData', [ {
					"text" : "Φ1.0",
					"value" : "131"
				}, {
					"text" : "Φ1.2",
					"value" : "132"
				}, {
					"text" : "Φ1.4",
					"value" : "133"
				}, {
					"text" : "Φ1.6",
					"value" : "134"
				} ]);
			} else if (record.value == 92) {
				$('#fgas').combobox('clear');
				$('#fgas').combobox('loadData', [ {
					"text" : "MIG",
					"value" : "123"
				} ]);
				$('#fdiameter').combobox('clear');
				$('#fdiameter').combobox('loadData', [ {
					"text" : "Φ1.2",
					"value" : "132"
				}, {
					"text" : "Φ1.6",
					"value" : "134"
				} ]);
			} else if (record.value == 93) {
				$('#fgas').combobox('clear');
				$('#fgas').combobox('loadData', [ {
					"text" : "CO2",
					"value" : "121"
				} ]);
				$('#fdiameter').combobox('clear');
				$('#fdiameter').combobox('loadData', [ {
					"text" : "Φ1.2",
					"value" : "132"
				}, {
					"text" : "Φ1.4",
					"value" : "133"
				}, {
					"text" : "Φ1.6",
					"value" : "134"
				} ]);
			} else {
				$('#fgas').combobox('clear');
				$('#fgas').combobox('loadData', [ {
					"text" : "CO2",
					"value" : "121"
				} ]);
				$('#fdiameter').combobox('clear');
				$('#fdiameter').combobox('loadData', [ {
					"text" : "Φ1.2",
					"value" : "132"
				}, {
					"text" : "Φ1.6",
					"value" : "134"
				} ]);
			}
			var fgas = $('#fgas').combobox('getData');
			var fdiameter = $('#fdiameter').combobox('getData');
			$('#fgas').combobox('select', fgas[0].value);
			$('#fdiameter').combobox('select', fdiameter[0].value);
		}
	});*/
}
;

//提交
function save(value) {
	/*if (machineModel == 174) {
		if (EPWCHECK() == false) {
			return;
		}
	} else if (machineModel == 175) {
		if (EPSCHECK() == false) {
			return;
		}
	} else if (machineModel == 176) {
		if (WBMLCHECK() == false) {
			return;
		}
	} else if (machineModel == 177) {
		if (WBPCHECK() == false) {
			return;
		}
	} else if (machineModel == 178) {
		if (WBLCHECK() == false) {
			return;
		}
	} else if (machineModel == 172) {
		if (CPVESCHECK() == false) {
			return;
		}
	} else */if (machineModel == 171) {
		if (CPVEWCHECK() == false) {
			return;
		}
	} else if (machineModel == 173) {
		if (CPVETCHECK() == false) {
			return;
		}
	} else{
		alert("目前只支持CPVE-500和CPVE-250参数管理");
		return;
	}
	var url2 = "";
	var finitial;
	var fcontroller;
	var fmode;
	var ftorch;
	if ($("#finitial").is(":checked") == true) {
		finitial = 1;
	} else {
		finitial = 0;
	}
	if ($("#fcontroller").is(":checked") == true) {
		fcontroller = 1;
	} else {
		fcontroller = 0;
	}
	if ($("#fmode").is(":checked") == true) {
		fmode = 1;
	} else {
		fmode = 0;
	}
	if ($("#ftorch").is(":checked") == true) {
		ftorch = 1;
	} else {
		ftorch = 0;
	}
	var fselect = $('#fselect').combobox('getValue');
	var farc = $('#farc').combobox('getValue');
	var fmaterial = $('#fmaterial').combobox('getValue');
	var fgas = $('#fgas').combobox('getValue');
	var fdiameter = $('#fdiameter').combobox('getValue');
	var chanel = $('#fchanel').combobox('getValue');
	var ftime = $('#ftime').numberbox('getValue');
	var fadvance = $('#fadvance').numberbox('getValue');
	var fini_ele = $('#fini_ele').numberbox('getValue');
	var fweld_ele = $('#fweld_ele').numberbox('getValue');
	var farc_ele = $('#farc_ele').numberbox('getValue');
	var fhysteresis = $('#fhysteresis').numberbox('getValue');
	var fcharacter = $('#fcharacter').numberbox('getValue');
	var fweld_tuny_ele = $('#fweld_tuny_ele').numberbox('getValue');
	var farc_tuny_ele = $('#farc_tuny_ele').numberbox('getValue');
	var fini_vol = $('#fini_vol').numberbox('getValue');
	var fweld_vol = $('#fweld_vol').numberbox('getValue');
	var farc_vol = $('#farc_vol').numberbox('getValue');
	var fini_vol1 = $('#fini_vol1').numberbox('getValue');
	var fweld_vol1 = $('#fweld_vol1').numberbox('getValue');
	var farc_vol1 = $('#farc_vol1').numberbox('getValue');
	var fprocess = $('#fweldprocess').combobox('getValue');
	if (fselect == 102) {
		var fweld_tuny_vol = $('#fweld_tuny_vol').numberbox('getValue');
		var farc_tuny_vol = $('#farc_tuny_vol').numberbox('getValue');
	} else {
		var fweld_tuny_vol = $('#fweld_tuny_vol1').numberbox('getValue');
		var farc_tuny_vol = $('#farc_tuny_vol1').numberbox('getValue');
	}
	var machine = node11.id;
	var frequency = $('#frequency').numberbox('getValue');
	var gasflow = $('#gasflow').numberbox('getValue');
	messager = "保存成功！";
	url2 = "wps/apSpe" + "?finitial=" + finitial + "&fcontroller=" + fcontroller + "&fmode=" + fmode + "&fselect=" + fselect + "&farc=" + farc + "&fmaterial=" + fmaterial + "&fgas=" + fgas + "&fdiameter=" + fdiameter + "&chanel=" + chanel + "&ftime=" + ftime + "&fadvance=" + fadvance + "&fini_ele=" + fini_ele + "&fweld_ele=" + fweld_ele + "&farc_ele=" + farc_ele + "&fhysteresis=" + fhysteresis + "&fcharacter=" + fcharacter + "&fweld_tuny_ele=" + fweld_tuny_ele + "&farc_tuny_ele=" + farc_tuny_ele + "&fini_vol=" + fini_vol + "&fini_vol1=" + fini_vol1 + "&fweld_vol=" + fweld_vol + "&fweld_vol1=" + fweld_vol1 + "&farc_vol=" + farc_vol + "&farc_vol1=" + farc_vol1 + "&fweld_tuny_vol=" + fweld_tuny_vol + "&farc_tuny_vol=" + farc_tuny_vol + "&fprocess=" + fprocess + "&ftorch=" + ftorch + "&frequency=" + frequency + "&gasflow=" + gasflow + "&machine=" + machine;
	$.ajax({
		type : "post",
		async : false,
		url : url2,
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (!result.success) {
				if (value == 0) {
					$.messager.show({
						title : 'Error',
						msg : result.errorMsg
					});
				}
			} else {
				if (value == 0) {
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

function insframeworkTree() {
	$("#speTree").tree({
		onClick : function(node) {
			for (var mm = 0; mm < allMachineModel.length; mm++) {
				if (allMachineModel[mm].id == node.id) {
					machineModel = allMachineModel[mm].model;
					break;
				}
			}
			node11 = $(this).tree("getSelected");
			var leve = $(this).tree("getLevel", node11.target);
			if ((leve == 1) || (leve == 2) || (leve == 3) || (leve == 4)) {
				alert("请选择对应的焊机！！！");
			} else {
				document.getElementById("body").style.display = "block";
				document.getElementById("bodyy").style.display = "none";
				chushihua(1);
				$("#ro").datagrid({
					height : $("#tab").height(),
					width : $("#tab").width(),
					idField : 'id',
					pageSize : 10,
					pageList : [ 10, 20, 30, 40, 50 ],
					url : "weldingMachine/getWedlingMachineList?searchStr=" + "(w.fmodel=" + machineModel + " and w.fequipment_no!=" + node11.text + ")",
					singleSelect : false,
					rownumbers : true,
					showPageList : false,
					columns : [ [ {
						field : 'ck',
						checkbox : true
					}, {
						field : 'id',
						title : '序号',
						width : 50,
						halign : "center",
						align : "left",
						hidden : true
					}, {
						field : 'equipmentNo',
						title : '固定资产编号',
						width : 80,
						halign : "center",
						align : "left"
					}, {
						field : 'insframeworkName',
						title : '所属项目',
						width : 100,
						halign : "center",
						align : "left"
					}, {
						field : 'manufacturerName',
						title : '厂家',
						width : 100,
						halign : "center",
						align : "left"
					}, {
						field : 'gatherId',
						title : '采集序号',
						width : 100,
						halign : "center",
						align : "left"
					}, {
						field : 'ip',
						title : 'ip地址',
						width : 160,
						halign : "center",
						align : "left"
					}, {
						field : 'modelname',
						title : '设备型号',
						width : 130,
						halign : "center",
						align : "left"
					}, {
						field : 'model',
						title : '设备型号id',
						width : 100,
						halign : "center",
						align : "left",
						hidden : true
					}, {
						field : 'manuno',
						title : '厂商id',
						width : 100,
						halign : "center",
						align : "left",
						hidden : true
					}, {
						field : 'typeId',
						title : '类型id',
						width : 100,
						halign : "center",
						align : "left",
						hidden : true
					}, {
						field : 'iId',
						title : '项目id',
						width : 100,
						halign : "center",
						align : "left",
						hidden : true
					}, {
						field : 'gid',
						title : '采集id',
						width : 100,
						halign : "center",
						align : "left",
						hidden : true
					}
					] ],
					pagination : true,
					fitColumns : true,
					rowStyler : function(index, row) {
						if ((index % 2) != 0) {
							//处理行代背景色后无法选中
							var color = new Object();
							color.class = "rowColor";
							return color;
						}
					}
				});
			}
		}
	})
}

$(document).ready(function() {
	$("#item").combobox({
		onSelect : function(record) {
			$("#ro").datagrid('load', {
				"parent" : record.value
			})
		}
	});
});

function suoqu() {
/*	var da = "7E350101015200010001001e0001006400be0000006e00c30000006400be000000010001000C000000c1010b0000001e001400000000AB7D";
	if (machineModel == 174) {
		EPWGET(da);
	} else if (machineModel == 175) {
		EPSGET(da);
	} else if (machineModel == 176) {
		WBMLGET(da);
	} else if (machineModel == 177) {
		WBPGET(da);
	} else if (machineModel == 178) {
		WBLGET(da);
	} else if (machineModel == 171) {
		CPVEWGET(da);
	} else if (machineModel == 172) {
		CPVESGET(da);
	} else if (machineModel == 173) {
		CPVETGET(da);
	}
	return;*/
	var socketfc = null;
	symbol = 0;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	socketfc = new WebSocket(data1);
	//打开事件
	socketfc.onopen = function() {

		var chanel = parseInt($('#fchanel').numberbox('getValue')).toString(16);
		if (chanel.length < 2) {
			var length = 2 - chanel.length;
			for (var i = 0; i < length; i++) {
				chanel = "0" + chanel;
			}
		}
		var mach;
		if (machga != null) {
			for (var q = 0; q < machga.length; q++) {
				if (machga[q].id == node11.id) {
					if (machga[q].gatherId) {
						mach = parseInt(machga[q].gatherId).toString(16);
						if (mach.length < 4) {
							var length = 4 - mach.length;
							for (var i = 0; i < length; i++) {
								mach = "0" + mach;
							}
							;
							break;
						}
					} else {
						alert("该焊机未对应采集编号!!!");
						return;
					}
				}
			}
		}
		var xxx = "7E0901010156" + mach + chanel;
		var check = 0;
		for (var i = 0; i < (xxx.length / 2); i++) {
			var tstr1 = xxx.substring(i * 2, i * 2 + 2);
			var k = parseInt(tstr1, 16);
			check += k;
		}

		var checksend = parseInt(check).toString(16);
		var a2 = checksend.length;
		checksend = checksend.substring(a2 - 2, a2);
		checksend = checksend.toUpperCase();
		socketfc.send(xxx + checksend + "7D");
		if (symbol == 0) {
			window.setTimeout(function() {
				if (symbol == 0) {
					socketfc.close();
					alert("焊机长时间未响应，索取失败");
				}
			}, 5000)
		}
		socketfc.onmessage = function(msg) {
			var da = msg.data;
			if (da.substring(0, 2) == "7E" && da.substring(10, 12) == "56") {
				if (da.substring(18, 20) == "FF") {
					symbol++;
					socketfc.close();
					if (socketfc.readyState != 1) {
						alert("此通道没有规范，请尝试新建规范，可恢复默认值进行参考");
					}
				} else {
					/*if (machineModel == 174) {
						EPWGET(da);
					} else if (machineModel == 175) {
						EPSGET(da);
					} else if (machineModel == 176) {
						WBMLGET(da);
					} else if (machineModel == 177) {
						WBPGET(da);
					} else if (machineModel == 178) {
						WBLGET(da);
					} else if (machineModel == 172) {
						CPVESGET(da);
					} else */if (machineModel == 171) {
						CPVEWGET(da);
					} else if (machineModel == 173) {
						CPVETGET(da);
					} else {
						alert("目前只支持CPVE-500和CPVE-250参数管理");
						return;
					}
					symbol++;
					socketfc.close();
					if (socketfc.readyState != 1) {
						alert("索取成功");
					}
				}
			}
		}
	}
}

function xiafa() {
	/*if (machineModel == 174) {
		if (EPWCHECK() == false) {
			return;
		}else{
			EPW(null, null);
		}
	} else if (machineModel == 175) {
		if (EPSCHECK() == false) {
			return;
		}else{
			EPS(null, null);
		}
	} else if (machineModel == 176) {
		if (WBMLCHECK() == false) {
			return;
		}else{
			WBML(null, null);
		}
	} else if (machineModel == 177) {
		if (WBPCHECK() == false) {
			return;
		}else{
			WBP(null, null);
		}
	} else if (machineModel == 178) {
		if (WBLCHECK() == false) {
			return;
		}else{
			WBL(null, null);
		}
	} else if (machineModel == 172) {
		if (CPVESCHECK() == false) {
			return;
		}else{
			CPVES(null, null);
		}
	} else */if (machineModel == 171) {
		if (CPVEWCHECK() == false) {
			return;
		}else{
			CPVEW(null, null);
		}
	} else if (machineModel == 173) {
		if (CPVETCHECK() == false) {
			return;
		}else{
			CPVET(null, null);
		}
	} else {
		alert("目前只支持CPVE-500和CPVE-250参数管理");
		return;
	}
}

function copy(value) {
	if (value == 1) {
		$.ajax({
			type : "post",
			async : false,
			url : "wps/findCount?mac=" + node11.id + "&chanel=",
			data : {},
			dataType : "json", //返回数据形式为json  
			success : function(result) {
				if (result) {
					chanelCount = eval(result.count);
				}
			},
			error : function(errorMsg) {
				alert("数据请求失败，请联系系统管理员!");
			}
		});
		if (chanelCount == 0) {
			alert("该焊机所有通道都不存在参数，无法复制给別的焊机");
			return;
		}
	} else {
		$.ajax({
			type : "post",
			async : false,
			url : "wps/findCount?mac=" + node11.id + "&chanel=" + $('#fchanel').combobox('getValue'),
			data : {},
			dataType : "json", //返回数据形式为json  
			success : function(result) {
				if (result) {
					chanelCount = eval(result.count);
				}
			},
			error : function(errorMsg) {
				alert("数据请求失败，请联系系统管理员!");
			}
		});
		if (chanelCount == 0) {
			alert("该焊机当前通道不存在参数，无法复制给別的焊机");
			return;
		}
	}
	document.getElementById("mu").innerHTML = "源目标焊机：" + node11.text;
	$('#divro').window({
		title : "目标焊机选择",
		modal : true
	});
	$('#divro').window('open');
	symbol2 = value;
}

//通道复制
function savecopy() {
	var smachine = node11.id;
	rows = "";
	var chanel1 = $('#fchanel').combobox('getValue');
	var rows = $("#ro").datagrid("getSelections");
	var ro1Rows = new Array();
	/*var str = {};*/
	var obj = {};
	for (var i = 0; i < rows.length; i++) {
		if (!rows[i].gatherId) {
			/*str = {};*/
			ro1Rows.length = 0;
			alert(rows[i].equipmentNo + "焊机未绑定采集模块！！！")
			return;
		}
		/*str.equipmentNo = rows[i].equipmentNo;
		str.gatherNo = rows[i].gatherId;
		str.num = chanel1;
		str.nonum = chanel1;
		str.readynum = 0;
		str.failnum = 0;
		ro1Rows.push(str);*/
		ro1Rows.push({
			equipmentNo : rows[i].equipmentNo,
			gatherNo : rows[i].gatherId,
			num : chanel1,
			nonum : chanel1,
			readynum : '',
			failnum : ''
		})
	}
	obj.total = ro1Rows.length;
	obj.rows = ro1Rows;
	/*	if(symbol2==1){
			var url="wps/findCount?mac="+smachine+"&str="+str+"&chanel="+"";
		}else{
			var chanel = $('#fchanel').numberbox('getValue');
			var url="wps/findCount?mac="+smachine+"&str="+str+"&chanel="+chanel;
		}*/
	$("#ro1").datagrid({
		fitColumns : true,
		height : $("#divro1").height(),
		width : $("#divro1").width(),
		idField : 'id',
		url : '/',
		singleSelect : false,
		rownumbers : true,
		columns : [ [ {
			field : 'equipmentNo',
			title : '焊机编号',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'gatherNo',
			title : '采集编号',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'num',
			title : '通道号',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'nonum',
			title : '未响应通道号',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'readynum',
			title : '已完成通道号',
			width : 80,
			halign : "center",
			align : "left"
		}, {
			field : 'failnum',
			title : '失败通道号',
			width : 80,
			halign : "center",
			align : "left"
		} ] ]
	});
	var r = confirm("确认复制吗？");
	if (r == true) {
		x = 0;
		xx = 0;
		$('#divro').dialog('close');
		$('#divro1').window({
			title : "参数复制进行中，请稍等。。。",
			modal : true
		});
		$('#divro1').window('open');
		$("#ro1").datagrid("loadData", obj);
		if (symbol2 == 1) {
			var url1 = "wps/Spe?machine=" + node11.id + "&chanel=" + "";
		} else {
			var url1 = "wps/Spe?machine=" + node11.id + "&chanel=" + chanel1;
		}
		$.ajax({
			type : "post",
			async : false,
			url : url1,
			data : {},
			dataType : "json", //返回数据形式为json  
			success : function(result) {
				if (result) {
					yshu1 = eval(result.rows);
					for(var i=0;i<obj.total;i++){
						var chanelnum = result.chanelNum.substr(0, result.chanelNum.length-1);
						obj.rows[i].num = chanelnum;
						obj.rows[i].nonum = chanelnum;
					}
					$("#ro1").datagrid("loadData", obj);
				} else {
					alert("未查询到相关数据，请尝试索取保存。");
				}
			},
			error : function(errorMsg) {
				alert("数据请求失败，请联系系统管理员!");
			}
		});
		var yshuary = new Array();
		for(var q=0;q<rows.length;q++){
			for(var n=0;n<yshu1.length;n++){
				/*if (machineModel == 174) {
					yshuary.push(EPW(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 175) {
					yshuary.push(EPS(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 176) {
					yshuary.push(WBML(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 177) {
					yshuary.push(WBP(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 178) {
					yshuary.push(WBL(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 172) {
					yshuary.push(CPVES(yshu1[n], rows[q].gatherId));
				} else */if (machineModel == 171) {
					yshuary.push(CPVEW(yshu1[n], rows[q].gatherId));
				} else if (machineModel == 173) {
					yshuary.push(CPVET(yshu1[n], rows[q].gatherId));
				}else {
					alert("目前只支持CPVE-500和CPVE-250参数管理");
					return;
				}
			}
		}
		socketfc = new WebSocket(data1);
/*		if (symbol1 == 0) {
			window.setTimeout(function() {
				if (symbol1 == 0) {
					rows.length = 0;
					str = "";
					$('#ro').datagrid('clearSelections');
					socketfc.close();
					alert("复制完成");
				}
			}, 15000)
		}*/
		socketfc.onopen = function() {
			rows1 = ro1Rows;
			/*ccp(rows[0].gatherId);*/
			window.setInterval(function() {
				if(yshuary.length>0){
					socketfc.send(yshuary.pop());
				}
			}, 250)
		}
		socketfc.onmessage = function(msg) {
			var fan = msg.data;
			if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
				if (parseInt(fan.substring(18, 20), 16) == 1) {
					x++;
					if (x == rows1[xx].num.toString().split(",").length) {
						xx++;
						x=0;
						if (xx == rows1.length) {
							socketfc.close();
							if (socketfc.readyState != 1) {
								wait();
								alert("复制完成");
								symbol1++;
								x = 0;
								xx = 0;
								rows1.length = 0;
								rows.length = 0;
								str = "";
								$('#ro').datagrid('clearSelections');
							}

						} /*else {
							ccp(rows[xx].gatherId);
						}*/
					}
					for(var i=0;i<obj.total;i++){
						var chanelnum = obj.rows[i].nonum.split(",");
						var gatherno = obj.rows[i].gatherNo;
						if(parseInt(fan.substring(12, 16), 16) == parseInt(gatherno) && chanelnum.indexOf(parseInt(fan.substring(16, 18), 16).toString())>=0){
							chanelnum.pop(parseInt(fan.substring(16, 18), 16));
							obj.rows[i].nonum = chanelnum.join(",");
							obj.rows[i].readynum += parseInt(fan.substring(16, 18), 16).toString()+",";
						}
					}
				} else {
					x++;
					if (x == rows1[xx].num.toString().split(",").length) {
						xx++;
						x=0;
						if (xx == rows1.length) {
							socketfc.close();
							if (socketfc.readyState != 1) {
								wait();
								alert("复制成功");
								symbol1++;
								x = 0;
								xx = 0;
								$('#divro1').dialog('close');
								rows1.length = 0;
								rows.length = 0;
								str = "";
								$('#ro').datagrid('clearSelections');
							}

						} /*else {
							ccp(rows[xx].gatherId);
						}*/
					} /*else {
						ccp(rows[xx].gatherId);
					}*/
					for(var i=0;i<obj.total;i++){
						var chanelnum = obj.rows[i].nonum.toString().split(",");
						var gatherno = obj.rows[i].gatherNo;
						if(parseInt(fan.substring(12, 16), 16) == parseInt(gatherno) && chanelnum.indexOf(parseInt(fan.substring(16, 18), 16).toString())>=0){
							chanelnum.pop(parseInt(fan.substring(16, 18), 16));
							obj.rows[i].nonum = chanelnum.join(",");
							obj.rows[i].readynum += parseInt(fan.substring(16, 18), 16).toString()+",";
						}
//						obj.rows[i].failnum = obj.rows[i].failnum.substring(0,obj.rows[i].failnum.length-1);
					}
				}
			}
			$("#ro1").datagrid("loadData", obj);
		}
	} else {
		$('#divro').dialog('close');
	}
}

/*function ccp(value) {
	if (x == rows1[xx].num) {
		x = 0;
	}
	if (machineModel == 174) {
		socketfc.send(EPW(yshu1[x], value));
	} else if (machineModel == 175) {
		socketfc.send(EPS(yshu1[x], value));
	} else if (machineModel == 176) {
		socketfc.send(WBML(yshu1[x], value));
	} else if (machineModel == 177) {
		socketfc.send(WBP(yshu1[x], value));
	} else if (machineModel == 178) {
		socketfc.send(WBL(yshu1[x], value));
	} else if (machineModel == 171) {
		socketfc.send(CPVEW(yshu1[x], value));
	} else if (machineModel == 172) {
		socketfc.send(CPVES(yshu1[x], value));
	} else if (machineModel == 173) {
		socketfc.send(CPVET(yshu1[x], value));
	}
	x++;
}*/

function wait() {
	var smachine = node11.id;
	rows = "";
	var rows = $("#ro").datagrid("getSelections");
	var str = "";
	for (var i = 0; i < rows.length; i++) {
		str += rows[i].id + ",";
	}
	;
	if (symbol2 == 1) {
		var url = "wps/saveCopy?mac=" + smachine + "&str=" + str + "&chanel=" + "";
	} else {
		var chanel = $('#fchanel').numberbox('getValue');
		var url = "wps/saveCopy?mac=" + smachine + "&str=" + str + "&chanel=" + chanel;
	}
	$.ajax({
		type : "post",
		async : false,
		url : url,
		data : {},
		dataType : "json", //返回数据形式为json  
		success : function(result) {
			if (!result.success) {
				$.messager.show({
					title : 'Error',
					msg : result.errorMsg
				});
			} else {
				$('#ro').datagrid('clearSelections');
				$('#ro').datagrid('reload');
			}
		},
		error : function(errorMsg) {
			alert("数据请求失败，请联系系统管理员!");
		}
	});
}