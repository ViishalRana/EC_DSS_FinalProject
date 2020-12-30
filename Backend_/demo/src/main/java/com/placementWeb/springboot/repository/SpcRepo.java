package com.placementWeb.springboot.repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;

import com.placementWeb.springboot.model.Spc;

public class SpcRepo {
	private EntityManagerFactory emf=javax.persistence.Persistence.createEntityManagerFactory("SpcRepo");
	private EntityManager entityManager=emf.createEntityManager();
	
	@Transactional
	public int insertSpc(Spc spc) {
		entityManager.createNativeQuery("insert into tbl_spc(spc_id,spc_name,spc_email,spc_contact) values(?,?,?,?)")
		.setParameter(1, spc.getSpc_id())
		.setParameter(2, spc.getSpc_name())
		.setParameter(3, spc.getSpc_email())
		.setParameter(4, spc.getSpc_contact())
		.executeUpdate();
		return 1;		
	}
	
//	@Autowired
//	private JdbcTemplate jt;
//	
//	public int insertSpc(Spc spc) {
//		String q="insert into tbl_spc(spc_id,spc_name,spc_email,spc_contact) values(?,?,?,?)";
//		jt.update("insert into tbl_spc(spc_id,spc_name,spc_email,spc_contact) values(?,?,?,?)",spc.getSpc_id(),spc.getSpc_name(),spc.getSpc_email(),spc.getSpc_contact());
//		return 1;
//	}
}
