import { Obj } from './object.js';

class Paddle extends Obj {
	constructor(x, y, width, height, speed = 5) {
		super(x, y);
		this.width = width;
		this.height = height;
		this.speed = speed;
	}
	draw = (ctx) => {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
	moveUp = () => {
		this.y = Math.max(this.y - this.speed, 0);
	}
	moveDown = (height) => {
		this.y = Math.min(this.y + this.speed, height - this.height);
	}
}

export { Paddle };