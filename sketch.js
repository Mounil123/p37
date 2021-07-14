var robot,robotimg; 
var ground,inGround;
var groundImg,robotRun;
var zombies;

function preload() {
   robotimg = loadAnimation('sprites/robotfree/png/idle (1).png','sprites/robotfree/png/idle (2).png','sprites/robotfree/png/idle (3).png','sprites/robotfree/png/idle (4).png'
   ,'sprites/robotfree/png/idle (5).png','sprites/robotfree/png/idle (6).png','sprites/robotfree/png/idle (7).png'
   ,'sprites/robotfree/png/idle (8).png','sprites/robotfree/png/idle (9).png','sprites/robotfree/png/idle (10).png');
    groundImg = loadImage('sprites/tile1.jpg')
    robotRun = loadAnimation('sprites/robotfree/png/Run (1).png','sprites/robotfree/png/Run (2).png'
    ,'sprites/robotfree/png/Run (3).png','sprites/robotfree/png/Run (4).png','sprites/robotfree/png/Run (5).png',
    'sprites/robotfree/png/Run (6).png','sprites/robotfree/png/Run (7).png','sprites/robotfree/png/Run (8).png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    robot = createSprite(100,100,50,50)
    robot.addAnimation('idle',robotimg);
    robot.addAnimation('run',robotRun)
    robot.scale = 0.3
    ground = createSprite(600,400,2200,20)
    ground.x = ground.width /2;
    ground.addImage('ground',groundImg)
    ground.scale = 0.5

    inGround = createSprite(600,390,1200,20)
    inGround.visible = false
}

function draw(){
    background(0);
    
    if(keyDown("space") && robot.y >=296 ) {
        robot.velocityY = -12;
      }
      robot.velocityY = robot.velocityY + 0.8
      robot.collide(inGround)
      
      if(keyDown("right")){
          ground.velocityX = -4
          robot.changeAnimation('run',robotRun)
          spawnZombies()
      }else{
          ground.velocityX = 0
          robot.changeAnimation('idle',robotimg);
      }

      if (ground.x < 0){
      ground.x = ground.width/2;
    }

    


   drawSprites()
}

function spawnZombies() {
    if(frameCount % 60 === 0) {
        var zombies = createSprite(600,165,10,40);
        //obstacle.debug = true;
        zombies.velocityX = -7
    }
}



