let firstNum = prompt("Enter a number.");
let secondNum = prompt("Enter another number.");

if (firstNum > secondNum) { 
    window.document.write(firstNum); 

}else if (secondNum > firstNum) { 
    window.document.write(secondNum);

} else if (firstNum == secondNum) {
    window.document.write("The numbers are equal, try again.");
}
