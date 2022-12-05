var c = document.getElementById("g_c");
var ctx = c.getContext("2d");
var center=[0,0];
var canvas={
  pen:(a,b,c)=>{ctx.strokeStyle = c;ctx.moveTo(a[0]+center[0],a[1]+center[1]);ctx.lineTo(b[0]+center[0],b[1]+center[1]);ctx.stroke()},
  setPxColor:(a,c)=>{ctx.fillStyle = c;ctx.fillRect(a[0]+center[0],1,1);},
  fill:(a,b,c)=>{ctx.fillStyle = c;ctx.fillRect(a[0]+center[0],a[1]+center[1],b[0]-a[0],b[1]-a[1]);}
}
canvas.fill([0,0],[100,100],"#F00000");
canvas.fill([100,100],[200,200],"#00F000");
canvas.fill([0,300],[100,200],"#0000F0");
canvas.pen([0,0],[150,150],"#FFFFFF");
canvas.pen([0,300],[150,150],"#FFFFFF");
center=[200,0];
canvas.fill([0,0],[100,100],"#F00000");
canvas.fill([100,100],[200,200],"#00F000");
canvas.fill([0,300],[100,200],"#0000F0");
canvas.pen([0,0],[150,150],"#FFFFFF");
canvas.pen([0,300],[150,150],"#FFFFFF");
