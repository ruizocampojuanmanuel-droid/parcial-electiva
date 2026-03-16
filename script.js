
// Busco el botón calcular que está en el HTML
const btnCalcular = document.getElementById("btnCalcular");

// Cuando hagan  clic en el botón se ejecuta esta función
btnCalcular.addEventListener("click", function(){

      // Aquí cojo los datos que la persona escribe en el formulario
    let edad = document.getElementById("edad").value;
    let presion = document.getElementById("presion").value;
    let colesterol = document.getElementById("colesterol").value;
    let fumador = document.getElementById("fumador").value;



    // Verifico que todos los campos estén llenos
    if(edad === "" || presion === "" || colesterol === "" || fumador === ""){
        document.getElementById("textoResultado").textContent =
        "Por favor llena todos los campos";
        return;
    }

     //comprobar que sí capturó los datos
    console.log(edad, presion, colesterol, fumador);

    // variable donde voy a guardar los puntos de riesgo
let puntos = 0;

// reglas para la edad
if(edad >= 35 && edad <= 44){
    puntos = puntos + 1;
}else if(edad >= 45){
    puntos = puntos + 2;
}

// reglas para la presión
if(presion >= 140){
    puntos = puntos + 3;
}else if(presion >= 120){
    puntos = puntos + 1;
}

// reglas para el colesterol
if(colesterol >= 240){
    puntos = puntos + 3;
}else if(colesterol >= 200){
    puntos = puntos + 1;
}

// si la persona fuma suma puntos
if(fumador === "si"){
    puntos = puntos + 3;
}

// ver los puntos en la consola
console.log("Puntos de riesgo:", puntos);
});