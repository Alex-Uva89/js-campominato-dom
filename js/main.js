
let areaContainBoxes = document.getElementById('box_game');
const btnPlay = document.getElementById('play');
const btnSelect = document.getElementById('level_user');
const btnClear = document.getElementById('refresh');
const titleMod = document.getElementById('title');
const pJoke = document.getElementById('joke');


btnPlay.addEventListener('click', function(){
    areaContainBoxes.classList.remove('size')
    titleMod.classList.add('remove');
    pJoke.classList.add('remove');
    if (btnSelect.value == 'easy'){
        clickEasy();
        btnClear.classList.remove('remove');
    } else if (btnSelect.value == 'medium'){
        clickMedium(); 
        btnClear.classList.remove('remove');
    } else if (btnSelect.value == 'hard'){
        clickHard();
        btnClear.classList.remove('remove');
    } else {
        areaContainBoxes.innerHTML = '<h2 class= "size">Questa non è una difficoltà :( </h2></i>'

    }
})

function clickHard(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(100, 16);
    for (let i = 1; i <= 100; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box hard">${i}</div>`;   
        } else {
            areaContainBoxes.innerHTML += `<div class="box hard ">${i}</div>`;
        }
    }
    colorBox();
}

function clickMedium(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(81, 16);
    for (let i = 1; i <= 81; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box medium">${i}</div>`;   
        } else {
            areaContainBoxes.innerHTML += `<div class="box medium ">${i}</div>`;
        }
    }
    colorBox();
}

function clickEasy(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(49, 16);
    for (let i = 1; i <= 49; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box easy ">${i}</div>`;   
        } else {
            areaContainBoxes.innerHTML += `<div class="box easy save">${i}</div>`;
        }
    }
    colorBox();
}

function colorBox() {
    let saveBox = document.querySelectorAll('.save');
    let bombBox = document.querySelectorAll('bomb')
    
    for (let i = 0; i < saveBox.length ; i++) {
        saveBox[i].addEventListener('click', function(){
            saveBox[i].classList.add('select');
        });   
    }
    for (let i = 0; i < bombBox.length ; i++) {
        bombBox[i].addEventListener('click', function(){
            bombBox[i].classList.add('select');
        });   
    }

    
}

btnClear.addEventListener('click', function(){
    areaContainBoxes.innerHTML = 'Scegli una difficoltà';
    areaContainBoxes.classList.add('size')
})

/*
CONSEGNA:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

PSEUDOCODICE:
*/
// funzione per creare 16 numeri casuali su tot caselle casuali (variabile da modificare successivamente)
function creBombeRandom(maxCaselle, numBombe){
    const posizioneBombe = [];
    for (let indexBombe = 1; indexBombe <= numBombe ; indexBombe++) { //da 1 a 16
        let bombaRandom = Math.floor(Math.random() * (maxCaselle - 1) + 1); // numero casuale su max caselle

        while (posizioneBombe.includes(bombaRandom)) {
            bombaRandom = Math.floor(Math.random() * (maxCaselle - 1) + 1);
        }
        posizioneBombe.push(bombaRandom);
        // posizioneBombe[bombaRandom].classList.add('error');
    }
    return posizioneBombe;

}


// applicare la funziona ad ogni difficoltà con la variabile generica precedente (forse this?)

// applicare a queste tessere un'etichetta

// quando l'utente clicca la tessera con l'etichetta viene aggiunta una classe che rende lo sfondo rosso e blocca il gioco. (ciclo while che si blocca al primo tasto rosso)

// quando l'utente clicca tutte le tessere che non hanno l'etichetta appare messaggio di vittoria con un contatore delle caselle vincenti. 



