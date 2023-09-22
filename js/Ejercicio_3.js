//Ejercicio 3
let tiempo =(parseInt(prompt("Ingresa el tiempo que necesitas")));
console.log("Tienes " + tiempo + " segundos para irte a dormir")
setTimeout(() => {
    alert("Es hora de dormir");
}, (tiempo*1000));