function überprüfen() {
    const  status = document.getElementById("status");
    let  checkbox1 = document.getElementById("checkbox1");
    let button1 = document.getElementById("button1");
    answer = false;
    
    if(checkbox1.checked) {
            status.innerText ="Die Antwort ist richtig!";	
            status.style.backgroundColor = "green";
            answer = true;  
        }else {
            status.innerText="Die Antwort ist falsch!";
            status.style.backgroundColor = "red";
        }
        status.style.display = "block";
        button1.style.display = "block";    

    
    if(answer == true){
        button1.style.display = "block";
    }else{
        button1.style.display = "none";
    }
   }

function next() {
    let work1 = document.getElementById("work1");
    let  work2 = document.getElementById("work2");
    let button1 = document.getElementById("button1");
    let überprüfen_button_1 = document.getElementById("überprüfen1");
    let überprüfen_button_2 = document.getElementById("überprüfen2");

    if(next) {
        work2.style.display = "block";
        work1.style.display = "none";
        button1.style.display = "none";
        überprüfen_button_2.style.display = "block";
        überprüfen_button_1.style.display = "none";

        }


    
}

function überprüfen1() {
    const  status2 = document.getElementById("status2");
    let checkbox7 = document.getElementById("checkbox7");

    if(checkbox7.checked) {
        status2.innerText ="Die Antwort ist richtig!";	
        status2.style.backgroundColor = "green";
}else{
    status2.innerText="Die Antwort ist falsch!";
    status2.style.backgroundColor = "red";
}
status2.style.display = "block";


}

function zurücksetzten(){
    let status = document.getElementById("status");
    let button = document.getElementById("button1");

    if(zurücksetzten){
        status.style.display = "none";
        button.style.display = "none";
    }
}

function zurücksetzten1(){
    let status2 = document.getElementById("status2");

    if(zurücksetzten1){
        status2.style.display = "none";
    }
}