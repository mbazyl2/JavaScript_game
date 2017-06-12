var canvas;
var canvasContext;

var ballX = 10;
var ballY = 10;

var ballSpeedX = 10;
var ballSpeedY = 4;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

var player1score = 0;
var player2score = 0;
const WINNING_SCORE = 3;

var showingWinScreen = false;

function calculateMousePosition(evt) { 		 //evt as event
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {	
		x:mouseX,
		y:mouseY
		// returns object
	};
}

function handleMouseClick(evt) {
	if(showingWinScreen) {
		player1score = 0;
		player2score = 0;
		showingWinScreen = false;

	}
}


window.onload = function() {
	console.log("Hey");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	
	setInterval( function() {
		moveEverything();
		drawEverthing();
	}, 1000/framesPerSecond);

	canvas.addEventListener('mousedown', handleMouseClick)

	canvas.addEventListener('mousemove', function(evt) {
		var mousePosition = calculateMousePosition(evt);
		paddle1Y = mousePosition.y-(PADDLE_HEIGHT/2);
	});

}

function ballReset() {

	if(player1score >= WINNING_SCORE || player2score >= WINNING_SCORE) {
	//	player1score = 0; // no longe neccesary
	//	player2score = 0;
		showingWinScreen = true;
	}

	ballSpeedX = -ballSpeedX;
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}

function computerMovement() {
	var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
	if(paddle2YCenter < ballY - 35) {
		paddle2Y += 5;
	} else if (paddle2YCenter > ballY + 35) {
		paddle2Y -= 5;
	}
}


function moveEverything() {
	if(showingWinScreen){
		return;
	}
	computerMovement();

	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if(ballX > canvas.width) {
		// ballSpeedX = -ballSpeedX;
		if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT){ // controlling if the ball touches the paddle
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY-(paddle2Y+PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.35; 

		} else {
			player1score++; // must be befor ballReset() as first is scoring the point and next we reset the ball
			ballReset();
		}
	} 
	if(ballX < 0){
		// ballSpeedX = -ballSpeedX;
		if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT){ // controlling if the ball touches the paddle
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY-(paddle1Y+PADDLE_HEIGHT/2);
			ballSpeedY = deltaY * 0.35; 

		} else {
			player2score++; // must be befor ballReset() as first is scoring the point and next we reset the ball
			ballReset();
		}
	}
	if(ballY > canvas.height){
		ballSpeedY = -ballSpeedY;
	}
	if(ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
}

function drawEverthing(){	
	// drawing playground
	colorRect(0,0,canvas.width, canvas.height, 'black');
	
	if(showingWinScreen){
		canvasContext.fillStyle = "white";
		
		if(player1score >= WINNING_SCORE) {
		canvasContext.fillText("Left player won", 350, 200);
		} 
		else if (player2score >= WINNING_SCORE) {
		canvasContext.fillText("Right player won", 350, 200);
		}
		
		canvasContext.fillStyle = "white";
		canvasContext.fillText("Click to continue", 350, 500);
		return;
	}

	// drawing ball
	// originaly the ball was square -> colorRect(ballX, ballY, 10, 10, 'red');
	
	// drawing left paddle
	colorRect(0,paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

	// drawing right paddle
	colorRect(canvas.width - PADDLE_THICKNESS,paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');


	// drawind the ball
	colorCircle(ballX, ballY, 10, 'white');

	//showing score on the board (player 1)
	canvasContext.fillText(player1score, 100, 100);

	//showing score on the board
	canvasContext.fillText(player2score, canvas.width-100, 100);

}
//
function colorCircle(centerX, centerY, radius, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc( centerX, centerY, radius, 0, Math.PI*2, true); // description of arguments (X-ball position, Y-ball position, radius, startof arc in radians, end of arc in radians, direction of drawing arc - clockwise or reverse)
	canvasContext.fill();
	canvasContext.closePath();

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