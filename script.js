var canvas;
var canvasContext;
var ballX = 10;
var ballY = 10;

window.onload = function() {
	console.log("Hey");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	setInterval(drawEverthing, 100);

}

function drawEverthing() {
	console.log("ballX value: "+ballX);
	if (ballX < 800) {
	ballX += 5;
	}

	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width, canvas.height);
	
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect( ballX, ballY, 10, 10);
	
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(300,200, 200, 200);
}
