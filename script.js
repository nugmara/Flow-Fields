const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas settings
console.log(ctx)
ctx.fillStyle = "white"
ctx.strokeStyle  = "white"
ctx.lineWidth = "100"
ctx.lineCap = "round"


ctx.beginPath()
ctx.moveTo(100, 200);
ctx.lineTo(400, 500);
ctx.stroke()