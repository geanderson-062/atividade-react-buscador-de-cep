import { useState } from 'react'; //cahamndo a api react 
import { FiSearch } from 'react-icons/fi'; //chamando o iccone de pesquisa
import './styles.css'; //chamdo o arquivo css desse projeto

import api from './services/api';

//aqui manipulamos o html


function App() {

       const [input, setInput] = useState('');
       const [cep, setCep] = useState({});

      async function handleSearch(){
 
        if(input ===''){
          alert("preencha algum cep")
          return;
        }  
        
          try{

           const response = await api.get('${input}/json')//ta dando erro https://www.youtube.com/watch?v=oy4cbqE1_qc a 33:50
             setCep(response.data)
             setInput("");//zerando input

          }catch{
 
            alert("Ops erro ao buscar");
            setInput("")

          }
    }


  return (
    <div className="container">

          <h1 className="title">Buscador Cep</h1>

          <div className="containerInput">

            <input type="text" placeholder="Digite seu cep..."
            
            value={input} 
            onChange={(e) => setInput(e.target.value) } 
            
            />

            
             
            <button className="buttonSearch" onClick={handleSearch}>
              <FiSearch size={25} color="#fff"/>
            </button>

          </div>

          {Object.keys(cep).length > 0 &&(

          <main className="main">

            <h2>CEP: {cep.cep}</h2>

               <span>{cep.logradouro}</span>
               <span>Complemento: {cep.complemento}</span>
               <span>{cep.bairro}</span>
               <span>{cep.localidade} - {cep.uf}</span>
      
            </main>
          )}

    </div>
  );
}

export default App;
