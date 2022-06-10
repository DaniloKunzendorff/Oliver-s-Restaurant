import './index.scss';
import Logo from '../../assets/images/LOGO.png';



export default function index() {

    return (
        <main className="bodylista">
            <header>
            <div className="t">
                <a href="../tabelaADM" className="voltar">Voltar</a>
                <img src={Logo} className="img"/>
            </div>
            
            <h2 className="j">LISTA DE RESERVAS</h2>

            <a href="../novaReserva" className="nova">Nova Reserva</a>
            
            </header>
            <section className="principal">
                <div className="div1">
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
            
                <div className="r">
                    <h4>Reserva 02</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 03</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 04</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 05</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            </div>
                <div className="div2">
                <div className="r">
                    <h4>Reserva 06</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 07</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h"/>
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 08</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" ></input>
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h"/>
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
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
            
                <div className="r">
                    <h4>Reserva 09</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
                    </div>
                    <div className="form">
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
            
                <div className="r">
                    <h4>Reserva 10</h4>
                    <div>
                        <p>Nome do cliente:</p>
                        <input name="nome" id="name" className="h" />
                    </div>
                    <div>
                        <p>Número de contato:</p>
                        <input name="Nº" id="Number" className="h" />
                    </div>
                    <div>
                        <p>Data para reserva:</p>
                        <input name="data" id="date" className="h" />
                    </div>
                    <div>
                        <p>Horário da reserva:</p>
                        <input name="horario" id="hora" className="h" />
                    </div>
                    <div className="form">
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
        </div>
        </section>
        </main>
    )


}

