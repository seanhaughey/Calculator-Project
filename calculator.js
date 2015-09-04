// document ready function
$(function() {
	// parseInt($("inputNum").val()); ---> gets the value from the input box
	//when user clicks on a ( '+', '-', '*', '/' ) button the number should be saved
	//then the number in the input box needs to clear out 
	//the input after the box clears needs to be saved in another variable 
	var previousCalc = 0; 
	num1 = parseFloat($("#inputNum1").val());
	num2 = parseFloat($("#inputNum2").val());
	
	function clearBox(){
		$("#inputNum1").val('');
		$("#inputNum2").val('');
	};
	function add(num1,num2){
		return num1+num2;
	};
	function sub(num1,num2){
		return num1 - num2;
	};
	function mult(num1,num2){
		return num1*num2;
	};
	function div(num1,num2){
		return num1/num2;
	};

	function isNotANumber(num1,num2){
		if(isNaN(num1) || isNaN(num2)){
			alert("Enter a valid number dummy");
			return false;
		}else if(num1 === null || num2 === null){
			alert("Enter a valid number dummy");
			return false;
		}else{
			return true;
		}
	};

	$("#add").on("click",function(){
		//input 1 + input 2
		num1 = parseFloat($("#inputNum1").val());
		num2 = parseFloat($("#inputNum2").val());
		if(isNotANumber(num1,num2)){
			$("#result").html(add(num1,num2));
			$("#stringOutput").append("<li>"+( num1 + " + " + num2 + " = " + add(num1,num2)) + "</li>");
		}
		clearBox();
	});	
	$("#subtract").on("click",function(){
		//input 1 + input 2
		num1 = parseFloat($("#inputNum1").val());
		num2 = parseFloat($("#inputNum2").val());
		if(isNotANumber(num1,num2)){
			$("#result").html(sub(num1,num2));
			$("#stringOutput").append("<li>"+( num1 + " - " + num2 + " = " + sub(num1,num2))+"</li>");
		}
		clearBox();
	});
	$("#multiply").on("click",function(){
		//input 1 + input 2
		num1 = parseFloat($("#inputNum1").val());
		num2 = parseFloat($("#inputNum2").val());
		if(isNotANumber(num1,num2)){
			$("#result").html(mult(num1,num2));
			$("#stringOutput").append("<li>"+( num1 + " x " + num2 + " = " + mult(num1,num2))+"</li>");
		}
		clearBox();
	});
	$("#divide").on("click",function(){
		//input 1 + input 2
	 	num1 = parseFloat($("#inputNum1").val());
		num2 = parseFloat($("#inputNum2").val());
		if(isNotANumber(num1,num2)){
			$("#result").html(div(num1,num2));
			$("#stringOutput").append("<li>"+( num1 + " / " + num2 + " = " + div(num1,num2))+"</li>");
		}
		clearBox();
	});


});
