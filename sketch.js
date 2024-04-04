function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  let cols = 7; 
  let rows = ceil(28 / cols); 
  
  let boxWidth = width / cols;
  let boxHeight = height / rows;
  
  let index = 0; 
  
  
  for(let j = 0; j < rows; j++) {
    for(let i = 0; i < cols; i++) {
      if(index >= 28) break; 
      let x = i * boxWidth;
      let y = j * boxHeight;
      
      let col = color(random(255), random(255), random(255)); 
      
      fill(col);
      stroke(0);
      rect(x, y, boxWidth, boxHeight);
      
      
      let num = int(random(100));
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(num, x + boxWidth/2, y + boxHeight/2);
      
      index++; 
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
