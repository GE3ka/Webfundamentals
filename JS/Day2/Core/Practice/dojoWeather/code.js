function changeCityAlert(element){
    alert("Loading weather report... "); 
}

let cookiesElement = document.getElementById("cookies") ;

function iAcceptCookies(){
    cookiesElement.style.visibility="hidden";
}

let maxTemp= document.getElementsByClassName("maxTemp");
let minTemp= document.getElementsByClassName("minTemp");
function  changeTemp(element){
    let x=0;
    let y=0;
    console.log (maxTemp[0].innerText);
    if (element.value === "Celcuis"){
        for(var i=0;i<maxTemp.length;i++){
            x= (maxTemp[i].innerText - 32) * 5/9;
            maxTemp[i].innerText = Math.round(x); 
        }
        for (var i=0;i<minTemp.length;i++){    
            y= (minTemp[i].innerText - 32) * 5/9;
            minTemp[i].innerText =Math.round(y);  
        }     
    }
    if (element.value === "Fahrenheit"){
        for(var i=0;i<maxTemp.length;i++){
            x= (maxTemp[i].innerText * 9/5) + 32;
            maxTemp[i].innerText = Math.round(x) ;
        }    
        for (var i=0;i<minTemp.length;i++){
            y = (minTemp[i].innerText * 9/5) + 32;
            minTemp[i].innerText = Math.round(y);
        }
        
    }
}