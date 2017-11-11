let frameManager

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameManager = new frameworkManager(5, 2, windowWidth/2, windowHeight/2)
}

function draw() {
	background(37, 42, 48)
	frameManager.draw()
	frameManager.setCenterTo(mouseX, mouseY)
}