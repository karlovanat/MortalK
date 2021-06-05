
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

function createPlayer (player, playerX, hp){

const $arenas = document.querySelector('.arenas');
const $player = document.createElement('div');
const $progressbar = document.createElement('div');
const $life = document.createElement('div');
const $name = document.createElement('div');
const $character = document.createElement('div');
const $img = document.createElement('img');


$player.classList.add(player);
$progressbar.classList.add('progressbar');
$name.classList.add('name');
$life.classList.add('life');
$character.classList.add('character');

$img.src = playerX.img;
$name.innerText = playerX.name;
$life.style.width = '100%';

$arenas.appendChild($player); //отпраляю в дерево
$player.appendChild($progressbar);
$progressbar.appendChild($life);
$progressbar.appendChild($name);
$player.appendChild($character);
$character.appendChild($img);

}
createPlayer('player1', player1, 50);
createPlayer('player2', player2, 50);