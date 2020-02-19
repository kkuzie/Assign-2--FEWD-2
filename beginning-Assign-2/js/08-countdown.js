// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 

let userNum = Number(prompt("pick a number and I will count it down."));

for (i = userNum; i >= 0; i--) {
    window.document.write(i + "<br>");
}

