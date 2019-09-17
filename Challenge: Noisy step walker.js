/* Step 1: Change this walker to use a noise-based step size instead. The best way to do this is to setup two timer properties for x and y that you increment each time, and map to a reasonable value.*/

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = 0;// Step 1
    this.ty = 10000; //Step 1
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};
 
Walker.prototype.walk = function() {
 
    var xStepSize = map(noise(this.tx), 0, 1, -5, 5);// Step 1
    var yStepSize = map(noise(this.ty), 0, 1, -5, 5); // Step 1
 
    this.x += xStepSize;
    this.y += yStepSize;
 
     this.tx += 0.01;//Step 1
     this.ty += 0.01;// Step 1
};
 
var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
