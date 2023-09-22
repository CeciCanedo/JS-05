// Ejercicio 1

let nombre=prompt("Cual es tu nombre?");
let edad=prompt("Cual es tu edad?");
let peliculas= prompt("Cuales son tus peliculas favoritas?");

console.log("Tu nombre es "+ nombre + " tienes " + edad + " años de edad y tus dos peliculas favoritas son "+ peliculas )


//Ejercicio 2
let numeros=[]
for (let index = 0; index < 10; index++) {
    numeros[index]=(parseInt(prompt('Ingresa tu numero' +(index+1))));
}

console.log(numeros);
console.log(Math.max(...numeros));


//Ejercicio 3
let tiempo =(parseInt(prompt("Ingresa el tiempo que necesitas")));
console.log("Tienes " + tiempo + " segundos para irte a dormir")
setTimeout(() => {
    alert("Es hora de dormir");
}, (tiempo*1000));
