function framework(size, x, y) {
	this.size = size
	this.postFraction = 5
	this.postSize = this.size/this.postFraction 
	this.x = x
	this.y = y

	this.centered = true
	this._color = color(255, 255, 255)
	this.strokeWidth = 1
}

framework.prototype.setColor = function(_color) {
	this._color = _color
}

framework.prototype.fixCenterPosition = function() {
	translate(-this.size/2, -this.size/2)
}


framework.prototype.draw = function() {	
	this.drawFrame()
}

framework.prototype.grow = function(n) {	
	this.size += n 
	this.size = Math.pow(this.size, 1.003);
	this.postSize = this.size/this.postFraction
	this.strokeWidth += n*0.01
}

framework.prototype.getSize = function() {
	return this.size
}

framework.prototype.drawFrame = function() {
	push()
	stroke(this._color)
	strokeWeight(this.strokeWidth)
	strokeCap(PROJECT)

		if (this.centered) this.fixCenterPosition()

	//right side
	line(this.x, this.y, this.x+this.postSize, this.y)
	line(this.x, this.y+this.size, this.x+this.postSize, this.y+this.size)
	line(this.x, this.y, this.x, this.y+this.size)
	
	//left side
	let space = (this.postFraction-1)*this.postSize
	line(this.x+space, this.y, this.x+this.postSize+space, this.y)
	line(this.x+space, this.y+this.size, this.x+this.postSize+space, this.y+this.size)
	line(this.x+space+this.postSize, this.y, this.x+space+this.postSize, this.y+this.size)

	pop()
}