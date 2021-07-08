var canvas;
var music;




function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(110,590,185,10);block1.shapeColor = rgb(0,0,255)
    block2 = createSprite(305,590,185,10);block2.shapeColor = rgb(255,128,0)
    block3 = createSprite(500,590,185,10);block3.shapeColor = rgb(153,0,76)
    block4 = createSprite(695,590,185,10);block4.shapeColor = rgb(0,100,0)
    edge1 = createSprite(1,1,1,1200)
    edge2 = createSprite(1,1,1600,1)
    edge3 = createSprite(799,1,1,1200)
    //create box sprite and give velocity
    
    ball = createSprite(random(20,750),80,30,30);ball.velocityY=5;ball.velocityX=-5;ball.shapeColor = rgb(255,255,255)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites()

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
         ball.shapeColor = rgb(0,0,255);
     }
 
     if(block2.isTouching(ball)){
         ball.shapeColor = rgb(255,128,0);
         ball.velocityX = 0;
         ball.velocityY = 0;
     }
 
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
         ball.shapeColor = rgb(153,0,76);
     }
 
     if(block4.isTouching(ball) && ball.bounceOff(block4)){
         ball.shapeColor = rgb(0,100,0);
     }
     if(ball.bounceOff(edge1)
     ||ball.bounceOff(edge2)
     ||ball.bounceOff(edge3)){}
}
