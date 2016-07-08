var game = {
  playerAtk: 10,
  playerDefence: 5,
  playerLife: 50,
  enemyAtk: 10,
  enemyDefence: 5,
  enemyLife: 50,
  decision: Math.random(),
  attack: function(){
//lowers your defense for attacking
    game.playerDefence = game.playerDefence - (Math.ceil(Math.random()*2));
//doesn't allow defense to go below 0
    switch(game.playerDefence<0) {
      case true:
      game.playerDefence = 0;
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
//lowers enemy attack for defending
      game.enemyAtk = game.enemyAtk - (Math.ceil(Math.random()*3));
      console.log("enemy attack: "+game.enemyAtk)
      break;


    };

  },
  //lets the enemy decide to attack or defend
  decide: function(){
    if (game.decision > .33 && game.enemyLife > 25){
      console.log("--Your enemy attacks!--");
      game.enemyAttack();
    } else if(game.decision > .33 && game.enemyLife <= 25){
      console.log("--Your enemy defends!--");
      game.enemyDefend();
    } else if(game.decision < .33){
      switch(Math.random()<.5){
        case true:
        console.log("--Your enemy attacks!--")
        game.enemyAttack()
        break;

        case false:
        console.log("--Your enemy defends!--")
        game.enemyDefend()
        break;
      };
    };
  }

};

$("#attack").on("mouseup", function(){
  game.attack();
  console.log("----------------------")

  // $("#attack").id("#dontAttack")

  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/idle.gif'>");
    // $("#dontAttack").id("#attack");
  }, 1800);

  setTimeout(game.decide, 1000);
  $("#player").html("<img id='avatar' src='images/jump-forward.png'>");

  $("#avatar").stop(true,true).animate({left: 900}, 500);

  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/attack1.png'>");
    $("#avatar").css("left", "950px");
  }, 500);
  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/attack2.png'>");
    $("#avatar").css("left", "950px");
  }, 600);
  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/attack1.png'>");
    $("#avatar").css("left", "950px");
  }, 700);
  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/kick1.png'>");
    $("#avatar").css("left", "950px");
  }, 800);

  setTimeout(function(){
    $("#player").html("<img id='avatar' src='images/jump-back.png'>");
    $("#avatar").css("left", "950px");
    $("#avatar").stop(true,true).animate({left: 50}, 800);
  }, 1000)

});
 // $("#player").html("<img id='avatar' src='images/jump-back.png'>")

$("#defend").on("mouseup", function(){
  game.defend();
  console.log("----------------------")
  setTimeout(game.decide, 1000);
});

function test(){
  console.log(Math.ceil(Math.random()*3))
}