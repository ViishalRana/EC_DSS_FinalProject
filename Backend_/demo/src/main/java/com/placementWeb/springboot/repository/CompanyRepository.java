package com.placementWeb.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placementWeb.springboot.model.Company;

@Repository
public interface CompanyRepository extends  JpaRepository<Company, String>{

	
}
