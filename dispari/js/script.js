// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari.

let userChoice = prompt('Scegli pari o dispari');

// L'utente inserisce un numero da 1 a 5.

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

// Genero un numero random (sempre da 1 a 5) per il computer.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Stampo in console la scelta del PC

let pcNumber = randomNumber(1, 5);
console.log("Scelta del Computer: " + pcNumber);

// Somma fra il numero dell'utente e quello del PC

let sum = userNumber + pcNumber;
console.log("La somma e': " + sum);

// Stabilisco se la somma dei due numeri è pari o dispari

function isEven(numero) {
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let result = isEven(sum);

if (result == true) {
    result = "pari";
    console.log("La somma è:" + result);

} else {
    result = "dispari";
    console.log("La somma è:" + result);
}

// Dichiaro il vincitore

if (userChoice == result) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}