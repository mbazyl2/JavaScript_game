var canvas;
var canvasContext;

var ballX = 10;
var ballY = 10;

var ballSpeedX = 10;

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
	
	ballX += ballSpeedX;
	if (ballX > canvas.width || ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
}

function drawEverthing(){
	// drawing playground
	colorRect(0,0,canvas.width, canvas.height, 'black');
	// drawing ball
	colorRect(ballX, ballY, 10, 10, 'red');
	//drawing left paddle
	colorRect(0,210, 10, 100, 'white');

}


// function which allows to use just one command in draw everything for creating each rectangle
function colorRect(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height)
}


/*
original function for drawing elements

function drawEverthing() {
	// console.log("ballX value: "+ballX);

	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width, canvas.height);
	
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect( ballX, ballY, 10, 10);
	
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0,210, 10, 100);
}
*/