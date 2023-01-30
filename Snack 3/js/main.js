// Snack3
// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

const N = parseInt(prompt("Scegli il numero di arrays da creare"));

let i = 0;
while (i < N) {
  const lista = Array(10)
    .fill()
    .map(() => Math.floor(100 * Math.random()));
  console.log(lista);
  i++;
}

if (isNaN(N)) {
  alert("attenzione, inserisci un numero per favore.");
  const N = parseInt(prompt("Scegli il numero di arrays da creare"));
  let i = 0;
  while (i < N) {
    const lista = Array(10)
      .fill()
      .map(() => Math.floor(100 * Math.random()));
    console.log(lista);
    i++;
  }
}
