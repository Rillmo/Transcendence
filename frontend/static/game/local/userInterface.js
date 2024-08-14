
let UserInterface = class {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.ctx;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
	}
	drawHomeScreen = () => {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.width, this.height);

		this.ctx.font = `50px sans-serif`;
		this.ctx.fillStyle = 'white';
		this.ctx.textAlign = 'center';
		this.ctx.fillText('PING PONG', this.width / 2, this.height / 3, 1000);
		this.ctx.font = `30px sans-serif`;
		this.ctx.fillText('PRESS ANY BUTTON', this.width / 2, this.height * 3 / 5, 1000);
	}
	drawGameOverScreen = (opacity, winner, mousePos) => {
		opacity /= 100;
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.width, this.height);

		this.ctx.font = '50px sans-serif';
		this.ctx.fillStyle = 'white';
		this.ctx.textAlign = 'center';
		this.ctx.fillText('GAME OVER', this.width / 2, this.height / 3, 1000);
		this.ctx.font = '30px sans-serif';
		this.ctx.fillText(`player ${winner} win!`, this.width / 2, this.height * 3/ 5, 1000);
		this.ctx.fillStyle = `rgba(255, 255, 2552, ${Math.sin(opacity)})`;
		this.ctx.fillText(`PRESS 'R' TO RESTART`, this.width / 2, this.height * 4 / 5, 1000);
	}
	drawHalfLine = () => {
		this.ctx.beginPath();
		this.ctx.moveTo(this.width / 2, 10);
		this.ctx.lineTo(this.width / 2, this.height);
		this.ctx.setLineDash([20]);
		this.ctx.stroke();
	}
	drawScoreAndNickname = (playerL, playerR) => {
		this.ctx.font = `48px sans-serif`;
		this.ctx.fillText(playerL.nickname, this.width / 4 + 20, 100, 100);
		this.ctx.fillText(playerL.score, this.width / 4 + 20, 160, 100);
		this.ctx.fillText(playerR.nickname, this.width * 3 / 4 - 48, 100, 100);
		this.ctx.fillText(playerR.score, this.width * 3 / 4 - 48, 160, 100);
	}
}

export { UserInterface };