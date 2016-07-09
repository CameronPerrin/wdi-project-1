var game = {
  playerAtk: 10,
  playerDefence: 5,
  playerLife: 50,
  enemyAtk: 10,
  enemyDefence: 5,
  enemyLife: 50,
  enemyMaxLife: 50,
  playerMaxLife: 50,
  clickability: true,
  barLength: 220,
  enemyBarLength: 220,
  getsToDecide: true,
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
      $(textInfo).html("You can't do enough damage!");
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
      game.getsToDecide = false
      $(textInfo).html("Congratulations, YOU WIN!");
      setTimeout(function(){
        $("#enemy").html("<img id='enemyAvatar' src='images/enemy-dead.png'>");
        $("#enemyAvatar").css("height", "100px");
        $("#enemyAvatar").css("width", "200px");
        $("#enemyAvatar").css("bottom", "175px");
      }, 2000)
      game.playerLife = game.playerMaxLife
      break;

      case false:
      console.log("enemy Life: "+game.enemyLife)
      break;
    };

  },
  defend: function(){

//Increases defense
    game.playerDefence = game.playerDefence + (Math.ceil(Math.random()*(5)+3));
    console.log("your Defense: "+game.playerDefence)

//doesn't allow attack to go below 0
    switch(game.playerAtk<3){
      case true:
      game.playerAtk = 3
      console.log("your attack: "+game.playerAtk)
      break;

      case false:
//lowers your attack for defending
      // game.playerAtk = game.playerAtk - (Math.ceil(Math.random()*3));
      console.log("your attack: "+game.playerAtk)
      break;


    };

  },
  enemyAttack: function(){
//lowers enemy defense for attacking
    game.enemyDefence = game.enemyDefence - (Math.ceil(Math.random()*3));
//plays animation
    $("#enemy").html("<img id='enemyAvatar' src='images/enemy-move-out.gif'>");
    $("#enemy").css("right", "50px");
    $("#enemyAvatar").css("height", "200px");

    setTimeout(function(){
      $("#enemy").css("right", "1000px");
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-move-in.gif'>");
    }, 300);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-attack1.png'>");
    }, 1000);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-attack2.png'>");
      $("#enemyAvatar").css("width", "220px");
      $("#player").html("<img id='avatar' src='images/player-hurt.png'>");
      $("#avatar").css("width", "150px");
    }, 1300);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-move-in.gif'>");
      $("#enemy").css("right", "1150px");
      $("#enemy").css("bottom", "50px");
      $("#enemy").css("z-index", "-1");
    }, 1600);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-attack3.png'>");
      $("#enemy").css("bottom", "60px");
      $("#enemy").css("z-index", "-1");
      $("#enemyAvatar").css("width", "130px");
    }, 2200);    

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-attack4.png'>");
      $("#player").html("<img id='avatar' src='images/player-hurt2.png'>");
      $("#enemyAvatar").css("width", "250px");
      $("#enemy").css("right", "1080px");
    }, 2500);  

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-move-out.gif'>");
      $("#enemy").css("right", "1150px");
      $("#enemy").css("bottom", "50px");
      $("#enemy").css("z-index", "-1");
    }, 2800);

    setTimeout(function(){
      $("#enemy").css("right", "0px");
      $("#enemy").css("bottom", "0px");
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-move-in.gif'>");
      $("#player").html("<img id='avatar' src='images/idle.gif'>");
    }, 3100);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-idle.gif'>");
      $("#enemyAttack").html("Attack: "+game.enemyAtk)

    }, 3400);

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
      $(textInfo).html("The enemy cant do enough damage!");
      game.playerDefence = game.playerDefence - Math.floor(.4*game.enemyAtk)
      break;

      case false:
//hurts you
      game.playerLife = game.playerLife - (game.enemyAtk - game.playerDefence);
      console.log("damage dealt to me: "+(game.enemyAtk-game.playerDefence))
      break;
    };
    setTimeout(function(){
    //updates player health
        $("#playerHealth").html("Health: "+game.playerLife+"/"+game.playerMaxLife);
    }, 3100)
//increases enemy attack for attacking
    game.enemyAtk = game.enemyAtk + (Math.ceil(Math.random()*(4)+1));
    console.log("enemy's new attack: "+game.enemyAtk);

//this detects if the enemy has won or not
    switch(game.playerLife <= 0){
      case true:
      game.playerLife = 0
      $(textInfo).html("GAME OVER");
      setTimeout(function(){
        $("#player").html("<img id='avatar' src='images/enemy-dead.png'>");
        $("#avatar").css("height", "100px");
        $("#avatar").css("width", "200px");
        $("#avatar").css("bottom", "175px");
      }, 3350)
      break;

      case false:
      console.log("your Life: "+game.playerLife)
      break;
    };
    //updates playes health
    game.lifeBar();
    $("#playerHealthBar").css("width", game.barLength);
  },
  enemyDefend: function(){
//animation for defense
  $("#enemy").html("<img id='enemyAvatar' src='images/enemy-defend.gif'>");

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

      // game.enemyAtk = game.enemyAtk - (Math.ceil(Math.random()*3));
      console.log("enemy attack: "+game.enemyAtk)
      break;


    };
    //updates defense
    $("#enemyDefence").html("Defence: "+game.enemyDefence);
  },
  //lets the enemy decide to attack or defend
  decide: function(){
    if (game.decision > .4 && game.enemyLife > 25){
      console.log("--Your enemy attacks!--");
      game.enemyAttack();
    } else if(game.decision > .4 && game.enemyLife <= 25){
      console.log("--Your enemy defends!--");
      game.enemyDefend();
    } else if(game.decision < .4){
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
  },

  lifeBar: function(){
  game.barLength = ((game.playerLife / game.playerMaxLife) * 220);
  },

  enemyLifeBar: function(){
    game.enemyBarLength = ((game.enemyLife / game.enemyMaxLife) * 220);
  }

};


$("#attack").on("mouseup", function(){
  if(game.clickability === true){
    game.clickability = false;
    game.attack();
    //updates enemy health
    game.enemyLifeBar();
    $("#enemyHealthBar").css("width", game.enemyBarLength);
    $("#enemyHealthNumber").html("Health: "+game.enemyLife+"/50")

    setTimeout(function(){
      game.clickability = true;
    }, 5800);

    console.log("----------------------")
    if(game.getsToDecide === true){
    setTimeout(game.decide, 2300);
    };
    setTimeout(function(){
      $("#playerHealth").html("Health: "+game.playerLife+"/"+game.playerMaxLife);
      $("#playerDefence").html("Defence: "+game.playerDefence);
      $("#playerAttack").html("Attack: "+game.playerAtk)
    }, 1801);

    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/idle.gif'>");
      game.clickability = true;
    }, 1800);

    $("#player").html("<img id='avatar' src='images/jump-forward.png'>");

    $("#avatar").stop(true,true).animate({left: 1110}, 500);

    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/attack1.png'>");
      $("#avatar").css("left", "1110px");
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-hurt.png'>");
    }, 500);
    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/attack2.png'>");
      $("#avatar").css("left", "1110px");
    }, 600);
    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/attack1.png'>");
      $("#avatar").css("left", "1110px");
    }, 700);
    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/kick1.png'>");
      $("#avatar").css("left", "1110px");
    }, 800);

    setTimeout(function(){
      $("#player").html("<img id='avatar' src='images/jump-back.png'>");
      $("#avatar").css("left", "1110px");
      $("#avatar").stop(true,true).animate({left: 50}, 800);
    }, 1000);

    setTimeout(function(){
      $("#enemy").html("<img id='enemyAvatar' src='images/enemy-idle.gif'>");
    }, 1400)
  }
});


$("#defend").on("mouseup", function(){
  if(game.clickability === true){
    game.clickability = false;
  game.defend();
  console.log("----------------------")
  if(game.getsToDecide === true){
  setTimeout(game.decide, 1000);
  };
  $("#playerDefence").html("Defence: "+game.playerDefence);
  setTimeout(function(){
    $("#playerHealth").html("Health: "+game.playerLife+"/"+game.playerMaxLife);
    $("#playerDefence").html("defense: "+game.playerDefence);
    game.clickability = true;
  }, 1001);
  $("#playerDefence").html("defense: "+game.playerDefence);
  $("#player").html("<img id='avatar' src='images/defense-stance.gif'>");
  $("#avatar").css("width", "93px");
}
});