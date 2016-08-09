var sound;
 
function preload()
{
  // initialize sound
  sound = loadSound('Rooster-ringtone.mp3');
}
 
 
function setup() 
{
  createCanvas(400, 400);
  background(240,200,180);
}
 
function draw()
{
  chicken(200,200);
  
  // display instructions
  textAlign(CENTER);
  fill(100);
  noStroke();
  text("Click to play sound", width/2, height/4);
}
 
function mousePressed() 
{
  
  chicken(200,200);
  // trigger sound
  sound.play();
  
  // change background color
  background(random(255), random(255), random(255));
  chicken(width/2,width/2);
}


function chicken(x, y) {
  
  stroke(0);
  
  //Plate Outside Rim
  fill(50, 0, 100, 120);
  ellipse(x+10, y+25, 200, 100);
  
  //Plate Inside Rim
  fill(250, 80, 80, 100);
  ellipse(x+10, y+25, 150, 70);
  
  //Chicken
  fill(200, 90, 0);
  ellipse(x, y, 130, 90);
  
   //Chicken Bone
  fill(255, 255, 255);
  rect(x+50, y+12, 40, 10)
  
  //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+12, 15);
  
   //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+20, 15);
  
  //Chicken Leg
  fill(200, 90, 0);
  ellipse(x+50, y+15, 50, 40);
}