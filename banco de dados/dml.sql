USE oliversrestaurant;

SELECT *FROM (TB_RESERVA);

SELECT *FROM (TB_FUNCIONARIO);

update tb_funcionario
set ds_senha = 'admin',
	ds_email = 'admin@olivers.com'
where id_funcionario = 2;    
    

-- carga inicial funcionario
insert INTO TB_FUNCIONARIO (DS_SENHA, DS_EMAIL)
values('olivers','jorge.cleito@olivers.com');

-- CSU01: efetuar login
select  id_funcionario	  id,
		ds_email		email
  from	tb_funcionario
 where	ds_email   = 'jorge.cleito@olivers.com'
   and	ds_senha   = 'olivers';
   
-- CSU02: Registrar nova reserva
insert INTO TB_RESERVA (ID_FUNCIONARIO,NM_CLIENTE, DS_TELEFONE, DT_RESERVA, NR_PESSOAS, ds_status)
values(1,'Roger Casemiro', '(81) 93411-8468', '2022-07-05 13:30:00', 1, 'pendente');

-- CSU03: consultar reservas pendentes
select  id_reserva  	id,
		nm_cliente  	cliente,
		ds_telefone 	telefone,
        dt_reserva  	reserva,
        nr_pessoas  	pessoas,
        ds_status   	status
 from 	tb_reserva
 where  ds_status  like '%pendente%';

-- CSU04: confirmar reserva
update  tb_reserva
   set  ds_status   = 'Concluído'
 where  id_reserva  = 1;
 
-- CSU05: remover reserva
update  tb_reserva
   set  ds_status   = 'Pendente'
 where  id_reserva  = 14;

-- CSU06: alterar reserva
update  tb_reserva
   set	id_funcionario = 1,
		nm_cliente  = 'Jorge Cleito',
		ds_telefone = '(21) 92375-7442',
        dt_reserva  = '2022-11-03 19:00:00',
        nr_pessoas  = 2,
        ds_status   = 'Pendente'
 where  id_reserva  = 8;
 
 