let btnLikeNeil = document.getElementById("nbLikesNeil");
let btnLikeJim= document.getElementById("nbLikeJim");
let btnLikeNichole = document.getElementById("nbLikesNichole");
function likeNeil(){
    let nb = btnLikeNeil.innerText;
    nb++;
    btnLikeNeil.innerText=nb;
}
function likeJim(){
    let nb = btnLikeJim.innerText;
    nb++;
    btnLikeJim.innerText=nb;
}
function likeNichole(){
    let nb = btnLikeNichole.innerText;
    nb++;
    btnLikeNichole.innerText=nb;
}