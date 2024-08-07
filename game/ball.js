import { Obj } from './object.js'

class Ball extends Obj {
	constructor(x, y, radius, speed = 3) {
		super(x, y);
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = speed;
		this.dx = -speed;
		this.dy = -speed;
	}
	get dx() { return this._dx; }
	get dy() { return this._dy; }
	set dx(dx) { this._dx = dx; }
	set dy(dy) { this._dy = dy; }

	draw = (ctx) => {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
	move = (width, height, paddleL, paddleR) => {
		this.x += this.dx;
		this.y += this.dy;
		// 위아래 벽 튕기기
		if (this.y + this.dy < this.radius || this.y + this.dy > height - this.radius)
			this.dy *= -1;
		if (this.checkBallOut(width)) {
			// 좌우 패들 튕기기
			if (paddleL.checkCollision(this.y, 'L') || paddleR.checkCollision(this.y, 'R'))
				this.dx *= -1;
			else
				return false;
		}
		return true;
	}
	checkBallOut = (width) => {
		if (this.x - this.radius < 0 || this.x + this.radius > width)
			return true;
		return false;
	}
}

export { Ball };