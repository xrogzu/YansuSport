package com.yansu.yansumicroserviceeureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class YansuMicroserviceEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(YansuMicroserviceEurekaApplication.class, args);
	}
}
