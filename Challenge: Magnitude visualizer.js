/* Step 1: Use the text command to display the magnitude of that vector at the end of it.*/

mouseMoved = function() {
    background(255, 255, 255);
 
    var mouse = new PVector(mouseX, mouseY);
 
    fill(255, 0, 0);// Step 1
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
 
    var n = mouse.mag();//Step 1
    text(n, mouse.x,mouse.y);//Step 1
 
/* Step 2: Change the background color based on the magnitude. If the magnitude is 0, it should be black, and if it's the maximum possible magnitude, it should be white. You'll need to use some additional math functhions to come up with a good background value.*/
 
    var d = dist(0,0,width,height);// Step 2
    var m = map(n,0,d,0,255);// Step 2
    background (m, m, m);// Step 2
};
