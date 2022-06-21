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
                                 <div className="r">
                                 <h4>Reserva 01</h4>
                                 <div>
                                     <p>Nome do cliente:</p>
                                     <input name="nome" id="name" className="h" ></input>
                                 </div>
                                 <div>
                                     <p>Número de contato:</p>
                                     <input name="Nº" id="Number" className="h" ></input>
                                 </div>
                                 <div>
                                     <p>Data para reserva:</p>
                                     <input name="data" id="date" className="h" ></input>
                                 </div>
                                 <div>
                                     <p>Horário da reserva:</p>
                                     <input name="horario" id="hora" className="h"></input>
                                 </div>
                                 <div>
                                     <form>
                                         
                                             <div className="form">
                                                 <p>Número de pessoas:</p>
                                                 
                                                 <select id="pessoas">
                                                     <option selected disabled value="">Selecione</option>
                                                     <option>1</option>
                                                     <option>2</option>
                                                     <option>3</option>
                                                     <option>4</option>
                                                     <option>5</option>
                                                     <option>6</option>
                                                     <option>7</option>
                                                     <option>8</option>
                                                     <option>9</option>
                                                     <option>10</option>
                                                     <option>11</option>
                                                     <option>12</option>
                                                     <option>13</option>
                                                     <option>14</option>
                                                     <option>15</option>
                                                     <option>16</option>
                                                     <option>17</option>
                                                     <option>18</option>
                                                     <option>19</option>
                                                     <option>20</option>
                                                     <option>21</option>
                                                     <option>22</option>
                                                     <option>23</option>
                                                     <option>24</option>
                                                     <option>25</option>
                                                     <option>26</option>
                                                     <option>27</option>
                                                     <option>28</option>
                                                     <option>29</option>
                                                     <option>30</option>
             
                                                 </select>
                                             </div>
                                         
                                     </form>
                                     
                                 </div>                
                             </div>
                            )}

                            
                        </tbody>
                    </table>
                </div>        
            </section>
        </main>
    )


}