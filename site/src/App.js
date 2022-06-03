import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/' >Home</Link>
      <Link to='/listaReserva/' exact>Login</Link>
      <Link to='/reservaCliente/' exact>Reserve</Link>
      <Link to='/ListaReserva/' exact>Lista</Link>
      <Link to='/tabelaADM/' exact>Menu</Link>
      <Link to='/novaReserva/' exact>Nova</Link>
    </div>
  );
}

export default App;
