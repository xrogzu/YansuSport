package com.yansu.yansumicroserviceuser.enums;

public enum UserSexEnum {
	MAN(1),
	WOMAN(0);
	
	private int value;
	
	private UserSexEnum(int value){
		this.value = value;
	}
	
	public static UserSexEnum fromValue(int value){
		for(UserSexEnum sexEnum : UserSexEnum.values()){
			if(sexEnum.value == value){
				return sexEnum;
			}
		}
		throw new IllegalArgumentException("Can not create sex from value "+value);
	}
	
	public int toValue(){
		return value;
	}
}
