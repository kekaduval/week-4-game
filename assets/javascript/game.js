// 1. Set Vars
// Target Score = random number chosen that you must reach
// Total Score = score you get from clicking crystals
// wins = number of times you win
// loses = number of times you lose
// crystal1
// crystal2
// crystal3
// crystal4
//
//
// Target score = Math.floor(Math.random()*120+19 )
// Total Score = c1+c2+c3+c4 (Might be a function)
// Wins =function (Total Score = Target Score) (wins++)
// Lose = function (Total Score > Target Score) (lose--)
// crystal1-crystal4 = Math.floor(Math.random()*12+1 )
// reset function () (generates a new target score, total score equals 0, crystals new random number)
//
var winCount = 0;
var loseCount = 0;         //everytime you lose, restart the game//
var computerScore = (Math.floor(Math.random()*120)+19);         //
var userTotalScore= 0;
var crystal1 =(Math.floor(Math.random()*12)+1);  //1 to 12 //
var crystal2 =(Math.floor(Math.random()*12)+1);   //1 to 12 //
var crystal3 =(Math.floor(Math.random()*12)+1);   //1 to 12//
var crystal4 =(Math.floor(Math.random()*12)+1);   //1 to 12//
var crystalchoice;
//functions for the crystals
function shuffleCrystal() {
  crystal1 =(Math.floor(Math.random()*12)+1);
  crystal2 =(Math.floor(Math.random()*12)+1);
  crystal3 =(Math.floor(Math.random()*12)+1);
  crystal4 =(Math.floor(Math.random()*12)+1);
console.log(this);
}

function gamePlay(){
	if(userTotalScore === computerScore){
		winCount++;
		$('#win-counter').text("winCount");
		$('#win-or-lose').text('You win!');
  computerScore =(Math.floor(Math.random()*120)+19);
  $("#randon-number").text(computerScore);
  userTotalScore = 0;
  $("current-score-counter").text(userTotalScore);
shuffleCrystal();

console.log(this);

} else  if (userTotalScore > computerScore){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerScore = (Math.floor(Math.random()*120)+19);
		$('#random-number').text(computerScore);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystal();
    console.log(this);
	}

}
$('#random-number').text(computerScore)

$("#crystal1").on("click", function(){
  console.log(userTotalScore);
  console.log(crystalchoice);
	userTotalScore += crystal1;
	$("#current-score-counter").text(userTotalScore);
	gamePlay();
  console.log(this);
});


$("#crystal2").on("click", function(){
  console.log(userTotalScore);
  console.log(crystalchoice);
	userTotalScore += crystal2;
	$("#current-score-counter").text(userTotalScore);
	gamePlay();
  console.log(this);

});


$("#crystal3").on("click", function(){
  console.log(userTotalScore);
  console.log(crystalchoice);
	userTotalScore += crystal3;
	$("#current-score-counter").text(userTotalScore);
	gamePlay();
  console.log(this);

});


$('#crystal4').on('click', function(){
  console.log(userTotalScore);
  console.log(crystalchoice);
	userTotalScore += crystal4;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});
