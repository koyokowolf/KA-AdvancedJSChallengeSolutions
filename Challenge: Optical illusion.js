var diameter = 600;
var decreaseAmt = 0.02;
var scaleF = 1.0;

/* Step 1: Finish writing the functions for drawWhiteCircle and drawBlackCircle. The function drawWhiteCircle should draw a white circle, and the function drawBlackCircle should draw a black circle. The circles drawn by the functions should have their centers at (0,0). Both of the functions should use the input parameter named diameter to control the diameter of the circles that are drawn.*/

var drawWhiteCircle = function(diameter) {
    fill(255, 255, 255);
    ellipse(0, 0, diameter, diameter);
};

var drawBlackCircle = function(diameter) {
    fill(0, 0, 0);
    ellipse(0, 0, diameter, diameter);
};

background(255, 255, 255);

/* Step 2: Now, you will use the functions you just wrote to create an illusion with overlapping circles. For this challenge, use a while loop. Each iteration of the while loop should draw a black circle at the center of the screen, followed by a smaller white circle inside of it. To make the circles shrink in size, scale each circle by the factor scaleF using the scale command, and decrement scaleF by decreasesAmt after each circle is drawn. Use the variable diameter for the unscaled size of the black and white circles.*/

while (scaleF > 0.0) {
    //black circles
    pushMatrix();
    translate(width/2, height/2);
    scale(scaleF);
    scaleF -= decreaseAmt;
    drawBlackCircle(diameter);
    popMatrix();

    //white circles
    pushMatrix();
    translate(width/2, height/2);
    scale(scaleF);
    scaleF -= decreaseAmt;
    drawWhiteCircle(diameter);
    popMatrix();
}
