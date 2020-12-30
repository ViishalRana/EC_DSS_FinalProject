package com.placementWeb.springboot.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="tbl_company")
public class Company {
	@Id
	private int company_id;
	
	@Column(name = "company_name")
	private String company_name;

	@Column(name = "hr_name")	
	private String hr_name;

	@Column(name = "hr_contact")
	private String hr_contact;
	
	@Column(name = "locations")
	private String locations;
	
	@Column(name = "drive_start_date")
	private String drive_start_date;
	
	@Column(name = "drive_end_date")
	private String drive_end_date;
	
	@Column(name = "company_offer_type")
	private String company_offer_type;
	
	@Column(name = "company_category")
	private String company_category;
	
	@Column(name = "bond_details")
	private String bond_details;
	
	@Column(name = "registration_start_date")
	private String registration_start_date;
	
	@Column(name = "registration_end_date")
	private String registration_end_date;

	
	public Company(){
		
	}

	public Company(int company_id, String company_name, String hr_name, String hr_contact, String locations,
			String drive_start_date, String drive_end_date, String company_offer_type, String company_category,
			String bond_details, String registration_start_date, String registration_end_date) {
		super();
		this.company_id = company_id;
		this.company_name = company_name;
		this.hr_name = hr_name;
		this.hr_contact = hr_contact;
		this.locations = locations;
		this.drive_start_date = drive_start_date;
		this.drive_end_date = drive_end_date;
		this.company_offer_type = company_offer_type;
		this.company_category = company_category;
		this.bond_details = bond_details;
		this.registration_start_date = registration_start_date;
		this.registration_end_date = registration_end_date;
	}

	public int getCompany_id() {
		return company_id;
	}

	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getHr_name() {
		return hr_name;
	}

	public void setHr_name(String hr_name) {
		this.hr_name = hr_name;
	}

	public String getHr_contact() {
		return hr_contact;
	}

	public void setHr_contact(String hr_contact) {
		this.hr_contact = hr_contact;
	}

	public String getLocations() {
		return locations;
	}

	public void setLocations(String locations) {
		this.locations = locations;
	}

	public String getDrive_start_date() {
		return drive_start_date;
	}

	public void setDrive_start_date(String drive_start_date) {
		this.drive_start_date = drive_start_date;
	}

	public String getDrive_end_date() {
		return drive_end_date;
	}

	public void setDrive_end_date(String drive_end_date) {
		this.drive_end_date = drive_end_date;
	}

	public String getCompany_offer_type() {
		return company_offer_type;
	}

	public void setCompany_offer_type(String company_offer_type) {
		this.company_offer_type = company_offer_type;
	}

	public String getCompany_category() {
		return company_category;
	}

	public void setCompany_category(String company_category) {
		this.company_category = company_category;
	}

	public String getBond_details() {
		return bond_details;
	}

	public void setBond_details(String bond_details) {
		this.bond_details = bond_details;
	}

	public String getRegistration_start_date() {
		return registration_start_date;
	}

	public void setRegistration_start_date(String registration_start_date) {
		this.registration_start_date = registration_start_date;
	}

	public String getRegistration_end_date() {
		return registration_end_date;
	}

	public void setRegistration_end_date(String registration_end_date) {
		this.registration_end_date = registration_end_date;
	}
	
	
	
}
