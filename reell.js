function überprüfen(){
    let checkbox4 = document.getElementById("checkbox4");
    let status = document.getElementById("status");
    let button_next = document.getElementById("button_next");
    answer = false

    if(checkbox4.checked) {
            status.innerText ="Die Antwort ist richtig!";	
            status.style.backgroundColor = "green";
            answer = true;
        }else {
            status.innerText="Die Antwort ist falsch!";
            status.style.backgroundColor = "red";
        }
        status.style.display = "block";


        if(answer == true){
            button_next.style.display = "flex";
        }

}


function next(){
    let work1 = document.getElementById("work1");
    let work2 = document.getElementById("work2");


    if(next){
        work1.style.display = "none";
        work2.style.display = "flex";
    }
}


function überprüfen2() {
    let checkbox6 = document.getElementById("checkbox6");
    let status2 = document.getElementById("status2");
    answer = false

    if(checkbox6.checked) {
        status2.innerText ="Die Antwort ist richtig!";	
        status2.style.backgroundColor = "green";
        answer = true;
}else{
    status2.innerText="Die Antwort ist falsch!";
    status2.style.backgroundColor = "red";
}

if(answer == true){
    button_next_2.style.display = "flex";
}

}

function next2(){
    let work2 = document.getElementById("work2");
    let work3 = document.getElementById("work3");

    if(next) {
        work2.style.display = "none";
        work3.style.display = "flex";
    }

}

function überprüfen3(){
    let checkbox12 = document.getElementById("checkbox12");
    let status3 = document.getElementById("status3");
    answer = false;

    if(checkbox12.checked) {
        status3.innerText ="Die Antwort ist richtig!";	
        status3.style.backgroundColor = "green";
        answer = true;
    }else{
        status3.innerText ="Die ANtwort ist falsch!";
        status3.style.backgroundColor = "red";
    }

    if(answer == true){
        button_next_3.style.display = "flex";
    }       
}

