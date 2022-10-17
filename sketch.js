function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill() //不充滿顏色，只產生框線
  stroke(255) //框線為白色
  //1
  //ellipse(25,25,50) //座標()產生一個直徑50的圓
  //rect(25,25,50)
  //ellipse(50,50,25)
  //2
  //ellipse(25+50*1,25,50) 
  //rect(25+50*1,25,50)
  //ellipse(50+50*1,50,25)
  //3
  //ellipse(25+50*2,25,50) 
  //rect(25+50*2,25,50)
  //ellipse(50+50*2,50,25)
  //4
  //ellipse(25+50*3,25,50) 
  //rect(25+50*3,25,50)
  //ellipse(50+50*3,50,25)
  //5
  //ellipse(25+50*4,25,50) 
  //rect(25+50*4,25,50)
  //ellipse(50+50*4,50,25)
  //6
  //ellipse(25+50*5,25,50) 
  //rect(25+50*5,25,50)
  //llipse(50+50*5,50,25)
//7
  //ellipse(25+50*6,25,50) 
  //rect(25+50*6,25,50)
  //llipse(50+50*6,50,25)

// for(var i=0;i<width/50;i++) //i++就是為i+1
// {
//   ellipse(25+50*i,25,50) 
//   rect(25+50*i,25,50)
//   ellipse(50+50*i,50,25)
// }

// for(var i=0;i<width/50;i++) //i++就是為i+1
// {
//   ellipse(25+50*i,25+50*1,50) 
//   rect(25+50*i,25+50*1,50)
//   ellipse(50+50*i,50+50*1,25)
// }

// for(var i=0;i<width/50;i++) //i++就是為i+1
// {
//   ellipse(25+50*i,25+50*2,50) 
//   rect(25+50*i,25+50*2,50)
//   ellipse(50+50*i,50+50*2,25)
// }

// for(var i=0;i<width/50;i++) //i++就是為i+1
// {
//   ellipse(25+50*i,25+50*3,50) 
//   rect(25+50*i,25+50*3,50)
//   ellipse(50+50*i,50+50*3,25)
// }

for(var j=0;j<height/50;j++)
{
   for(var i=0;i<width/50;i++)
   {
   ellipse(25+50*i,25+50*j,50) 
   rect(25+50*i,25+50*j,50)
   ellipse(50+50*i,50+50*j,25)
   }
  }
}
