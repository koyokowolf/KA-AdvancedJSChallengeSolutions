var Car = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

/*Step 3: Do you notice when you decelerate for too long, the car eventually goes backwards? (Try it if you haven't!) Add a check to make sure that the car's velocity never goes below 0, to prevent that from happening.*/

Car.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    if(this.velocity.x < 0) {//Step 3
       this.velocity.set(0, 0);// Step 3
    }
    this.position.add(this.velocity);
};

Car.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    rect(this.position.x-52, this.position.y-59, 60, 60);
    rect(this.position.x-74, this.position.y-30, 100, 31);
    fill(92, 92, 92);
    ellipse(this.position.x, this.position.y, 30, 26);
    ellipse(this.position.x-50, this.position.y, 30, 30);
};

Car.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = 0;
    } else if (this.position.x < 0) {
        this.position.x = width;
    }
};

var car = new Car();

/*Step 1: The car object starts off at rest, with 0 velocity and 0 acceleration. Make it so that it accelerates when you press the right arrow, but then the acceleration goes back to 0 when you release it.*/

/* Step 2: Now that the car is going, let's add a brake to stop it. Make it so that when you press the left arrow, the car decelerates.*/

draw = function() {
    background(255, 255, 255);
    car.update();
    car.checkEdges();
    car.display();
    
    if (keyIsPressed && keyCode === RIGHT) {//Step 1
        car.acceleration.set(0.05, 0);// Step 1
    } else if (keyIsPressed && keyCode === LEFT) {//Step 2
        car.acceleration.set(-0.1, 0);//Step 2
    } else {
        car.acceleration.set(0, 0);
    }
};
