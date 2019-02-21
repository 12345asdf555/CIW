package com.spring.service.impl;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.spring.dao.InsframeworkMapper;
import com.spring.dao.WeldingMachineMapper;
import com.spring.model.WeldingMachine;
import com.spring.page.Page;
import com.spring.service.WeldingMachineService;

@Service
@Transactional
public class WeldingMachineServiceImpl implements WeldingMachineService {
	
	@Autowired
	private WeldingMachineMapper wmm;

	@Autowired
	private InsframeworkMapper im;
	
	@Override
	public List<WeldingMachine> getWeldingMachineAll(Page page,BigInteger parent,String str) {
		PageHelper.startPage(page.getPageIndex(),page.getPageSize());
		return wmm.getWeldingMachineAll(parent,str);
	}
	
	@Override
	public List<WeldingMachine> getcatMachineAll(Page page,BigInteger parent,String str) {
		PageHelper.startPage(page.getPageIndex(),page.getPageSize());
		return wmm.getcatMachineAll(parent,str);
	}
	
	@Override
	public List<WeldingMachine> AllMachine(Page page,BigInteger parent) {
		PageHelper.startPage(page.getPageIndex(),page.getPageSize());
		return wmm.AllMachine(parent);
	}

	@Override
	public void addWeldingMachine(WeldingMachine wm) {
		wmm.addWeldingMachine(wm);
	}

	@Override
	public void addcatMachine(WeldingMachine wm) {
		wmm.addcatMachine(wm);
	}
	@Override
	public void addcatmachine(WeldingMachine wm) {
		wmm.addcatmachine(wm);
	}
	@Override
	public void editWeldingMachine(WeldingMachine wm) {
		wmm.editWeldingMachine(wm);
	}

	@Override
	public void editcatMachine(WeldingMachine wm) {
		wmm.editcatMachine(wm);
	}
	
	@Override
	public void editcatmachine(WeldingMachine wm) {
		wmm.editcatmachine(wm);
	}
	
	@Override
	public List<WeldingMachine> getWeldingMachine(String str) {
		return wmm.getWeldingMachineAll(null,str);
	}

	@Override
	public BigInteger getWeldingMachineByEno(String eno) {
		return wmm.getWeldingMachineByEno(eno);
	}

	@Override
	public int getEquipmentnoCount(String eno) {
		return wmm.getEquipmentnoCount(eno);
	}

	@Override
	public int getFmachingnumberCount(String eno) {
		return wmm.getFmachingnumberCount(eno);
	}
	
	@Override
	public int getGatheridCount(BigInteger itemid,String gather) {
		return wmm.getGatheridCount(itemid,gather);
	}

	@Override
	public WeldingMachine getWeldingMachineById(BigInteger wid) {
		return wmm.getWeldingMachineById(wid);
	}

	@Override
	public void deleteWeldingChine(BigInteger wid) {
		wmm.deleteWeldingMachine(wid);
	}

	@Override
	public void deletecatChine(BigInteger wid) {
		wmm.deletecatMachine(wid);
	}
	@Override
	public void deletecatchine(BigInteger wid) {
		wmm.deletecatmachine(wid);
	}
	@Override
	public BigInteger getInsframeworkByName(String name) {
		return im.getInsframeworkByName(name);
	}

	@Override
	public BigInteger getMachineCountByManu(BigInteger mid,BigInteger id) {
		return wmm.getMachineCountByManu(mid,id);
	}

	@Override
	public void deleteHistory(BigInteger wid) {
		wmm.deleteHistory(wid);
	}

	@Override
	public List<WeldingMachine> getAllMachine() {
		return wmm.getAllMachine();
	}

	@Override
	public List<WeldingMachine> getMachineByIns(BigInteger id) {
		// TODO Auto-generated method stub
		return wmm.getMachineByIns(id);
	}
	
	@Override
	public List<WeldingMachine> getMachineGather() {
		// TODO Auto-generated method stub
		return wmm.getMachineGather();
	}

	@Override
	public List<WeldingMachine> getMachineModel(int type) {
		return wmm.getMachineModel(type);
	}

	@Override
	public List<WeldingMachine> getMachineModel() {
		// TODO Auto-generated method stub
		return wmm.getAllMachineModel();
	}
}
