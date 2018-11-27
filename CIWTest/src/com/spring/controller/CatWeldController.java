package com.spring.controller;

import java.math.BigInteger;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.spring.dto.WeldDto;
import com.spring.model.CatWeld;
import com.spring.model.MyUser;
import com.spring.model.WeldedJunction;
import com.spring.page.Page;
import com.spring.service.CatWeldService;
import com.spring.service.InsframeworkService;
import com.spring.service.LiveDataService;
import com.spring.service.WeldedJunctionService;
import com.spring.util.IsnullUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/catweld", produces = { "text/json;charset=UTF-8" })
public class CatWeldController {
	public java.sql.Statement stmt =null;
	public java.sql.Connection conn = null;
	private Page page;
	private int pageIndex = 1;
	private int pageSize = 10;
	private int total = 0;

	@Autowired
	private CatWeldService cw;
	
	@Autowired
	private WeldedJunctionService wjm;
	@Autowired
	private InsframeworkService insm;
	@Autowired
	private LiveDataService lm;
	IsnullUtil iutil = new IsnullUtil();
	
	@RequestMapping("/goWeldedJunction")
	public String goWeldedJunction(){
		return "weldingjunction/weldedjunction";
	}
	@RequestMapping("/goCatMail")
	public String goCatMail(){
		return "catmail/catmail";
	}
	@RequestMapping("/goCatWeld")
	public String goCatWeld(){
		return "catweld/catweld";
	}
	
	@RequestMapping("/getCatWeldList")
	@ResponseBody
	public String getCatWeldList(HttpServletRequest request){
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		String serach = request.getParameter("searchStr");
		
		page = new Page(pageIndex,pageSize,total);
		List<CatWeld> list = cw.getCatWeldAll(page, serach);
		long total = 0;
		
		if(list != null){
			PageInfo<CatWeld> pageinfo = new PageInfo<CatWeld>(list);
			total = pageinfo.getTotal();
		}
		
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(CatWeld w:list){
				json.put("id", w.getId());
				json.put("weldnum", w.getWeldNum());
				json.put("checkintime", w.getCheckintime());
				json.put("ssnum", w.getSSnum());
				json.put("firstsuretime", w.getFirstsuretime());
				json.put("department", w.getDepartment());
				json.put("workship", w.getWorkship());
				json.put("workmaintime", w.getWorkmaintime());
				json.put("workkmainname", w.getWorkkmainname());
				json.put("workfirsttime", w.getWorkfirsttime());
				json.put("workfirstname", w.getWorkfirstname());
				json.put("worksecondtime", w.getWorksecondtime());
				json.put("worksecondname", w.getWorksecondname());
				json.put("ifwelding", w.getIfwelding());
				json.put("classify", w.getClassify());
				json.put("specification", w.getSpecification());
				json.put("weldername", w.getWeldername());
				json.put("level", w.getLevel());
				json.put("score", w.getScore());
				json.put("ifpass", w.getIfpass());
				json.put("icworkime", w.getIcworkime());
				json.put("halfyearsure", w.getHalfyearsure());
				json.put("yearsure", w.getYearsure());
				json.put("nextyear", w.getNextyear());
				if( w.getItemid()!=null && !"".equals( w.getItemid())){
					json.put("itemname", w.getItemid().getName());
					json.put("itemid", w.getItemid().getId());
				}
				json.put("endTime", w.getEndTime());
				json.put("creatTime", w.getCreatTime());
				json.put("updateTime", w.getUpdateTime());
				json.put("updatecount", w.getUpdatecount());
				json.put("nextwall_thickness", w.getNextwall_thickness());
				json.put("next_material", w.getNext_material());
				json.put("electricity_unit", w.getElectricity_unit());
				json.put("valtage_unit", w.getValtage_unit());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getCatmail")
	@ResponseBody
	public String getCatmail(HttpServletRequest request){
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		String serach = request.getParameter("searchStr");
		
		page = new Page(pageIndex,pageSize,total);
		List<CatWeld> list = cw.getCatmail(page, serach);
		long total = 0;
		
		if(list != null){
			PageInfo<CatWeld> pageinfo = new PageInfo<CatWeld>(list);
			total = pageinfo.getTotal();
		}
		
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(CatWeld w:list){
				json.put("id", w.getId());
				json.put("emailname", w.getFemailname());
				json.put("emailaddress", w.getFemailaddress());
				json.put("emailtext", w.getFemailtext());
				json.put("emailstatus", w.getFemailstatus());
				json.put("emailtime", w.getFemailtime());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/goAddWeldedJunction")
	public String goAddWeldedJunction(){
		return "weldingjunction/addweldedjunction";
	}

	@RequestMapping("/goEditWeldedJunction")
	public String goEditWeldedJunction(HttpServletRequest request){
		BigInteger id = new BigInteger(request.getParameter("id"));
		WeldedJunction wj = wjm.getWeldedJunctionById(id);
		wj.setWeldedJunctionno(wj.getWeldedJunctionno().substring(2, 8));
		request.setAttribute("wj", wj);
		return "weldingjunction/editweldedjunction";
	}

	@RequestMapping("/goRemoveWeldedJunction")
	public String goRemoveWeldedJunction(HttpServletRequest request){
		BigInteger id = new BigInteger(request.getParameter("id"));
		WeldedJunction wj = wjm.getWeldedJunctionById(id);
		wj.setWeldedJunctionno(wj.getWeldedJunctionno().substring(2, 8));
		request.setAttribute("wj", wj);
		return "weldingjunction/removeweldedjunction";
	}
	
	@RequestMapping("/getWeldJun")
	public String getWeldJun(HttpServletRequest request){
		if(request.getParameter("fid")!=null&&request.getParameter("fid")!=""){
			request.setAttribute("welderid", request.getParameter("fid"));
		}
		if(iutil.isNull(request.getParameter("wjno"))){
			request.setAttribute("wjno", request.getParameter("wjno"));
		}
		return "td/HistoryCurve";
	}
	
	@RequestMapping("/goShowMoreJunction")
	public String goShowMoreJunction(HttpServletRequest request,@RequestParam String id){
		try{
			WeldedJunction wj = wjm.getWeldedJunctionById(new BigInteger(id));
			wj.setWeldedJunctionno(wj.getWeldedJunctionno().substring(2, 8));
			request.setAttribute("wj", wj);
		}catch(Exception e){
			e.printStackTrace();
		}
		return "weldingjunction/showmore";
	}
	
	@RequestMapping("/getWeldedJunctionList")
	@ResponseBody
	public String getWeldedJunctionList(HttpServletRequest request){
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		String serach = request.getParameter("searchStr");
		
		page = new Page(pageIndex,pageSize,total);
		List<WeldedJunction> list = wjm.getWeldedJunctionAll(page, serach);
		long total = 0;
		
		if(list != null){
			PageInfo<WeldedJunction> pageinfo = new PageInfo<WeldedJunction>(list);
			total = pageinfo.getTotal();
		}
		
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(WeldedJunction w:list){
				json.put("id", w.getId());
				json.put("weldedJunctionno", w.getWeldedJunctionno().substring(2, 8));
				json.put("serialNo", w.getSerialNo());
				json.put("pipelineNo", w.getPipelineNo());
				json.put("roomNo", w.getRoomNo());
				json.put("unit", w.getUnit());
				json.put("area", w.getArea());
				json.put("systems", w.getSystems());
				json.put("children", w.getChildren());
				json.put("externalDiameter", w.getExternalDiameter());
				json.put("wallThickness", w.getWallThickness());
				json.put("dyne", w.getDyne());
				json.put("specification", w.getSpecification());
				json.put("maxElectricity", w.getMaxElectricity());
				json.put("minElectricity", w.getMinElectricity());
				json.put("maxValtage", w.getMaxValtage());
				json.put("minValtage", w.getMinValtage());
				json.put("material", w.getMaterial());
				json.put("nextexternaldiameter", w.getNextexternaldiameter());
				if( w.getItemid()!=null && !"".equals( w.getItemid())){
					json.put("itemname", w.getItemid().getName());
					json.put("itemid", w.getItemid().getId());
				}
				json.put("startTime", w.getStartTime());
				json.put("endTime", w.getEndTime());
				json.put("creatTime", w.getCreatTime());
				json.put("updateTime", w.getUpdateTime());
				json.put("updatecount", w.getUpdatecount());
				json.put("nextwall_thickness", w.getNextwall_thickness());
				json.put("next_material", w.getNext_material());
				json.put("electricity_unit", w.getElectricity_unit());
				json.put("valtage_unit", w.getValtage_unit());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}

	@RequestMapping("/getJunctionByWelder")
	@ResponseBody
	public String getJunctionByWelder(HttpServletRequest request){
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		String welder = request.getParameter("welder");
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		WeldDto dto = new WeldDto();
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		
		page = new Page(pageIndex,pageSize,total);
		List<WeldedJunction> list = wjm.getJunctionByWelder(page, welder, dto);
		long total = 0;
		
		if(list != null){
			PageInfo<WeldedJunction> pageinfo = new PageInfo<WeldedJunction>(list);
			total = pageinfo.getTotal();
		}
		
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(WeldedJunction w:list){
				json.put("weldedJunctionno", w.getWeldedJunctionno().substring(2, 8));
				json.put("maxElectricity", w.getMaxElectricity());
				json.put("minElectricity", w.getMinElectricity());
				json.put("maxValtage", w.getMaxValtage());
				json.put("minValtage", w.getMinValtage());
				if( w.getItemid()!=null && !"".equals( w.getItemid())){
					json.put("itemname", w.getItemid().getName());
				}
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}

	@RequestMapping("/addCatweld")
	@ResponseBody
	public String addCatweld(HttpServletRequest request){
		CatWeld cwm = new CatWeld();
		JSONObject obj = new JSONObject();
		try{
			MyUser user = (MyUser)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			cwm.setCreater(new BigInteger(user.getId()+""));
			cwm.setUpdater(new BigInteger(user.getId()+""));
			cwm.setWeldNum(request.getParameter("weldnum"));
			cwm.setCheckintime(request.getParameter("checkintime"));
			cwm.setSSnum(request.getParameter("ssnum"));
			cwm.setFirstsuretime(request.getParameter("firstsuretime"));
			cwm.setDepartment(request.getParameter("department"));
			cwm.setWorkship(request.getParameter("workship"));
			cwm.setWorkmaintime(request.getParameter("workmaintime"));
			cwm.setWorkkmainname(request.getParameter("workkmainname"));
			cwm.setWorkfirsttime(request.getParameter("workfirsttime"));
			cwm.setWorkfirstname(request.getParameter("workfirstname"));
			cwm.setWorksecondtime(request.getParameter("worksecondtime"));
			cwm.setWorksecondname(request.getParameter("worksecondname"));
			cwm.setIfwelding(request.getParameter("ifwelding"));
			cwm.setClassify(request.getParameter("classify"));
			cwm.setWeldername(request.getParameter("weldername"));
			cwm.setLevel(request.getParameter("level"));
			cwm.setScore(request.getParameter("score"));
			cwm.setIfpass(request.getParameter("ifpass"));
			cwm.setIcworkime(request.getParameter("icworkime"));
			cwm.setHalfyearsure(request.getParameter("halfyearsure"));
			cwm.setYearsure(request.getParameter("yearsure"));
			cwm.setNextyear(request.getParameter("nextyear"));
			String starttime = request.getParameter("startTime");
			String endtime = request.getParameter("endTime");
			if(iutil.isNull(starttime)){
				//cw.setStartTime(starttime);
			}
			if(iutil.isNull(endtime)){
				cwm.setEndTime(endtime);
			}
			String itemid = request.getParameter("itemid");
			if(iutil.isNull(itemid)){
				cwm.setInsfid(new BigInteger(itemid));
			}
			cw.addCatweld(cwm);
			obj.put("success", true);
		}catch(Exception e){
			e.printStackTrace();
			obj.put("success", false);
			obj.put("errorMsg", e.getMessage());
		}
		return obj.toString();
	}
	

	@RequestMapping("/editCatweld")
	@ResponseBody
	public String editCatweld(HttpServletRequest request){
		CatWeld cwm = new CatWeld();
		JSONObject obj = new JSONObject();
		try{
			MyUser user = (MyUser)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			cwm.setCreater(new BigInteger(user.getId()+""));
			cwm.setUpdater(new BigInteger(user.getId()+""));
			cwm.setId(new BigInteger(request.getParameter("id")));
			cwm.setWeldNum(request.getParameter("weldnum"));
			cwm.setCheckintime(request.getParameter("checkintime"));
			cwm.setSSnum(request.getParameter("ssnum"));
			cwm.setFirstsuretime(request.getParameter("firstsuretime"));
			cwm.setDepartment(request.getParameter("department"));
			cwm.setWorkship(request.getParameter("workship"));
			cwm.setWorkmaintime(request.getParameter("workmaintime"));
			cwm.setWorkkmainname(request.getParameter("workkmainname"));
			cwm.setWorkfirsttime(request.getParameter("workfirsttime"));
			cwm.setWorkfirstname(request.getParameter("workfirstname"));
			cwm.setWorksecondtime(request.getParameter("worksecondtime"));
			cwm.setWorksecondname(request.getParameter("worksecondname"));
			cwm.setIfwelding(request.getParameter("ifwelding"));
			cwm.setClassify(request.getParameter("classify"));
			cwm.setWeldername(request.getParameter("weldername"));
			cwm.setLevel(request.getParameter("level"));
			cwm.setScore(request.getParameter("score"));
			cwm.setIfpass(request.getParameter("ifpass"));
			cwm.setIcworkime(request.getParameter("icworkime"));
			cwm.setHalfyearsure(request.getParameter("halfyearsure"));
			cwm.setYearsure(request.getParameter("yearsure"));
			cwm.setNextyear(request.getParameter("nextyear"));
			String starttime = request.getParameter("startTime");
			String endtime = request.getParameter("endTime");
			if(iutil.isNull(starttime)){
				//cw.setStartTime(starttime);
			}
			if(iutil.isNull(endtime)){
				cwm.setEndTime(endtime);
			}
			String itemid = request.getParameter("itemid");
			if(iutil.isNull(itemid)){
				cwm.setInsfid(new BigInteger(itemid));
			}
			cw.updateCatweld(cwm);
			
			String symbol = request.getParameter("symbol");
			Class.forName("com.mysql.jdbc.Driver");  
            conn = DriverManager.getConnection("jdbc:mysql://121.196.222.216:3306/XMWeld?user=db_admin&password=PIJXmcLRa0QgOw2c&useUnicode=true&autoReconnect=true&characterEncoding=UTF8");
            stmt= conn.createStatement();
            ArrayList<String> listarraymail = new ArrayList<String>();
			ArrayList<String> listarraymailer = new ArrayList<String>();
			String sqlmail = "SELECT tb_catweldinf.fweldername,tb_catweldinf.fhalfyearsure,tb_catweldinf.ficworkime,tb_catweldinf.fyearsure,tb_catweldinf.fnextyear FROM tb_catweldinf";
			String sqlmailer = "SELECT femailname,femailaddress,femailtype FROM tb_catemailinf";
			ResultSet rs;
			try {
				rs = stmt.executeQuery(sqlmail);
            	while (rs.next()) {
            		listarraymail.add(rs.getString("fweldername"));
            		listarraymail.add(rs.getString("ficworkime"));
            		listarraymail.add(rs.getString("fhalfyearsure"));
            		listarraymail.add(rs.getString("fyearsure"));
            		listarraymail.add(rs.getString("fnextyear"));
            	}
            	rs = stmt.executeQuery(sqlmailer);
            	while (rs.next()) {
            		listarraymailer.add(rs.getString("femailname"));
            		listarraymailer.add(rs.getString("femailaddress"));
            		listarraymailer.add(rs.getString("femailtype"));
            	}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			String icworktime = "";
			String halfyearname = "";
			String yearname = "";
			String nextyearname = "";
			
			if(symbol.equals("1")){
				for(int i=0;i<listarraymail.size();i+=5){
					
					Date dateic = null;
					//ic卡有效期提醒
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+1));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -60);
						Date resultDate = ca.getTime(); // 结果  
						String ictime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = ictime.split(" ");
						String[] checkictimebuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						ictime = timebuf[0];
						String checkictime = checkictimebuf[0];
								
						if(ictime.equals(checkictime)){
							if(icworktime.equals("")){
								icworktime = listarraymail.get(i);
							}else{
								icworktime = listarraymail.get(i) + "、" + icworktime ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!icworktime.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
								props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    
							 // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工ic卡到期提醒");
							    msg.setText(icworktime + " ic卡将要过期");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + icworktime + " ic卡将要过期" + "' , '2' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				
				}
				
			}else if(symbol.equals("2")){
				for(int i=0;i<listarraymail.size();i+=5){
					
					Date dateic = null;
					//半年
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+2));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -15);
						Date resultDate = ca.getTime(); // 结果  
						String halfyeartime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = halfyeartime.split(" ");
						String[] halfyearbuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						halfyeartime = timebuf[0];
						String checkictime = halfyearbuf[0];
								
						if(halfyeartime.equals(checkictime)){
							if(halfyearname.equals("")){
								halfyearname = listarraymail.get(i);
							}else{
								halfyearname = listarraymail.get(i) + "、" + halfyearname ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("2")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
								props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职半年认证");
							    msg.setText(halfyearname + " 需要半年认证");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname + " 入职已满半年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
			}else if(symbol.equals("3")){
				for(int i=0;i<listarraymail.size();i+=5){
					
					Date dateic = null;
					//一年
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+3));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -15);
						Date resultDate = ca.getTime(); // 结果  
						String yeartime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = yeartime.split(" ");
						String[] yearbuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						yeartime = timebuf[0];
						String checkictime = yearbuf[0];
								
						if(yeartime.equals(checkictime)){
							if(yearname.equals("")){
								yearname = listarraymail.get(i);
							}else{
								yearname = listarraymail.get(i) + "、" + yearname ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!yearname.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("2")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
								props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职一年认证");
							    msg.setText(yearname + " 需要年度认证");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname + " 入职已满半年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
			}else if(symbol.equals("4")){
				for(int i=0;i<listarraymail.size();i+=5){
					
					Date dateic = null;
					//两年
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+4));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -15);
						Date resultDate = ca.getTime(); // 结果  
						String nextyeartime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = nextyeartime.split(" ");
						String[] nextyearbuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						nextyeartime = timebuf[0];
						String checkictime = nextyearbuf[0];
								
						if(nextyeartime.equals(checkictime)){
							if(nextyearname.equals("")){
								nextyearname = listarraymail.get(i);
							}else{
								nextyearname = listarraymail.get(i) + "、" + nextyearname ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!nextyearname.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("2")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
								props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职两年认证");
							    msg.setText(nextyearname + " 需要次年认证");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname + " 入职已满半年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
			}
			
			
			
			/*String symbol = request.getParameter("symbol");
			if(Integer.valueOf(symbol)==3){
				//获取焊工以及管理员信息
				Class.forName("com.mysql.jdbc.Driver");  
	            conn = DriverManager.getConnection("jdbc:mysql://121.196.222.216:3306/XMWeld?user=db_admin&password=PIJXmcLRa0QgOw2c&useUnicode=true&autoReconnect=true&characterEncoding=UTF8");
	            stmt= conn.createStatement();
	            ArrayList<String> listarraymail = new ArrayList<String>();
				ArrayList<String> listarraymailer = new ArrayList<String>();
				String sqlmail = "SELECT tb_catweldinf.fweldername,tb_catweldinf.fcheckintime,tb_catweldinf.ficworkime FROM tb_catweldinf";
				String sqlmailer = "SELECT femailname,femailaddress,femailtype FROM tb_catemailinf";
				ResultSet rs;
				try {
					rs = stmt.executeQuery(sqlmail);
	            	while (rs.next()) {
	            		listarraymail.add(rs.getString("fweldername"));
	            		listarraymail.add(rs.getString("fcheckintime"));
	            		listarraymail.add(rs.getString("ficworkime"));
	            	}
	            	rs = stmt.executeQuery(sqlmailer);
	            	while (rs.next()) {
	            		listarraymailer.add(rs.getString("femailname"));
	            		listarraymailer.add(rs.getString("femailaddress"));
	            		listarraymailer.add(rs.getString("femailtype"));
	            	}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				String halfyearname1 = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -5);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname1.equals("")){
								halfyearname1 = listarraymail.get(i);
							}else{
								halfyearname1 = listarraymail.get(i) + "、" + halfyearname1 ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fhalfyearsure = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname1.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职半年提醒");
							    msg.setText(halfyearname1 + " 入职已满半年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname1 + " 入职已满半年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
					
				
				
				String halfyearname2 = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -11);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname2.equals("")){
								halfyearname2 = listarraymail.get(i);
							}else{
								halfyearname2 = listarraymail.get(i) + "、" + halfyearname2 ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fyearsure = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname2.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职一年提醒");
							    msg.setText(halfyearname2 + " 入职已满一年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname2 + " 入职已满一年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
				
				String halfyearname3 = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -23);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname3.equals("")){
								halfyearname3 = listarraymail.get(i);
							}else{
								halfyearname3 = listarraymail.get(i) + "、" + halfyearname3 ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fnextyear = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname3.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职两年提醒");
							    msg.setText(halfyearname3 + " 入职已满两年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname3 + " 入职已满两年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
				
				//ic卡有效期提醒
				String icworktime = "";
					
				for(int i=0;i<listarraymail.size();i+=3){
					
					Date dateic = null;
					//ic卡有效期提醒
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+2));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -60);
						Date resultDate = ca.getTime(); // 结果  
						String ictime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = ictime.split(" ");
						String[] checkictimebuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						ictime = timebuf[0];
						String checkictime = checkictimebuf[0];
								
						if(ictime.equals(checkictime)){
							if(icworktime.equals("")){
								icworktime = listarraymail.get(i);
							}else{
								icworktime = listarraymail.get(i) + "、" + icworktime ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!icworktime.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("2")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							 // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工ic卡到期提醒");
							    msg.setText(icworktime + " ic卡将要过期");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + icworktime + " ic卡将要过期" + "' , '2' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				
				}
			}else if(Integer.valueOf(symbol)==1){
				
				Class.forName("com.mysql.jdbc.Driver");  
	            conn = DriverManager.getConnection("jdbc:mysql://121.196.222.216:3306/XMWeld?user=db_admin&password=PIJXmcLRa0QgOw2c&useUnicode=true&autoReconnect=true&characterEncoding=UTF8");
	            stmt= conn.createStatement();
	            ArrayList<String> listarraymail = new ArrayList<String>();
				ArrayList<String> listarraymailer = new ArrayList<String>();
				String sqlmail = "SELECT tb_catweldinf.fweldername,tb_catweldinf.fcheckintime,tb_catweldinf.ficworkime FROM tb_catweldinf";
				String sqlmailer = "SELECT femailname,femailaddress,femailtype FROM tb_catemailinf";
				ResultSet rs;
				try {
					rs = stmt.executeQuery(sqlmail);
	            	while (rs.next()) {
	            		listarraymail.add(rs.getString("fweldername"));
	            		listarraymail.add(rs.getString("fcheckintime"));
	            		listarraymail.add(rs.getString("ficworkime"));
	            	}
	            	rs = stmt.executeQuery(sqlmailer);
	            	while (rs.next()) {
	            		listarraymailer.add(rs.getString("femailname"));
	            		listarraymailer.add(rs.getString("femailaddress"));
	            		listarraymailer.add(rs.getString("femailtype"));
	            	}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				//ic卡有效期提醒
				String icworktime = "";
					
				for(int i=0;i<listarraymail.size();i+=3){
					
					Date dateic = null;
					//ic卡有效期提醒
					try{
						dateic = DateTools.parse("yyyy-MM-dd HH:mm:ss",listarraymail.get(i+2));
						
						Calendar canow = Calendar.getInstance();
						Calendar ca = Calendar.getInstance();
						ca.setTime(dateic);
						ca.add(Calendar.DAY_OF_MONTH, -60);
						Date resultDate = ca.getTime(); // 结果  
						String ictime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
						
						String[] timebuf = ictime.split(" ");
						String[] checkictimebuf = DateTools.format("yyyy-MM-dd HH:mm:ss",canow.getTime()).split(" ");
						
						ictime = timebuf[0];
						String checkictime = checkictimebuf[0];
								
						if(ictime.equals(checkictime)){
							if(icworktime.equals("")){
								icworktime = listarraymail.get(i);
							}else{
								icworktime = listarraymail.get(i) + "、" + icworktime ;
							}
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!icworktime.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("2")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							 // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工ic卡到期提醒");
							    msg.setText(icworktime + " ic卡将要过期");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + icworktime + " ic卡将要过期" + "' , '2' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck);
							}
						}
					}catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
			}else if(Integer.valueOf(symbol)==2){
				
				
				Class.forName("com.mysql.jdbc.Driver");  
	            conn = DriverManager.getConnection("jdbc:mysql://121.196.222.216:3306/XMWeld?user=db_admin&password=PIJXmcLRa0QgOw2c&useUnicode=true&autoReconnect=true&characterEncoding=UTF8");
	            stmt= conn.createStatement();
	            ArrayList<String> listarraymail = new ArrayList<String>();
				ArrayList<String> listarraymailer = new ArrayList<String>();
				String sqlmail = "SELECT tb_catweldinf.fweldername,tb_catweldinf.fcheckintime,tb_catweldinf.ficworkime FROM tb_catweldinf";
				String sqlmailer = "SELECT femailname,femailaddress,femailtype FROM tb_catemailinf";
				ResultSet rs;
				try {
					rs = stmt.executeQuery(sqlmail);
	            	while (rs.next()) {
	            		listarraymail.add(rs.getString("fweldername"));
	            		listarraymail.add(rs.getString("fcheckintime"));
	            		listarraymail.add(rs.getString("ficworkime"));
	            	}
	            	rs = stmt.executeQuery(sqlmailer);
	            	while (rs.next()) {
	            		listarraymailer.add(rs.getString("femailname"));
	            		listarraymailer.add(rs.getString("femailaddress"));
	            		listarraymailer.add(rs.getString("femailtype"));
	            	}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				String halfyearname = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -5);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname.equals("")){
								halfyearname = listarraymail.get(i);
							}else{
								halfyearname = listarraymail.get(i) + "、" + halfyearname ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fhalfyearsure = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
							    
							 // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职半年提醒");
							    msg.setText(halfyearname + " 入职已满半年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname + " 入职已满半年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
				
				String halfyearname2 = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -11);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname2.equals("")){
								halfyearname2 = listarraymail.get(i);
							}else{
								halfyearname2 = listarraymail.get(i) + "、" + halfyearname2 ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fyearsure = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname2.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职一年提醒");
							    msg.setText(halfyearname2 + " 入职已满一年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname2 + " 入职已满一年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
				
				String halfyearname3 = "";
				
				for(int i=0;i<listarraymail.size();i+=3){
					
					//半年提醒
					Calendar canow = Calendar.getInstance();
					Calendar ca = Calendar.getInstance();
					ca.setTime(new Date());
					ca.add(Calendar.MONTH, -23);
					ca.add(Calendar.DAY_OF_MONTH, -15);
					Date resultDate = ca.getTime(); // 结果  
					String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",resultDate);
					
					String[] nowtimebuf = nowtime.split(" ");
					String[] checkintimebuf = null;
					String checkintime = null;
					try{
						checkintimebuf = listarraymail.get(i+1).split(" ");
						nowtime = nowtimebuf[0];
						checkintime = checkintimebuf[0];
						

						if(nowtime.equals(checkintime)){
							if(halfyearname3.equals("")){
								halfyearname3 = listarraymail.get(i);
							}else{
								halfyearname3 = listarraymail.get(i) + "、" + halfyearname3 ;
							}
							
							String sqlmailcheck2 = "update tb_catweldinf set fnextyear = '" + DateTools.format("yyyy-MM-dd HH:mm:ss",new Date()) + "' WHERE fweldername = '" + listarraymail.get(i) + "'";
						    try {
								stmt.execute(sqlmailcheck2);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
							
						}
						
					}catch(Exception e){
						e.getStackTrace();
					}
					
				}
				
				if(!halfyearname3.equals("")){
					try{
						
						for(int j=0;j<listarraymailer.size();j+=3){
							if(listarraymailer.get(j+2).equals("1")){
								final Properties props = new Properties();
								final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
								props.setProperty("mail.smtp.socketFactory.fallback", "false");
							    //props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    //props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.setProperty("mail.smtp.host","smtp.163.com"); //服务器地址
							    props.setProperty("mail.smtp.port", "465");
								props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
							    props.setProperty("mail.smtp.socketFactory.port", "465");
							    props.setProperty("mail.smtp.auth", "true");
								props.setProperty("mail.smtp.auth", "true");
							    props.setProperty("mail.transport.protocol", "smtp");
							    //props.put("mail.smtp.auth", "true");
							    props.put("mail.smtp.host","smtpdm.aliyun.com");// smtp服务器地址
							    props.put("mail.smtp.port", "25");
							    
							    // 发件人的账号
						        props.put("mail.user", "jingsudongyu123@163.com");
						        // 访问SMTP服务时需要提供的密码
						        props.put("mail.password", "jsdy123456");
							    
							 // 构建授权信息，用于进行SMTP进行身份验证
						        Authenticator authenticator = new Authenticator() {
						            @Override
						            protected PasswordAuthentication getPasswordAuthentication() {
						                // 用户名、密码
						                String userName = props.getProperty("mail.user");
						                String password = props.getProperty("mail.password");
						                return new PasswordAuthentication(userName, password);
						            }
						        };
						        // 使用环境属性和授权信息，创建邮件会话
							    
						        Session session = Session.getInstance(props, authenticator);
							    session.setDebug(true);
							    
							    Message msg = new MimeMessage(session);
							    msg.setSubject("员工入职两年提醒");
							    msg.setText(halfyearname3 + " 入职已满两年");
							    msg.setSentDate(new Date());
							    msg.setFrom(new InternetAddress("jiangsudongyu123@163.com"));//发件人邮箱
							    msg.setRecipient(Message.RecipientType.TO,
							            new InternetAddress(listarraymailer.get(j+1))); //收件人邮箱
							    //msg.addRecipient(Message.RecipientType.CC, 
					    		//new InternetAddress("XXXXXXXXXXX@qq.com")); //抄送人邮箱
							    msg.saveChanges();

							    Transport transport = session.getTransport();
							    transport.connect("jiangsudongyu123@163.com","qwerasdf12345678");//发件人邮箱,授权码
							    
							    transport.sendMessage(msg, msg.getAllRecipients());
							    transport.close();
							    
							    String nowtime = DateTools.format("yyyy-MM-dd HH:mm:ss",new Date());
							    String sqlmailcheck1 = "INSERT INTO tb_catemailcheck (femailname, femailaddress, femailtext, femailstatus, femailtime) VALUES ('" + listarraymailer.get(j) + "' , '" + listarraymailer.get(j+1) + "' , '" + halfyearname3 + " 入职已满两年" + "' , '1' , '" + nowtime + "')";
							    stmt.execute(sqlmailcheck1);
							}
						}
						
				    }catch(Exception e){
				    	e.getStackTrace();
				    }
				}
				
				
				
			}*/
			
			
			
			obj.put("success", true);
		}catch(Exception e){
			e.printStackTrace();
			obj.put("success", false);
			obj.put("errorMsg", e.getMessage());
		}
		return obj.toString();
	}
	

	@RequestMapping("/removeCatweld")
	@ResponseBody
	public String removeWeldedJunction(HttpServletRequest request){
		JSONObject obj = new JSONObject();
		try{
			cw.deleteCatweld(new BigInteger(request.getParameter("id")));
			obj.put("success", true);
		}catch(Exception e){
			e.printStackTrace();
			obj.put("success", false);
			obj.put("errorMsg", e.getMessage());
		}
		return obj.toString();
	}
	
	@RequestMapping("/wjNoValidate")
	@ResponseBody
	private String wjNoValidate(@RequestParam String wjno){
		boolean data = true;
		int count = wjm.getWeldedjunctionByNo(wjno);
		if(count>0){
			data = false;
		}
		return data + "";
	}
	
	@RequestMapping("/getWeldingJun")
	@ResponseBody
	public String getWeldingJun(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String wjno = request.getParameter("wjno");
		String welderid = request.getParameter("welderid");
		WeldDto dto = new WeldDto();
		if(!iutil.isNull(parentId)){
			//数据权限处理
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				return "0";
			}
			int types = insm.getUserInsfType(uid);
			if(types==21){
				parentId = insm.getUserInsfId(uid).toString();
			}
		}
		BigInteger parent = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(wjno)){
			dto.setSearch(wjno);//用来保存焊缝编号
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		
		page = new Page(pageIndex,pageSize,total);
		List<WeldedJunction> list = wjm.getJMByWelder(page, dto ,welderid);
		long total = 0;
		
		if(list != null){
			PageInfo<WeldedJunction> pageinfo = new PageInfo<WeldedJunction>(list);
			total = pageinfo.getTotal();
		}
		
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(WeldedJunction w:list){
				json.put("firsttime", wjm.getFirsttime(dto, w.getMachid(),welderid , w.getWeldedJunctionno()));
				json.put("lasttime", wjm.getLasttime(dto, w.getMachid(),welderid , w.getWeldedJunctionno()));
				json.put("fweldingtime", new DecimalFormat("0.0000").format((float)Integer.valueOf(w.getCounts().toString())/3600));
				json.put("id", w.getId());
				json.put("machid",w.getMachid());
				json.put("machine_num", w.getMachine_num());
				json.put("weldedJunctionno", w.getWeldedJunctionno().substring(2, 8));
				json.put("dyne", w.getDyne());
				json.put("maxElectricity", w.getMaxElectricity());
				json.put("minElectricity", w.getMinElectricity());
				json.put("maxValtage", w.getMaxValtage());
				json.put("minValtage", w.getMinValtage());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
			e.getMessage();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}
}