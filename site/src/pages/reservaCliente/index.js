import './index.scss';
import { novaClickCliente } from '../../api/reservaApi'
import { useState } from 'react'

import Logo from '../../assets/images/LOGO.png';
import insta from '../../assets/images/insta.png';
import whats from '../../assets/images/whast.png';
import TT from '../../assets/images/twitter_PNG15.png';
import gmail from '../../assets/images/gmail.png';
import face from '../../assets/images/face.png';
import loc from '../../assets/images/local.png';


export default function Index() {
    const [cliente, setCliente] = useState('');
    const [telefone, setTelefone] = useState('');
    const [reserva, setReserva] = useState('');
    const [pessoas, setPessoas] = useState(0);
    const [erro, setErro] = useState('');









    async function criarReserva() {
        try {
            const a = await novaClickCliente(cliente, telefone, reserva, pessoas);

            alert("Reserva criada com sucesso! Para cancela-lá entre em contato pelas redes socias do Oliver's")
        } catch (err) {
            if(err.response.status === 400){
                alert('Insira todos os campos')
            }
        }
    }

    return (
        <main className='bodyr'>
            <header>
        <a href="../" className="voltar" >Voltar</a>
        <img src={Logo} className="logo" alt='logo'/>
    </header>
    <section className="img">
        
    <section className="R1">
        <section className="r1">
            <div className="j">
                <h4 className="R">Reserve sua mesa</h4>
                <hr/>
            </div>
            
            <h5>Data e Hora da reserva:</h5>
            <div className="d">
                <input type="datetime-local" className="input1" value={reserva} onChange={e => setReserva(e.target.value)}/>
            </div>
            <h5>Quantas pessoas?</h5>
            <div className="t">
                <input type="number" defaultValue={1} className="input3" value={pessoas} onChange={e => setPessoas(e.target.value)}/>
            </div>
        </section>
        <section className="r2">
            <div className="j">
                <h4 className="T">Insira dados para confirmação</h4>
                <hr/>
            </div>
            
            <div className="nome">
            <p className="p2">Nome:</p>
            <input type="text" className="input2" value={cliente} onChange={e => setCliente(e.target.value)}/>
            </div>
            <div className="tel">
                <p className="p2">Número de contato:</p>
                <input type="tel" className="input2" onChange={e => setTelefone(e.target.value)}/>
            </div>
            <button href="#" className="y" onClick={criarReserva}>Enviar Reserva</button>
        </section>

    </section>
    </section>
    <section className="roda-pe">
        <div className="logos-p">
            <img className="logo-2" src={Logo} alt='logo'/>
            

            <div className="logos-a">


                <div className="logos-t">
                    <img className="l-2" src={TT} alt='TT' />
                    <p className="email-1">@oliversrestaurantoficial</p>
                </div>
            

                <div className="logos-w">
            
                    <img className="l-3" src={whats} alt='whats'/>
                    <p className="numero-1">+55 (11) 92941-5687</p>
                </div>
            
                
                <div className="logos-i">
                    <img className="l-4" src={insta} alt='insta' />
                    <p className="email-2">@oliversrestaurantoficial</p>
                </div>
            

                <div className="logos-f">
                    <img className="l-5" src={face} alt='face' />
                    <p className="face">Oliver’s Restaurant</p>
                </div>
            
            

                <div className="logos-e">
                    <img className="l-6" src={gmail} alt='gmail' />
                    <p className="email-3">oliversrestaurant@gmail.com</p>
                </div>
            </div>          
        </div>          

        <div className="lugar">
            
            <div className="b33">
            <div className='log-23'>
                    <a href='https://www.google.com/maps/place/Av.+Coronel+Octaviano+de+Freitas+Costa+-+Socorro,+São+Paulo+-+SP,+04773-000/@-23.6798801,-46.711031,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce502d497a8f75:0x5d1a24535bf9ba23!8m2!3d-23.6798801!4d-46.7088423' className='log-21'  ></a>
            </div>
                
                    
                <div className="lu-g"> 
                    <img className="l-8" src={loc} alt='loc' /> 
                    <p className="local">Av. Coronel Octaviano de Freitas  Costa</p>
                </div>
            </div>    
        </div>  

         
    
    </section> 
        </main>
    )


}