var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

/*Step 1: Use the ellipse function to display our walker as a blob instead of a point.*/

/* Step 2: Make it colorful blob by filling it and removing the outline.*/

Walker.prototype.display = function() {
    fill(random(255), random(255), random(255));//Step 2
    noStroke();//Step 2
    ellipse(this.x, this.y, 5, 5);//Step 1
};

/*Step 3: Modify the walk method to take steps longer than 1 pixel, which will make the blob move faster.*/

// Randomly move right, left, down, or up

Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x += 2;// Step 3
    } else if (choice === 1) {
        //move left
        this.x -= 2;// Step 3
    } else if (choice === 2) {
        //move down
        this.y += 2; // Step 3
    } else {
        //move up
        this.y -= 2;// Step 3
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
