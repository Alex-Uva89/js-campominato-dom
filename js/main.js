
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
        areaContainBoxes.innerHTML = '<h2 class= "size">Questa non è una difficoltà :( </h2></i>';
    }

})



function clickHard(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(49, 16);
    for (let i = 1; i <= 49; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box hard bomb">${i}</div>`; 
        } else {
            areaContainBoxes.innerHTML += `<div class="box hard save">${i}</div>`;
        }
    }
    let safe = isSave();
    let lose = isBomb(); 
      
}

function clickMedium(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(81, 16);
    for (let i = 1; i <= 81; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box medium bomb">${i}</div>`; 
        } else {
            areaContainBoxes.innerHTML += `<div class="box medium save">${i}</div>`;
        }
    }
    isSave();
    isBomb();

}

function clickEasy(){
    areaContainBoxes.innerHTML = '';
    const posizioneDefinitivaBombe = creBombeRandom(100, 16);
    for (let i = 1; i <= 100; i++) {
        if (posizioneDefinitivaBombe.includes(i)){
            areaContainBoxes.innerHTML += `<div class="box easy bomb">${i}</div>`; 
        } else {
            areaContainBoxes.innerHTML += `<div class="box easy save">${i}</div>`;
        }
    }
    isSave();
    isBomb()
}

function isSave() {
    let saveBox = document.querySelectorAll('.save');
    for (let i = 0; i < saveBox.length ; i++) {
        saveBox[i].addEventListener('click', function(){
            saveBox[i].classList.add('win');
        });   
    }  
    
}

function isBomb() {
    let bombBox = document.querySelectorAll('.bomb');
    let lose = document.querySelectorAll('.box');
    for (let i = 0; i < bombBox.length ; i++) {
        bombBox[i].addEventListener('click', function(){
            bombBox[i].classList.add('lose');
        });
    }
}



btnClear.addEventListener('click', function(){
    areaContainBoxes.innerHTML = 'Scegli una difficoltà';
    areaContainBoxes.classList.add('size')
})


function creBombeRandom(maxCaselle, numBombe){
    const posizioneBombe = [];
    for (let indexBombe = 1; indexBombe <= numBombe - 1 ; indexBombe++) { //da 1 a 16
        let bombaRandom = Math.floor(Math.random() * (maxCaselle - 1) + 1); // numero casuale su max caselle

        while (posizioneBombe.includes(bombaRandom)) {
            bombaRandom = Math.floor(Math.random() * (maxCaselle - 1) + 1);
        }
        posizioneBombe.push(bombaRandom);
        // posizioneBombe[bombaRandom].classList.add('error');
    }
    return posizioneBombe;

}




