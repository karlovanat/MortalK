
const player1 = {
name: 'Scorpion',
hp: 100,
img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
weapon: ['fire'],
attack: function (){
    console.log(player1.name + 'Fight!')
},
}

const player2 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice'],
    attack: function (){
        console.log(player2.name + 'Fight!')
    },
}

//console.log(player1);
//console.log(player2);

function createPlayer (){
const $arenas = document.querySelector('.arenas');
const $player1 = document.createElement('div');
$arenas.appendChild($player1); //отпраляю в дерево
$player1.classList.add('player');

const $progressbar = document.createElement('div');
$player1.appendChild($progressbar);
$progressbar.classList.add('progressbar');
//--------
const $life = document.createElement('div');
$life.style.width = 100%
$life.classList.add('life');
const $name = document.createElement('div');
$name.innerText = 'Scorpion';
$name.classList.add('name');
$progressbar.appendChild($life);
$progressbar.appendChild($name);
//------

const $character = document.createElement('div');
$player1.appendChild($character);
$character.classList.add('character');
//----
const $img = document.createElement('img');
$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
$character.appendChild($img);
//----
}
//createPlayer('player1', player1, 'Scorpiom', 50);
//createPlayer('player2', player2, 'Subzero', 80);
//console.log(createPlayer);