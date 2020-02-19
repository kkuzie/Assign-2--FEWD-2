// Validate Repeat Entry in Lab 5 (5 points)
// There’s a line of code in lab 5 that asks the user if they want to repeat their entry. The code resembled the image outlined below.  
// Your job in this part of the assignment is to validate that entry. If it’s anything other than “y” or “n” the prompt should simply reappear until the user enters a valid entry. 

let miles, gallons, mpg, again = "y";
let running = true;

do
{
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons"));

    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0)
    {
        mpg = miles / gallons;
        window.document.write("miles per gallon: " + parseInt(mpg) + "<br>");
    } 
    else
    {
        window.alert("One or both entries are invalid");
    }
    
    again = window.prompt("repeat entry? (y/n)");

        if(again === "y")
        {
        continue;
        }

        else if(again === "n")
        {
        running = false;
        break;
        }

    else
    {
    while(again != "y" || again != "n")
        {  

        again = window.prompt("invalid entry. repeat calculation? (y/n)");
            
        if(again === "y")
            {
                break;
            }

            else if(again === "n")
            {
                running = false;
                break;
            }
        }
    }
}
while(running); 

window.document.write("Drive safe");

