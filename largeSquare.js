function largeSquare (x, y, w, h) {
	this.w = w
	this.h = h
	this.x = x
	this.y = y

	this._maxW = this.w*1.3
	this._minW = this.w/1.3
	this.biggger = true

	this._color = color(20, 20, 50)
	this.increment = 1

	this.centerY = true

	this.counter = 0
	this.delay = 0
	this.isDelay = false

}

largeSquare.prototype.setDelay = function (n) {
	this.delay = n
	this.isDelay = true
}

largeSquare.prototype.centerYAxis = function(_bool) {
	this.centerY = _bool
}

largeSquare.prototype.setColor = function (_color) {
	this._color = _color
}

largeSquare.prototype.setIncrement = function(_increment) {
	this.increment = _increment
}

largeSquare.prototype.draw = function () {
	noStroke()
	fill(this._color)
	this.resize()

	if(this.centerY) {
		rect(this.calculateX(), this.calculateY(), this.w, this.h)
	} else {
		rect(this.calculateX(), this.y, this.w, this.h)
	}
}

largeSquare.prototype.calculateX = function() {
	return this.x-(this.w/2)
}

largeSquare.prototype.calculateY = function() {
	return this.y-(this.h/2)
}

largeSquare.prototype.resize = function() {

	if (this.isDelay && this.counter < this.delay) {
		this.counter ++
	} else {
		if(this.biggger) {
			if (this.w < this._maxW ) {
				this.w +=this.increment
			} else  {
				this.biggger=false
			}
		} else {
			if (this.w >= this._minW) {
				this.w -=this.increment
			} else {
				this.biggger = true
			}
		}
	}
}