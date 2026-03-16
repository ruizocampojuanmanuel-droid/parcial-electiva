
// Busco el botón calcular que está en el HTML
const btnCalcular = document.getElementById("btnCalcular");

// Cuando hagan  clic en el botón se ejecuta esta función
btnCalcular.addEventListener("click", function(){

      // Aquí cojo los datos que la persona escribe en el formulario
    let edad = document.getElementById("edad").value;
    let presion = document.getElementById("presion").value;
    let colesterol = document.getElementById("colesterol").value;
    let fumador = document.getElementById("fumador").value;

    
    console.log(edad, presion, colesterol, fumador);

});