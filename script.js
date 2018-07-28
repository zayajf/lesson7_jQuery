/*

Program Name: Recipe Display Application
Author: Jonathon Zayas
Date: 7/27/18
Filename: script.js

*/

/* global $ */

//displays the next element after the current target
function display (event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display

//attach event listener to h3 elements to invoke display funtion when clicked 
$("h3").click(display)

