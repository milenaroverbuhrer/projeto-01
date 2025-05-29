   function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255,100,0);
  fill(255,192,203)
  circle(400, 400, 650);
  fill(255,255,255);
  circle(255, 255, 100);
  circle(550, 255, 100);
  fill(0,206,209);
  circle(550, 255, 55);
  circle(255, 255, 55);
  fill(0,0,0);
  circle(550, 255, 25);
  circle(255, 255, 25);
  fill(219,112,147);
  triangle(350, 400, 450, 400, 400, 300);
  fill(255,255,255)
  line(220, 200, 300, 200, 255, 255)
  line(500, 200, 580, 200, 255, 255)
  line(250, 540, 540, 540)
  fill(200,200,200)
  circle(mouseX, mouseY, 50);
  
}
