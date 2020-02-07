let coinFlip = Math.round(Math.random());
let choice = prompt("Heads or tails?");

if (coinFlip < 1) {
    var headTailResult = "heads";
} else {
    var headTailResult = "tails";
}

if (headTailResult == choice) {
    if (headTailResult == "heads") {
    alert("The flip was heads and you chose heads...you win!");
    } else {
    alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    if (headTailResult == "tails") {
    alert("The flip was tails but you chose heads...you lose!");
    } else {
    alert("The flip was tails and you chose tails...you win!");
    }
}



