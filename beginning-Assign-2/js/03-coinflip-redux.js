// In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps  outlined below:
// 1.    Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
// 2.    Create a for loop that loops 10 times.
// 3.    Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

// 4.    Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, 
// write out “Tails” into the console window. 

let coinFlip;

for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 1) {
        window.document.write("heads" + "<br>");
    } else {
        window.document.write("tails" + "<br>");
    }
}
