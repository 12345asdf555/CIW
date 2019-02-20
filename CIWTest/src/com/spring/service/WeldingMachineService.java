package com.spring.service;

import java.math.BigInteger;
import java.util.List;

import com.spring.model.WeldingMachine;
import com.spring.page.Page;

public interface WeldingMachineService {
	
	/**
	 * 查询所有焊机信息:分页
	 */
	List<WeldingMachine> getWeldingMachineAll(Page page,BigInteger parent,String str);
	List<WeldingMachine> AllMachine(Page page,BigInteger parent);
	
	/**
	 * 查询cat焊机信息:分页
	 */
	List<WeldingMachine> getcatMachineAll(Page page,BigInteger parent,String str);
	/**
	
	/**
	 * 查询所有焊机信息
	 */
	List<WeldingMachine> getWeldingMachine(String str);
	
	/**
	 * 新增设备
	 */
	void addWeldingMachine(WeldingMachine wm);
	
	/**
	 * CAT新增设备
	 */
	void addcatMachine(WeldingMachine wm);
	
	/**
	 * CAT合并新增设备
	 */
	void addcatmachine(WeldingMachine wm);
	/**
	 * 修改设备
	 */
	void editWeldingMachine(WeldingMachine wm);
	
	/**
	 * CAT修改设备
	 */
	void editcatMachine(WeldingMachine wm);
	
	
	/**
	 * CAT合并修改设备
	 */
	void editcatmachine(WeldingMachine wm);
	/**
	
	/**
	 * 
	 * 删除设备
	 * @param wid
	 */
	void deleteWeldingChine(BigInteger wid);
	
	/**
	 * CAT删除设备
	 * @param wid
	 */
	void deletecatchine(BigInteger wid);
	/**
	 * CAT删除设备
	 * @param wid
	 */
	void deletecatChine(BigInteger wid);
	/**
	 * 删除对应的工艺记录
	 */
	void deleteHistory(BigInteger wid);
	/**
	 * 根据焊机编号查找id
	 * @return
	 */
	BigInteger getWeldingMachineByEno(String eno);
	
	/**
	 * 判断焊机编号是否存在
	 * @param eno
	 * @return
	 */
	int getEquipmentnoCount(String eno);
	
	/**
	 * 判断CAT设备编号是否存在
	 * @param eno
	 * @return
	 */
	int getFmachingnumberCount(String eno);
	
	
	
	/**
	 * 判断采集序号是否存在
	 * @param gatherid
	 * @return
	 */
	int getGatheridCount(BigInteger itemid,String gather);
	
	/**
	 * 根据id查找记录
	 * @param wid
	 * @return
	 */
	WeldingMachine getWeldingMachineById(BigInteger wid);
	
	/**
	 * 根据项目名称获取项目id
	 * @param name
	 * @return
	 */
	BigInteger getInsframeworkByName(String name);
	
	/**
	 * 获取某厂商下的焊机总数
	 * @param mid 厂商id
	 * @return
	 */
	BigInteger getMachineCountByManu(BigInteger mid,BigInteger id);
	List<WeldingMachine> getAllMachine();
	/**
	 * 根据组织机构获取对应焊机
	 */
	List<WeldingMachine> getMachineByIns(BigInteger id);
	
	/**
	 * 获取所有焊机及其对应的采集模块
	 * @return
	 */
	List<WeldingMachine> getMachineGather();
	
	/**
	 * 根据焊机厂商查找焊接型号
	 * @param type 厂商id
	 * @return
	 */
	List<WeldingMachine> getMachineModel(int type);
}