// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// chiedo all'utente un numero minimo
// chiedo all'utente un numero massimo
// genero un numero compreso tra il valore minimo ed il valore massimo forniti dall'utente

// chiedo all'utente un numero minimo
const minimumNumber = parseInt(prompt("Inserisci il tuo numero minimo"));
// chiedo all'utente un numero massimo
const maximumNumber = parseInt(prompt("Inserisci il tuo numero massimo"));

// SE i valori inseriti sono numeri
if (isNaN(minimumNumber) && isNaN(maximumNumber)) {
  alert("I valori sono errati, inserisci i valori correttamente");
  //   SE i valori inseriti sono nell' ordine giusto
} else if (minimumNumber > maximumNumber) {
  alert("I valori sono invertiti, inserisci i valori correttamente");
} else {
  // genero un numero compreso tra il valore minimo ed il valore massimo forniti dall'utente
  const output = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber
  );
  alert("Il numero generato randomicamente è " + output);
}
