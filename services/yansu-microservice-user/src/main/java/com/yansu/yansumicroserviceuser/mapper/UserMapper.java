package com.yansu.yansumicroserviceuser.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.yansu.yansumicroserviceuser.domain.User;
import com.yansu.yansumicroserviceuser.enums.UserSexEnum;

public interface UserMapper {
	@Select("SELECT * from user")
	@Results({
		@Result(property="userSex", column="sex", javaType=UserSexEnum.class),
		@Result(property="headImgUrl", column="headimgurl", javaType=String.class),
		@Result(property="subscribeTime", column="subscribe_time", javaType=Long.class),
		@Result(property="tagidList", column="tagid_list", javaType=String.class)
		
	})
	List<User> getAll();
	
	@Select("SELECT * FROM user WHERE id=#{id}")
	@Results({
		@Result(property="userSex", column="sex", javaType=UserSexEnum.class),
		@Result(property="headImgUrl", column="headimgurl", javaType=String.class),
		@Result(property="subscribeTime", column="subscribe_time", javaType=Long.class),
		@Result(property="tagidList", column="tagid_list", javaType=String.class)
	})
	User getOne(Long id);
	
	@Insert("INSERT INTO user(subscribe,openid,nickname,sex,language,city,province,country,headimgurl,subscribe_time,"
			+ "privilege,unionid,remark,groupid,tagid_list) "
			+ "VALUES(#{subscribe},#{openid},#{nickname},#{userSex},#{language},#{city},#{province},#{country},#{headImgUrl},#{subscribeTime},"
			+ "#{privilege},#{unionid},#{remark},#{groupid},#{tagidList})" )
	void insert(User user);
	
	@Update("UPDATE user SET nickname=#{nickname} where id = #{id}")
	void update(User user);
	
	@Delete("DELETE FROM user WHERE id=#{id}")
	void delete(Long id);
}
