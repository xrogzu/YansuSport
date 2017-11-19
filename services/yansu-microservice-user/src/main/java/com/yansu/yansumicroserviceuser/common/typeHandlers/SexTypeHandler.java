package com.yansu.yansumicroserviceuser.common.typeHandlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

import com.yansu.yansumicroserviceuser.enums.UserSexEnum;

public class SexTypeHandler implements TypeHandler<UserSexEnum> {

	@Override
	public UserSexEnum getResult(ResultSet resultSet, String string) throws SQLException {
		// TODO Auto-generated method stub
		return UserSexEnum.fromValue(resultSet.getInt(string));
	}

	@Override
	public UserSexEnum getResult(ResultSet resultSet, int i) throws SQLException {
		// TODO Auto-generated method stub
		return UserSexEnum.fromValue(i);
	}

	@Override
	public UserSexEnum getResult(CallableStatement 	callableStatement, int i) throws SQLException {
		// TODO Auto-generated method stub
		return UserSexEnum.fromValue(callableStatement.getInt(i));
	}

	@Override
	public void setParameter(PreparedStatement preparedStatement, int i, UserSexEnum sexEnum, JdbcType arg3) throws SQLException {		
		preparedStatement.setInt(i, sexEnum.toValue());
	}

	
}
