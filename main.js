  const $arenas = document.querySelector('.arenas');

const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fire'],
    attack: function (name){
        console.log(name + ' ' + 'Fight!')
    },
    }
    
    const player2 = {
        name: 'Subzero',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon: ['ice'],
        attack: function (){
            console.log(player2.name + ' ' +  'Fight!')
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

    function createPlayer (player, playerX){

    const $player = createElement('div', 'player');
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

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));
//    createPlayer('player1', player1);
//    createPlayer('player2', player2);