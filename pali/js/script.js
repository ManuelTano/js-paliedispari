// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola

const userWord =  prompt("Inserisci una parola");

// Tramite una funzione, verifico la parola

function reverseWord(word) {
    
    let newWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }

    if (word == newWord) {
        return true;
    }
}


// # Verifico che la parola sia palindroma

if (reverseWord(userWord)) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}