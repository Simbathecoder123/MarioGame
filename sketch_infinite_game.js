var mario
var opponent, opponentGroup
var obstacle, obstacleGroup
var powerup, powerupGroup
var PLAY=1
var END=0
var gameState="play"
var lvl1bg,lvl1bgImg,mario,mariostandingimg
var invisibleGround

function preload(){

lvl1bgImg = loadImage("assets/bg1.jpg")  
mariostandingimg= loadImage("assets/Mario_1.png")

}
function setup(){
  //   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // if (isMobile) {
  //   canW = displayWidth
  //   canH = displayHeight
  //   createCanvas(displayWidth , displayHeight)
  // }
  // else {
  //   canW = windowWidth
  //   canH = windowHeight
  //   createCanvas(windowWidth, windowHeight)

  // }

  createCanvas(windowWidth,windowHeight)




  // create Background


  lvl1bg = createSprite(width/2,height/2, width*5, height)
  lvl1bg.addImage(lvl1bgImg)

  invisibleGround = createSprite(0,height-100,width*5,10)
  // invisibleGround.visible = false
  
  mario = createSprite(100,300,10,10)
  mario.addImage("standImg",mariostandingimg)
  mario.scale = 0.5


  
}

function draw(){
if (gameState=="play"){
  camera.x = mario.x+220
  mario.collide(invisibleGround)
  

  if(keyDown("RIGHT_ARROW")){
    mario.x +=5
  }

  if(keyDown("LEFT_ARROW")){
    mario.x -=5
  }
  if(keyDown("UP_ARROW")){
    mario.y -=5
  }
  if(keyDown("DOWN_ARROW")){
    mario.y +=5
  }

}


    



drawSprites()

}



function windowResized() {

    resizeCanvas(windowWidth, windowHeight)
  }


  //homework: remove all the backgrounds for images and add in a new background. 
  // Make movement
  //add enemies