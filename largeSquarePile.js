function largeSquarePile (n) {
	this._pile = []
	this.n = n
	this.w = 80
	this.h = 30

	this.colorUp = true
	this.count = 0
}

largeSquarePile.prototype.setWidth = function(w) {
	this.w = w
}

largeSquarePile.prototype.init = function() {
	let h_space = (window.innerHeight - (this.n * this.h)) / (this.n +1)

	for(let i = 0; i < this.n; i++) {
		let real_h_space = (i*this.h) + h_space*(i+1)
		let _square = new largeSquare(window.innerWidth/2, real_h_space, this.w, this.h)
 		_square.setColor(color(179,95,14*i))
 		_square.setIncrement(8)
 		_square.centerYAxis(false)
 		_square.setDelay(3*i)

		this._pile.push(_square)
	}
}


largeSquarePile.prototype.draw = function() {
	this.recolor()
	for(let i = 0; i < this.n; i++) {
		this._pile[i].setColor(color(179,95,15*(this.count+i)))
		this._pile[i].draw()
	}
}

largeSquarePile.prototype.recolor = function () {
	if(this.colorUp) {
		if (this.count < 8) {
			this.count += 0.125
		} else {
			this.colorUp = false
		}
	} else {
		if (this.count > 0) {
			this.count -= 0.125
		} else {
			this.colorUp = true
		}
	}
}

