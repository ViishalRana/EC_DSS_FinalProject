package com.placementWeb.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placementWeb.springboot.external.PasswordGenerator;
import com.placementWeb.springboot.model.Company;
import com.placementWeb.springboot.repository.CompanyRepository;import com.placementWeb.springboot.repository.SpcRepository;

@CrossOrigin(origins="http://localhost:3000")	
@RestController
@RequestMapping("/api/v1/company")
public class CompanyController {

	@Autowired
	private CompanyRepository companyRepo;
	
	@GetMapping("/companylist")
	public List<Company> getAllCompanies(){
		return companyRepo.findAll();
	}
	
	
	
	@PostMapping("/addCompany")
	public Company createCompany(@RequestBody Company company) {
		System.out.println(""+company.getCompany_category()+"\n");
		return companyRepo.save(company);
	}
	

}
