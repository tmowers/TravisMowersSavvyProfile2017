/* global $ */
var userChoice = prompt( "What's your move? Choose 'rock', 'paper', or 'scissors'." );
var computerChoice = "rock";
var rng = Math.random();
var result;

if( rng < 0.33 ){
    computerChoice = "paper";
}
else if( rng > 0.66 ){
    computerChoice = "scissors";
}
/* win lose draw*/
if( userChoice === "paper" && computerChoice === "rock" ){
    result = "You win! Play again!";
}
if( userChoice === "paper" && computerChoice === "paper" ){
    result = "You tied! Play again!";
}
if( userChoice === "paper" && computerChoice === "scissors" ){
    result = "You lose! Try again!";
}
if( userChoice === "rock" && computerChoice === "rock" ){
    result = "You tied! Play again!";
}
if( userChoice === "rock" && computerChoice === "paper" ){
    result = "You lose! Try again!";
}
if( userChoice === "rock" && computerChoice === "scissors" ){
    result = "You win! Play again!";
}
if( userChoice === "scissor" && computerChoice === "rock" ){
    result = "You lose! Try again!";
}
if( userChoice === "scissors" && computerChoice === "paper" ){
    result = "You win! Play again!";
}
if( userChoice === "scissors" && computerChoice === "scissors" ){
    result = "You tied! Play again!";
}
else{
    result = "Input 'rock', 'paper' or 'scissors'!";
}
while( roundCounter < 5 ){
    userChoice();
    roundCounter++;
}
var callingCard = "<div><b>Travis was here</b></div>";
$( "body" ).append( callingCard );
display( [ result ] );

/* $( "#output" ).result; */
