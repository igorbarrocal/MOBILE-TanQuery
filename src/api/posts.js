import axios from "axios";

//Função que será usada pelo Tanstack Query
export const fetchPosts = async () =>{
    const response = await axios.get("https://6890baf7944bf437b5971d32.mockapi.io/users");
    return response.data;//Retorna os dados
}