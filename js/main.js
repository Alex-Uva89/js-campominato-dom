
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
        creBombeRandom(1, 16, 100);
        btnClear.classList.remove('remove');
    } else if (btnSelect.value == 'medium'){
        clickMedium();
        creBombeRandom(1, 16, 81);
        btnClear.classList.remove('remove');
    } else if (btnSelect.value == 'hard'){
        clickHard();
        creBombeRandom(1, 16, 49);
        btnClear.classList.remove('remove');
    } else {
        areaContainBoxes.innerHTML = '<h2 class= "size">Questa non è una difficoltà :( </h2></i>'

    }
})

function clickHard(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
    areaContainBoxes.innerHTML += `<div class="box hard">${i}</div>`   
    }
    colorBox();
}

function clickMedium(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 81; i++) {
    areaContainBoxes.innerHTML += `<div class="box medium">${i}</div>`   
    }
    colorBox();
}

function clickEasy(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 49; i++) {
    areaContainBoxes.innerHTML += `<div class="box easy">${i}</div>`   
    }
    colorBox();
}

function colorBox() {
    let caselBox = document.querySelectorAll('.box');
    for (let i = 0; i < caselBox.length ; i++) {
        caselBox[i].addEventListener('click', function(){
            caselBox[i].classList.add('select');
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
function creBombeRandom(min, max, quanteCaselleVincenti){
    const vereBombe = []
    const controlloBombe = []
    for (let indexBombe = 1; indexBombe < quanteCaselleVincenti.length; indexBombe++) {
        let bombe = Math.floor(Math.random() * (max - min) + min);
        while (controlloBombe.includes(bombe)) {
            bombe = Math.floor(Math.random() * (max - min) + min);
        }
        vereBombe.push(bombe);
    }
}

// applicare la funziona ad ogni difficoltà con la variabile generica precedente (forse this?)

// applicare a queste tessere un'etichetta

// quando l'utente clicca la tessera con l'etichetta viene aggiunta una classe che rende lo sfondo rosso e blocca il gioco. (ciclo while che si blocca al primo tasto rosso)

// quando l'utente clicca tutte le tessere che non hanno l'etichetta appare messaggio di vittoria con un contatore delle caselle vincenti. 



