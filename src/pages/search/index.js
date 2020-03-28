import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

function App() {
  const [state, setState] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "" 
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setState({ ...state,[name]: value });

  }
  
  async function handleClick() {
    try{
      const {data} = await api.get(`${state.cep}/json`);
      const {logradouro, bairro, localidade, uf} = data;

      setState({logradouro, bairro, localidade, uf});

    }catch(err) {
      alert("Erro ao buscar dados do cep...");
    }
  }

  return (
    <div className="container">
      <section className="content">
        <input
          type="text"
          name="cep" 
          placeholder="Digite seu CEP"
          onChange={handleChange}
          value={state.cep}
        />

        <button onClick= {handleClick}>Buscar</button>

        <label htmlFor="">Logradouro:</label>
        <input 
          type="text" 
          placeholder="Logradouro"
          name="logradouro"
          value={state.logradouro}
          readOnly
        />

        <label htmlFor="">Bairro:</label>

        <input 
          type="text" 
          placeholder="Bairro"
          name="bairro"
          value={state.bairro}
          readOnly
        />

        <label htmlFor="">Localidade:</label>

        <input 
          type="text" 
          placeholder="Localidade"
          name="localidade"
          value={state.localidade}
          readOnly
        />

        <label htmlFor="">UF:</label>

        <input 
          type="text" 
          placeholder="UF"
          name="uf"
          value={state.uf}
          readOnly
        />

      </section>
    </div>
  );
}

export default App;
