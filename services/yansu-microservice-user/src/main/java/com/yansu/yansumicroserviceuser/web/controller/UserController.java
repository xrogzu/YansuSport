package com.yansu.yansumicroserviceuser.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.yansu.yansumicroserviceuser.domain.User;
import com.yansu.yansumicroserviceuser.mapper.UserMapper;

@RestController
public class UserController {
	@Autowired
	private UserMapper userMapper;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		List<User> users = userMapper.getAll();
		return users;
	}
	
	@GetMapping("/{id}")
	public User findById(@PathVariable Long id){
		User user = userMapper.getOne(id);
		return user;
	} 
}
