function überprüfen(){
    const checkbox2 = document.getElementById("checkbox2");
    const status = document.getElementById("status");
    const button_next = document.getElementById("button_next");
    answer = false;

    if(checkbox2.checked){
        status.innerText = "Die Antwort ist richtig";
        status.style.backgroundColor ="green"
        answer = true;

    }else {
        status.innerText ="Die Antwort ist falsch";
        status.style.backgroundColor="red"
    }

    
    if(answer == true){
        button_next.style.display ="block"
    }else{
        button_next.style.display ="none"
    }

    status.style.display ="block"
}

function überprüfen2(){
    const status2 = document.getElementById("status2");
    const checkbox8 = document.getElementById("checkbox8");
    const button_next2 = document.getElementById("button_next2");
    answer = false;

    if(checkbox8.checked){
        status2.innerText = "Die Antwort ist richtig";
        status2.style.backgroundColor ="green"
        answer = true;  
    }else{
        status2.innerText ="Die Antwort ist falsch";
        status2.style.backgroundColor="red"
    }

    status2.style.display ="block"
}




function next(){
    const Übung = document.getElementById("Übung");
    const Übung2 = document.getElementById("Übung2");
    const button_next = document.getElementById("button_next");
    const button_next2 = document.getElementById("button_next2");
    
    if(next){
        Übung.style.display ="none"
        button_next.style.display ="none"
        button_next2.style.display ="none"
        Übung2.style.display ="flex"
    }
}

function zurücksetzten(){
    const status =  document.getElementById("status");

    if(status.click){
        status.style.display ="none";
    }else{
        status.style.display ="block"
    }
}