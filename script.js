let currentText = document.getElementById('user-identity').innerHTML;
console.log(document.getElementById('user-identity').innerHTML);

const userName = prompt('Digita il tuo nome');
console.log(userName);

const userSurname = prompt('Digita il tuo cognome');
console.log(userSurname);

const userFavouriteColor = prompt('Digita il tuo colore preferito');
console.log(userFavouriteColor);

currentText = `${currentText} ${userName} ${userSurname} ${userFavouriteColor} 24`;

document.getElementById('user-identity').innerHTML = currentText;
console.log(currentText);

