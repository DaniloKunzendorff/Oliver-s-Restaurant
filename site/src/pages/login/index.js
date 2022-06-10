import './index.scss';
import Logo from '../../assets/images/LOGO.png';
import { login } from '../../api/funcionarioApi.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    async function loginClick() {
        try{
            const a = await login(email, senha);

            navigate('/tabelaADM')
        }
        catch(err){
            if(err.response.status === 401){
                setErro(err.response.data.erro)
            }
        }
    }

    return (
        <main className='bodyl'>
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
                    <button className="botao" onClick={loginClick}>Entrar</button>
                
                </div>
            </section>
            <section className="faixa3">
            </section>
        </main>
    )


}