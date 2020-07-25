import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState('');
  return (
    <>

      <h1> {usuario}</h1>
      <input placeholder="Usuário" className="usuarioInput"value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button">Pesquisa</button>
    </>
  );
}

export default App;
