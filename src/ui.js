let RestartButton = document.getElementById('restart');
let widthSlider = document.getElementById('widthslider');
let widthLabel = document.getElementById('widthlabel');
let heightSlider = document.getElementById('heightslider');
let heightLabel = document.getElementById('heightlabel');

let bombSlider = document.getElementById('bombslider');
let bombLabel = document.getElementById('bomblabel');

let message = document.getElementById('message');


widthSlider.onchange = (e) => widthLabel.innerHTML = e.target.value;
widthSlider.oninput = (e) => widthLabel.innerHTML = e.target.value;


heightSlider.onchange = (e) => heightLabel.innerHTML = e.target.value;
heightSlider.oninput = (e) => heightLabel.innerHTML = e.target.value;


bombSlider.onchange = (e) => bombLabel.innerHTML = e.target.value;
bombSlider.oninput = (e) => bombLabel.innerHTML = e.target.value;



module.exports = {
    button: RestartButton,
    widthSlider,
    heightSlider,
    bombSlider
};
