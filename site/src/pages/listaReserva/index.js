import './index.scss';
import Logo from '../../assets/images/LOGO.png';
import { useEffect, useState } from 'react'
import { listaPedentes, editarReserva, removerReserva, concluirReserva} from '../../api/reservaApi';
import sim from '../../assets/images/sim.png'
import nao from '../../assets/images/nao.png'
import editar from '../../assets/images/editar.png'
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function Index() {
    const [reserva,setReserva] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('funcionario-logado')) {
            navigate('/login')
        }
    })

    async function confirmarReserva(id) {
        const resp = concluirReserva(id);
        alert('Reserva concluída.')
    }

    async function alterarReserva(id) {
        navigate(`/alterarReserva/${id}`)
    }

    async function cancelarReserva(id) {
        const resp = removerReserva(id);
        alert('Reserva cancelada.')
    }

    async function carregarPendente() {
        const resp = await listaPedentes();
        setReserva(resp);
    }

    useEffect(() => {
        const resp = carregarPendente();
    }, [])

    return (
        <main className="bodylista">
            <header>
                <div className="t">a
                    <a href="../tabelaADM" className="voltar">Voltar</a>
                    <img src={Logo} className="img"/>
                </div>
                
                <h2 className="j">LISTA DE RESERVAS</h2>

                <a href="../novaReserva" className="nova">Nova Reserva</a>
                
            </header>
            <section className="principal">
                <div className='tabela'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nº Reserva:</th>
                                <th>Nome do Cliente:</th>
                                <th>Número de Contato:</th>
                                <th>Data:</th>
                                <th>Hora:</th>
                                <th>Pessoas a Comparecer:</th>
                            </tr>
                        </thead>
                        <tbody>

                            {reserva.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.cliente}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.reserva.substr(0, 10)}</td>
                                    <td>{item.reserva.substr(11, 5)}</td>
                                    <td>{item.pessoas}</td>
                                    <td className='imgs'>
                                        <button><img src={editar} alt="editar" className='editar' onClick={() => alterarReserva(item.id)}/></button>
                                        <button onClick={carregarPendente}><img src={sim} alt="sim" className='sim' onClick={() => confirmarReserva(item.id)} /></button>
                                        <button onClick={carregarPendente}><img src={nao} alt="nao" className='nao' onClick={() => cancelarReserva(item.id)} /></button>
                                    </td>
                                </tr>
                            )}

                            
                        </tbody>
                    </table>
                </div>        
            </section>
        </main>
    )


}

