package com.placementWeb.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_spc")
public class Spc {
	@Id
	private String spc_id;
	
	@Column(name="spc_email")
	private String spc_email;

	@Column(name="spc_name")
	private String spc_name;

	@Column(name="spc_contact")
	private String spc_contact;
	
	@Column(name="spc_pwd")
	private String spc_pwd;	
	
	private Spc() {}
	
	

	public Spc(String spc_id, String spc_email, String spc_name, String spc_contact, String spc_pwd) {
		super();
		this.spc_id = spc_id;
		this.spc_email = spc_email;
		this.spc_name = spc_name;
		this.spc_contact = spc_contact;
		this.spc_pwd = spc_pwd;
	}



	public String getSpc_id() {
		return spc_id;
	}

	public void setSpc_id(String spc_id) {
		this.spc_id = spc_id;
	}

	public String getSpc_email() {
		return spc_email;
	}

	public void setSpc_email(String spc_email) {
		this.spc_email = spc_email;
	}

	public String getSpc_name() {
		return spc_name;
	}

	public void setSpc_name(String spc_name) {
		this.spc_name = spc_name;
	}

	public String getSpc_contact() {
		return spc_contact;
	}

	public void setSpc_contact(String spc_contact) {
		this.spc_contact = spc_contact;
	}

	public String getSpc_pwd() {
		return spc_pwd;
	}

	public void setSpc_pwd(String spc_pwd) {
		this.spc_pwd = spc_pwd;
	}
		
	
}
