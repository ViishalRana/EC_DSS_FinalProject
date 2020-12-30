package com.placementWeb.springboot.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.placementWeb.springboot.repository.StudentRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.placementWeb.springboot.model.Student;

@CrossOrigin(origins="http://localhost:3000")	
@RestController
@RequestMapping("/api/v1/Student")
public class StudentController {

	@Autowired
	private StudentRepository studentRepo;
	
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return studentRepo.findAll();
		
	}

	@GetMapping("/students/si")
	public List<Student> getStudentsBySI(){
		return studentRepo.findStudentsBySI();		
	}


	@GetMapping("/students/si/placed")
	public List<Student> getStudentsBySI_Placed(){
		return studentRepo.findStudentsBySI_Placed();		
	}
	

	@GetMapping("/students/si/unplaced")
	public List<Student> getStudentsBySI_UnPlaced(){
		return studentRepo.findStudentsBySI_UnPlaced();		
	}
	
	@GetMapping("/students/getProfileData")
	public Student getProfileData(@RequestParam(value="stud_id") String stud_id) {
//		System.out.println("\n"+stud_id+"\n");
			return studentRepo.getStudentById(stud_id);
	}
	
}
