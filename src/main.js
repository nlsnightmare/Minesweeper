import ctx from './context';
import Block from './block';
import {button, widthSlider, heightSlider, bombSlider, message} from './ui';



let is_done = false;
let WIDTH = 10;
let HEIGHT = 10;
let b_width = ctx.width / WIDTH;
let b_height = ctx.height / HEIGHT;

let marked;
let revealed;
let numBombs;


let blocks;
function getNeighbours(x,y) {
    let ret = [];
    for( let i = x-1; i < x + 2; i++){
        for( let j = y-1; j < y + 2; j++){
            if (i < 0 || j < 0) {
                continue;
            }
            let n_b = blocks[i + (j * WIDTH )];
            if (n_b === undefined || (x == i && y == j) || i == WIDTH || j == HEIGHT) continue;
            ret.push(n_b);
        }
    }
    return ret;
}

function setUpLevel(w,h,bombs) {
    is_done = false;
    marked = 0;
    revealed = 0;
    numBombs = bombs;

    WIDTH = w;
    HEIGHT = h;
    blocks = [];

    b_width = ctx.width / WIDTH;
    b_height = ctx.height / HEIGHT;

    for (let j = 0; j < HEIGHT; j++) {
        for (let i = 0; i < WIDTH; i++) {
            let x = i * b_width;
            let y = j * b_height;
            blocks.push(new Block(x, y, b_width, b_height, Math.random()));
        }
    }
    setBombs(bombs);
    calculateNumbers();
}


window.onload = () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    button.onclick = () => setUpLevel(widthSlider.value,heightSlider.value, bombSlider.value);
    setUpLevel(WIDTH,HEIGHT,10);
    requestAnimationFrame(draw);
};

function calculateNumbers() {
    for( let x = 0; x < WIDTH; x++){
        for( let y = 0; y < HEIGHT; y++){
            let b = blocks[x + y * HEIGHT];
            if (b.isBomb) continue;
            let neighbours = getNeighbours(x,y);
            for (let n of neighbours) {
                if (n.isBomb) b.numBombs++;
            }
        }
    }
}


function setBombs(amount) {
    let max = WIDTH * HEIGHT;
    if (amount > WIDTH * HEIGHT) {
        alert('Too many bombs! Setting them to ' + max / 2);
        amount = max / 2;
    }
    let idx;
    for( let i = 0; i < amount; i++){
        idx = Math.floor(Math.random() * WIDTH * HEIGHT);
        while (blocks[idx].isBomb) {
            idx = Math.floor(Math.random() * WIDTH * HEIGHT);
        }
        blocks[idx].setBomb();
    }
}

function draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,ctx.width, ctx.height);


    for (let b of blocks) {
        b.draw();
    }
    requestAnimationFrame(draw);
}

function CheckForBomb(block) {
    if (is_done) {
        return;
    }
    if (block.isMarked || block.isRevealed) {
        return;
    }
    if (block.check()) {
        block.triggered = true;
        is_done = true;
        blocks.forEach((b) => b.isRevealed = true);
        alert('Game Over!');
        return;
    }

    revealed++;
    CheckForVictory();
    if (block.numBombs == 0) {
        let x,y;
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                let b = blocks[i + j*WIDTH];
                if (b.x == block.x && b.y == block.y) {
                    x = i; y = j;
                }
            }
        }
        let neighbours = getNeighbours(x,y);
        for( let i = 0; i < neighbours.length; i++){
            CheckForBomb(neighbours[i]);
        }
    }
}



let canvas = document.getElementById('canvas');
canvas.onmousedown = (e) => {
    e.preventDefault();
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;

    x = Math.floor( x / b_width );
    y = Math.floor( y / b_height );
    let selected = blocks[x + y*WIDTH];

    switch(e.which){
        case 1:
            CheckForBomb(selected);
            break;
        case 2:
            if (!selected.isRevealed)
                return;
            getNeighbours(x,y).forEach(CheckForBomb);
            break;
        case 3:
            if(selected.mark())
                marked++;
            else
                marked--;
            CheckForVictory();
            break;
    }

};

function CheckForVictory() {
    if (marked == numBombs && revealed == WIDTH * HEIGHT - numBombs) {
        alert('You win!');
    }
}
