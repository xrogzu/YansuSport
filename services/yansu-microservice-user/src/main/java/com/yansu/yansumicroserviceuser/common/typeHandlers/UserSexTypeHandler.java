package com.yansu.yansumicroserviceuser.common.typeHandlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

import com.yansu.yansumicroserviceuser.enums.UserSexEnum;

public class UserSexTypeHandler implements TypeHandler<UserSexEnum>{

	@Override
	public UserSexEnum getResult(ResultSet arg0, String arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserSexEnum getResult(ResultSet arg0, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserSexEnum getResult(CallableStatement arg0, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setParameter(PreparedStatement preparedStatement, int i, UserSexEnum sexEnum, JdbcType arg3) throws SQLException {
		// TODO Auto-generated method stub
		preparedStatement.setInt(i, sexEnum.toValue());
	}

}
