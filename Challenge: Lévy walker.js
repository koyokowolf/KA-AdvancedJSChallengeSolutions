var monteCarlo = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);

       /*Step 2: Change the monteCarlo function so that the probability is higher for lower numbers instead. Hint: 1 character is all you need to change.*/
 
        if (r2 > probability) {//r2 has to be less than probability to take less steps
            return r1;
        }
    }
};
 
var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};
 
Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};
 
// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
 
/* Step 1: Change the steps of this walker to follow a probability distribution - smaller steps are more likely - by using the values from the monteCarlo function instead.*/
 
    var stepSize = monteCarlo()*10; // Step 1
 
    var xStepSize = random(-stepSize, stepSize);
    var yStepSize = random(-stepSize, stepSize);
 
    this.x += xStepSize;
    this.y += yStepSize;
};
 
var w = new Walker();
 
var draw = function() {
    w.walk();
    w.display();
};
