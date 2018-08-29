package com.spring.model;

import java.math.BigInteger;

import javax.persistence.Transient;

import org.springframework.stereotype.Component;

/**
 * CAT焊工
 * @author gpyf16
 *
 */
@Component
public class CatWeld {
	private BigInteger id;
	private String weldnum;
	private String checkintime;
	private String ssnum;
	private String firstsuretime;
	private String department;
	private String workship;
	private String workmaintime;
	private String workkmainname;
	private String workfirsttime;
	private String workfirstname;
	private String worksecondtime;
	private String worksecondname;
	private String ifwelding;
	private String classify;
	private String specification;
	private String weldername;
	private String level;
	private String score;
	private String ifpass;
	private String icworkime;
	private String halfyearsure;
	private String yearsure;
	private String nextyear;
	private String endTime;
	private String creatTime;
	private String updateTime;
	private int updatecount;
	private String nextwall_thickness;
	private String next_material;
	private String electricity_unit;
	private String valtage_unit;
	private BigInteger updater;
	private BigInteger creater;
	private BigInteger insfid;
	private String femailname;
	private String femailaddress;
	private String femailtext;
	private String femailstatus;
	private String femailtime;
	@Transient
	private Insframework itemid;//所属项目（新增字段）
	
	public BigInteger getInsfid() {
		return insfid;
	}
	public void setInsfid(BigInteger insfid) {
		this.insfid = insfid;
	}
	public String getWeldNum() {
		return weldnum;
	}
	public void setWeldNum(String weldnum) {
		this.weldnum = weldnum;
	}
	public String getCheckintime() {
		return checkintime;
	}
	public void setCheckintime(String checkintime) {
		this.checkintime = checkintime;
	}
	public BigInteger getUpdater() {
		return updater;
	}
	public void setUpdater(BigInteger updater) {
		this.updater = updater;
	}
	public BigInteger getCreater() {
		return creater;
	}
	public void setCreater(BigInteger creater) {
		this.creater = creater;
	}
	public String getElectricity_unit() {
		return electricity_unit;
	}
	public void setElectricity_unit(String electricity_unit) {
		this.electricity_unit = electricity_unit;
	}
	public String getValtage_unit() {
		return valtage_unit;
	}
	public void setValtage_unit(String valtage_unit) {
		this.valtage_unit = valtage_unit;
	}
	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public String getSSnum() {
		return ssnum;
	}
	public void setSSnum(String ssnum) {
		this.ssnum = ssnum;
	}
	
	public String getFirstsuretime() {
		return firstsuretime;
	}
	public void setFirstsuretime(String firstsuretime) {
		this.firstsuretime = firstsuretime;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getWorkship() {
		return workship;
	}
	public void setWorkship(String workship) {
		this.workship = workship;
	}
	public String getWorkmaintime() {
		return workmaintime;
	}
	public void setWorkmaintime(String workmaintime) {
		this.workmaintime = workmaintime;
	}
	public String getWorkkmainname() {
		return workkmainname;
	}
	public void setWorkkmainname(String workkmainname) {
		this.workkmainname = workkmainname;
	}
	public String getWorkfirsttime() {
		return workfirsttime;
	}
	public void setWorkfirsttime(String workfirsttime) {
		this.workfirsttime = workfirsttime;
	}
	public String getWorkfirstname() {
		return workfirstname;
	}
	public void setWorkfirstname(String workfirstname) {
		this.workfirstname = workfirstname;
	}
	public String getWorksecondtime() {
		return worksecondtime;
	}
	public void setWorksecondtime(String worksecondtime) {
		this.worksecondtime = worksecondtime;
	}
	public String getWorksecondname() {
		return worksecondname;
	}
	public void setWorksecondname(String worksecondname) {
		this.worksecondname = worksecondname;
	}
	public String getIfwelding() {
		return ifwelding;
	}
	public void setIfwelding(String ifwelding) {
		this.ifwelding = ifwelding;
	}
	public String getClassify() {
		return classify;
	}
	public void setClassify(String classify) {
		this.classify = classify;
	}
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	public String getWeldername() {
		return weldername;
	}
	public void setWeldername(String weldername) {
		this.weldername = weldername;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getIfpass() {
		return ifpass;
	}
	public void setIfpass(String ifpass) {
		this.ifpass = ifpass;
	}
	public String getYearsure() {
		return yearsure;
	}
	public void setYearsure(String yearsure) {
		this.yearsure = yearsure;
	}
	public String getNextyear() {
		return nextyear;
	}
	public void setNextyear(String nextyear) {
		this.nextyear = nextyear;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getIcworkime() {
		return icworkime;
	}
	public void setIcworkime(String icworkime) {
		this.icworkime = icworkime;
	}
	public String getHalfyearsure() {
		return halfyearsure;
	}
	public void setHalfyearsure(String halfyearsure) {
		this.halfyearsure = halfyearsure;
	}
	public Insframework getItemid() {
		return itemid;
	}
	public void setItemid(Insframework itemid) {
		this.itemid = itemid;
	}
	
	public String getFemailname() {
		return femailname;
	}
	public void setFemailname(String femailname) {
		this.femailname = femailname;
	}
	public String getFemailaddress() {
		return femailaddress;
	}
	public void setFemailaddress(String femailaddress) {
		this.femailaddress = femailaddress;
	}
	public String getFemailtext() {
		return femailtext;
	}
	public void setFemailtext(String femailtext) {
		this.femailtext = femailtext;
	}
	public String getFemailstatus() {
		return femailstatus;
	}
	public void setFemailstatus(String femailstatus) {
		this.femailstatus = femailstatus;
	}
	public String getFemailtime() {
		return femailtime;
	}
	public void setFemailtime(String femailtime) {
		this.femailtime = femailtime;
	}
	public String getCreatTime() {
		return creatTime;
	}
	public void setCreatTime(String creatTime) {
		this.creatTime = creatTime;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	public int getUpdatecount() {
		return updatecount;
	}
	public void setUpdatecount(int updatecount) {
		this.updatecount = updatecount;
	}
	public String getNextwall_thickness() {
		return nextwall_thickness;
	}
	public void setNextwall_thickness(String nextwall_thickness) {
		this.nextwall_thickness = nextwall_thickness;
	}
	public String getNext_material() {
		return next_material;
	}
	public void setNext_material(String next_material) {
		this.next_material = next_material;
	}
	
}
