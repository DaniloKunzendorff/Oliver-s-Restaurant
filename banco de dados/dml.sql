USE oliversrestaurant;

SELECT *FROM (TB_RESERVA);

SELECT *FROM (TB_FUNCIONARIO);


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
delete from	tb_reserva
	  where	id_reserva = 3;

-- CSU05: remover reserva
delete from	tb_reserva
	  where	id_reserva = 1;

-- CSU06: alterar reserva
update  tb_reserva
   set	nm_cliente  = 'Roberto Carlos',
		ds_telefone = '(11) 98451-6264',
        dt_reserva  = '2022-06-30 14:20:00',
        nr_pessoas  = 2,
        ds_status   = 'pendente'
 where  id_reserva  = 2;
 
 
 