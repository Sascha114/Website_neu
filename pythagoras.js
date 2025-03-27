function überprüfen1(){
    let checkbox = document.getElementById("checkbox2");
    let status = document.getElementById("status");
    button_next_1 = document.getElementById("button_next_1");
    answer = false;

    if(checkbox.checked){
        status.innerText = "Die Antwort ist richtig!";
        status.style.backgroundColor = "green";
        answer = true;
    }else{
        status.innerText = "Die Antwort ist falsch!";
        status.style.backgroundColor = "red";
    }

    if(answer == true){
        button_next_1.style.display = "flex";
    }

    status.style.display = "block";
}


function next1(){
    let work1 = document.getElementById("work1");
    let work2 = document.getElementById("work2");

    if(next1){
        work1.style.display = "none";
        work2.style.display = "flex";
    }
}

function überprüfen2() {
    let status2 = document.getElementById("status2");
    let checkbox = document.getElementById("checkbox7");

    if(checkbox.checked){
        status2.innerText = "Die Antwort ist richtig!";
        status2.style.backgroundColor = "green";
    }else{
        status2.innerText = "Die Antwort ist falsch!";
        status2.style.backgroundColor = "red";
    }
}