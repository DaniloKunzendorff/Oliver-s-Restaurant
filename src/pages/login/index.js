import './index.scss';
import Logo from '../../assets/images/LOGO.png';


export default function index() {

    return (
        <main className='body'>
            <section className="faixa1">
                <a href="../" className="s">Voltar</a>
                <img src={Logo} className="b" alt='logo' />
            </section>
            <section className="back">
                <div className="pretear">
                <h1 className="h1">Login Empresarial</h1>

            <section className="faixa2">
                <div>
                <p className="email">Email:</p>
                <input className="espaço" type="text" size="30px" />
            </div>
            <div>

                <p className="senha">Senha:</p>
                <input className="espaço2" type="text" size="30px" />
            </div>
        </section>
                <a href="../tabelaADM" className="botao">Entrar</a>
            
                </div>
            </section>
            <section class="faixa3">
            </section>
        </main>
    )


}