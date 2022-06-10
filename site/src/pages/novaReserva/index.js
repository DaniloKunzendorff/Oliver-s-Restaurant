import './index.scss';



export default function index() {

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
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input type="tel"/>
                    </div>
                    <div>
                        <p>Data:</p>
                        <input type="date"/>
                    </div>
                    <div>
                        <p>Hora:</p>
                        <input type="time"/>
                    </div>
                    <div>
                        <p>Pessoas a comparecer:</p>
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
                    <a href="#" className="t">Criar Reserva</a>
                </section>
            </section>
            <a href="../listaReserva">Cancelar</a>

        </main>
    )


}

