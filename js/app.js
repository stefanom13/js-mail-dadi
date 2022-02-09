// Gioco dei dadi
// dichiarare variabili 
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// let numberPlayer = Math.floor ( Math.random () * 6 + 1 );
// let numberPc = Math.floor ( Math.random () * 6 + 1 );

// console.log(numberPlayer, numberPc)

// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)

// if (numberPlayer > numberPc) {
//     alert(`Il tuo numero è: ${numberPlayer}. Il numero del pc è: ${numberPc}. Hai vinto!`)    
// } else   {

//     alert(`Il tuo numero è: ${numberPlayer}. Il numero del pc è: ${numberPc}. Hai perso!`)

// }
// if (numberPlayer === numberPc) {
//     alert(`Il tuo numero è: ${numberPlayer}. Il numero del pc è: ${numberPc}. pareggio!`)    
// } 
 

// gioco email 

// Chiedi all’utente il suo nome
let nameUser = prompt('benvenuto, inserisci il tuo nome')

// Chiedi all’utente la sua email
let emailUser = prompt('inserisci la tua mail');

console.log (nameUser, emailUser);

const listEmail = [
    "pippo@gmail.it",
     "plutp@gmail.it",
     "lupo@gmail.it",
     "michele@gmail.it",
     "topo@gmail.it",
     "ciao"
];

    console.log(listEmail);

// creo varabiabile per vedere effetivamente se email è corretta
let checkMail = false;
// controlla che sia nella lista di chi può accedere,

for (let i = 0; i < listEmail.length; i++) {
    const element = listEmail[i];
     // stampa un messaggio appropriato sull’esito del controllo.
    if (emailUser === element) {

       checkMail = true;
    }

}
// stampa un messaggio appropriato sull’esito del controllo.
if (checkMail === true ){
    alert('ok puoi entrare')

}else {
    alert('mi dispiace accesso negato')
}