var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	getRandomWeapon();
	checkWhoWon(botsWeapon, "paper");
}


function getRandomWeapon(){

	var randomNumber=Math.random();
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
else {
botsWeapon = "rock";
}
}


function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you took an L.");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("yourScore").innerHTML=playerScore;
	displayCompleteMessage("You got a Dub!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
