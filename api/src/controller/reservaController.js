import {resgistrarNova, consultarPendencias, removerReserva, confirmarReserva, alterarReserva} from '../repository/reservaRepository.js'

import { Router  } from "express"
const server = Router();

server.post('/reserva/nova', async (req,resp) => {
    try{
        const resgistrar = req.body;
        if(!resgistrar.id) throw new Error ("Id do funcionario é OBRIGATÓRIO!")
        if(!resgistrar.cliente) throw new Error ("Nome do cliente é OBRIGATÓRIO!")
        if(!resgistrar.telefone) throw new Error ("Telefone é OBRIGATÓRIO!")
        if(!resgistrar.data) throw new Error ("Data da reserva é OBRIGATÓRIA!")
        if(!resgistrar.pessoas) throw new Error ("QTD. de pessoas é OBRIGATÓRIO!")
        if(!resgistrar.status) throw new Error ("Status da reserva é OBRIGATÓRIA")


        const RESPOSTA = await resgistrarNova (resgistrar)
        resp.status(200).send({RESPOSTA})

    }
    catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }
})


//consulta apenas a primeira pendente
server.get('/reserva/:status', async (req, resp) => {
    try
    {
        const { status } = req.params;
        const RESPOSTA = await consultarPendencias(status);

        if(!RESPOSTA) throw new Error("Status não encontrado")

        resp.send(RESPOSTA);
    }
    catch(err)
    {
        resp.status(400).send({
            Erro: err.message
        })
    }
})


server.put('/reserva/confirmar/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const reserva = req.body;

        const resposta = await confirmarReserva(id);
        resp.status(200).send({
            Resposta: "Reseva concluída"
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/reserva/remover/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const RESPOSTA = await removerReserva(id);
        if(RESPOSTA != 1)
            throw new Error('Reserva não pode ser removida.')
        
        resp.status(200).send({
            Resposta: "Reseva cancelada"
        });
    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }
})


server.put('/reserva/alterar/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const reserva = req.body;

        const resposta = await alterarReserva(id, reserva);
        resp.status(200).send({
            Resposta: "Reseva alterada"
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})











export default server;

