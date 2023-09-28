import * as api from "./api.js";

var vazio = document.getElementById("vazio");
const form_pesquisa = document.getElementById("pesquisa");
const form_avaliar = document.getElementById("avaliacao");
const voltar = document.getElementById("voltar");
var data = new Date();

function main(){
    let data = api.fazGet();
    let noticias = JSON.parse(data);
    
    let tabela = document.getElementById("news");
    for(let i = noticias.length - 1; i > -1;i--){
        let linha = api.criaLinha(noticias[i]);
        tabela.appendChild(linha);
    }

    if(noticias == null){
        vazio.classList.remove("hidden");
    }

}

main();


console.log(data);


function limpar(input){
    input.value = "";
}

voltar.addEventListener('click',()=>{
    let pesquisa = document.getElementById("barra-pesquisa");
    limpar(pesquisa);
    api.removeLinhas();
})


form_pesquisa.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    let pesquisa = document.getElementById("barra-pesquisa");
    api.pesquisar(pesquisa);
    
   

});

function fazAvaliacao(nome, classificacao, comentario, data){
    fetch("http://localhost:8080/apisms/insert", {
        headers:{
            "Accpet": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            comentario: comentario,
            data_msg: data
        })
    }).then(function (res) {
        console.log(res);
    }).catch(function(res){
        console.log(res);
    });
}

form_avaliar.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    let Inome = document.getElementById("nome");
    let Inota = document.getElementById("classificacao");
    let Icomentario = document.getElementById("comentario");


    fazAvaliacao(Inome, Icomentario, data);

    limpar(nome);
    limpar(comentario)
})
