import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function novaClick(nome, tel, data, hora, pessoas) {
    const resposta = await api.post('/reserva/nova', {
        nome : nome,
        tel : tel,
        data : data, 
        hora : hora,
        pessoas : pessoas
    })
    return resposta.data;
}