import React, { useState } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa() {
    // console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response=> console.log(response.data))

  }
  return (
    <>

      <h1> Repositorios do GitHub {usuario} </h1>
      
        <input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <button type="button" onClick={handlePesquisa}>Pesquisa</button>
      
    </>
  );
}

export default App;
