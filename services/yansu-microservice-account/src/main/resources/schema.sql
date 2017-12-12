drop table if exists `account`;
create table account (account_id bigint(20) not null AUTO_INCREMENT, 
					user_id bigint(20) not null,
					account_name varchar(50) not null,
					balance decimal(12,2) not null,
					create_date date not null,
					last_update date not null,					
					primary key(account_id),
					key user_id (user_id)
					)ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
