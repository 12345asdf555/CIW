$(function(){
	CompanyloadsDatagrid();
})
var chartStr = "";
$(document).ready(function(){
	showCompanyLoadsChart();
})

function setParam(){
	var dtoTime1 = $("#dtoTime1").datetimebox('getValue');
	var dtoTime2 = $("#dtoTime2").datetimebox('getValue');
	chartStr = "?dtoTime1="+dtoTime1+"&dtoTime2="+dtoTime2;
}

var array1 = new Array();
var array2 = new Array();
function showCompanyLoadsChart(){
   	//初始化echart实例
	charts = echarts.init(document.getElementById("companyLoadsChart"));
	//显示加载动画效果
	charts.showLoading({
		text: '稍等片刻,精彩马上呈现...',
		effect:'whirling'
	});
	option = {
		title:{
			text: "Android采集转发结果表"//焊接工艺超标统计
		},
		tooltip:{
			trigger: 'axis'//坐标轴触发，即是否跟随鼠标集中显示数据
		},
		legend:{
			data:"android上传记录"
		},
		 dataZoom: [
             {
                 type: 'slider',	//支持鼠标滚轮缩放
                 start: 0,			//默认数据初始缩放范围为10%到90%
                 end: 100
             },
             {
                 type: 'inside',	//支持单独的滑动条缩放
                 start: 0,			//默认数据初始缩放范围为10%到90%
                 end: 100
             }
        ],
		grid:{
			left:'50',//组件距离容器左边的距离
			right:'4%',
			bottom:'20',
			containLaber:true//区域是否包含坐标轴刻度标签
		},
		toolbox:{
			feature:{
				saveAsImage:{}//保存为图片
			},
			right:'2%'
		},
		xAxis:{
			type:'category',
			data: array1
		},
		yAxis:{
			type: 'value',//value:数值轴，category:类目轴，time:时间轴，log:对数轴
			axisLabel: { 
				  name:'数值大小',
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value}%'  
            },  
            show: true  
		},
		series:[{
			name : "android上传记录",
      		type :'line',//折线图
      		data : array2,
      		itemStyle : {
      			normal: {
      				label : {
      					show: true,//显示每个折点的值
      					formatter: '{c}%'  
      				}
      			}
      		}
		}]
	}
	//为echarts对象加载数据
	charts.setOption(option);
	//隐藏动画加载效果
	charts.hideLoading();
	$("#chartLoading").hide();
}

function CompanyloadsDatagrid(){
	setParam();
	var column = new Array();
	 $.ajax({  
         type : "post",  
         async : false,
         url : "rep/AndroidReport"+chartStr,
         data : {},  
         dataType : "json", //返回数据形式为json  
         success : function(result) {  
             if (result) {
            	 for(var i=0;i<result.rows.length;i++){
                   	 array1.push(result.rows[i].time);
                	 array2.push(result.rows[i].count);
             	 }
             }  
         },  
        error : function(errorMsg) {  
             alert("请求数据失败啦,请联系系统管理员!");  
         }  
    }); 
	 $("#companyLoadsTable").datagrid( {
			fitColumns : true,
			height : $("body").height() - $("#companyLoadsChart").height()-$("#companyLoads_btn").height()-30,
			width : $("body").width(),
			idField : 'id',
			pageSize : 10,
			pageList : [ 10, 20, 30, 40, 50],
			url : "companyChart/getCompanyLoads"+chartStr,
			singleSelect : true,
			rownumbers : true,
			showPageList : false,
			pagination : true,
			columns :[column],
			rowStyler: function(index,row){
	            if ((index % 2)!=0){
                	//处理行代背景色后无法选中
                	var color=new Object();
                    color.class="rowColor";
                    return color;
	            }
	        }
	 })
}

function serachCompanyloads(){
	$("#chartLoading").show();
	array1 = new Array();
	array2 = new Array();
	Series = [];
	chartStr = "";
	setTimeout(function(){
		CompanyloadsDatagrid();
		showCompanyLoadsChart();
	},500);
}

//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#companyLoadsTable").datagrid('resize', {
		height : $("body").height()/2-$("#companyLoads_btn").height()-30,
		width : $("body").width()
	});
	echarts.init(document.getElementById('companyLoadsChart')).resize();
}
