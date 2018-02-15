jQuery(document).ready(function)(){


//when it loads hide all the answers
jQuery("#answer1, #answer2, #answer3").hide();



//Functions to toggle the answers


function toggle1(){
	jQuery ("#answer2").slideToggle();
}

function toggle2(){
	jQuery ("#answer3").slideToggle();
}

function toggle3(){
	jQuery ("#answer1").slideToggle();
}


//bind functions to clicks 
jQuery ("#question2").click(toggle1);

jQuery ("#question3").click(toggle2);

jQuery ("#question1").click(toggle3);

});