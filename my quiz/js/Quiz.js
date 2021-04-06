class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();

    background("yellow");

    //write code to show a heading for showing the result of Quiz

    Contestant.getPlayerInfo( );


     if (allContestants!=undefined){
        fill("blue");
        textSize(20);
        text("NOTE: Contestant who gave the correct answer are highlighted in green color!!",100,230)
        fill("red");
        textSize(40);
        text("RESULT",250,50)
        text("_ _ _ _ _",250,55)
        for(var plr in allContestants ){
          var correctAns = "2";
          textSize(20);
          if(correctAns=== allContestants[plr].answer){
          fill("green")
          text(allContestants[plr].name+" : "+allContestants[plr].answer,130,300);
        }
          else{
            fill("red")
            text(allContestants[plr].name+" : "+allContestants[plr].answer,130,350);
          }
          
            
          
        }
    }

  
    
  }

}
