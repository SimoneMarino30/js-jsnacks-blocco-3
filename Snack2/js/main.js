// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Crea un array vuoto
let emptyList = [];
// Chiedi all'utente un numero da inserire nell'array

let sum = 0;

while (sum <= 50) {
  let userNumber = parseInt(prompt("Inserisci un numero"));
  emptyList.push(userNumber);
  console.log("L' array contiene: " + emptyList);
  sum += userNumber;
}
console.log(sum);
