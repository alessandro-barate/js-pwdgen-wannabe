// Qui dichiaro la variabile con il valore di 'user-identity' e stampo il risultato in console
let currentElement = document.getElementById("user-identity");
let currentText = currentElement.innerHTML;
console.log(document.getElementById("user-identity").innerHTML);

// Qui dichiaro la variabile const chiedendo all'utente (tramite prompt) il valore
// e stampo il risultato in console
const userName = prompt("Digita il tuo nome");
console.log(userName);

// Qui dichiaro la variabile const chiedendo all'utente (tramite prompt) il valore
// e stampo il risultato in console
const userSurname = prompt("Digita il tuo cognome");
console.log(userSurname);

// Qui dichiaro la variabile const chiedendo all'utente (tramite prompt) il valore
// e stampo il risultato in console
const userFavouriteColor = prompt("Digita il tuo colore preferito");
console.log(userFavouriteColor);

// Qui dichiaro una variabile che dia come risultato un numero casuale intero tra 1 e 100 compreso
// e lo stampo in console
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// Qui dichiaro la variabile con valore come somma dei valori delle precedenti variabili
// e stampo il risultato in console
currentText = `${currentText} ${userName} ${userSurname} ${userFavouriteColor} ${randomNumber}`;

// Qui dichiaro che il valore di ciò che leggo dall'html diventa la variabile currentText
// e stampo il risultato in console
currentElement.innerHTML = currentText;
console.log(currentText);
