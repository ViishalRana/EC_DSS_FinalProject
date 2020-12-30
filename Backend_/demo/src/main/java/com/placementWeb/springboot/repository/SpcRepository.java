package com.placementWeb.springboot.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placementWeb.springboot.model.Spc;

@Repository
public interface SpcRepository extends JpaRepository<Spc, String>{
	
}
