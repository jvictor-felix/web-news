

export function fazGet(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/apinews/lista", false);
    request.send();
    return request.responseText;
}

function fazPesquisa(text){
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/apinews/pesquisar/" + text, false);
    request.send();
    return request.responseText;
}

export function pesquisar(Ipesquisa){
    if(Ipesquisa.value == ""){
        vazio.classList.remove("hidden");
    }
    else{
        let data = fazPesquisa(Ipesquisa.value);
        let noticias = JSON.parse(data);
        let tabela = document.getElementById("news-pesquisa");
        for(let i = noticias.length - 1; i > -1;i--){
            let linha = criaLinha(noticias[i]);
            tabela.appendChild(linha);
        }
    }
    
}

export function criaLinha(noticias){
    let linha = document.createElement('div');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement("img");
    let h6 = document.createElement('h6');
    let span_data = document.createElement("span");
    let span_fonte = document.createElement('span');
    let a = document.createElement('a');
    let div = document.createElement("div")

    a.setAttribute("href", noticias.site);

    function formatarData(){
        let data = new Date(noticias.data_noticia);
        return data.toLocaleDateString("pt-BR", {timeZone: "UTC"});
    }

    span_data.innerHTML = formatarData();    
    span_fonte.innerHTML = "Fonte: ";
    h6.innerHTML = noticias.titulo;
    a.innerHTML = noticias.fonte;

    
    span_fonte.appendChild(a);
    figcaption.appendChild(h6);
    div.appendChild(span_fonte);
    div.appendChild(span_data);
    figcaption.appendChild(div);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    linha.appendChild(figure);

    img.setAttribute("src", noticias.imagem);
    span_fonte.classList.add("fonte");
    span_data.classList.add("data");
    linha.classList.add("div-news");

    
    return linha;
}

export function removeLinhas(){
    let tabela = document.querySelector("#news-pesquisa");
    vazio.classList.add("hidden");
    while(tabela.firstChild){
        tabela.removeChild(tabela.firstChild);
    }
}