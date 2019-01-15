import ctx from './context';

const COLORS = [
    '#0100fe',
    '#017f02',
    '#fe0000',
    '#010080',
    '#810102',
    '#008081',
    '#000000',
    '#808080',
    '#a867a9'
];

export default class Block {
    constructor(x,y,w,h) {
        this.img = document.getElementById('spritesheet');

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
        if (this.isRevealed && this.isBomb) {
            if(this.triggered)
                ctx.drawImage(this.img, 88, 0, 17, 17, this.x, this.y, this.w, this.h);
            else if(this.isMarked)
                ctx.drawImage(this.img, 70, 0, 17, 17, this.x, this.y, this.w, this.h);
            else 
                ctx.drawImage(this.img, 35, 0, 17, 17, this.x, this.y, this.w, this.h);

            return;
        }
        else if(this.isMarked){
            ctx.drawImage(this.img, 0, 0, 16, 16, this.x, this.y, this.w, this.h);
            return;
        }

        // Empty tiles 
        if (!this.isRevealed) {
            ctx.drawImage(this.img, 53, 0, 16, 16, this.x, this.y, this.w, this.h);
            return;
        }

        ctx.drawImage(this.img, 17, 0, 17, 17, this.x, this.y, this.w, this.h);
        ctx.fillStyle = COLORS[this.numBombs + 1];
        ctx.fillText(this.numBombs + '', this.x + (this.w - 15) / 2, this.y + (this.h + 20) / 2,this.w);

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
