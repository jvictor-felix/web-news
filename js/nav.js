
const figure0 = document.querySelector(".one");
const figure1 = document.querySelector(".two");
const figure2 = document.querySelector(".three");


function teste2(classe, one, two, three){
    if(!document.querySelector(one).classList.contains(classe)){
        document.querySelector(one).classList.add(classe);
        document.querySelector(two).classList.remove(classe);
        document.querySelector(three).classList.remove(classe);
    }
}


function teste(classe, one, two){
    if(!document.querySelector(one).classList.contains(classe)){
        document.querySelector(one).classList.add(classe);
        document.querySelector(two).classList.remove(classe);
    }
}




