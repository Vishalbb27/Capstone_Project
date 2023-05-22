package com.example.Medicare.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.entity.Medicine;
import com.example.Medicare.entity.User;
import com.example.Medicare.service.MedicineService;

@RestController
public class MedicineController {
	@Autowired
	MedicineService medicineService;

	@PostMapping("/addMedicine")
	public List<Medicine> createMedicine(@RequestBody Medicine med) {
		System.out.println(med);
		Medicine medicine = medicineService.create(med);
		List<Medicine> medicare = medicineService.getMedicines();
		return medicare;
	}

	@PostMapping("/updateMedicine/{id}")
	public List<Medicine> updateMedicine(@RequestBody Medicine med, @PathVariable int id) {
		System.out.println("Id for the update" + id);
		Medicine medicine = medicineService.update(id, med);
		List<Medicine> medicines = medicineService.getMedicines();
		return medicines;
	}
	
	@DeleteMapping("/deleteMedicine/{id}")
	public List<Medicine> deleteMedicine(@PathVariable int id) {
		String message = medicineService.delete(id);
		List<Medicine> medicines = medicineService.getMedicines();
		return medicines;

	}
	
	@GetMapping("/getMedicine")
	public List<Medicine> getMedicine(HttpServletRequest request) {
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("LoginCredentials");
		System.out.println("UserSession"+user);
		List<Medicine> medicines = medicineService.getMedicines();
		return medicines;
	}
}
