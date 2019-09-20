noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);

/* Step 1: Use a translation to move the upper-left corner of the rectangle to the center of the screen.*/

/* Step 2: Now, generate a wheel by using 12 rectangles, with each rectangle rotated 30 degrees more than the previous rectangle. To do this, you will use two new components: a for loop and a rotation.*/

/* Step 3: Finally, let's turn the wheel into a color wheel by using a different color for each rectangle. Make the change in colors, around the color wheel, smooth by incrementing or decrementing each of the r, g, and b values by a constant amount for each rectangle.*/

for ( var i = 0; i < 12; i += 1){ //Step 2
    fill(r,g,b); // Step 3
    r -= 21; // Step 3
    g += 10; // Step 3
    b += 21; // Step 3
    pushMatrix(); //Step 1
    translate (200, 200); // Step 1
    rotate (i * 30); //Step 2
    rect(0, 0, 150, 15); // Step 1
    popMatrix(); // Step 1
}; // Step 2
