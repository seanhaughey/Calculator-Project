// document ready function
function(){
	// parseInt($("inputNum").val()); ---> gets the value from the input box
	


	//when user clicks on a ( '+', '-', '*', '/' ) button the number should be saved
	//then the number in the input box needs to clear out 
	//the input after the box clears needs to be saved in another variable 
	
	$("#add").on("click",function(){
		//input 1 + input 2
		var num1 = parseInt($("#inputNum1").val());
		var num2 = parseInt($("#inputNum2").val());
		var sum = num1 + num2;
		console.log(num1+num2);
	}	
}
