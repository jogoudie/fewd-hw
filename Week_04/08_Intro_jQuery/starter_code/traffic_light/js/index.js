//Implement the red light using jQuery. Don't forget to add the script tags.

//red light
function illuminateRed(){
	jQuery(".bulb").css("background","black");
	jQuery("#stopLight").css("background","red");
}

     //clear all the lights
     //light up red 



//yellow light 

function illuminateYellow(){
	jQuery(".bulb").css("background","black");
	jQuery("#slowLight").css("background","yellow");
}




//green light 

function illuminateGreen(){
	jQuery(".bulb").css("background","black");
	jQuery("#goLight").css("background","green");
}



jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);


