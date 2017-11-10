let _squarePile 

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
 	_squarePile = new largeSquarePile(14)
 	_squarePile.setWidth(330)
 	_squarePile.init()
}


function draw() {
	background(50,50,50)
	_squarePile.draw()
}



