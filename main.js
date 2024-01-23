
// let input = 5;
// console.log(input);
// function generaNumeri(num){
//     let array = [];
//     for(let i = 0; i < num; i++){
//         let numeroCasuale = Math.floor(Math.random() * (10 - 1) + 1);
//         array.push(numeroCasuale)
//     }
//     return array;
// }
// console.log(generaNumeri(input));


// ESERCIZIO 2 TRACCIA

// Metti un po' d'ordine

// Scrivi una funzione che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

//  Esempio:

//  Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

//  Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]



//  Variante:

//  Prova ad ordinali in modo crescente.


// ESERCIZIO 2

let input = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
function generaNumeri(num){
    let array = [8, 7, 6, 5, 5, 3, 2, 1, -2, -4];
    for(let i = 0; i < num; i++){
        let numeroCasuale = Math.floor(Math.random() * (10 - 1) + 1);
        array.push(numeroCasuale)
        array.sort()
    }
    return array;
}
console.log(generaNumeri(input));
  