CREATE DATABASE oliversrestaurant;

DROP database oliversrestaurant;

USE oliversrestaurant;

create table TB_RESERVA(
ID_RESERVA   int PRIMARY KEY auto_increment,
ID_FUNCIONARIO int,
NM_CLIENTE    varchar(200),
DS_TELEFONE   varchar(200),
DT_RESERVA    datetime,
NR_PESSOAS    int,
DS_STATUS     varchar(100),
foreign key (ID_FUNCIONARIO) references TB_FUNCIONARIO(ID_FUNCIONARIO)
);

create table TB_FUNCIONARIO(
ID_FUNCIONARIO   int PRIMARY KEY auto_increment,
DS_SENHA    varchar(100),
DS_EMAIL   varchar(100)
);

