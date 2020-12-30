package com.placementWeb.springboot.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.placementWeb.springboot.model.Student;

@Repository
public interface StudentRepository extends  JpaRepository<Student, String>{
	
	
	@Query("select s from Student s where s.stud_is_si = 1")
	List<Student> findStudentsBySI();
	
	@Query("select s from Student s where s.stud_is_si = 1 and s.stud_is_placed = 1")
	List<Student> findStudentsBySI_Placed();
	
	@Query("select s from Student s where s.stud_is_si = 1 and s.stud_is_placed = 0")
	List<Student> findStudentsBySI_UnPlaced();
	
	@Query("select s from Student s where s.stud_id =:stud_id")
	Student getStudentById(@Param("stud_id") String stud_id);
	
	
	
}
