window.onload = addListeners;

//  addListeners() function will activate the proper event handlers

function addListeners() {

    if(window.addEventListener) {

        //element.addEventListener(event, listener); 

        document.getElementById("text").addEventListener("mouseover", messageToClass);

    } 

}

function messageToClass(){

    document.getElementById("myh2").innerText = "Roger Federer is the GOAT";

}

