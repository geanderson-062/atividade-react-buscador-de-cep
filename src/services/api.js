import axios from "axios"; // Importando o módulo axios

// Criando uma instância do axios com a baseURL configurada
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api; // Exportando a instância do axios como um módulo padrão
