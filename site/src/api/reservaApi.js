import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function novaClick(funcionario ,cliente, telefone, reserva, pessoas) {


    const resposta = await api.post('/reserva/nova', {
        funcionario : funcionario,
        cliente : cliente,
        telefone : telefone,
        reserva : reserva, 
        pessoas : pessoas
    })
    return resposta.data;
}

export async function listaPedentes() {
    const resposta = await api.get('/reserva/pendente');
    return resposta.data;
}

export async function porID(id) {
    const resposta = await api.get(`/reserva/consultar/${id}`);
    return resposta.data;
}

export async function editarReserva(id,cliente, telefone, reserva, pessoas) {
    const resposta = await api.put(`/reserva/alterar/${id}`, {
        cliente : cliente,
        telefone : telefone,
        reserva : reserva, 
        pessoas : pessoas
    })
    return resposta.data;
}

export async function removerReserva(id, status) {
    const resposta = await api.put(`/reserva/remover/${id}`, {
        status : status
    })
    return resposta.data;
}
