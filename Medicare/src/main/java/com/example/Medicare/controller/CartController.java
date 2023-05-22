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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.entity.Cart;
import com.example.Medicare.entity.Medicine;
import com.example.Medicare.entity.User;
import com.example.Medicare.service.CartService;
import com.example.Medicare.service.MedicineService;
import com.example.Medicare.service.UserService;

@RestController
public class CartController {

	@Autowired
	CartService cartService;

	@Autowired
	MedicineService medicineService;

	@Autowired
	UserService userService;

	@PostMapping("/addCart/{id}")
	public List<Cart> addItem(@RequestBody User user,@PathVariable int id , HttpServletRequest request) {

		Medicine medicine = medicineService.getMedicine(id);

		Cart cart = cartService.add(user, medicine);
		List<Cart> cartItems = cartService.getCartItems(user);
		return cartItems;

	}

	@GetMapping("/getCart")
	public List<Cart> getCartItems(@RequestParam("email") String email) {
		User user = userService.findbyemail(email);
		List<Cart> cartItems = cartService.getCartItems(user);

		return cartItems;
	}

	@DeleteMapping("/deleteCart/{id}")
	public List<Cart> deleteCartItem(@RequestParam("email") String email,@PathVariable int id ) {
		String str = cartService.deleteCartItem(id);
		User user = userService.findbyemail(email);
		List<Cart> cartItems = cartService.getCartItems(user);

		return cartItems;
	}
}
