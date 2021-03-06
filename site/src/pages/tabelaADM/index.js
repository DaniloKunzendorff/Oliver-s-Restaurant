import './index.scss';
import Logo from "../../assets/images/LOGO.png";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function Index() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('funcionario-logado')) {
            navigate('/login')
        }
    })

    return (
        <main className='bodyt'>
            <section className="faixa1">
                <a href="../" className="volt">Voltar</a>
                <img className= "logo "src={Logo} alt='text' />
            </section> 
            
            <section className="faixa2">
                <div className="preto">
                <h1 className="adm">Administração</h1> 
                    <a href="../listaReserva/" className="bot1"> Lista de reservas </a>
                    <a href="../novaReserva" className="bot2"> Nova reserva </a>
                </div>
            </section>
            
                

            <section class="faixa3"> </section>
        </main>
    )


}