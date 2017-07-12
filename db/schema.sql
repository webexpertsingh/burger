create database burgersDB;

create table burgers ( 
    id int(11) auto_increment not null  primary key,
    burger_name varchar(50) not null,
    devoured boolean,
    date timestamp not null default CURRENT_TIMESTAMP
);
