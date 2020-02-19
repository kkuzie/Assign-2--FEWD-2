// There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. The code resembled the image outlined below.  
// Your job in this part of the assignment is to validate those entries. 
// Within investment, the number should be numeric. 
// Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 
// For years, the number should be numeric and between 1 and 30.

let futureValue = 0, investment = 0, rate = 0, years = 0, i;
// let doover = true;


investment = parseFloat(window.prompt("enter investment amount as xxxx.xx"));
// validate investment with while loop
while(isNaN(investment))
{
    alert("enter a number idiot");
    investment = parseFloat(window.prompt("enter investment amount as xxxx.xx"));
}

rate = parseFloat(window.prompt("enter interest rate as xx.x"));
// validate rate with while loop
while(isNaN(rate)) 
{
    alert("enter a number idiot");
    rate = parseFloat(window.prompt("enter interest rate as xx.x"));
}
while(rate > 6)
{
    alert("number no more than 6%");
    rate = parseFloat(window.prompt("enter interest rate as xx.x"));
}

years = parseInt(window.prompt("enter number of years"));
// validate years with while loop
while(isNaN(years)) 
{
    alert("enter a number idiot");
    years = parseInt(window.prompt("enter number of years"));
}
while(years > 30)
{
    alert("enter a number of years less than 30");
    years = parseInt(window.prompt("enter number of years"));
}

futureValue = investment;
for (i = 1; i <= years; i++) 
{   
    futureValue = futureValue + (futureValue *  rate / 100);
}

window.document.write("investment amount: $" + investment + "<br>");
window.document.write("interest rate: " + rate + "%<br>");
window.document.write("years: " + years + "<br>");
window.document.write("Future value: $" + futureValue.toFixed(2));