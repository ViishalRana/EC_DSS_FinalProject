package com.placementWeb.springboot.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placementWeb.springboot.external.PasswordGenerator;
import com.placementWeb.springboot.model.Spc;
import com.placementWeb.springboot.repository.SpcRepository;

@CrossOrigin(origins="http://localhost:3000")	
@RestController
@RequestMapping("/api/v1/spc")
public class SpcController {
	
	@Autowired
	private SpcRepository spcRepo;
	
	@GetMapping("/memberlist")
	public List<Spc> getAllMembers(){
		return spcRepo.findAll();
	}
	
	@PostMapping("/addMember")
	public Spc createSpcMember(@RequestBody Spc spcMember) {
		PasswordGenerator passwordGenerator = new PasswordGenerator.PasswordGeneratorBuilder()
		        .useDigits(true)
		        .useLower(true)
		        .useUpper(true)
		        .build();
		String password = passwordGenerator.generate(8);
		spcMember.setSpc_pwd(password);
		return spcRepo.save(spcMember);
	}

}
