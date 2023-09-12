/*
	WEB 303 Assignment 1 - jQuery
	Arya Patel - 0823713
*/

$(document).ready(function() {
    
    $("#yearly-salary, #percent").on("keyup", function() {
        /* Get the values from the input fields */
        var getSalary = parseFloat($('#yearly-salary').val());
        var getPercent = parseFloat($('#percent').val());
        
        /* Check if the input is a valid number */
        if (isNaN(getSalary) || isNaN(getPercent)) {
            $('#amount').text("Enter Amount"); // Display an error message
        } else {
            var resultVal = "$" + (getSalary * getPercent / 100).toFixed(2);
            
           
            $('#amount').text(resultVal);
        }
    });
});
