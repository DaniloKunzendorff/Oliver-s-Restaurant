import './index.scss';
import Logo from '../../assets/images/LOGO.png';
import { login } from '../../api/funcionarioApi.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);


    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('funcionario-logado')) {
            navigate('/tabelaADM')
        }
    })


    async function loginClick() {

        ref.current.continuousStart();
        setCarregando(true);

        ref.current.continuousStart()
        try{
            const a = await login(email, senha);
            storage('funcionario-logado', a)

            setTimeout(()=>{
                navigate('/tabelaADM')
            }, 3000);
        }
        catch(err){
            ref.current.complete();
            setCarregando(false);
            if(err.response.status === 401){
                setErro(err.response.data.Erro)
            }
        }
    }

    return (
        <main className='bodyl'>
   < LoadingBar  color = '#f11946'  ref = { ref } /> 
    
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
                        <input className="espaço" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>

                            <p className="senha">Senha:</p>
                            <input className="espaço2" type="password"  value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </section>
                    <div className='bt'>
                        <button className="botao" onClick={loginClick} disabled= {carregando}>Entrar</button>
                    </div>
                    <div className="invalido">
                        {erro}
                    </div>
                </div>

            </section>
            <section className="faixa3">
            </section>
        </main>
    )


}