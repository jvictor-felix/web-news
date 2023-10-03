import * as api from "./api.js";

var vazio = document.getElementById("vazio");
const form_pesquisa = document.getElementById("pesquisa");
const form_avaliar = document.getElementById("avaliacao");
const voltar = document.getElementById("voltar");
const Inome = document.getElementById("nome");
const Inota = document.getElementById("classificacao");
const Icomentario = document.getElementById("comentario");

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


form_avaliar.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    api.fazAvaliacao(Inome.value, Inota.options[Inota.selectedIndex].value, Icomentario.value, data);

    limpar(nome);
    limpar(comentario)
})

