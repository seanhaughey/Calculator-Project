// document ready function
$(function() {
	// parseInt($("inputNum").val()); ---> gets the value from the input box
	//when user clicks on a ( '+', '-', '*', '/' ) button the number should be saved
	//then the number in the input box needs to clear out 
	//the input after the box clears needs to be saved in another variable 
	var previousCalc = 0 ; 

	$("#add").on("click",function(){
		//input 1 + input 2
		var num1 = parseFloat($("#inputNum1").val());
		var num2 = parseFloat($("#inputNum2").val());
		var sum = num1 + num2;
		$("#result").html(sum);
		previousCalc = ( num1 + " + " + num2 + " = " + sum);
		$("#stringOutput").append("<li>"+previousCalc+"</li>");
	});	

	$("#subtract").on("click",function(){
		//input 1 + input 2
		var num1 = parseFloat($("#inputNum1").val());
		var num2 = parseFloat($("#inputNum2").val());
		var subtraction = num1 - num2;
		$("#result").html(subtraction);
		previousCalc = ( num1 + " - " + num2 + " = " + subtraction);
		$("#stringOutput").append("<li>"+previousCalc+"</li>");
	})

	$("#multiply").on("click",function(){
		//input 1 + input 2
		var num1 = parseFloat($("#inputNum1").val());
		var num2 = parseFloat($("#inputNum2").val());
		var multiply = num1 * num2;
		$("#result").html(multiply);
		previousCalc = ( num1 + " x " + num2 + " = " + multiply);
		$("#stringOutput").append("<li>"+previousCalc+"</li>");
	})

	$("#divide").on("click",function(){
		//input 1 + input 2
		var num1 = parseFloat($("#inputNum1").val());
		var num2 = parseFloat($("#inputNum2").val());
		var division = num1/num2;
		$("#result").html(multiply);
		previousCalc = ( num1 + " / " + num2 + " = " + division);
		$("#stringOutput").append("<li>"+previousCalc+"</li>");
	})


});
