CREATE DATABASE oliversrestaurant;

DROP database oliversrestaurant;

USE oliversrestaurant;

create table TB_RESERVA(
ID_RESERVA   int PRIMARY KEY auto_increment,
ID_FUNCIONARIO int,
NM_CLIENTE    varchar(200),
DS_TELEFONE   varchar(200),
DT_DATAHORA     datetime,
NR_PESSOAS    int,
foreign key (ID_FUNCIONARIO) references TB_FUNCIONARIO(ID_FUNCIONARIO)
);

create table TB_FUNCIONARIO(
ID_FUNCIONARIO   int PRIMARY KEY auto_increment,
DS_SENHA    varchar(100),
DS_EMAIL   varchar(100)
);

SELECT *FROM (TB_RESERVA);

SELECT *FROM (TB_FUNCIONARIO);

insert INTO TB_RESERVA (ID_FUNCIONARIO,NM_CLIENTE, DS_TELEFONE, DT_DATAHORA, NR_PESSOAS)
values(1,'Roger Casemiro', '(81) 93411-8468', '2022-07-05 13:30:00', 1);


insert INTO TB_FUNCIONARIO (DS_SENHA, DS_EMAIL)
values('02302934','jorge.cleito@olires.COM');