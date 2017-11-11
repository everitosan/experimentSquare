function frameworkManager (velocity, interval, x, y) {
	this.x = x
	this.y = y
	this.v = velocity
	this.i = interval

	this.frames = []
	this.framesLength = 0
	
	this._count = 0
	this._color = this.rgbColor()
	this._colorCount = 0
}

frameworkManager.prototype.setCenterTo = function (x, y) {
	this.x = x
	this.y = y
}

frameworkManager.prototype.rgbColor = function () {
	return color(
		this.calcColor(this._colorCount*0.025), 
		this.calcColor(5+this._colorCount*0.065), 
		this.calcColor(this._colorCount*0.001)
	)
}

frameworkManager.prototype.calcColor = function (freq) {
	let amplitude = 127
	let level = 128
	return amplitude * Math.sin(freq) + level
}

frameworkManager.prototype.addFrame = function () {
	let frame = new framework(50, this.x, this.y)
		frame.setColor(this._color)
		this.framesLength = this.frames.unshift(frame)
		this._colorCount ++
}

frameworkManager.prototype.mayRemoveFrame = function () {
	let lastFrame = this.frames[this.framesLength-1]
	if(lastFrame.getSize() > windowWidth ) {
		this.frames.pop()
	}
}

frameworkManager.prototype.draw = function() {
	this.framesLength = this.frames.length
	
	if (this._count % this.i === 0) {
		this._color = this.rgbColor()
		this.addFrame()

	}

	for(let i = 0; i < this.framesLength; i++) {
		let frame = this.frames[i]
		frame.grow(this.v)
		frame.draw()
	}

	if(this.framesLength>0) this.mayRemoveFrame()

	this._count ++
}