fill(0, 0, 0);
textSize(20);
textAlign(CENTER);

//images of Leafers
var seed= getImage("avatars/leafers-seed");
var seedling= getImage("avatars/leafers-seedling");
var sapling= getImage("avatars/leafers-sapling");
var tree= getImage("avatars/leafers-tree");
var ultimate = getImage("avatars/leafers-ultimate");

var currentScene;

var drawScene1 = function(){
    currentScene = 1;
    background(200, 175, 175);
    image(seed, 50,200);
    text("Leafers started out as a seed",200,50);
};

/* Step 2(Beginning): Add the second, third and fourth scenes to fill in the rest of the story. Each scene should:- Update the scene index, currentScene, to the scene number. - Draw a unique background. - Display the image of Leafers. - Have text describing the scene. 
In the second scene Leafers should be a seedling, in the third scene Leafers should be a sapling, and in the fourth scene Leafers should be a tree. Don't worry about adding logic to mouseClicked to display these scenes in this step. You will do that next step.*/

var drawScene2 = function(){
    currentScene = 2;
    background(200, 175, 180);
    image(seedling, 100, 200);
    text("Leafers grew to be a seedling", 200, 50);
};

var drawScene3 = function(){
    currentScene = 3;
    background(173, 66, 87);
    image(sapling, 150, 200);
    text("Leafers contiued growing to be a sapling", 200, 50);
};

var drawScene4 = function(){
    currentScene = 4;
    background(70, 152, 214);
    image(tree, 200, 200);
    text("Leafers then became a tree", 200, 50);
};

/*Step 2(End): End of step 2*/

var drawScene5 = function(){
    currentScene = 5;
    background(150, 150, 175);
    image(ultimate, 200,200);
    text("In the end, Leafers became Ultimate Leafers",200,50);
};

drawScene1();

/* Step 1: Add logic to the mouseClicked function so that: - If the first scene is displayed and you click the mouse, it will display the last scene. - If the last scene is displayed and you click the mouse, it will display the first scene.*/

mouseClicked = function(){
    if (currentScene === 1) {
        drawScene5();
    }
    else if (currentScene === 5) {
         drawScene1();
    }
};

/*Step 3: Modify the program so that clicking on mouse shows the scenes in order. Clicking the mouse on the last scene should still make the first scene appear. (Add the code to the mouseClicked function abouve. I just put it here so you can see step 1 and step 3)*/

mouseClicked = function(){
    if (currentScene === 1) { drawScene2 (); }
    else if (currentScene === 2) { drawScene3 (); }
    else if (currentScene === 3) { drawScene4 (); }
    else if (currentScene === 4) { drawScene5 (); }
    else if (currentScene === 5) { drawScene1 (); }
};
