package com.spring.dao;

import java.math.BigInteger;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.model.WeldingMachine;

import tk.mybatis.mapper.common.Mapper;

public interface WeldingMachineMapper extends Mapper<WeldingMachine>{
	List<WeldingMachine> getWeldingMachineAll(@Param("parent") BigInteger parent,@Param("str") String str);
	
	List<WeldingMachine> getcatMachineAll(@Param("parent") BigInteger parent,@Param("str") String str);
	
	List<WeldingMachine> AllMachine(@Param("wid")BigInteger wid);
	
	List<WeldingMachine> getEquipmentno();
	
	void addWeldingMachine(WeldingMachine wm);
	
	void addcatMachine(WeldingMachine wm);
	
	void addcatmachine(WeldingMachine wm);
	
	List<WeldingMachine> findAllweldmachine();
	
	void addfactoryType(WeldingMachine wm);
	
	void deletefactory(@Param("statusId")BigInteger statusId);
	
	void editWeldingMachine(WeldingMachine wm);
	
	void editcatMachine(WeldingMachine wm);
	
	void editcatmachine(WeldingMachine wm);
	
	void deleteWeldingMachine(@Param("wid")BigInteger wid);
	
	void deletecatMachine(@Param("wid")BigInteger wid);
	
	void deletecatmachine(@Param("wid")BigInteger wid);
	
	BigInteger getWeldingMachineByEno(@Param("eno")String eno);
	
	int getEquipmentnoCount(@Param("eno")String eno);
	
	int getFmachingnumberCount(@Param("eno")String eno);
	
	int getEquipmentidCount(@Param("eid")String eid);
	
	int getGatheridCount(@Param("itemid")BigInteger itemid,@Param("gather")String gather);
	
	WeldingMachine getWeldingMachineById(@Param("wid")BigInteger wid);
	
	void editstatus(@Param("wid")BigInteger wid,@Param("status")int status);
	
	void deleteByInsf(@Param("insfId")BigInteger insfId);
	
	List<WeldingMachine> getWeldingMachineByInsf(@Param("insfId")BigInteger insfId);
	
	BigInteger getIdByGatherid(@Param("gatherid")BigInteger gatherid);
	
	void editGatherid(@Param("wid")BigInteger wid);
	
	BigInteger getMachineCountByManu(@Param("mid")BigInteger mid,@Param("id")BigInteger id);
	
	void deleteHistory(@Param("wid")BigInteger wid);
	
	List<WeldingMachine> getAllMachine();
	
	List<WeldingMachine> getMachineByIns(@Param("id")BigInteger id);
	
	List<WeldingMachine> getMachineGather();
	
	List<WeldingMachine> getMachineModel(@Param("type")int type);
	
	List<WeldingMachine> getAllMachineModel();
	
}