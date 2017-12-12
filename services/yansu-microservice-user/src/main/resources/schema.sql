drop table if exists `user`;
create table user (user_id bigint(20) not null AUTO_INCREMENT, 
					subscribe int(2) not null,
					openid varchar(40) not null,
					nickname varchar(20) not null,
					sex int(2) not null,
					language varchar(10) not null,
					city varchar(20) not null,
					province varchar(20) not null,
					country varchar(40) not null,
					headimgurl varchar(300) not null,
					subscribe_time bigint(30) not null,
					privilege varchar(40) not null,
					unionid varchar(40) not null,
					remark varchar(40) not null,
					groupid int(5) not null,
					tagid_list varchar(40) not null,					
					primary key(user_id)
					)ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
