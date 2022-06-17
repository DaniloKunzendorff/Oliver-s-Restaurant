import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function novaClick(funcionario ,nome, tel, data, hora, pessoas) {


    const resposta = await api.post('/reserva/nova', {
        funcionario : funcionario,
        cliente : nome,
        telefone : tel,
        reserva : data, 
        reserva : hora,
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

export async function editarReserva(nome, tel, data, hora, pessoas) {
    const resposta = await api.put('/reserva/alterar', {
        cliente : nome,
        telefone : tel,
        reserva : data, 
        reserva : hora,
        pessoas : pessoas
    })
    return resposta.data;
}

