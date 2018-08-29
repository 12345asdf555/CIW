package com.spring.service.impl;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.spring.dao.CatWeldMapper;
import com.spring.dto.WeldDto;
import com.spring.model.CatWeld;
import com.spring.model.WeldedJunction;
import com.spring.page.Page;
import com.spring.service.CatWeldService;

@Service
@Transactional
public class CatWeldServiceImpl implements CatWeldService{
	@Autowired
	private CatWeldMapper cw;

	@Override
	public List<CatWeld> getCatWeldAll(Page page, String str) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		return cw.getCatWeldAll(str);
	}

	@Override
	public List<CatWeld> getCatmail(Page page, String str) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		return cw.getCatmail(str);
	}

	
	@Override
	public int getWeldedjunctionByNo(String wjno) {
		return cw.getWeldedjunctionByNo(wjno);
	}

	@Override
	public int getweldnumCount(String eno) {
		return cw.getweldnumCount(eno);
	}
	
	@Override
	public boolean addCatweld(CatWeld cwm) {
		return cw.addCatweld(cwm);
	}

	@Override
	public boolean updateCatweld(CatWeld cwm) {
		return cw.updateCatweld(cwm);
	}

	@Override
	public boolean deleteCatweld(BigInteger id) {
		return cw.deleteCatweld(id);
	}

	@Override
	public WeldedJunction getWeldedJunctionById(BigInteger id) {
		return cw.getWeldedJunctionById(id);
	}
	
	@Override
	public List<WeldedJunction> getJMByWelder(Page page, WeldDto dto, String welderid) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		return cw.getJMByWelder(dto,welderid);
	}

	@Override
	public List<WeldedJunction> getJunctionByWelder(Page page, String welder, WeldDto dto) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		return cw.getJunctionByWelder(welder, dto);
	}

	@Override
	public String getFirsttime(WeldDto dto, BigInteger machineid, String welderid, String junid) {
		return cw.getFirsttime(dto,machineid,welderid,junid);
	}

	@Override
	public String getLasttime(WeldDto dto, BigInteger machineid, String welderid, String junid) {
		return cw.getLasttime(dto,machineid,welderid,junid);
	}

}
