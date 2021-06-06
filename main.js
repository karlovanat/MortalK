  const $arenas = document.querySelector('.arenas');
  const $randomButton = document.querySelector('.button');
  const randomNumber = (Math.floor(Math.random() * 10));

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fire'],
    attack: function (name){
        console.log(name + ' ' + 'Fight!')
    },
    }
    
    const player2 = {
        player: 2,
        name: 'Subzero',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon: ['ice'],
        attack: function (){
            console.log(player2.name + ' ' + 'Fight!')
        },
    }
    
    //console.log(player1);
    //console.log(player2);
    
    function createElement (tag, className){
        const $tag = document.createElement(tag);
        if (className) { //если классНейм передался в функцию (true)
            $tag.classList.add(className); // осуществи добавление класса
        }
        $tag.classList.add(className);

        return $tag
    }

    function createPlayer (playerX){

    const $player = createElement('div', 'player'+ playerX.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');
    
    $img.src = playerX.img;
    $name.innerText = playerX.name;
    $life.style.width = playerX.hp + '%';
    
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

   $character.appendChild($img); 

   $player.appendChild($progressbar);
   $player.appendChild($character);
    
   return $player;
}

function changeHP (player, randomN) {
    const $playerLife = document.querySelector('.player'+ player.player + ' .life')
    randomN = randomNumber;
    player.hp -=randomN;
    if (player.hp <= 0) {
        
    }
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp);

    if (player.hp < 0) {
        $arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + 'lose';

    return $loseTitle;
}

$randomButton.addEventListener('click', function (){
    console.log('####: Click Rundom Button')
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
//    createPlayer('player1', player1);
//    createPlayer('player2', player2);