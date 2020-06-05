//url da api
const BASE_URL = "https://newsapi.org/v2";

//minha chave para acesso da api...
const API_KEY = "f96af05aa4644d37992495dc7a6c2274";

//https://newsapi.org/v2/top-headlines?country=us&apiKey=f96af05aa4644d37992495dc7a6c2274
/*
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
*/

/*
//OU COM async await....
async function getNews(){
    let resposta = await fetch(
        `${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`
    );
    let dados = await resposta.json();

    return dados;
}
console.log(getNews().then(dados => console.log(dados)))
*/

let categoria = ""

//dom
const listaNoticias = document.querySelector("#listaDeNoticias");
const btnTec = document.querySelector("#tec");
const btnAll = document.querySelector("#ultimas");

function listar(){
    fetch(
        `${BASE_URL}/top-headlines?country=br&category=${categoria}&apiKey=${API_KEY}`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados)
            dados.articles.forEach(noticia => {
                console.log("Um objeto")
                console.log(noticia)
                console.log(noticia.publishedAt)
    
                var col4 = document.createElement('div');
                col4.classList.add("col-4", "my-2");
                listaNoticias.appendChild(col4);
    
                var cardNoticia = document.createElement('div');
                cardNoticia.classList.add("card");
                col4.appendChild(cardNoticia);
    
                var imgNoticia = document.createElement('img');
                imgNoticia.classList.add("card-img-top");
                imgNoticia.setAttribute("src", noticia.urlToImage);
                cardNoticia.appendChild(imgNoticia);
    
                var cardBody = document.createElement('div');
                cardBody.classList.add("card-body");
                cardNoticia.appendChild(cardBody);
    
                cardNoticia.innerHTML += `<h5 class="card-title">${noticia.title}</h5>`;
    
                cardNoticia.innerHTML += `<p class="card-text">${noticia.description}</p>`;
    
                cardNoticia.innerHTML += `<a class="btn btn-primary"
                href=${noticia.url}>Ir
                para noticia</a>`;
            });
    });
}
listar()

btnTec.addEventListener("click", (e) => {
    listaNoticias.innerHTML = '';
    categoria = "technology";
    //https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=f96af05aa4644d37992495dc7a6c2274
    listar();
})
btnAll.addEventListener("click", (e) => {
    listaNoticias.innerHTML = '';
    categoria = "";
    listar();
})
  