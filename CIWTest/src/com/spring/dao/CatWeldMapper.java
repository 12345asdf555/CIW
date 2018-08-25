package com.spring.dao;

import java.math.BigInteger;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.dto.WeldDto;
import com.spring.model.CatWeld;
import com.spring.model.WeldedJunction;

import tk.mybatis.mapper.common.Mapper;

public interface CatWeldMapper extends Mapper<CatWeld>{
	List<CatWeld> getCatWeldAll(@Param("str")String str);
	
	List<WeldedJunction> getJunctionByWelder(@Param("welder")String welder,@Param("dto")WeldDto dto);
	
	WeldedJunction getWeldedJunctionById(@Param("id")BigInteger id);
	
	boolean addCatweld(CatWeld cwm);

	int getweldnumCount(@Param("eno")String eno);
	
	boolean updateCatweld(CatWeld cwm);

	boolean deleteCatweld(@Param("id")BigInteger id);
	
	int getWeldedjunctionByNo(@Param("wjno")String wjno);
	
	List<WeldedJunction> getJMByWelder(@Param("dto") WeldDto dto,@Param("welderid")String welderid);
	
	String getFirsttime(@Param("dto") WeldDto dto,@Param("machineid")BigInteger machineid, @Param("welderid")String welderid, @Param("junid")String junid);
	
	String getLasttime(@Param("dto") WeldDto dto,@Param("machineid")BigInteger machineid, @Param("welderid")String welderid, @Param("junid")String junid);
}
