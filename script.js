var canvas;
var canvasContext;
var ballX = 10;
var ballY = 10;

window.onload = function() {
	console.log("Hey");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	
	setInterval( function() {
		moveEverything();
		drawEverthing();
	}, 1000/framesPerSecond);

}


function moveEverything() {
	if (ballX < 790) {
	ballX += 5;
	}
}

function drawEverthing() {
	// console.log("ballX value: "+ballX);


	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width, canvas.height);
	
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect( ballX, ballY, 10, 10);
	
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0,210, 10, 100);
}
