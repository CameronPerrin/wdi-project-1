var game = {
  playerAtk: 10,
  playerDefence: 5,
  playerLife: 50,
  enemyAtk: 10,
  enemyDefence: 5,
  enemyLife: 50,
  attack: function(){
//lowers your defense for attacking
    game.playerDefence = game.playerDefence - (Math.ceil(Math.random()*2));
//doesn't allow defense to go below 0
    switch(game.playerDefence<0) {
      case true:
      game.playerDefence = 0
      console.log("your defense: "+game.playerDefence);
      break;

      case false:
      console.log("your defense: "+game.playerDefence);
      break;
    };
    console.log("your attack: "+game.playerAtk);

//doesn't allow you to do damage if your attack is lower than enemy defense
    switch(game.playerAtk<=game.enemyDefence) {
      case true:
      game.enemyDefense = game.enemyDefense - Math.floor(.5*game.playerAtk)
      console.log("you cant do enough damage!");
      console.log("enemy Life: "+game.enemyLife);
      break;

      case false:
//hurts enemy
      game.enemyLife = game.enemyLife - (game.playerAtk - game.enemyDefence);
      console.log("damage dealt: "+(game.playerAtk-game.enemyDefence))
      break;
    };

//increases your attack for attacking
    game.playerAtk = game.playerAtk + (Math.ceil(Math.random()*(5)+1));
    console.log("your new attack: "+game.playerAtk);

//this detects if the enemy has lost or not
    switch(game.enemyLife <= 0){
      case true:
      game.enemyLife = 0
      console.log("YOU WIN")
      break;

      case false:
      console.log("enemy Life: "+game.enemyLife)
      break;
    };

  },
  defend: function(){

//Increases defense
    game.playerDefence = game.playerDefence + (Math.ceil(Math.random()*(5)+2));
    console.log("your Defense: "+game.playerDefence)

//doesn't allow attack to go below 0
    switch(game.playerAtk<3){
      case true:
      game.playerAtk = 3
      console.log("your attack: "+game.playerAtk)
      break;

      case false:
//lowers your attack for defending
      game.playerAtk = game.playerAtk - (Math.ceil(Math.random()*3));
      console.log("your attack: "+game.playerAtk)
      break;


    };

  },
  enemyAttack: function(){
//lowers enemy defense for attacking
    game.enemyDefence = game.enemyDefence - (Math.ceil(Math.random()*2));
//doesn't allow enemy defense to go below 0
    switch(game.enemyDefence<0) {
      case true:
      game.enemyDefence = 0
      console.log("enemy defense: "+game.enemyDefence);
      break;

      case false:
      console.log("enemy defense: "+game.enemyDefence);
      break;
    };
    console.log("enemy attack: "+game.enemyAtk);

//doesn't allow you to do damage if your attack is lower than enemy defense
    switch(game.enemyAtk<=game.playerDefence) {
      case true:
      console.log("It cant do enough damage!");
      game.playerDefence = game.playerDefence - Math.floor(.5*game.enemyAtk)
      break;

      case false:
//hurts you
      game.playerLife = game.playerLife - (game.enemyAtk - game.playerDefence);
      console.log("damage dealt to me: "+(game.enemyAtk-game.playerDefence))
      break;
    };

//increases enemy attack for attacking
    game.enemyAtk = game.enemyAtk + (Math.ceil(Math.random()*(5)+1));
    console.log("enemy's new attack: "+game.enemyAtk);

//this detects if the enemy has won or not
    switch(game.playerLife <= 0){
      case true:
      game.playerLife = 0
      console.log("GAME OVER")
      break;

      case false:
      console.log("your Life: "+game.playerLife)
      break;
    };
  },
  enemyDefend: function(){

//Increases defense
    game.enemyDefence = game.enemyDefence + (Math.ceil(Math.random()*(5)+2));
    console.log("enemy Defense: "+game.enemyDefence)

//doesn't allow attack to go below 0
    switch(game.enemyAtk<3){
      case true:
      game.enemyAtk = 3
      console.log("enemy attack: "+game.enemyAtk)
      break;

      case false:
//lowers your attack for defending
      game.enemyAtk = game.enemyAtk - (Math.ceil(Math.random()*3));
      console.log("your attack: "+game.enemyAtk)
      break;


    };

  },
  decide: function(){
    var decision = Math.random();
    if (game.decision > .33 && health >= 25){
      game.enemyAtk();
    } else if(game.decision > .33 && health){
      game.enemyDefence();
    } else if()
  }

};

$("#attack").on("mouseup", function(){
  game.attack();
  setTimeout(game.decide(), 1s);
});

$("#defend").on("mouseup", function(){
  game.defend();
});

function test(){
  console.log(Math.ceil(Math.random()*3))
}