//WB-M350L
function WBML(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1";
		} else {
			con = "0";
		}
		var arcrepet = 0;
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if ($('#ftorch').is(':checked')) {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial;
		var arcrepet = 0;
		if (yshu.farc == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if (yshu.farc == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if (yshu.fcontroller==1) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if (yshu.ftorch=="1") {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "1";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "2";
	} else {
		fgas = "4";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	//直径修改
	if (fdiameter == parseInt(131).toString(16)) {
		fdiameter = "A";
	} else if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(133).toString(16)) {
		fdiameter = "E";
	} else if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else if (fdiameter == parseInt(136).toString(16)) {
		fdiameter = "9";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	//材质修改
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "2";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "4";
	} else {
		fmaterial = "5";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}
	con = parseInt(con, 2);
	con = parseInt(con).toString(16);
	if (con.length < 4) {
		var length = 4 - con.length;
		for (var i = 0; i < length; i++) {
			con = "0" + con;
		}
	}

	/*		var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
			if(mach.length<4){
				var length = 4 - mach.length;
		        for(var i=0;i<length;i++){
		        	mach = "0" + mach;
		        };
			}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + "01" + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function WBMLGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 2) {
		$('#fgas').combobox('select', 122);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 8) {
		$('#fdiameter').combobox('select', 135);
	} else if (parseInt(data.substring(74, 76), 16) == 14) {
		$('#fdiameter').combobox('select', 133);
	} else {
		$('#fdiameter').combobox('select', 136);
	}
	if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 2) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	var sconx = parseInt(data.substring(80, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 16) {
		var length = 16 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(15, 16) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(14, 15) == "0") {
		$('#farc').combobox('select', 111);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "0") {
		$('#farc').combobox('select', 112);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "1") {
		$('#farc').combobox('select', 113);
	} else if (sconx.substring(12, 13) == "1") {
		$('#farc').combobox('select', 114);
	} 
	if (sconx.substring(10, 11) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(9, 10) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(2, 3) == "1") {
		$("#ftorch").prop("checked", true);
	} else {
		$("#ftorch").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if ($('#fselect').combobox('getValue') == 102) {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
	//	$("#gasflow").numberbox('setValue',(parseInt(da.substring(96,100),16)/10));

}
function WBMLINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无填弧坑",
		"value" : "111"
	}, {
		"text" : "有填弧坑",
		"value" : "112"
	}, {
		"text" : "有填弧坑(反复)",
		"value" : "113"
	}, {
		"text" : "电流点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG_2O2",
		"value" : "124"
	} ]);
	$('#fdiameter').combobox('clear');
	$('#fdiameter').combobox('loadData', [ {
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ0.9",
		"value" : "136"
	}, {
		"text" : "Φ1.0",
		"value" : "131"
	}, {
		"text" : "Φ1.2",
		"value" : "132"
	}, {
		"text" : "Φ1.4",
		"value" : "133"
	} ]);
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fweld_ele").numberbox('setValue', 100);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.4);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 122);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#fini_vol").numberbox('setValue', 18.5);
	$("#fweld_vol").numberbox('setValue', 19.0);
	$("#farc_vol").numberbox('setValue', 19.0);
	$("#fweld_tuny_vol").numberbox('setValue', 0.0);
	$("#farc_tuny_vol").numberbox('setValue', 0.0);
	$("#fini_vol1").numberbox('setValue', 0);
	$("#fweld_vol1").numberbox('setValue', 0);
	$("#farc_vol1").numberbox('setValue', 0);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 1);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$('#dmodel').hide();
	$('#imodel').hide();
	$('#dtorch').show();
	$('#itorch').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').show();
	$('#ifrequency').show();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 101; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function WBMLCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 30 || $('#fini_ele').numberbox('getValue') > 300) {
		alert("初期电流范围：30~300");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 12 || $('#fini_vol').numberbox('getValue') > 38) {
		alert("初期电压范围：12~38");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-100) || $('#fini_vol1').numberbox('getValue') > (100)) {
		alert("初期电压一元范围：-100~100");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 30 || $('#fweld_ele').numberbox('getValue') > 300) {
		alert("焊接电流范围：30~300");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 12 || $('#fweld_vol').numberbox('getValue') > 32) {
		alert("焊接电压范围：12~32");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-100) || $('#fweld_vol1').numberbox('getValue') > (100)) {
		alert("焊接电压一元范围：-100~100");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 30 || $('#farc_ele').numberbox('getValue') > 300) {
		alert("收弧电流范围：30~300");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 12 || $('#farc_vol').numberbox('getValue') > 32) {
		alert("收弧电压范围：12~32");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-30) || $('#farc_vol1').numberbox('getValue') > (30)) {
		alert("收弧电压一元范围：-30~30");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-10) || $('#fcharacter').numberbox('getValue') > (10)) {
		alert("电弧特性范围：-10~10");
		return false;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return false;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//WB-P400
function WBP(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1";
		} else {
			con = "0";
		}
		var arcrepet = 0;
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if ($('#ftorch').is(':checked')) {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial;
		var arcrepet = 0;
		if (yshu.farc == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if (yshu.farc == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if (yshu.fcontroller==1) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if (yshu.ftorch=="1") {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "1";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "2";
	} else if (fgas == parseInt(123).toString(16)) {
		fgas = "6";
	} else {
		fgas = "4";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	//直径修改
	if (fdiameter == parseInt(131).toString(16)) {
		fdiameter = "A";
	} else if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(134).toString(16)) {
		fdiameter = "10";
	} else if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else if (fdiameter == parseInt(136).toString(16)) {
		fdiameter = "9";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	//材质修改
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "4";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "2";
	} else if (fmaterial == parseInt(94).toString(16)) {
		fmaterial = "5";
	} else if (fmaterial == parseInt(96).toString(16)) {
		fmaterial = "8";
	} else {
		fmaterial = "9";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}
	if (fweldprocess.length < 2) {
		var length = 2 - fweldprocess.length;
		for (var i = 0; i < length; i++) {
			fweldprocess = "0" + fweldprocess;
		}
	}

	con = parseInt(con, 2);
	con = parseInt(con).toString(16);
	if (con.length < 4) {
		var length = 4 - con.length;
		for (var i = 0; i < length; i++) {
			con = "0" + con;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/
	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + fweldprocess + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function WBPGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 2) {
		$('#fgas').combobox('select', 122);
	} else if (parseInt(data.substring(72, 74), 16) == 6) {
		$('#fgas').combobox('select', 123);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 8) {
		$('#fdiameter').combobox('select', 135);
	} else if (parseInt(data.substring(74, 76), 16) == 16) {
		$('#fdiameter').combobox('select', 134);
	} else {
		$('#fdiameter').combobox('select', 136);
	}
	if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 2) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else if (parseInt(data.substring(76, 78), 16) == 8) {
		$('#fmaterial').combobox('select', 96);
	} else if (parseInt(data.substring(76, 78), 16) == 9) {
		$('#fmaterial').combobox('select', 97);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	$('#fweldprocess').combobox('select', parseInt(data.substring(78, 80), 16));
	var sconx = parseInt(data.substring(80, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 16) {
		var length = 16 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(15, 16) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(14, 15) == "0") {
		$('#farc').combobox('select', 111);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "0") {
		$('#farc').combobox('select', 112);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "1") {
		$('#farc').combobox('select', 113);
	} else if (sconx.substring(12, 13) == "1") {
		$('#farc').combobox('select', 114);
	} 
	if (sconx.substring(10, 11) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(9, 10) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(2, 3) == "1") {
		$("#ftorch").prop("checked", true);
	} else {
		$("#ftorch").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if ($('#fselect').combobox('getValue') == 102) {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
//	$("#gasflow").numberbox('setValue',(parseInt(da.substring(96,100),16)/10));
}
function WBPINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无填弧坑",
		"value" : "111"
	}, {
		"text" : "直流填弧坑",
		"value" : "112"
	}, {
		"text" : "脉冲填弧坑",
		"value" : "113"
	}, {
		"text" : "电弧点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG",
		"value" : "123"
	}, {
		"text" : "MIG_2O2",
		"value" : "124"
	} ]);
	$('#fdiameter').combobox('clear');
	$('#fdiameter').combobox('loadData', [ {
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ0.9",
		"value" : "136"
	}, {
		"text" : "Φ1.0",
		"value" : "131"
	}, {
		"text" : "Φ1.2",
		"value" : "132"
	}, {
		"text" : "Φ1.6",
		"value" : "134"
	} ]);
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	}, {
		"text" : "纯铝",
		"value" : "96"
	}, {
		"text" : "铝镁合金",
		"value" : "97"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流脉冲",
		"value" : "0"
	}, {
		"text" : "直流",
		"value" : "1"
	}, {
		"text" : "直流双脉冲",
		"value" : "3"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fweld_ele").numberbox('setValue', 150);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.4);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 122);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#fini_vol").numberbox('setValue', 21.5);
	$("#fweld_vol").numberbox('setValue', 19.0);
	$("#farc_vol").numberbox('setValue', 18.5);
	$("#fweld_tuny_vol").numberbox('setValue', 0.0);
	$("#farc_tuny_vol").numberbox('setValue', 0.0);
	$("#fini_vol1").numberbox('setValue', 0);
	$("#fweld_vol1").numberbox('setValue', 0);
	$("#farc_vol1").numberbox('setValue', 0);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 0);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$('#dmodel').hide();
	$('#imodel').hide();
	$('#dtorch').show();
	$('#itorch').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').show();
	$('#ifrequency').show();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 101; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function WBPCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 20 || $('#fini_ele').numberbox('getValue') > 400) {
		alert("初期电流范围：20~400");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 10 || $('#fini_vol').numberbox('getValue') > 45) {
		alert("初期电压范围：10~45");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-100) || $('#fini_vol1').numberbox('getValue') > (100)) {
		alert("初期电压一元范围：-100~100");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 20 || $('#fweld_ele').numberbox('getValue') > 400) {
		alert("焊接电流范围：20~400");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 12 || $('#fweld_vol').numberbox('getValue') > 38) {
		alert("焊接电压范围：12~38");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-100) || $('#fweld_vol1').numberbox('getValue') > (100)) {
		alert("焊接电压一元范围：-100~100");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 20 || $('#farc_ele').numberbox('getValue') > 400) {
		alert("收弧电流范围：20~400");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 12 || $('#farc_vol').numberbox('getValue') > 38) {
		alert("收弧电压范围：12~38");
		return false;
	}
	/*	       if($('#farc_vol1').numberbox('getValue')<(-30)||$('#farc_vol1').numberbox('getValue')>(30)){
		      	 alert("收弧电压一元范围：-30~30");
		      	 return false;
		       }*/
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-10) || $('#fcharacter').numberbox('getValue') > (10)) {
		alert("电弧特性范围：-10~10");
		return false;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return false;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//WB-500L
function WBL(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1";
		} else {
			con = "0";
		}
		var arcrepet = 0;
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} else {
			con = "0010" + con;
			arcrepet = 0;
		}
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if ($('#ftorch').is(':checked')) {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial;
		var arcrepet = 0;
		if (yshu.farc == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if (yshu.farc == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if (yshu.fcontroller==1) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if (yshu.ftorch=="1") {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "1";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "2";
	} else if (fgas == parseInt(123).toString(16)) {
		fgas = "6";
	} else {
		fgas = "4";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	//直径修改
	if (fdiameter == parseInt(131).toString(16)) {
		fdiameter = "A";
	} else if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(133).toString(16)) {
		fdiameter = "E";
	} else if (fdiameter == parseInt(134).toString(16)) {
		fdiameter = "10";
	} else if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else if (fdiameter == parseInt(136).toString(16)) {
		fdiameter = "9";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	//材质修改
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "4";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "2";
	} else if (fmaterial == parseInt(94).toString(16)) {
		fmaterial = "5";
	} else if (fmaterial == parseInt(95).toString(16)) {
		fmaterial = "7";
	} else if (fmaterial == parseInt(96).toString(16)) {
		fmaterial = "8";
	} else {
		fmaterial = "9";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}
	if (fweldprocess.length < 2) {
		var length = 2 - fweldprocess.length;
		for (var i = 0; i < length; i++) {
			fweldprocess = "0" + fweldprocess;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + fweldprocess + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function WBLGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 2) {
		$('#fgas').combobox('select', 122);
	} else if (parseInt(data.substring(72, 74), 16) == 6) {
		$('#fgas').combobox('select', 123);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 8) {
		$('#fdiameter').combobox('select', 135);
	} else if (parseInt(data.substring(74, 76), 16) == 14) {
		$('#fdiameter').combobox('select', 133);
	} else if (parseInt(data.substring(74, 76), 16) == 16) {
		$('#fdiameter').combobox('select', 134);
	} else {
		$('#fdiameter').combobox('select', 136);
	}
	if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 2) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else if (parseInt(data.substring(76, 78), 16) == 7) {
		$('#fmaterial').combobox('select', 95);
	} else if (parseInt(data.substring(76, 78), 16) == 8) {
		$('#fmaterial').combobox('select', 96);
	} else if (parseInt(data.substring(76, 78), 16) == 9) {
		$('#fmaterial').combobox('select', 97);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	$('#fweldprocess').combobox('select', parseInt(data.substring(78, 80), 16));
	var sconx = parseInt(data.substring(80, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 16) {
		var length = 16 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(15, 16) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(14, 15) == "0") {
		$('#farc').combobox('select', 111);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "0") {
		$('#farc').combobox('select', 112);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "1") {
		$('#farc').combobox('select', 113);
	} else if (sconx.substring(12, 13) == "1") {
		$('#farc').combobox('select', 114);
	} 
	if (sconx.substring(10, 11) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(9, 10) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(2, 3) == "1") {
		$("#ftorch").prop("checked", true);
	} else {
		$("#ftorch").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if ($('#fselect').combobox('getValue') == 102) {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
//	$("#gasflow").numberbox('setValue',(parseInt(da.substring(96,100),16)/10));
}
function WBLINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无填弧坑",
		"value" : "111"
	}, {
		"text" : "直流填弧坑",
		"value" : "112"
	}, {
		"text" : "脉冲填弧坑",
		"value" : "113"
	}, {
		"text" : "电弧点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG",
		"value" : "123"
	}, {
		"text" : "MIG_2O2",
		"value" : "124"
	} ]);
	$('#fdiameter').combobox('clear');
	$('#fdiameter').combobox('loadData', [ {
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ0.9",
		"value" : "136"
	}, {
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
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	}, {
		"text" : "铁氧体不锈钢实芯",
		"value" : "95"
	}, {
		"text" : "纯铝",
		"value" : "96"
	}, {
		"text" : "铝镁合金",
		"value" : "97"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流脉冲",
		"value" : "0"
	}, {
		"text" : "直流",
		"value" : "1"
	}, {
		"text" : "直流低飞溅",
		"value" : "2"
	}, {
		"text" : "直流双脉冲",
		"value" : "3"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fweld_ele").numberbox('setValue', 150);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.4);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 122);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#fini_vol").numberbox('setValue', 21.5);
	$("#fweld_vol").numberbox('setValue', 23.5);
	$("#farc_vol").numberbox('setValue', 21.5);
	$("#fweld_tuny_vol").numberbox('setValue', 0.0);
	$("#farc_tuny_vol").numberbox('setValue', 0.0);
	$("#fini_vol1").numberbox('setValue', 0);
	$("#fweld_vol1").numberbox('setValue', 0);
	$("#farc_vol1").numberbox('setValue', 0);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 0);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$('#dmodel').hide();
	$('#imodel').hide();
	$('#dtorch').show();
	$('#itorch').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').show();
	$('#ifrequency').show();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 101; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function WBLCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 20 || $('#fini_ele').numberbox('getValue') > 550) {
		alert("初期电流范围：20~550");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 10 || $('#fini_vol').numberbox('getValue') > 50) {
		alert("初期电压范围：10~50");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-100) || $('#fini_vol1').numberbox('getValue') > (100)) {
		alert("初期电压一元范围：-100~100");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 10 || $('#fweld_ele').numberbox('getValue') > 400) {
		alert("焊接电流范围：10~400");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 10 || $('#fweld_vol').numberbox('getValue') > 45) {
		alert("焊接电压范围：10~45");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-100) || $('#fweld_vol1').numberbox('getValue') > (100)) {
		alert("焊接电压一元范围：-100~100");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 20 || $('#farc_ele').numberbox('getValue') > 400) {
		alert("收弧电流范围：20~400");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 10 || $('#farc_vol').numberbox('getValue') > 45) {
		alert("收弧电压范围：10~45");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-100) || $('#farc_vol1').numberbox('getValue') > (100)) {
		alert("收弧电压一元范围：-100~100");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-10) || $('#fcharacter').numberbox('getValue') > (10)) {
		alert("电弧特性范围：-10~10");
		return false;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return false;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//EP-400
function EPS(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1";
		} else {
			con = "0";
		}
		var arcrepet = 0;
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if ($('#ftorch').is(':checked')) {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}	con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial;
		var arcrepet = 0;
		if (yshu.farc == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if (yshu.farc == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if (yshu.fcontroller==1) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if (yshu.ftorch=="1") {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "1";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "2";
	} else {
		fgas = "4";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	//直径修改
	if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(134).toString(16)) {
		fdiameter = "10";
	} else if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else if (fdiameter == parseInt(136).toString(16)) {
		fdiameter = "9";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	//材质修改
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "4";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "2";
	} else {
		fmaterial = "5";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}
	if (fweldprocess.length < 2) {
		var length = 2 - fweldprocess.length;
		for (var i = 0; i < length; i++) {
			fweldprocess = "0" + fweldprocess;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + fweldprocess + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function EPSGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 2) {
		$('#fgas').combobox('select', 122);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 8) {
		$('#fdiameter').combobox('select', 135);
	} else {
		$('#fdiameter').combobox('select', 136);
	}
	if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 2) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	$('#fweldprocess').combobox('select', parseInt(data.substring(78, 80), 16));
	var sconx = parseInt(data.substring(80, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 16) {
		var length = 16 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(15, 16) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(14, 15) == "0") {
		$('#farc').combobox('select', 111);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "0") {
		$('#farc').combobox('select', 112);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "1") {
		$('#farc').combobox('select', 113);
	} else if (sconx.substring(12, 13) == "1") {
		$('#farc').combobox('select', 114);
	} 
	if (sconx.substring(10, 11) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(9, 10) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(2, 3) == "1") {
		$("#ftorch").prop("checked", true);
	} else {
		$("#ftorch").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if ($('#fselect').combobox('getValue') == 102) {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
//	$("#frequency").numberbox('setValue', (parseInt(da.substring(92, 96), 16) / 10).toFixed(1));
//	$("#gasflow").numberbox('setValue',(parseInt(da.substring(96,100),16)/10));
}
function EPSINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无填弧坑",
		"value" : "111"
	}, {
		"text" : "直流填弧坑",
		"value" : "112"
	}, {
		"text" : "脉冲填弧坑",
		"value" : "113"
	}, {
		"text" : "电弧点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG_2O2",
		"value" : "124"
	} ]);
	$('#fdiameter').combobox('clear');
	$('#fdiameter').combobox('loadData', [ {
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ0.9",
		"value" : "136"
	}, {
		"text" : "Φ1.0",
		"value" : "131"
	}, {
		"text" : "Φ1.2",
		"value" : "132"
	} ]);
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流脉冲",
		"value" : "0"
	}, {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 1.0);
	$("#fini_ele").numberbox('setValue', 150);
	$("#fweld_ele").numberbox('setValue', 150);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 4.0);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 122);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#fini_vol").numberbox('setValue', 21.5);
	$("#fweld_vol").numberbox('setValue', 23.5);
	$("#farc_vol").numberbox('setValue', 21.5);
	$("#fweld_tuny_vol").numberbox('setValue', 0.0);
	$("#farc_tuny_vol").numberbox('setValue', 0.0);
	$("#fini_vol1").numberbox('setValue', 0);
	$("#fweld_vol1").numberbox('setValue', 0);
	$("#farc_vol1").numberbox('setValue', 0);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 0);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$('#dmodel').hide();
	$('#imodel').hide();
	$('#dtorch').show();
	$('#itorch').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').hide();
	$('#ifrequency').hide();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 101; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function EPSCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 20 || $('#fini_ele').numberbox('getValue') > 450) {
		alert("初期电流范围：20~450");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 10 || $('#fini_vol').numberbox('getValue') > 45) {
		alert("初期电压范围：10~45");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-100) || $('#fini_vol1').numberbox('getValue') > (100)) {
		alert("初期电压一元范围：-100~100");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 10 || $('#fweld_ele').numberbox('getValue') > 450) {
		alert("焊接电流范围：10~450");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 10 || $('#fweld_vol').numberbox('getValue') > 45) {
		alert("焊接电压范围：10~45");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-100) || $('#fweld_vol1').numberbox('getValue') > (100)) {
		alert("焊接电压一元范围：-100~100");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 20 || $('#farc_ele').numberbox('getValue') > 450) {
		alert("收弧电流范围：20~450");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 10 || $('#farc_vol').numberbox('getValue') > 45) {
		alert("收弧电压范围：10~45");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-100) || $('#farc_vol1').numberbox('getValue') > (100)) {
		alert("收弧电压一元范围：-100~100");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-10) || $('#fcharacter').numberbox('getValue') > (10)) {
		alert("电弧特性范围：-10~10");
		return false;
	}
/*	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return;
	}*/
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//EP-500
function EPW(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1";
		} else {
			con = "0";
		}
		var arcrepet = 0;
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if ($('#farc').combobox('getValue') == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if ($('#ftorch').is(':checked')) {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial;
		var arcrepet = 0;
		if (yshu.farc == 111) {
			con = "0000" + con;
			arcrepet = 0;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
			arcrepet = 0;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
			arcrepet = 0;
		} else if (yshu.farc == 114) {
			con = "0100" + con;
			arcrepet = 0;
		} 
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if (yshu.fcontroller==1) {
			con = "0000111" + con;
		} else {
			con = "0000110" + con;
		}
		if (yshu.ftorch=="1") {
			con = "0" + arcrepet + "1" + con;
		} else {
			con = "0" + arcrepet + "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 4) {
			var length = 4 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "1";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "2";
	} else {
		fgas = "4";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	//直径修改
	if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(134).toString(16)) {
		fdiameter = "10";
	} else {
		fdiameter = "E";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	//材质修改
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "4";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "2";
	} else {
		fmaterial = "5";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}
	if (fweldprocess.length < 2) {
		var length = 2 - fweldprocess.length;
		for (var i = 0; i < length; i++) {
			fweldprocess = "0" + fweldprocess;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + fweldprocess + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function EPWGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 2) {
		$('#fgas').combobox('select', 122);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 14) {
		$('#fdiameter').combobox('select', 133);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else {
		$('#fdiameter').combobox('select', 134);
	}
	if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 2) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	$('#fweldprocess').combobox('select', parseInt(data.substring(78, 80), 16));
	var sconx = parseInt(data.substring(80, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 16) {
		var length = 16 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(15, 16) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(14, 15) == "0") {
		$('#farc').combobox('select', 111);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "0") {
		$('#farc').combobox('select', 112);
	} else if (sconx.substring(14, 15) == "1" && sconx.substring(13, 14) == "1") {
		$('#farc').combobox('select', 113);
	} else if (sconx.substring(12, 13) == "1") {
		$('#farc').combobox('select', 114);
	} 
	if (sconx.substring(10, 11) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(9, 10) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(2, 3) == "1") {
		$("#ftorch").prop("checked", true);
	} else {
		$("#ftorch").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if ($('#fselect').combobox('getValue') == 102) {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
//	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
//	$("#gasflow").numberbox('setValue',(parseInt(da.substring(96,100),16)/10));
}
function EPWINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无填弧坑",
		"value" : "111"
	}, {
		"text" : "直流填弧坑",
		"value" : "112"
	}, {
		"text" : "脉冲填弧坑",
		"value" : "113"
	}, {
		"text" : "电弧点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG_2O2",
		"value" : "124"
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
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流脉冲",
		"value" : "0"
	}, {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 1.0);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fweld_ele").numberbox('setValue', 150);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 4.0);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 122);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#fini_vol").numberbox('setValue', 21.5);
	$("#fweld_vol").numberbox('setValue', 23.5);
	$("#farc_vol").numberbox('setValue', 21.5);
	$("#fweld_tuny_vol").numberbox('setValue', 0.0);
	$("#farc_tuny_vol").numberbox('setValue', 0.0);
	$("#fini_vol1").numberbox('setValue', 0);
	$("#fweld_vol1").numberbox('setValue', 0);
	$("#farc_vol1").numberbox('setValue', 0);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 0);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$('#dmodel').hide();
	$('#imodel').hide();
	$('#dtorch').show();
	$('#itorch').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').hide();
	$('#ifrequency').hide();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 101; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function EPWCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 20 || $('#fini_ele').numberbox('getValue') > 550) {
		alert("初期电流范围：20~550");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 10 || $('#fini_vol').numberbox('getValue') > 50) {
		alert("初期电压范围：10~50");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-100) || $('#fini_vol1').numberbox('getValue') > (100)) {
		alert("初期电压一元范围：-100~100");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 10 || $('#fweld_ele').numberbox('getValue') > 550) {
		alert("焊接电流范围：10~550");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 10 || $('#fweld_vol').numberbox('getValue') > 50) {
		alert("焊接电压范围：10~50");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-100) || $('#fweld_vol1').numberbox('getValue') > (100)) {
		alert("焊接电压一元范围：-100~100");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 20 || $('#farc_ele').numberbox('getValue') > 550) {
		alert("收弧电流范围：20~550");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 10 || $('#farc_vol').numberbox('getValue') > 50) {
		alert("收弧电压范围：10~50");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-100) || $('#farc_vol1').numberbox('getValue') > (100)) {
		alert("收弧电压一元范围：-100~100");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-10) || $('#fcharacter').numberbox('getValue') > (10)) {
		alert("电弧特性范围：-10~10");
		return false;
	}
/*	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return;
	}*/
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//CPVE-500
function CPVEW(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fmode').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial + con;
		if (yshu.farc == 111) {
			con = "0000" + con;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = yshu.fcontroller + con;
		con = yshu.fmode + con;
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "0";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "1";
	} else {
		fgas = "3";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	if (fdiameter == parseInt(131).toString(16)) {
		fdiameter = "A";
	} else if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(133).toString(16)) {
		fdiameter = "E";
	} else {
		fdiameter = "10";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "0";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "4";
	} else {
		fmaterial = "5";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + "0000" + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function CPVEWGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16).toFixed(1));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16).toFixed(1));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16).toFixed(1));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 0) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 122);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 14) {
		$('#fdiameter').combobox('select', 133);
	} else {
		$('#fdiameter').combobox('select', 134);
	}
	if (parseInt(data.substring(76, 78), 16) == 0) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	var sconx = parseInt(data.substring(82, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 8) {
		var length = 8 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(7, 8) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(6, 7) == "0") {
		$('#farc').combobox('select', 111);
	} else {
		$('#farc').combobox('select', 112);
	}
	if (sconx.substring(5, 6) == "1") {
		$('#farc').combobox('select', 113);
	}
	if (sconx.substring(4, 5) == "1") {
		$('#farc').combobox('select', 114);
	}
	if (sconx.substring(2, 3) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(1, 2) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(0, 1) == "1") {
		$("#fmode").prop("checked", true);
	} else {
		$("#fmode").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if (sconx.substring(2, 3) == "0") {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
	$("#gasflow").numberbox('setValue',(parseInt(data.substring(96,100),16)/10).toFixed(1));
}
function CPVEWINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无",
		"value" : "111"
	}, {
		"text" : "有",
		"value" : "112"
	}, {
		"text" : "反复",
		"value" : "113"
	}, {
		"text" : "点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG",
		"value" : "123"
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
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fini_vol").numberbox('setValue', 19.0);
	$("#fini_vol1").numberbox('setValue', 0.0);
	$("#fweld_vol").numberbox('setValue', 19.0);
	$("#fweld_vol1").numberbox('setValue', 0.0);
	$("#farc_vol").numberbox('setValue', 19.0);
	$("#farc_vol1").numberbox('setValue', 0.0);
	$("#fweld_ele").numberbox('setValue', 100);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.1);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 121);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#fweld_tuny_vol").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_vol").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 1);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#dtorch').hide();
	$('#itorch').hide();
	$('#dmodel').show();
	$('#imodel').show();
/*	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').hide();
	$('#ifrequency').hide();*/
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 31; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function CPVEWCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 30 || $('#fini_ele').numberbox('getValue') > 550) {
		alert("初期电流范围：30~550");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 12 || $('#fini_vol').numberbox('getValue') > 50) {
		alert("初期电压范围：12~50");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-30) || $('#fini_vol1').numberbox('getValue') > (30)) {
		alert("初期电压一元范围：-30~30");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 30 || $('#fweld_ele').numberbox('getValue') > 550) {
		alert("焊接电流范围：30~550");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 12 || $('#fweld_vol').numberbox('getValue') > 50) {
		alert("焊接电压范围：12~50");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-30) || $('#fweld_vol1').numberbox('getValue') > (30)) {
		alert("焊接电压一元范围：-30~30");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 30 || $('#farc_ele').numberbox('getValue') > 550) {
		alert("收弧电流范围：30~550");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 12 || $('#farc_vol').numberbox('getValue') > 50) {
		alert("收弧电压范围：12~50");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-30) || $('#farc_vol1').numberbox('getValue') > (30)) {
		alert("收弧电压一元范围：-30~30");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0.1 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0.1~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-99) || $('#fcharacter').numberbox('getValue') > (99)) {
		alert("电弧特性范围：-99~99");
		return false;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//CPVE-400
function CPVES(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fmode').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial + con;
		if (yshu.farc == 111) {
			con = "0000" + con;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = yshu.fcontroller + con;
		con = yshu.fmode + con;
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "0";
	} else if (fgas == parseInt(122).toString(16)) {
		fgas = "1";
	} else {
		fgas = "3";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	if (fdiameter == parseInt(131).toString(16)) {
		fdiameter = "A";
	} else if (fdiameter == parseInt(132).toString(16)) {
		fdiameter = "C";
	} else if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else {
		fdiameter = "9";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	if (fmaterial == parseInt(91).toString(16)) {
		fmaterial = "0";
	} else if (fmaterial == parseInt(92).toString(16)) {
		fmaterial = "1";
	} else if (fmaterial == parseInt(93).toString(16)) {
		fmaterial = "4";
	} else {
		fmaterial = "5";
	}
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + "0000" + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function CPVESGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40)));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52)));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 0) {
		$('#fgas').combobox('select', 121);
	} else if (parseInt(data.substring(72, 74), 16) == 1) {
		$('#fgas').combobox('select', 122);
	} else {
		$('#fgas').combobox('select', 124);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else if (parseInt(data.substring(74, 76), 16) == 12) {
		$('#fdiameter').combobox('select', 132);
	} else if (parseInt(data.substring(74, 76), 16) == 8) {
		$('#fdiameter').combobox('select', 135);
	} else {
		$('#fdiameter').combobox('select', 136);
	}
	if (parseInt(data.substring(76, 78), 16) == 0) {
		$('#fmaterial').combobox('select', 91);
	} else if (parseInt(data.substring(76, 78), 16) == 1) {
		$('#fmaterial').combobox('select', 92);
	} else if (parseInt(data.substring(76, 78), 16) == 4) {
		$('#fmaterial').combobox('select', 93);
	} else {
		$('#fmaterial').combobox('select', 94);
	}
	var sconx = parseInt(data.substring(82, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 8) {
		var length = 8 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(7, 8) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(6, 7) == "0") {
		$('#farc').combobox('select', 111);
	} else {
		$('#farc').combobox('select', 112);
	}
	if (sconx.substring(5, 6) == "1") {
		$('#farc').combobox('select', 113);
	}
	if (sconx.substring(4, 5) == "1") {
		$('#farc').combobox('select', 114);
	}
	if (sconx.substring(2, 3) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(1, 2) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(0, 1) == "1") {
		$("#fmode").prop("checked", true);
	} else {
		$("#fmode").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if (sconx.substring(2, 3) == "0") {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
}
function CPVESINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无",
		"value" : "111"
	}, {
		"text" : "有",
		"value" : "112"
	}, {
		"text" : "反复",
		"value" : "113"
	}, {
		"text" : "点焊",
		"value" : "114"
	} ]);
	$('#fgas').combobox('clear');
	$('#fgas').combobox('loadData', [ {
		"text" : "CO2",
		"value" : "121"
	}, {
		"text" : "MAG",
		"value" : "122"
	}, {
		"text" : "MIG",
		"value" : "123"
	} ]);
	$('#fdiameter').combobox('clear');
	$('#fdiameter').combobox('loadData', [ {
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ0.9",
		"value" : "136"
	}, {
		"text" : "Φ1.0",
		"value" : "131"
	}, {
		"text" : "Φ1.2",
		"value" : "132"
	} ]);
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	}, {
		"text" : "不锈钢实芯",
		"value" : "92"
	}, {
		"text" : "低碳钢药芯",
		"value" : "93"
	}, {
		"text" : "不锈钢药芯",
		"value" : "94"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fini_vol").numberbox('setValue', 19.0);
	$("#fini_vol1").numberbox('setValue', 0.0);
	$("#fweld_vol").numberbox('setValue', 19.0);
	$("#fweld_vol1").numberbox('setValue', 0.0);
	$("#farc_vol").numberbox('setValue', 19.0);
	$("#farc_vol1").numberbox('setValue', 0.0);
	$("#fweld_ele").numberbox('setValue', 100);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.4);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 121);
	$('#fdiameter').combobox('select', 132);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#fweld_tuny_vol").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_vol").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 1);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#dtorch').hide();
	$('#itorch').hide();
	$('#dmodel').show();
	$('#imodel').show();
	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').hide();
	$('#ifrequency').hide();
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 31; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function CPVESCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 30 || $('#fini_ele').numberbox('getValue') > 450) {
		alert("初期电流范围：30~450");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 12 || $('#fini_vol').numberbox('getValue') > 45) {
		alert("初期电压范围：12~45");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-30) || $('#fini_vol1').numberbox('getValue') > (30)) {
		alert("初期电压一元范围：-30~30");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 30 || $('#fweld_ele').numberbox('getValue') > 450) {
		alert("焊接电流范围：30~450");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 12 || $('#fweld_vol').numberbox('getValue') > 45) {
		alert("焊接电压范围：12~45");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-30) || $('#fweld_vol1').numberbox('getValue') > (30)) {
		alert("焊接电压一元范围：-30~30");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 30 || $('#farc_ele').numberbox('getValue') > 450) {
		alert("收弧电流范围：30~450");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 12 || $('#farc_vol').numberbox('getValue') > 45) {
		alert("收弧电压范围：12~45");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-30) || $('#farc_vol1').numberbox('getValue') > (30)) {
		alert("收弧电压一元范围：-30~30");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-99) || $('#fcharacter').numberbox('getValue') > (99)) {
		alert("电弧特性范围：-99~99");
		return false;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return false;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//CPVE-250
function CPVET(yshu,gather) {
	if(yshu==null){
		var chanel = parseInt($('#fchanel').combobox('getValue')).toString(16);
		var fweldprocess = parseInt($('#fweldprocess').combobox('getValue')).toString(16);
		var ftime = (parseFloat($('#ftime').numberbox('getValue')) * 10).toString(16);
		var fadvance = (parseFloat($('#fadvance').numberbox('getValue')) * 10).toString(16);
		var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
		var fini_vol = (parseFloat($('#fini_vol').numberbox('getValue')) * 10).toString(16);
		var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
		var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
		var fweld_vol = (parseFloat($('#fweld_vol').numberbox('getValue')) * 10).toString(16);
		var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
		var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
		var farc_vol = (parseFloat($('#farc_vol').numberbox('getValue')) * 10).toString(16);
		var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
		var fhysteresis = (parseFloat($('#fhysteresis').numberbox('getValue')) * 10).toString(16);
		var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
		var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
		var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
		var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
		var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
		if (parseInt($('#fselect').combobox('getValue')) == 102) {
			var fweld_tuny_vol = (parseFloat($('#fweld_tuny_vol').numberbox('getValue')) * 10).toString(16);
			var farc_tuny_vol = (parseFloat($('#farc_tuny_vol').numberbox('getValue')) * 10).toString(16);
		} else {
			var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
			var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
		}
		var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
		//con需要修改
		var con = "";
		if ($('#finitial').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#farc').combobox('getValue') == 111) {
			con = "0000" + con;
		} else if ($('#farc').combobox('getValue') == 112) {
			con = "0001" + con;
		} else if ($('#farc').combobox('getValue') == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if ($('#fselect').combobox('getValue') == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fcontroller').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		if ($('#fmode').is(':checked')) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		var gasflow = parseFloat($('#gasflow').numberbox('getValue') * 10).toString(16);
		var frequency = parseFloat($('#frequency').numberbox('getValue') * 10).toString(16);
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
	}else{
		var chanel = (yshu.FWPSNum).toString(16);
  		var ftime=(yshu.ftime*10).toString(16);
		var fadvance=(yshu.fadvance*10).toString(16);
		var fini_ele=(yshu.fini_ele).toString(16);
		var fini_vol=(yshu.fini_vol*10).toString(16);
		var fini_vol1=(yshu.fini_vol1).toString(16);
		var fweld_vol=(yshu.fweld_vol*10).toString(16);
		var fweld_vol1=(yshu.fweld_vol1).toString(16);
		var farc_vol=(yshu.farc_vol*10).toString(16);
		var farc_vol1=(yshu.farc_vol1).toString(16);
		var fweld_ele=(yshu.fweld_ele).toString(16);
		var farc_ele=(yshu.farc_ele).toString(16);
		var fhysteresis=(yshu.fhysteresis*10).toString(16);
		var fcharacter=(yshu.fcharacter).toString(16);
		var fgas=parseInt(yshu.fgas).toString(16);
		var fdiameter=parseInt(yshu.fdiameter).toString(16);
		var fmaterial=parseInt(yshu.fmaterial).toString(16);
		var fweld_tuny_ele =(yshu.fweld_tuny_ele).toString(16);
		var farc_tuny_ele =(yshu.farc_tuny_ele).toString(16);
		if(yshu.fselect == 101){
			var fweld_tuny_vol =(yshu.fweld_tuny_vol).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter).toString(16);
		}else{
			var fweld_tuny_vol =(yshu.fweld_tuny_vol*10).toString(16);
			var farc_tuny_vol =(yshu.Fdiameter*10).toString(16);
		}
		var frequency = (yshu.frequency*10).toString(16);
		var gasflow = (yshu.gasflow*10).toString(16);
		var fweldprocess = (yshu.fprocessid).toString(16);
		//con需要修改
		var con = "";
		con = yshu.finitial + con;
		if (yshu.farc == 111) {
			con = "0000" + con;
		} else if (yshu.farc == 112) {
			con = "0001" + con;
		} else if (yshu.farc == 113) {
			con = "0011" + con;
		} else {
			con = "0100" + con;
		}
		if (yshu.fselect == 101) {
			con = "1" + con;
		} else {
			con = "0" + con;
		}
		con = yshu.fcontroller + con;
		con = yshu.fmode + con;
		con = parseInt(con, 2);
		con = parseInt(con).toString(16);
		if (con.length < 2) {
			var length = 2 - con.length;
			for (var i = 0; i < length; i++) {
				con = "0" + con;
			}
		}
		mach=parseInt(gather).toString(16);
		if (mach.length < 4) {
			var length = 4 - mach.length;
			for (var i = 0; i < length; i++) {
				mach = "0" + mach;
			}
		}
	}
	if (chanel.length < 2) {
		var length = 2 - chanel.length;
		for (var i = 0; i < length; i++) {
			chanel = "0" + chanel;
		}
	}
	if (ftime.length < 4) {
		var length = 4 - ftime.length;
		for (var i = 0; i < length; i++) {
			ftime = "0" + ftime;
		}
	}
	if (fadvance.length < 4) {
		var length = 4 - fadvance.length;
		for (var i = 0; i < length; i++) {
			fadvance = "0" + fadvance;
		}
	}
	if (fini_ele.length < 4) {
		var length = 4 - fini_ele.length;
		for (var i = 0; i < length; i++) {
			fini_ele = "0" + fini_ele;
		}
	}
	if (fini_vol.length < 4) {
		var length = 4 - fini_vol.length;
		for (var i = 0; i < length; i++) {
			fini_vol = "0" + fini_vol;
		}
	}
	if (fini_vol1.length < 4) {
		var length = 4 - fini_vol1.length;
		for (var i = 0; i < length; i++) {
			fini_vol1 = "0" + fini_vol1;
		}
	}
	if (fweld_ele.length < 4) {
		var length = 4 - fweld_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_ele = "0" + fweld_ele;
		}
	}
	if (fweld_vol.length < 4) {
		var length = 4 - fweld_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_vol = "0" + fweld_vol;
		}
	}
	if (fweld_vol1.length < 4) {
		var length = 4 - fweld_vol1.length;
		for (var i = 0; i < length; i++) {
			fweld_vol1 = "0" + fweld_vol1;
		}
	}
	if (farc_ele.length < 4) {
		var length = 4 - farc_ele.length;
		for (var i = 0; i < length; i++) {
			farc_ele = "0" + farc_ele;
		}
	}
	if (farc_vol.length < 4) {
		var length = 4 - farc_vol.length;
		for (var i = 0; i < length; i++) {
			farc_vol = "0" + farc_vol;
		}
	}
	if (farc_vol1.length < 4) {
		var length = 4 - farc_vol1.length;
		for (var i = 0; i < length; i++) {
			farc_vol1 = "0" + farc_vol1;
		}
	}
	if (fhysteresis.length < 4) {
		var length = 4 - fhysteresis.length;
		for (var i = 0; i < length; i++) {
			fhysteresis = "0" + fhysteresis;
		}
	}
	if (fcharacter.length < 4) {
		var length = 4 - fcharacter.length;
		for (var i = 0; i < length; i++) {
			fcharacter = "0" + fcharacter;
		}
	}
	//			alert($('#fgas').combobox('getValue'));
	if (fgas == parseInt(121).toString(16)) {
		fgas = "0";
	} else {
		fgas = "1";
	}
	if (fgas.length < 2) {
		var length = 2 - fgas.length;
		for (var i = 0; i < length; i++) {
			fgas = "0" + fgas;
		}
	}
	//			alert($('#fdiameter').combobox('getValue'));
	if (fdiameter == parseInt(135).toString(16)) {
		fdiameter = "8";
	} else {
		fdiameter = "A";
	}
	if (fdiameter.length < 2) {
		var length = 2 - fdiameter.length;
		for (var i = 0; i < length; i++) {
			fdiameter = "0" + fdiameter;
		}
	}
	//			alert($('#fmaterial').combobox('getValue'));
	var fmaterial = "0";
	if (fmaterial.length < 2) {
		var length = 2 - fmaterial.length;
		for (var i = 0; i < length; i++) {
			fmaterial = "0" + fmaterial;
		}
	}
	if (fweld_tuny_ele.length < 2) {
		var length = 2 - fweld_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_ele = "0" + fweld_tuny_ele;
		}
	}
	if (fweld_tuny_vol.length < 2) {
		var length = 2 - fweld_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			fweld_tuny_vol = "0" + fweld_tuny_vol;
		}
	}
	if (farc_tuny_ele.length < 2) {
		var length = 2 - farc_tuny_ele.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_ele = "0" + farc_tuny_ele;
		}
	}
	if (farc_tuny_vol.length < 2) {
		var length = 2 - farc_tuny_vol.length;
		for (var i = 0; i < length; i++) {
			farc_tuny_vol = "0" + farc_tuny_vol;
		}
	}

	/*			var mach = parseInt(selectMachine[smindex].gatherId).toString(16);
				if(mach.length<4){
					var length = 4 - mach.length;
			        for(var i=0;i<length;i++){
			        	mach = "0" + mach;
			        };
				}*/

	if (frequency.length < 4) {
		var length = 4 - frequency.length;
		for (var i = 0; i < length; i++) {
			frequency = "0" + frequency;
		}
	}

	if (gasflow.length < 4) {
		var length = 4 - gasflow.length;
		for (var i = 0; i < length; i++) {
			gasflow = "0" + gasflow;
		}
	}

	var xiafasend1 = mach + chanel + ftime + fadvance + fini_ele + fini_vol + fini_vol1 + fweld_ele + fweld_vol + fweld_vol1 + farc_ele + farc_vol + farc_vol1 + fhysteresis + fcharacter + fgas
		+ fdiameter + fmaterial + "0000" + con + fweld_tuny_ele + fweld_tuny_vol + farc_tuny_ele + farc_tuny_vol + frequency + gasflow + "00000000";

	var xxx = xiafasend1.toUpperCase();
	var data_length = ((parseInt(xxx.length) + 12) / 2).toString(16);
	if (data_length.length < 2) {
		var length = 2 - data_length.length;
		for (var i = 0; i < length; i++) {
			data_length = "0" + data_length;
		}
	}
	;
	xxx = "7E" + data_length + "01010152" + xiafasend1;
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

	var xiafasend2 = (xxx + checksend).substring(2);
	if(yshu!=null){
		return "7E"+xiafasend2+"7D";
	}
	var symbol = 0;
	var websocket = null;
	if (typeof (WebSocket) == "undefined") {
		WEB_SOCKET_SWF_LOCATION = "resources/js/WebSocketMain.swf";
		WEB_SOCKET_DEBUG = true;
	}
	websocket = new WebSocket(data1);
	websocket.onopen = function() {
		var oneMinuteTimer = window.setTimeout(function() {
			if (symbol == 0) {
				alert("下发完成");
			}
		}, 30000);
		websocket.send("7E" + xiafasend2 + "7D");
	}
	websocket.onmessage = function(msg) {
		var fan = msg.data;
		if (fan.substring(0, 2) == "7E" && fan.substring(10, 12) == "52") {
			symbol = 1;
			if (parseInt(fan.substring(18, 20), 16) == 1) {
				websocket.close();
				alert("下发失败");
			} else {
				websocket.close();
				save(1);
				alert("下发成功");
			}
		}
	}
}
function CPVETGET(data) {
	$('#fchanel').combobox('select', parseInt(data.substring(18, 20), 16));
	$("#ftime").numberbox('setValue', (parseInt(data.substring(20, 24), 16) / 10).toFixed(1));
	$("#fadvance").numberbox('setValue', (parseInt(data.substring(24, 28), 16) / 10).toFixed(1));
	$("#fini_ele").numberbox('setValue', parseInt(data.substring(28, 32), 16));
	$("#fini_vol").numberbox('setValue', (parseInt(data.substring(32, 36), 16) / 10).toFixed(1));
	$("#fini_vol1").numberbox('setValue', parseInt(data.substring(36, 40), 16));
	$("#fweld_ele").numberbox('setValue', parseInt(data.substring(40, 44), 16));
	$("#fweld_vol").numberbox('setValue', (parseInt(data.substring(44, 48), 16) / 10).toFixed(1));
	$("#fweld_vol1").numberbox('setValue', parseInt(data.substring(48, 52), 16));
	$("#farc_ele").numberbox('setValue', parseInt(data.substring(52, 56), 16));
	$("#farc_vol").numberbox('setValue', (parseInt(data.substring(56, 60), 16) / 10).toFixed(1));
	$("#farc_vol1").numberbox('setValue', parseInt(data.substring(60, 64), 16));
	$("#fhysteresis").numberbox('setValue', (parseInt(data.substring(64, 68), 16) / 10).toFixed(1));
	$("#fcharacter").numberbox('setValue', parseInt(data.substring(68, 72), 16));
	if (parseInt(data.substring(72, 74), 16) == 0) {
		$('#fgas').combobox('select', 121);
	} else {
		$('#fgas').combobox('select', 122);
	}
	if (parseInt(data.substring(74, 76), 16) == 10) {
		$('#fdiameter').combobox('select', 131);
	} else {
		$('#fdiameter').combobox('select', 135);
	}
	$('#fmaterial').combobox('select', 91);
	var sconx = parseInt(data.substring(82, 84), 16);
	sconx = sconx.toString(2);
	if (sconx.length < 8) {
		var length = 8 - sconx.length;
		for (var i = 0; i < length; i++) {
			sconx = "0" + sconx;
		}
	}
	if (sconx.substring(7, 8) == "1") {
		$("#finitial").prop("checked", true);
	} else {
		$("#finitial").prop("checked", false);
	}
	if (sconx.substring(6, 7) == "0") {
		$('#farc').combobox('select', 111);
	} else {
		$('#farc').combobox('select', 112);
	}
	if (sconx.substring(5, 6) == "1") {
		$('#farc').combobox('select', 113);
	}
	if (sconx.substring(4, 5) == "1") {
		$('#farc').combobox('select', 114);
	}
	if (sconx.substring(2, 3) == "0") {
		$('#fselect').combobox('select', 102);
	} else {
		$('#fselect').combobox('select', 101);
	}
	if (sconx.substring(1, 2) == "1") {
		$("#fcontroller").prop("checked", true);
	} else {
		$("#fcontroller").prop("checked", false);
	}
	if (sconx.substring(0, 1) == "1") {
		$("#fmode").prop("checked", true);
	} else {
		$("#fmode").prop("checked", false);
	}
	$("#fweld_tuny_ele").numberbox('setValue', parseInt(data.substring(84, 86), 16));
	$("#farc_tuny_ele").numberbox('setValue', parseInt(data.substring(88, 90), 16));
	if (sconx.substring(2, 3) == "0") {
		$("#fweld_tuny_vol").numberbox('setValue', (parseInt(data.substring(86, 88), 16) / 10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue', (parseInt(data.substring(90, 92), 16) / 10).toFixed(1));
	} else {
		$("#fweld_tuny_vol1").numberbox('setValue', parseInt(data.substring(86, 88), 16));
		$("#farc_tuny_vol1").numberbox('setValue', parseInt(data.substring(90, 92), 16));
	}
	$("#frequency").numberbox('setValue', (parseInt(data.substring(92, 96), 16) / 10).toFixed(1));
	$("#gasflow").numberbox('setValue',(parseInt(data.substring(96,100),16)/10).toFixed(1));
}
function CPVETINIT(value) {
	$('#farc').combobox('clear');
	$('#farc').combobox('loadData', [ {
		"text" : "无",
		"value" : "111"
	}, {
		"text" : "有",
		"value" : "112"
	}, {
		"text" : "反复",
		"value" : "113"
	}, {
		"text" : "点焊",
		"value" : "114"
	} ]);
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
		"text" : "Φ0.8",
		"value" : "135"
	}, {
		"text" : "Φ1.0",
		"value" : "131"
	} ]);
	$('#fmaterial').combobox('clear');
	$('#fmaterial').combobox('loadData', [ {
		"text" : "低碳钢实芯",
		"value" : "91"
	} ]);
	$('#fweldprocess').combobox('clear');
	$('#fweldprocess').combobox('loadData', [ {
		"text" : "直流",
		"value" : "1"
	} ]);
	document.getElementById("yiyuan1").style.display = "none";
	document.getElementById("yiyuan3").style.display = "none";
	document.getElementById("gebie1").style.display = "block";
	document.getElementById("gebie3").style.display = "block";
	$("#fmode").prop("checked", false);
	$("#finitial").prop("checked", false);
	$("#fcontroller").prop("checked", false);
	$("#ftorch").prop("checked", false);
	$('#fselect').combobox('select', 102);
	$("#ftime").numberbox('setValue', 3.0);
	$("#fadvance").numberbox('setValue', 0.1);
	$("#fini_ele").numberbox('setValue', 100);
	$("#fini_vol").numberbox('setValue', 19.0);
	$("#fini_vol1").numberbox('setValue', 0.0);
	$("#fweld_vol").numberbox('setValue', 19.0);
	$("#fweld_vol1").numberbox('setValue', 0.0);
	$("#farc_vol").numberbox('setValue', 19.0);
	$("#farc_vol1").numberbox('setValue', 0.0);
	$("#fweld_ele").numberbox('setValue', 100);
	$("#farc_ele").numberbox('setValue', 100);
	$("#fhysteresis").numberbox('setValue', 0.4);
	$("#fcharacter").numberbox('setValue', 0);
	$('#fgas').combobox('select', 121);
	$('#fdiameter').combobox('select', 131);
	$('#fmaterial').combobox('select', 91);
	$("#fweld_tuny_ele").numberbox('setValue', 0);
	$("#fweld_tuny_vol").numberbox('setValue', 0);
	$("#farc_tuny_ele").numberbox('setValue', 0);
	$("#farc_tuny_vol").numberbox('setValue', 0);
	$('#farc').combobox('select', 111);
	$('#fweldprocess').combobox('select', 1);
	$("#frequency").numberbox('setValue', 3);
	$("#gasflow").numberbox('setValue', 1.5);
	$("#fweld_tuny_vol1").numberbox('setValue', 0);
	$("#farc_tuny_vol1").numberbox('setValue', 0);
	$('#dtorch').hide();
	$('#itorch').hide();
	$('#dmodel').show();
	$('#imodel').show();
/*	$('#dgasflow').hide();
	$('#igasflow').hide();
	$('#dfrequency').hide();
	$('#ifrequency').hide();*/
	if(value==1){
		$('#fchanel').combobox('clear');
		$('#fchanel').combobox('loadData', {});//清空option选项   
		var str = "";
		for (var i = 1; i < 31; i++) {
			str += '<option value="' + i + '">通道号' + i + '</option>';
		}
		$('#fchanel').html(str);
		$('#fchanel').combobox('select', 1);
		$('#fchanel').combobox();
	}
}
function CPVETCHECK() {
	if ($('#ftime').numberbox('getValue') < 0.1 || $('#ftime').numberbox('getValue') > 10) {
		alert("点焊时间：0.1~10");
		return false;
	}
	if ($('#fadvance').numberbox('getValue') < 0 || $('#fadvance').numberbox('getValue') > 10) {
		alert("提前送气范围：0~10");
		return false;
	}
	if ($('#fini_ele').numberbox('getValue') < 30 || $('#fini_ele').numberbox('getValue') > 300) {
		alert("初期电流范围：30~300");
		return false;
	}
	if ($('#fini_vol').numberbox('getValue') < 12 || $('#fini_vol').numberbox('getValue') > 32) {
		alert("初期电压范围：12~32");
		return false;
	}
	if ($('#fini_vol1').numberbox('getValue') < (-30) || $('#fini_vol1').numberbox('getValue') > (30)) {
		alert("初期电压一元范围：-30~30");
		return false;
	}
	if ($('#fweld_ele').numberbox('getValue') < 30 || $('#fweld_ele').numberbox('getValue') > 300) {
		alert("焊接电流范围：30~300");
		return false;
	}
	if ($('#fweld_vol').numberbox('getValue') < 12 || $('#fweld_vol').numberbox('getValue') > 32) {
		alert("焊接电压范围：12~32");
		return false;
	}
	if ($('#fweld_vol1').numberbox('getValue') < (-30) || $('#fweld_vol1').numberbox('getValue') > (30)) {
		alert("焊接电压一元范围：-30~30");
		return false;
	}
	if ($('#farc_ele').numberbox('getValue') < 30 || $('#farc_ele').numberbox('getValue') > 300) {
		alert("收弧电流范围：30~300");
		return false;
	}
	if ($('#farc_vol').numberbox('getValue') < 12 || $('#farc_vol').numberbox('getValue') > 32) {
		alert("收弧电压范围：12~32");
		return false;
	}
	if ($('#farc_vol1').numberbox('getValue') < (-30) || $('#farc_vol1').numberbox('getValue') > (30)) {
		alert("收弧电压一元范围：-30~30");
		return false;
	}
	if ($('#gasflow').numberbox('getValue') < (0.5) || $('#gasflow').numberbox('getValue') > (5)) {
		alert("气体流量范围：0.5~5");
		return;
	}
	if ($('#frequency').numberbox('getValue') < (0.5) || $('#frequency').numberbox('getValue') > (32)) {
		alert("双脉冲频率范围：0.5~32");
		return false;
	}
	if ($('#fhysteresis').numberbox('getValue') < 0.1 || $('#fhysteresis').numberbox('getValue') > 10) {
		alert("滞后送气范围：0.1~10");
		return false;
	}
	if ($('#fcharacter').numberbox('getValue') < (-99) || $('#fcharacter').numberbox('getValue') > (99)) {
		alert("电弧特性范围：-99~99");
		return false;
	}
	if ($('#fweld_tuny_ele').numberbox('getValue') < (0) || $('#fweld_tuny_ele').numberbox('getValue') > (50)) {
		alert("焊接电流微调范围：0~50");
		return false;
	}
	if ($('#farc_tuny_ele').numberbox('getValue') < (0) || $('#farc_tuny_ele').numberbox('getValue') > (50)) {
		alert("收弧电流微调范围：0~50");
		return false;
	}
	if ($('#fselect').combobox('getValue') == 102) {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (5)) {
			alert("焊接电压微调范围：0~5");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (5)) {
			alert("收弧电压微调范围：0~5");
			return false;
		}
	} else {
		if ($('#fweld_tuny_vol').numberbox('getValue') < (0) || $('#fweld_tuny_vol').numberbox('getValue') > (20)) {
			alert("焊接电压一元微调范围：0~20");
			return false;
		}
		if ($('#farc_tuny_vol').numberbox('getValue') < (0) || $('#farc_tuny_vol').numberbox('getValue') > (20)) {
			alert("收弧电压一元微调范围：0~20");
			return false;
		}
	}
}

//华远
function HUAYUAN(yshu,gather){
	
}
function HUAYUANGET(data){
	
}
function HUAYUANINIT(value){
	
}
function HUAYUANCHECK(){
	
}