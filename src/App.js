import { useState } from "react"; // Importando o hook useState do React
import { FiSearch } from "react-icons/fi"; // Importando o ícone de pesquisa
import "./styles.css"; // Importando o arquivo CSS desse projeto

import api from "./services/api"; // Importando o módulo de API personalizado

function App() {
  const [input, setInput] = useState(""); // Definindo o estado para o valor do input
  const [cep, setCep] = useState({}); // Definindo o estado para o objeto do CEP

  async function handleSearch() {
    if (input === "") {
      // Verificando se o input está vazio
      alert("Preencha algum CEP"); // Exibindo um alerta caso esteja vazio
      return;
    }

    try {
      const response = await api.get(`${input}/json`); // Fazendo a requisição à API com o valor do input
      setCep(response.data); // Atualizando o estado do CEP com os dados da resposta da API
      setInput(""); // Limpando o valor do input após a busca
    } catch (error) {
      alert("Ops, erro ao buscar o CEP"); // Exibindo um alerta em caso de erro na requisição
      setInput(""); // Limpando o valor do input após o erro
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
