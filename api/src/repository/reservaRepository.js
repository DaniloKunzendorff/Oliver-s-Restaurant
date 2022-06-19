import { con } from '../repository/connection.js'

export async function resgistrarNova(reserva) {
    const comando = `insert INTO TB_RESERVA (ID_FUNCIONARIO,NM_CLIENTE, DS_TELEFONE, DT_RESERVA, NR_PESSOAS, ds_status)
    values(?, ?, ?, ?, ?, 'Pendente');`

    const [resposta] = await con.query(comando, [reserva.funcionario, reserva.cliente, reserva.telefone, reserva.reserva, reserva.pessoas, reserva.status]);
    reserva.id = resposta.insertId;
    return reserva
}

export async function consultarPendencias(status) {
    const comando = `select  id_reserva  	id,
                            nm_cliente  	cliente,
                            ds_telefone 	telefone,
                            dt_reserva  	reserva,
                            nr_pessoas  	pessoas,
                            ds_status   	status
                    from 	tb_reserva
                    where  ds_status  like '%pendente%';`

    const [linhas] = await con.query(comando, [status]);
    return linhas;
}

export async function removerReserva(id, reserva) {
    const comando = `update tb_reserva
                        set ds_status   = 'Cancelada'
                      where id_reserva  = ?`
    const [RESPOSTA] = await con.query(comando, [id]);
    return RESPOSTA.affectedRows;
}



export async function confirmarReserva(id, reserva) {
    const comando = `update tb_reserva
                        set ds_status   = 'Concluído'
                      where id_reserva  = ?`
    const [RESPOSTA] = await con.query(comando, [id]);
    return RESPOSTA.affectedRows;
}

export async function alterarReserva(id, reserva) {
    const comando = `update tb_reserva
                        set nm_cliente  = ?,
                            ds_telefone = ?,
                            dt_reserva  = ?,
                            nr_pessoas  = ?
                      where id_reserva  = ?`
    const [RESPOSTA] = await con.query(comando, [reserva.cliente, reserva.telefone, reserva.reserva, reserva.pessoas, id]);
    return RESPOSTA.affectedRows;
}

export async function consultarReservaID(id) {
    const comando = `select  id_reserva  	id,
                            id_funcionario  funcionario,
                            nm_cliente  	cliente,
                            ds_telefone 	telefone,
                            dt_reserva  	reserva,
                            nr_pessoas  	pessoas,
                            ds_status   	status
                    from 	tb_reserva
                    where  id_reserva = ?`;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}