import './index.scss'
import {useState} from 'react'
import { novaClick } from '../../api/reservaApi'

export default function Index() {
    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [pessoas, setPessoas] = useState('');

    async function criarReserva(nome, tel, data, hora, pessoas) {
        try {
            const a = await novaClick(nome, tel, data, hora, pessoas);

            alert('Reserva criada com sucesso!')
        } catch (err) {
           
            alert(err.message)
        }
    }


    return (
        <main className="bodyn">
            <section className="j">
                <h4>NOVA RESERVA</h4>
            </section>
            <section className="fundo">
                <section class="preto">
                    <h2>Reserva 11</h2>
                    <div>
                        <p>Nome do cliente:</p>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input type="tel" value={tel} onChange={e => setTel(e.target.value)}/>
                    </div>
                    <div>
                        <p>Data:</p>
                        <input type="date" value={data} onChange={e => setData(e.target.value)}/>
                    </div>
                    <div>
                        <p>Hora:</p>
                        <input type="time" value={hora} onChange={e => setHora(e.target.value)}/>
                    </div>
                    <div>
                        <p>Pessoas a comparecer:</p>
                        <select id="pessoas" value={pessoas} onChange={e => setPessoas(e.target.value)}>
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
                    <div className='criar'>
                        <button href="#" className="t" onClick={criarReserva}>Criar Reserva</button>
                    </div>
                    <div className='erro'>
                        Insira todos os campos
                    </div>
                </section>
            </section>
            <div className='c'>
                <a href="../listaReserva" className='can'>Cancelar</a>
            </div>
        </main>
    )


}

