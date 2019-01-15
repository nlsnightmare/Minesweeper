import ctx from './context';

export default class Block {
    constructor(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.isBomb = false;
	this.numBombs = 0;
	this.isRevealed = false;
	this.isMarked = false;
    }

    setBomb(){
	this.isBomb = true;
    }

    draw(){
	if (this.isRevealed) {
	    ctx.fillStyle = this.isBomb?'red':'green';
	}
	else if(this.isMarked){
	    ctx.fillStyle = 'darkred';
	}
	else {
	    ctx.fillStyle = 'yellow';
	}
	ctx.fillRect(this.x, this.y, this.w, this.h);

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.strokeRect(this.x, this.y, this.w, this.h);


	ctx.fillStyle = 'black';
	ctx.lineWidth = 10;
	if (!this.isBomb && this.isRevealed) {
	    ctx.fillText(this.numBombs + '', this.x + this.w/2, this.y + this.h/2,this.w);
	}
    }

    check(){
	this.isRevealed = true;
	if (this.isBomb) {
	    this.draw();
	    return true;
	}
	return false;
    }

    mark(){
	this.isMarked = !this.isMarked;
	return this.isMarked;
    }
    
}
