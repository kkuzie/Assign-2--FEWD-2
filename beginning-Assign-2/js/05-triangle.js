// Looping a Triangle (5 points)
// Write a loop that displays the following triangle within a console window:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let tri;
let angle;
for (tri = 1; tri <= 7; tri++) {
    for ( angle = 1; angle <=tri; angle++ ){
document.write( "#" );
}
document.write( "<br>" );
}
