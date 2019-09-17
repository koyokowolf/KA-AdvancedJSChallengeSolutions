var  v = new PVector(50, 75);

var drawSaber = function() {
    background(0);
    // glow
    strokeWeight(8);
    stroke(0, 60, 255, 150);
    line(0, 400, v.x, 400-v.y);
    // blade
    stroke(224, 232, 255);
    strokeWeight(4);
    line(0, 400, v.x, 400-v.y);
};

/* Step 1: Use the keyPressed function to make it double in size every time the user presses the up arrow, by multiplying the vector.*/

//Step 1
keyPressed = function() {
    if (keyCode === UP) {
         v.mult(2);
    }

  /*Step 2: Make it so that every time you press the down arrow, the light saber shrinks in half, by dividing the vector.*/

  //Step 2
   else if(keyCode === DOWN) {
       v.div(2);
    }
    //Step 1
    drawSaber();
};

drawSaber();
