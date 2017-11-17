package com.yansu.yansumicroserviceuser;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.yansu.yansumicroserviceuser.mapper")
public class YansuMicroserviceUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(YansuMicroserviceUserApplication.class, args);
	}
}
