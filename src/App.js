import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState();
  return (
    <>
    <p>{usuario}</p>
      <h1>{props.title} {setUsuario}</h1>
      <input placeholder="Usuário" className="usuarioInput" />
      <button type="button">Pesquisa</button>
    </>
  );
}

export default App;
