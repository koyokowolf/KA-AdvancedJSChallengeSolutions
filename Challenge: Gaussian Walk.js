/*Step 1: Start by storing a new Random() instance in the generator variable at the top of the program.*/
 
var generator = new Random(1); //Step 1
 
/* Step 2: Now use the generator to generate step sizes based on a normal distribution, with a mean of 0 and standard deviation of 2. Set the standardDeviation and mean variables at the top to the appropriate values and use them when calculating the step size in the walk method.*/
 
var standardDeviation = 2; //Step 2
var mean = 0; //Step 2
 
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
    var xStepSize = generator.nextGaussian() * standardDeviation + mean;// Step 2
    var yStepSize = generator.nextGaussian() * standardDeviation + mean;// Step 2
 
    this.x += xStepSize;
    this.y += yStepSize;
};
 
var w = new Walker();
 
var draw = function() {
    w.walk();
    w.display();
};
