window.onload = init();
var height;
var width;
var canvas;
var ctx;
var x = 0;
var y = 0;
var tiles = 20
function init(){
  height = 900;
  width = 1800;
  canvas =  document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.width = width;
  ctx.height = height;
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeRect(0,0,width,height);
  var func = setInterval( function() { pan() },30);
}
function pan(){
  ctx.fillStyle = "white";
  ctx.fillRect(1,1,width-2,height-2)
  createIsoGrid(y%(height/tiles), x%(width/tiles), 2);
  createIsoGrid((y-10)%(height/tiles), x%(width/tiles), 2);
  x++;
  y++;
}
function createIsoGrid(yOffset, xOffset, weight){
  ctx.lineWidth = weight;
  ctx.fillStyle = "black";
  ctx.beginPath();
  for(var i = 1; i < (tiles+1); i++){
    ctx.moveTo(width,height-(i*(height/tiles))+(height/(2*tiles))+yOffset-(xOffset/2));
    ctx.lineTo(0+(i*(width/(tiles))) - (width/(tiles*2))-(yOffset*2)+(xOffset),0);
    ctx.moveTo(0+(i*(width/(tiles))) - (width/(tiles*2))+(yOffset*2)+(xOffset ),0);
    ctx.lineTo(0,(i*(height/tiles))-(height/(2*tiles))+ yOffset +(xOffset/2));
    ctx.moveTo(0,(i*(height/tiles))-(height/(2*tiles))+ yOffset -(xOffset/2));
    ctx.lineTo(width - (i*(width/(tiles))) + (width/(tiles*2))-(yOffset*2)+(xOffset),height);
    ctx.moveTo(width - (i*(width/(tiles))) + (width/(tiles*2))+(yOffset*2)+(xOffset),height);
    ctx.lineTo(width,height-(i*(height/tiles))+(height/(2*tiles))+yOffset+(xOffset/2));
  }
  ctx.stroke();
}
function paintTile(color, xCord, yCord, tiles,yOffset){
  if((xCord%1) == (yCord%1)){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(xCord*(width/tiles)-(yOffset),yCord*(height/tiles)-(height/(tiles*2))+(yOffset/2));
    ctx.lineTo(xCord*(width/tiles)-(width/(2*tiles)),(yCord-1)*(height/tiles)+yOffset);
    ctx.lineTo((xCord-1)*(width/tiles)+yOffset,yCord*(height/tiles)-(height/(tiles*2))+(yOffset/2));
    ctx.lineTo(xCord*(width/tiles)-(width/(2*tiles)),yCord*(height/tiles));
    ctx.lineTo(xCord*(width/tiles)-(yOffset),yCord*(height/tiles)-(height/(tiles*2))+(yOffset/2));
    ctx.fill();
  }
}
function paintNewTile(){
  paintTile(document.getElementById("color").value,document.getElementById("xInput").value/2,document.getElementById("yInput").value/2,tiles,0)
}
