/*
	WEB 303 Assignment 1 - jQuery
	Arya Patel - 0823713
*/

$(document).ready(function() {
    /* Attach an event handler to both input fields */
    $("#yearly-salary, #percent").on("keyup", function() {
        /* Get the values from the input fields */
        var getSalary = parseFloat($('#yearly-salary').val()); // Convert to a float
        var getPercent = parseFloat($('#percent').val()); // Convert to a float
        
        /* Check if the input is a valid number */
        if (isNaN(getSalary) || isNaN(getPercent)) {
            $('#amount').text("Invalid input"); // Display an error message
        } else {
            /* Calculate the amount and format it with a dollar sign and two decimal places */
            var resultVal = "$" + (getSalary * getPercent / 100).toFixed(2);
            
            /* Display the calculated amount in the #amount element */
            $('#amount').text(resultVal);
        }
    });
});
