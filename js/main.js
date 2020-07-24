const results = document.getElementById("results");


function computerPlay(){
    return "rock";
}

function playerSelection(){
    return "rock";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerPlay)
        console.log("Tie");
}


playRound();