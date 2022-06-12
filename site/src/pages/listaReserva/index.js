import './index.scss';
import Logo from '../../assets/images/LOGO.png';
import { useEffect, useState } from 'react'
import { listaPedentes } from '../../api/reservaApi';
import sim from '../../assets/images/sim.png'
import nao from '../../assets/images/nao.png'
import editar from '../../assets/images/editar.png'


export default function Index() {
    const [reserva,setReserva] = useState([]);


    async function carregarPendente() {
        const resp = await listaPedentes();
        console.log(resp)
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
                                    <td>{item.nome}</td>
                                    <td>{item.tel}</td>
                                    <td>{item.data}</td>
                                    <td>{item.hora}</td>
                                    <td>{item.pessoas}</td>
                                    <div>
                                        <img src={editar} alt="editar" />
                                        <img src={sim} alt="sim" />
                                        <img src={nao} alt="nao" />
                                    </div>
                                </tr>
                            )}

                            
                        </tbody>
                    </table>
                </div>        
            </section>
        </main>
    )


}

