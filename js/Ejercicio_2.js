//Ejercicio 2
let numeros=[]
for (let index = 0; index < 10; index++) {
    numeros[index]=(parseInt(prompt('Ingresa tu numero' +(index+1))));
}

console.log(numeros);
console.log(Math.max(...numeros));