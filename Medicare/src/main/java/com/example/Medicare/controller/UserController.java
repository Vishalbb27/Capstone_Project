package com.example.Medicare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.entity.User;
import com.example.Medicare.exception.DuplicateEmailException;
import com.example.Medicare.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/signup")
	public User createUser(@RequestBody User user) {
		User newUser = null;
		try {
			newUser = userService.create(user);
		} catch (DuplicateEmailException e) {
			e.printStackTrace();
		}
		return newUser;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		User user = userService.login(email, password);
		return user;
	}
}

