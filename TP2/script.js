const calcular = tipo => {

    console.log('#################')

    const valor1 = document.getElementById("valor1_id").value;
    const valor2 = document.getElementById("valor2_id").value;
    let resultado=0;

    if(tipo=="suma"){
        resultado= valor2 + valor1;
    }else if(tipo=="resta"){
        resultado = valor1-valor2;
    }else if(tipo=="multiplicacion") {
        resultado = valor1 * valor2;
    }else {
        resultado = valor1 / valor2;
    }
    document.getElementById("resultado").innerHTML = `resultado:  ${resultado}`; 
    console.log("valores: ",valor1,"-",valor2);


}
