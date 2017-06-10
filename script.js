var canvas;
var canvasContext;

window.onload = function() {
	console.log("Hey");
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width, canvas.height);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(100,200, 50, 100);
	canvasContext.fillStyle = 'green';
	canvasContext.fillRect(230,230, 10, 10);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(300,200, 200, 200);

}
