jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
    jQuery("#concatButton").on("click",function(){

    var combinestringsOne = jQuery("#concatOne").val(); 
    var combinestringsTwo = jQuery("#concatTwo").val();
    var result= combinestringsOne+combinestringsTwo;
    console.log(result)
    jQuery("#concatResult").text(combinestringsOne+combinestringsTwo)

    });

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output

    jQuery("#add20Button").on("click",function(){
    	var inputValue = parseFloat(jQuery("#add20Input").val());
    	inputValue = inputValue + 20;
	jQuery("#add20Output").text(inputValue);
    });
   

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput

    jQuery("#appendButton").on("click",function(){
    var appendtext = "<p>" + jQuery("#appendInput").val() + "</p>";

    jQuery("#appendOutput").append(appendtext);
 });

});