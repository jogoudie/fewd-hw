var lights = "on";

function switchLights(e) {
	e.preventDefault();
//if light are on 
if(lights == "on"){
	//turn them off
	jQuery("body").addClass("dark");
	lights = "off";
}else{

//else
	//turn on
		jQuery("body").removeClass("dark");
		lights = "on";
  }
}


jQuery('#light_switch').click(switchLights);
