var theDemoArray = ["baku","moghadishu","ulanbaatar","sakamoto"];
var theDemoCitiesImages = ['baku.jpg','mogh.jpg','ub.jpg','sakamoto.jpg'];



jQuery(document).on('ready',function(){

    jQuery('#theSelectorFormElement').on('change',function(){
        console.log("I ran");

        var mySelection = jQuery("#theSelectorFormElement").val();

        for(i=0;i<theDemoArray.length;i++){
            if(mySelection == theDemoArray[i]){
                console.log("MATCHED " + theDemoCitiesImages[i]);
            }
        }

    });

});