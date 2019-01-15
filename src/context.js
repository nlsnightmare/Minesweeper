let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.font = "24px Joystix";
ctx.imageSmoothingEnabled = false;

ctx.height = canvas.height;
ctx.width = canvas.height;

export default ctx;
