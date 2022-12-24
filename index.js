// To run the project just copy the full path of dicee.html and paste it in the browser
// G:\Angela yu web dev\My Projects\Dicee Challenge\dicee.html

// This the a simple game that is "Browser Based" with no backend and is just pure javascript that is 
// used to manipulate DOM objects based on condition

// When user refreshes the browser a random number is generated for both player 1 and player 2 and
// correspondingly the dice face image is put below player's banner and if else is used to decide 
// who Won , and correspondingly text is shown in h1

var randomNumberP1 = Math.floor((Math.random()*6))+1;
var randomNumberP2 = Math.floor((Math.random()*6))+1;

document.querySelector(".img1").src = "images/dice"+randomNumberP1+".png";
document.querySelector(".img2").src = "images/dice"+randomNumberP2+".png";

if(randomNumberP1>randomNumberP2)
{
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}

else if(randomNumberP1<randomNumberP2)
{
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}

else
{
  document.querySelector("h1").textContent = "Draw!";
}
