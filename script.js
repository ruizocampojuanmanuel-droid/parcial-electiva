
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

// ahora  el nivel de riesgo según los puntos
if(puntos <= 2){

    document.getElementById("textoResultado").textContent = "Riesgo cardiovascular bajo";
    document.getElementById("resultado").style.backgroundColor = "lightgreen";

}
else if(puntos <= 5){

    document.getElementById("textoResultado").textContent = "Riesgo cardiovascular moderado";
    document.getElementById("resultado").style.backgroundColor = "khaki";

}
else{

    document.getElementById("textoResultado").textContent = "Riesgo cardiovascular alto";
    document.getElementById("resultado").style.backgroundColor = "lightcoral";

}

// Busco la lista donde se van a mostrar las recomendaciones
let lista = document.getElementById("recomendaciones");

if(puntos <= 2){

    let recomendacion = document.createElement("li");
    recomendacion.textContent = "tener una alimentación saludable";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "hacer actividad física regularmente";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "Hacer chequeos médicos periódicos";
    lista.append(recomendacion);

}
else if(puntos <= 5){

    let recomendacion = document.createElement("li");
    recomendacion.textContent = "bajar el  consumo de sal y grasas";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "Aumentar la actividad física";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "Consultar con un médico para control";
    lista.append(recomendacion);

}
else{

    let recomendacion = document.createElement("li");
    recomendacion.textContent = "llamar un médico lo antes posible";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "Dejar de fumar";
    lista.append(recomendacion);

    recomendacion = document.createElement("li");
    recomendacion.textContent = "Controlar presión arterial y colesterol";
    lista.append(recomendacion);

}
// Busco el botón limpiar
const btnLimpiar = document.getElementById("btnLimpiar");

// cuando se presione el botón limpiar
btnLimpiar.addEventListener("click", function(){

    // limpio los campos del formulario
    document.getElementById("edad").value = "";
    document.getElementById("presion").value = "";
    document.getElementById("colesterol").value = "";
    document.getElementById("fumador").value = "";

    // borro el resultado
    document.getElementById("textoResultado").textContent = "";

    // limpio las recomendaciones
    document.getElementById("recomendaciones").innerHTML = "";

    // quito el color del resultado
    document.getElementById("resultado").style.backgroundColor = "";

});
});