window.onload = init();
var height;
var width;
var canvas;
var ctx;
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
  createIsoGrid(20);
}
function createIsoGrid(tiles){
  ctx.beginPath();
  for(var i = 1; i < (tiles+1); i++){
    ctx.moveTo(width,height-(i*(height/tiles))+(height/(2*tiles)));
    ctx.lineTo(0+(i*(width/(tiles))) - (width/(tiles*2)),0);
    ctx.lineTo(0 ,(i*(height/tiles))-(height/(2*tiles)));
    ctx.lineTo(width - (i*(width/(tiles))) + (width/(tiles*2)),height);
    ctx.lineTo(width,height-(i*(height/tiles))+(height/(2*tiles)));
  }
  ctx.stroke();
}
function paintTile(color, xCord, yCord, tiles){
  if((xCord%1) == (yCord%1)){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(xCord*(width/tiles),yCord*(height/tiles)-(height/(tiles*2)));
    ctx.lineTo(xCord*(width/tiles)-(width/(2*tiles)),(yCord-1)*(height/tiles));
    ctx.lineTo((xCord-1)*(width/tiles),yCord*(height/tiles)-(height/(tiles*2)));
    ctx.lineTo(xCord*(width/tiles)-(width/(2*tiles)),yCord*(height/tiles));
    ctx.lineTo(xCord*(width/tiles),yCord*(height/tiles)-(height/(tiles*2)));
    ctx.fill();
  }
}
function paintNewTile(){
  paintTile(document.getElementById("color").value,document.getElementById("xInput").value/2,document.getElementById("yInput").value/2,20)
}
