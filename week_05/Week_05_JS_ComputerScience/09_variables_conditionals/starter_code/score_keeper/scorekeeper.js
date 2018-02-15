var theScore = 0;

//function to add 5
function addfive(){
	theScore = 5 + theScore;
	jQuery("#result").text(theScore);

}


//function to add 10 
function add10 (){
	theScore += 10;
	jQuery("#result").text(theScore);

}




//function to subtract 1
function subTractOne (){
		theScore = theScore - 1;
		jQuery("#result").text(theScore);

	}



//function to reset 
function resetToZero (){
	  theScore = 0;
	  jQuery("#result").text(theScore);

	}


jQuery(document).ready(function(){

	jQuery("#add5").click(function(){
		addfive();
	});

	jQuery("#add10").click(function(){
		add10();
	});

	jQuery("#sub1").click(function(){
		subTractOne();
	});

	jQuery("#zero").click(function(){
		resetToZero();
	});

	


});

