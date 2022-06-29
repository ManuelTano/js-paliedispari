// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari.

let userChoice = prompt('Scegli pari o dispari');

// L'utente inserisce un numero da 1 a 5.

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

// Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

