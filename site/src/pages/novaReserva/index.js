import './index.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { editarReserva, novaClick, porID} from '../../api/reservaApi'
import storage from 'local-storage';

export default function Index() {
    const [cliente, setCliente] = useState('');
    const [telefone, setTelefone] = useState('');
    const [reserva, setReserva] = useState('');
    const [pessoas, setPessoas] = useState(0);
    const [erro, setErro] = useState('');

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('funcionario-logado')) {
            navigate('/login')
        }
    })


    useEffect(() => {
        if (id){
            buscarReserva();
        }
    }, [])

    async function buscarReserva() {
        const resposta = await porID(id);
        setCliente(resposta.cliente);
        setTelefone(resposta.telefone);
        setReserva(resposta.reserva.substr(0,16));
        setPessoas(resposta.pessoas);


    }

    async function alterarReserva() {
        try {
            const a = await editarReserva(id, cliente, telefone, reserva, pessoas);

            alert('Reserva alterada com sucesso!')
        } catch (err) {
            if(err.response.status === 400){
                setErro(err.response.data.erro)
            }
        }
    }
  

    async function criarReserva() {
        try {
            const funcionario = storage('funcionario-logado').id;
            const a = await novaClick(funcionario, cliente, telefone, reserva, pessoas);

            alert('Reserva criada com sucesso!')
        } catch (err) {
            if(err.response.status === 400){
                setErro(err.response.data.Erro)
            }
        }
    }


    return (
        
        <main className="bodyn">
            <header className="j">
                <h4>NOVA RESERVA</h4>
            </header>
            <section className="fundo">
                <section className="preto">
                    <h2>Reserva 21</h2>
                    <div>
                        <p>Nome do cliente:</p>
                        <input type="text" value={cliente} onChange={e => setCliente(e.target.value)}/>
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>
                    <div>
                        <p>Data e Hora:</p>
                        <input type="datetime-local" value={reserva} onChange={e => setReserva(e.target.value)}/>
                    </div>
                   
                    <div>
                        <p>Pessoas a comparecer:</p>
                        <select type="selection" value={pessoas} onChange={e => setPessoas(e.target.value)}>
                            <option>Selecione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>

                        </select>
                    </div>
                    <div className='criar'>
                        <button href="#" className="t" onClick={alterarReserva}>Alterar Reserva</button>
                        <button href="#" className="t" onClick={criarReserva}>Criar Reserva</button>
                    </div>
                    <div className='erro'>
                        {erro}
                    </div>
                </section>
            </section>
            <div className='c'>
                <a href="../listaReserva" className='can'>Cancelar</a>
            </div>
        </main>
    )


}

