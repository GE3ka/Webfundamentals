let logIn = document.getElementById("loginBtn");

function log(){
    if(logIn.innerText ==="Login"){
        logIn.innerText = "Logout";
    }
    else{
        logIn.innerText = "Login";
    }

}

let disappearBtn = document.getElementById("definition");
function disappear(){

    disappearBtn.style.visibility="hidden";
    
}

let nbNinja = document.getElementById("nbNinjaLikes");
function ninjaLikes(){
    nb=nbNinja.innerText;   
    nb++;
    nbNinja.innerText =nb;    
    alert("Ninja was liked");
}


let nbProg = document.getElementById("nbProgLikes");
function progLikes(){
    nb=nbProg.innerText;
    nb++;
    nbProg  .innerText =nb;    
}

