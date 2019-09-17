/*Step 1: Change this Walker to store a single position property, a PVector, that behaves the same. You will need to change the constructor and the methods, since they all use the position in some way.*/

/* Original Code before Step 1:
  var Walker = function(){
      this.x = width/2;
      this.y = height/2;
  };*/

// Step 1  
var Walker = function() {
    this.pos = new PVector(width/2,height/2);
}; 

/*Original Code before Step 1:
  Walker.prototype.display = function() {
      strokeWeight(3);
      stroke(0, 0, 0);
      point(this.x, this.y);
  };*/

//Step 1 continued
Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.pos.x, this.pos.y);
};

/* Original Code before Step 1:
   Walker.prototype.walk = function() {
      var xStepSize = random (-5, 5);
      var yStepSize = random (-5, 5);
   
      this.x += xStepSize;
      this.y += yStepSize;
   };*/

/*Step 1 final part   
  Walker.prototype.walk = function() {
    var xStepSize = random(-5, 5);
    var yStepSize = random(-5, 5);
    this.pos.x += xStepSize;
    this.pos.y += yStepSize;
};*/
/*Step 2: The Walker calculates a step size in each direction and adds that to the x and y of the position. Use a PVector to store the step size instead, and use the add method of the position vector to come up with the new position.*/

//Walker Walk Function after Step 2
Walker.prototype.walk = function() {
  var velocity = new PVector(random(-5,5), random(-5,5));
  this.pos.add(velocity);
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
