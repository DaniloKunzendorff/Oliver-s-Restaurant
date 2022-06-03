import './index.scss';

import logo from '../../assets/images/LOGO.png';
import torta from '../../assets/images/torta.png';
import burguer from '..//../assets/images/10-cabana-voto-popular-2019.jpeg';
import ovo from '../../assets/images/Captura de Tela 2022-04-27 às 09.33.38.png';
import mesas from '../../assets/images/mesas.png';
import flor from '../../assets/images/flor.png';
import insta from '../../assets/images/insta.png';
import whats from '../../assets/images/whast.png';
import TT from '../../assets/images/twitter_PNG15.png';
import gmail from '../../assets/images/gmail.png';
import face from '../../assets/images/face.png';
import loc from '../../assets/images/local.png';

export default function index() {

    return (
        <main className='home'>
            
        
            <header className='menu-54'>
        
                <img className='logo-1' src={logo} alt='logo'/>
                

                <div className='menu-tex'>
                    <li className='li1'>
                        <a className='lin-1'  href='#inicio'>Início</a >
                    </li>
                    <li className='li1'>
                        <a href="#eventos" className='lin-1'>Eventos</a>
                    </li>
                    <li className='li1'>
                        <a className='lin-2' href='#sobre'>Sobre nós</a>
                    </li>
                    <li className='li1'>
                        <a href='../reservaCliente/' className='lin-1'>Reserve</a>
                    </li>
                </div> 
            </header>
        
            <section className='faixa-1' id='inicio'>

                <div className='textos-1'>

                    <div className='tex-1' >
                        <p className='t-1'> Oliver’s Restaurant</p>
           
                        <p className='p-1'>O restaurante que tem o melhor atendimento ao cliente</p>
       
                        <p className='p-3'> Segunda à Sexta - 12h às 15h | 18h30 às 22h<br/> Sabados - 12h às 22h<br/> Domingos - 12h às 21h</p>
                    </div>    
                </div>
            </section>

            <section className='faixa-2'>
                <div className='black'>
                    <div className='dif'>
                        <img className='fo-1' src={burguer} alt='burguer'/>
                        <div className='y'>
                            <p className='para'>Gosto distinto</p>
                            <p className='desc'>Saboroso e suculento. Uma carne no ponto ideal e uma combinação de ingredientes que conquista o paladar. Só aqui você vai encontrar diversos tipos de hambúrgueres.</p>
                        </div>
                    </div>
                    <div className='dif'>
                        <img className='fo-2' src={ovo} alt='ovo' />
                        <div className='y'>
                            <p className='para'>Mix de ingredientes</p>
                            <p className='desc2'>Experimente uma das novidades do nosso cardápio que está fazendo sucesso, essa carne guisada com vinho branco e temperos especiais.</p>
                        </div>
                    </div>
                    <div className='dif'>
                        <img className='fo-3' src={torta} alt='torta' />
                        <div className='y'>
                            <p className='para'>Torta de limão</p> 
                            <p className='desc1'>A torta de limão é sempre uma boa opção para servir de sobremesa. Ninguém resiste à combinação de sabores e texturas!</p>
                        </div> 
                    </div>
                    </div>
            
                

            </section>

            <section className='faixa-3'>
        
            <div>
                <p className='t-3'>O espaço é decorado com quadros e plantas, é a aposta certa para uma refeição de qualidade, fugindo totalmente do conceito tradicional. pra descrever o lugar</p>
            </div>
            <div className='j'>
                <img className='fo-4' src={mesas} alt='mesas' />
                <img className='fo-4' src= {flor} alt='flor' />
            </div>
                   
            </section  >
        
            <section className='faixa-4' id='eventos'>
            
            <div className='te-4'>
                
                    <h1 className='t-4'>Sistema de Eventos</h1>
                    <p className='p-4'>Realizamos eventos no restaurante para até 100 pessoas muito bem acomodados. Contamos com 3 ambientes. Estes nos proporcionam atendimento de eventos em diferentes versões e número e pessoas.</p>
                    <p className='d-4'>Realizamos todos os tipos de festas desde infantil a casamento , eventos personalizados com característica de cada cliente .</p>
                <div className='u'>
                    <ul className='tipos'>
                        <li>REUNIÕES EMPRESARIAIS</li>
                        <li> CURSOS</li>
                        <li>REUNIÕES DE CONSELHO</li>
                        <li>ENCONTROS DE VENDAS</li>
                        <li>ANIVERSÁRIOS E DATAS  COMEMORATIVAS</li>
                    </ul>

                    <ul className='tipos-2'>
                        
                        <li>CASAMENTOS & EVENTOS</li>
                        <li>DESPEDIDAS DE SOLTEIRO (A)</li>
                        <li>CELEBRAÇÕES ESPECIAIS</li>
                        <li>EVENTOS CORPORATIVOS</li>

                    </ul>
                </div>
            </div>
            </section>
            
            <section className="faixa-5" id="sobre">
            <div>
                <p className='ti-5'>Quem Somos</p>
            </div>
            <div className='b'>
                <div className='co'>
                <p className='tik'>2020</p>
                <p className='pa'>Criado pela família Oliver, o hambúrguer foi o marco inicial no negócio do restaurante. Após uma reforma na casa onde foi a residência da família Oliver, transformou a casa em um pequeno restaurante. Que logo despertou a atenção da população local.</p>
                </div>
                
                <div className='co'>
                    <p className='tik'>2021</p>
                    <p className='pa1'>Por meio da quarentena infrentamos muitos desafios, mas mesmo assim conseguimos abrir nosso primeiro restaurante oficial, que fica localizado na Av. Coronel Octaviano de Freitas  Costa. </p>
                </div>
                
                <div className='co'>
                    <p className='tik'>2022</p>
                    <p className='pa2'>Em 2022 nosso objetivo é abrir outros restaurante em varios lugares de São paulo. </p>
                </div>
            </div>
            </section>        

            <section className='roda-pe'>
                <div className='logos-p'>
                    <img className='logo-2' src={logo} alt='logo'/>
                    

                    <div className='logos-a'>


                        <div className='logos-t'>
                            <img className='l-2' src={TT} alt='TT'/>
                            <p className='email-1'>@oliversrestaurantoficial</p>
                        </div>
                    

                        <div className='logos-w'>
                    
                            <img className='l-3' src={whats} alt='whats'/>
                            <p className='numero-1'>+55 (11) 92941-5687</p>
                        </div>
                    
                        
                        <div className='logos-i'>
                            <img className='l-4' src={insta} alt='insta'/>
                            <p className='email-2'>@oliversrestaurantoficial</p>
                        </div>
                    

                        <div className='logos-f'>
                            <img className='l-5' src={face} alt='face'/>
                            <p className='face'>Oliver’s Restaurant</p>
                        </div>
                    
                    

                        <div className='logos-e'>
                            <img className='l-6' src={gmail} alt='gmail' />
                            <p className='email-3'>oliversrestaurant@gmail.com</p>
                        </div>
                    </div>          
                </div>          

                <div className='lugar'>
                    <div className='login2'>
                        <a className='login' href='../login/'>Login empresarial</a>
                    </div>
                    <div className='b33'>
                        <div className='log-23'>
                                <a href='https://www.google.com/maps/place/Av.+Coronel+Octaviano+de+Freitas+Costa+-+Socorro,+São+Paulo+-+SP,+04773-000/@-23.6798801,-46.711031,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce502d497a8f75:0x5d1a24535bf9ba23!8m2!3d-23.6798801!4d-46.7088423' className='log-21'  ></a>
                        </div>
                        
                            
                        <div className='lu-g'> 
                            <img className='l-8' src={loc} alt='loc'/> 
                            <p className='local'>Av. Coronel Octaviano de Freitas  Costa</p>
                        </div>
                    </div>    
                </div>  

                
            
        </section>

        </main>
    )


}