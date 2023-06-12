var gamePattern= [];
var colorArray = ["red","blue","green","yellow"];
var userClickedPattern = [];
var iftrue= false;
var level = 0;
$(".btn").click(function(){
  var UserChosenColor = $(this).attr("id");

  userClickedPattern.push(UserChosenColor);

  playSound(UserChosenColor);

  animatePress(UserChosenColor);

  nextAnswer(userClickedPattern.length - 1);
});

function playSound(randomChosenColour){
  var soundforcolor = new Audio("sounds/"+randomChosenColour+".mp3");

  soundforcolor.play();
}
//console.log(userClickedPattern);
function nextSequence(){
  userClickedPattern = [];

  level++;

  $(document).click(function(){
    $("#level-title").text("Level "+level);
  });

var RandomNumber = Math.floor(Math.random() * 4);

var randomChosenColour = colorArray[RandomNumber];

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var soundforcolor = new Audio("sounds/"+randomChosenColour+".mp3");

soundforcolor.play();

gamePattern.push(randomChosenColour);

}

function animatePress(currentColor){
  $("#"+ currentColor).addClass("pressed");

  setTimeout(function(){
    $("#"+ currentColor).removeClass("pressed");
  },100);
}

$(document).keypress(function(){
  if(!iftrue){
    iftrue=true;
    $("#level-title").text("Level "+level);
    nextSequence();
}
});

function nextAnswer(currentLevel){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

  console.log("Success");

  if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {

          nextSequence();

        }, 1000);
      }
      }
   else {
      var audio = new Audio("sounds/wrong.mp3");

      audio.play();

      console.log("wrong");

      $("body").addClass("game-over");

      setTimeout(function(){
        $("body").removeClass("game-over");
      },100);

      $(document).click(function(){
        $("#level-title").text("Game Over, Press Any Key to Restart");
      });
      startOver();
    }
}

function startOver(){
  gamePattern = [];

  level = 0;

  iftrue = false;
}
