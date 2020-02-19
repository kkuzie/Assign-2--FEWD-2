// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
// Sample Output:
// "0 is even" 
// "1 is odd" 
// "2 is even"

let i;

for (i = 0; i <= 15; i++) {
    if (i === 0) {
        window.document.write(i + " is even" + "<br>");
    }
    else if (i % 2 === 0) {
        window.document.write(i + " is even" + "<br>");
    } else {
        window.document.write(i + " is odd" + "<br>");
    }
}

