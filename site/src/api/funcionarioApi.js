import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email, senha) {
    const a = await api.post('/funcionario/login', {
        email: email,
        senha: senha
    });

    return a.data;
}