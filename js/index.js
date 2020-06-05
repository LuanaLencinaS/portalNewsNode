//url da api
const BASE_URL = "https://newsapi.org/v2";

//minha chave para acesso da api...
const API_KEY = "f96af05aa4644d37992495dc7a6c2274";

//https://newsapi.org/v2/top-headlines?country=us&apiKey=f96af05aa4644d37992495dc7a6c2274

//fetch get
//recebe o endpoint...
fetch(
    `${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`
).then((resposta) => resposta.json())
//retorna uma promisse, não sabemos qunado ele ira nos retornar o resultado, entao usamos o then para receber o retorno
//usamos o metodo .json que tira as infos do body e converte em um objeto js
//o .json também retorna uma promisse, entao para manipular precisamos retornar essa resposta para utuliza-la num segundo .then
.then((dados) => console.log(dados));
//esse then recebe as informações, e no callback manipulo



//OU COM async await....
async function getNews(){
    let resposta = await fetch(
        `${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`
    );
    let dados = await resposta.json();

    return dados;
}
console.log(getNews().then(dados => console.log(dados)))