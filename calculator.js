let result;
let cup;
let amount;
let term;

function BtnC(){

    const amountInput = document.getElementById("amount");
    const cupInput = document.getElementById("cup");
    const termInput = document.getElementById("term");

    const inputAmount = document.getElementById("inputStyleJs0");
    const inputCut = document.getElementById("inputStyleJs1");
    const inputTerm = document.getElementById("inputStyleJs2");
    

    if (amountInput.value.trim() === "") {
        inputAmount.style.border = "2px solid red"
        hasError = true;
    }

    if (cupInput.value.trim() === "") {
        inputCut.style.border = "2px solid red"
        hasError = true;
    }

    if (termInput.value.trim() === "") {
        inputTerm.style.border = "2px solid red"
        hasError = true;
    }


    // Obtenemos los valores de los inputs
    amount = parseFloat(document.getElementById('amount').value);
    cup = parseFloat(document.getElementById('cup').value);
    term = parseFloat(document.getElementById('term').value);

      // operaciones 
      let interes = cup / 100; //Sacar el porcentaje de la tasa de interes
      let time = term * 12;  //desglozar los anos en meses 
      let interesMensual = interes / 12; //Tasa de interes mensual
      let tasaInteresMensual = interesMensual +1; // tasa de interes mensual se le suma 1 

    function Calculator (){
        return  amount * interesMensual * Math.pow(tasaInteresMensual, time);
    }
    
    function Calculator1 (){
        return Math.pow(tasaInteresMensual, time)-1;
    }
    
    result = Calculator() / Calculator1();
    console.log(result); 
    
    // Mostramos el resultado en la sección independiente
    document.getElementById('resultado').textContent = `$ ${result}`;
    
    //inventando 
    const resultadoElement = document.getElementById('resultado');

    // Cambiar el contenido del texto
    resultadoElement.textContent = `$ ${result.toFixed(2)}`;

    // Agregar estilos al texto
    resultadoElement.style.color = "#d7da2f";           
    resultadoElement.style.fontSize = "40px";        
    resultadoElement.style.fontFamily = "Arial, sans-serif"; 
    resultadoElement.style.marginLeft = "1rem";
    resultadoElement.style.display = "flex";
    resultadoElement.style.padding = "1px";           
    resultadoElement.style.borderRadius = "5px";   
    
    // Borde alrededor del   BORRAR
    const btnClean = document.getElementById('clean');
    btnClean.addEventListener('click', () => {
    document.getElementById('amount').value = "";
    document.getElementById('cup').value = "";
    document.getElementById('term').value = "";
    document.getElementById('resultado').value = "0";
    });

    //Estas son las partes que se ocultan
    const plzcM = document.getElementById('plzcM');
    plzcM.style.display = "block"; // Mostrar el mensaje
    
    const intcM = document.getElementById('intcM');
    intcM.style.display = "block"; // Mostrar el mensaje

    const resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.style.display = "block"; // Mostrar el mensaje
   
     //Sacar total de interes pagado 
     function Interes() {
        return (result * time) - amount;
    }

    let interes1 = Interes();
    console.log("Total de interes pagado ", interes1);

    //Total a pagar por el plazo 
    function TotalPago () {
        return result * time;
    }

    let totalPago1 = TotalPago();
    console.log("Total a pagar por el plazo ",totalPago1);  
    
    const mensajeDiv = document.getElementById('mensaje');
    const radios = document.querySelectorAll('input[type="radio"]');

    // Recorremos los radio buttons para encontrar cuál está seleccionado
    radios.forEach(radio => {
        if (radio.checked) { // Si está seleccionado
            if (radio.value === "mensaje1") mensajeSeleccionado = "$ "+ totalPago1.toFixed(2);
            if (radio.value === "mensaje2") mensajeSeleccionado = "$ "+ interes1.toFixed(2);
        }
    });

    // Mostramos el mensaje seleccionado o una advertencia si ninguno está marcado
    if (mensajeSeleccionado) {
        mensajeDiv.textContent = mensajeSeleccionado;
        mensajeDiv.style.color = "white";
    } else {
        mensajeDiv.style.color = "red";
        mensajeDiv.style.fontSize = "40px";
    } 

    //Cambia el color del texto para ocultarlo 
    parrafoBlock.style.color = "#122f3f"

    let montoI = document.getElementById("amount");
    let plazoI = document.getElementById("term");
    let tasaI = document.getElementById("cup");
    
    let resultwww = document.getElementById("mensajewww");
    evento.preventDefault();

    if (montoI.value.trim() && plazoI.value.trim() && tasaI.value.trim() === ""){
        montoI.style.color = "red";
        plazoI.style.color = "red";
        tasaI.style.color = "red";
        resultwww.textContent = "este campo es obligatorio";
       
        return false;
    } return true;

}
onclick();

