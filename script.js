// Ejercicio 1 

const numbersArray = [];
numbersArray.push(1,10,22,33,44,55,66,77,88,99);
console.log(numbersArray);

// Ejercicio 2 

let fiveWords = prompt("Dame 5 palabras separadas por coma.");
const fiveWordsArray = fiveWords.split(',');
console.log(fiveWordsArray);

//Ejercicio 3

const numbersArray3 = [10,40,30,20,15,5];
console.log(`Numeros ordenados de menor a mayor ${numbersArray3.sort((a, b) => a - b)}`)
console.log(`Numero mayor del array es ${numbersArray3.pop()}`)
console.log(`Numero menor del array es ${numbersArray3.shift()}`)


