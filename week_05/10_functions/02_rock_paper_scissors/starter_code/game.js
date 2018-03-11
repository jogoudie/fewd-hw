
// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
	var computerChoiceNumber = Math.random();
	if(computerChoiceNumber < 0.333){
		return "rock";
	}
	else if(computerChoiceNumber < 0.667){
		return "paper";
	}
	else{
		return "scissors";
	}
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

	if(me==opponent){
		return "tie";
	} 

	else if(me=="rock"){
		if (opponent == "paper") {

}

	}

	else if(me=="scissors"){

	}

	else if(me=="paper"){

	}


	}

	//Display the computer's choice 

	jQuery("#computerSelection").text(opponent);

};


jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

    jQuery("scissors").click(function(e){
    	e.preventDefault();

//get the computer player's choice
    	var computerPlayerChoice = computerChoice();

    	//compare the winner

    compare("scissors",computerPlayerChoice);
    }

});
