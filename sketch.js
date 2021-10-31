var canvas;
var music;
var surface1, surface2, surface3, surface4;
var boz;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,585, 200, 30)
    
    surface2 = createSprite(300, 585, 200, 30)
    surface3 = createSprite(500, 585, 200, 30)
    surface4 = createSprite(700, 585, 200, 30)
    //create box sprite and give velocity
    boz = createSprite(100, 300, 50, 50)
    boz.velocityX = 4;
    boz.velocityY = 5.5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    boz.bounceOff(edges);
    surface1.shapeColor="blue";
    surface2.shapeColor="orange";
    surface3.shapeColor="red";
    surface4.shapeColor="green"
    //add condition to check if box touching surface and make it box
    if(boz.isTouching(surface1)) {
        boz.shapeColor="blue";
    }    
    if(boz.isTouching(surface2)) {
        boz.shapeColor="orange";
    }    
    if(boz.isTouching(surface3)) {
        boz.shapeColor="red";
    }   
    if(boz.isTouching(surface4)) {
        boz.shapeColor="green";
    }
    drawSprites();
}
