package com.yansu.yansumicroserviceuser;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CharacterEncodingFilter;

@SpringBootApplication
@MapperScan("com.yansu.yansumicroserviceuser.mapper")
public class YansuMicroserviceUserApplication {

	@Bean
	CharacterEncodingFilter characterEncodingFilter(){
		CharacterEncodingFilter encodingFilter = new CharacterEncodingFilter();
		encodingFilter.setEncoding("UTF-8");
		encodingFilter.setForceEncoding(true);
		return encodingFilter;
	}
	public static void main(String[] args) {
		SpringApplication.run(YansuMicroserviceUserApplication.class, args);
	}
}
