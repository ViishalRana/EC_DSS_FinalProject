package com.placementWeb.springboot.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="tbl_student")
public class Student {
	
	@Id
	private String stud_id;
	
	@Column(name="stud_fname")
	private String stud_fname;

	@Column(name="stud_mname")
	private String stud_mname;

	@Column(name="stud_lname")
	private String stud_lname;

	@Column(name="stud_da_email")
	private String stud_da_email;
	
	@Column(name="stud_father_name")
	private String stud_father_name;

	@Column(name="stud_mother_name")
	private String stud_mother_name;

	@Column(name="stud_bday")
	private String stud_bday;

	@Column(name="stud_gender")
	private String stud_gender;
	
	@Column(name="stud_cur_address")
	private String stud_cur_address;
	
	@Column(name="stud_permanant_address")
	private String stud_permanant_address;
	
	@Column(name="stud_personal_email")
	private String stud_personal_email;
	
	@Column(name="stud_contact")
	private String stud_contact;
	
	@Column(name="stud_father_contact")
	private String father_contact;
	
	@Column(name="stud_alternate_contact")
	private String alternate_contact;

	@Column(name="stud_skype_id")
	private String stud_skype_id;

	@Column(name="stud_cur_cpi")
	private Float stud_cur_cpi;

	@Column(name="stud_cur_backlogs")
	private int stud_cur_backlogs;

	@Column(name="stud_tot_backlogs")
	private int stud_tot_backlogs;
	
	@Column(name="stud_ssc_per")
	private Float stud_ssc_per;
	
	@Column(name="stud_hsc_per")
	private Float stud_hsc_per;

	@Column(name="stud_grad_per")
	private Float stud_grad_per;
	
	@Column(name="stud_grad_uni")
	private String stud_grad_uni;
	
	@Column(name="stud_is_interested")
	private int stud_is_interested;
	
	@Column(name="stud_is_out")
	private int stud_is_out;
	
	@Column(name="stud_is_verified")
	private int stud_is_verified;

	@Column(name="stud_is_placed")
	private int stud_is_placed;


	@Column(name="stud_resume")
	private String stud_resume;

	@Column(name="stud_photo")
	private String stud_photo;

	@Column(name="stud_grad_degree")
	private String stud_grad_degree;
	
	@Column(name="stud_is_si")
	private int stud_is_si;
	
	
	
	public Student() {
		
	}

	public Student(String stud_id, String stud_fname, String stud_mname, String stud_lname, String stud_da_email,
			String stud_father_name, String stud_mother_name, String stud_bday, String stud_gender,
			String stud_cur_address, String stud_permanant_address, String stud_personal_email, String stud_contact,
			String father_contact, String alternate_contact, String stud_skype_id, Float stud_cur_cpi,
			int stud_cur_backlogs, int stud_tot_backlogs, Float stud_ssc_per, Float stud_hsc_per, Float stud_grad_per,
			String stud_grad_uni, int stud_is_interested, int stud_is_out, int stud_is_verified, int stud_is_placed,
			String stud_resume, String stud_photo, String stud_grad_degree, int stud_is_si) {
		super();
		this.stud_id = stud_id;
		this.stud_fname = stud_fname;
		this.stud_mname = stud_mname;
		this.stud_lname = stud_lname;
		this.stud_da_email = stud_da_email;
		this.stud_father_name = stud_father_name;
		this.stud_mother_name = stud_mother_name;
		this.stud_bday = stud_bday;
		this.stud_gender = stud_gender;
		this.stud_cur_address = stud_cur_address;
		this.stud_permanant_address = stud_permanant_address;
		this.stud_personal_email = stud_personal_email;
		this.stud_contact = stud_contact;
		this.father_contact = father_contact;
		this.alternate_contact = alternate_contact;
		this.stud_skype_id = stud_skype_id;
		this.stud_cur_cpi = stud_cur_cpi;
		this.stud_cur_backlogs = stud_cur_backlogs;
		this.stud_tot_backlogs = stud_tot_backlogs;
		this.stud_ssc_per = stud_ssc_per;
		this.stud_hsc_per = stud_hsc_per;
		this.stud_grad_per = stud_grad_per;
		this.stud_grad_uni = stud_grad_uni;
		this.stud_is_interested = stud_is_interested;
		this.stud_is_out = stud_is_out;
		this.stud_is_verified = stud_is_verified;
		this.stud_is_placed = stud_is_placed;	
		this.stud_resume = stud_resume;
		this.stud_photo = stud_photo;
		this.stud_grad_degree = stud_grad_degree;
		this.stud_is_si = stud_is_si;
	}

	public String getStud_id() {
		return stud_id;
	}

	public void setStud_id(String stud_id) {
		this.stud_id = stud_id;
	}

	public String getStud_fname() {
		return stud_fname;
	}

	public void setStud_fname(String stud_fname) {
		this.stud_fname = stud_fname;
	}

	public String getStud_mname() {
		return stud_mname;
	}

	public void setStud_mname(String stud_mname) {
		this.stud_mname = stud_mname;
	}

	public String getStud_lname() {
		return stud_lname;
	}

	public void setStud_lname(String stud_lname) {
		this.stud_lname = stud_lname;
	}

	public String getStud_da_email() {
		return stud_da_email;
	}

	public void setStud_da_email(String stud_da_email) {
		this.stud_da_email = stud_da_email;
	}

	public String getStud_father_name() {
		return stud_father_name;
	}

	public void setStud_father_name(String stud_father_name) {
		this.stud_father_name = stud_father_name;
	}

	public String getStud_mother_name() {
		return stud_mother_name;
	}

	public void setStud_mother_name(String stud_mother_name) {
		this.stud_mother_name = stud_mother_name;
	}

	public String getStud_bday() {
		return stud_bday;
	}

	public void setStud_bday(String stud_bday) {
		this.stud_bday = stud_bday;
	}

	public String getStud_gender() {
		return stud_gender;
	}

	public void setStud_gender(String stud_gender) {
		this.stud_gender = stud_gender;
	}

	public String getStud_cur_address() {
		return stud_cur_address;
	}

	public void setStud_cur_address(String stud_cur_address) {
		this.stud_cur_address = stud_cur_address;
	}

	public String getStud_permanant_address() {
		return stud_permanant_address;
	}

	public void setStud_permanant_address(String stud_permanant_address) {
		this.stud_permanant_address = stud_permanant_address;
	}

	public String getStud_personal_email() {
		return stud_personal_email;
	}

	public void setStud_personal_email(String stud_personal_email) {
		this.stud_personal_email = stud_personal_email;
	}

	public String getStud_contact() {
		return stud_contact;
	}

	public void setStud_contact(String stud_contact) {
		this.stud_contact = stud_contact;
	}

	public String getFather_contact() {
		return father_contact;
	}

	public void setFather_contact(String father_contact) {
		this.father_contact = father_contact;
	}

	public String getAlternate_contact() {
		return alternate_contact;
	}

	public void setAlternate_contact(String alternate_contact) {
		this.alternate_contact = alternate_contact;
	}

	public String getStud_skype_id() {
		return stud_skype_id;
	}

	public void setStud_skype_id(String stud_skype_id) {
		this.stud_skype_id = stud_skype_id;
	}

	public Float getStud_cur_cpi() {
		return stud_cur_cpi;
	}

	public void setStud_cur_cpi(Float stud_cur_cpi) {
		this.stud_cur_cpi = stud_cur_cpi;
	}

	public int getStud_cur_backlogs() {
		return stud_cur_backlogs;
	}

	public void setStud_cur_backlogs(int stud_cur_backlogs) {
		this.stud_cur_backlogs = stud_cur_backlogs;
	}

	public int getStud_tot_backlogs() {
		return stud_tot_backlogs;
	}

	public void setStud_tot_backlogs(int stud_tot_backlogs) {
		this.stud_tot_backlogs = stud_tot_backlogs;
	}

	public Float getStud_ssc_per() {
		return stud_ssc_per;
	}

	public void setStud_ssc_per(Float stud_ssc_per) {
		this.stud_ssc_per = stud_ssc_per;
	}

	public Float getStud_hsc_per() {
		return stud_hsc_per;
	}

	public void setStud_hsc_per(Float stud_hsc_per) {
		this.stud_hsc_per = stud_hsc_per;
	}

	public Float getStud_grad_per() {
		return stud_grad_per;
	}

	public void setStud_grad_per(Float stud_grad_per) {
		this.stud_grad_per = stud_grad_per;
	}

	public String getStud_grad_uni() {
		return stud_grad_uni;
	}

	public void setStud_grad_uni(String stud_grad_uni) {
		this.stud_grad_uni = stud_grad_uni;
	}

	public int getStud_is_interested() {
		return stud_is_interested;
	}

	public void setStud_is_interested(int stud_is_interested) {
		this.stud_is_interested = stud_is_interested;
	}

	public int getStud_is_out() {
		return stud_is_out;
	}

	public void setStud_is_out(int stud_is_out) {
		this.stud_is_out = stud_is_out;
	}

	public int getStud_is_verified() {
		return stud_is_verified;
	}

	public void setStud_is_verified(int stud_is_verified) {
		this.stud_is_verified = stud_is_verified;
	}

	public int getStud_is_placed() {
		return stud_is_placed;
	}

	public void setStud_is_placed(int stud_is_placed) {
		this.stud_is_placed = stud_is_placed;
	}

	public String getStud_resume() {
		return stud_resume;
	}

	public void setStud_resume(String stud_resume) {
		this.stud_resume = stud_resume;
	}

	public String getStud_photo() {
		return stud_photo;
	}

	public void setStud_photo(String stud_photo) {
		this.stud_photo = stud_photo;
	}

	public String getStud_grad_degree() {
		return stud_grad_degree;
	}

	public void setStud_grad_degree(String stud_grad_degree) {
		this.stud_grad_degree = stud_grad_degree;
	}

	public int getStud_is_si() {
		return stud_is_si;
	}

	public void setStud_is_si(int stud_is_si) {
		this.stud_is_si = stud_is_si;
	}
	
	

	
	
}
