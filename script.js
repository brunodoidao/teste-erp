var modal = document.getElementById("modal-cliente");

var btn = document.getElementById("btn-psq");

var span = document.getElementsByClassName("close")[0];

var inp1 = document.getElementById("cliente-cod");

var inp2 = document.getElementById("nome-cliente");

btn.onclick = function () {
    modal.style.display = "block";
}


function fechar(){
    modal.style.display = "none";
}


function disab(){
    inp1.setAttribute("disabled", "disabled");
    inp2.setAttribute("disabled", "disabled");
}


document.getElementById("client1").addEventListener('click' , cliente1);
function cliente1(){
    fechar();
    const myInput = document.querySelector("#cliente-cod")
    myInput.value = "001"
    const myInput2 = document.querySelector("#nome-cliente")
    myInput2.value = "João da Silva e Sauro"
    disab();    
}



document.getElementById("client2").addEventListener('click' , cliente2);
function cliente2(){
    fechar();
    const myInput = document.querySelector("#cliente-cod")
    myInput.value = "002"
    const myInput2 = document.querySelector("#nome-cliente")
    myInput2.value = "Paulo Freire"
    disab();    
}



document.getElementById("client3").addEventListener('click' , cliente3);
function cliente3(){
    fechar();
    const myInput = document.querySelector("#cliente-cod")
    myInput.value = "003"
    const myInput2 = document.querySelector("#nome-cliente")
    myInput2.value = "Marcos Mion"
    disab();    
}


document.getElementById("client4").addEventListener('click' , cliente4);
function cliente4(){
    fechar();
    const myInput = document.querySelector("#cliente-cod")
    myInput.value = "004"
    const myInput2 = document.querySelector("#nome-cliente")
    myInput2.value = "Rodrigo Faro"
    disab();    
}


document.getElementById("client5").addEventListener('click' , cliente5);
function cliente5(){
    fechar();
    const myInput = document.querySelector("#cliente-cod")
    myInput.value = "005"
    const myInput2 = document.querySelector("#nome-cliente")
    myInput2.value = "Silvio Martinelli"
    disab();    
}


function aumentanav(){
    var nav1 = document.getElementById("atual-page")
    nav1.value = parseInt(nav1.value) + 1;
}

function diminuinav(){
    var nav2 = document.getElementById("atual-page")
    
       nav2.value = parseInt(nav2.value)-1;
    
    
}
