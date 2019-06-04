/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.js\");\n\n\nconst COLORS = [\n    '#0100fe',\n    '#017f02',\n    '#fe0000',\n    '#010080',\n    '#810102',\n    '#008081',\n    '#000000',\n    '#808080',\n    '#a867a9'\n];\n\nclass Block {\n    constructor(x,y,w,h) {\n        this.img = document.getElementById('spritesheet');\n\n        this.x = x;\n        this.y = y;\n        this.w = w;\n        this.h = h;\n\n        this.isBomb = false;\n        this.numBombs = 0;\n        this.isRevealed = false;\n        this.isMarked = false;\n    }\n\n    setBomb(){\n        this.isBomb = true;\n    }\n\n    draw(){\n        if (this.isRevealed && this.isBomb) {\n            if(this.triggered)\n                _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 88, 0, 17, 17, this.x, this.y, this.w, this.h);\n            else if(this.isMarked)\n                _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 70, 0, 17, 17, this.x, this.y, this.w, this.h);\n            else \n                _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 35, 0, 17, 17, this.x, this.y, this.w, this.h);\n\n            return;\n        }\n        else if(this.isMarked){\n            _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 0, 0, 16, 16, this.x, this.y, this.w, this.h);\n            return;\n        }\n\n        // Empty tiles \n        if (!this.isRevealed) {\n            _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 53, 0, 16, 16, this.x, this.y, this.w, this.h);\n            return;\n        }\n\n        _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawImage(this.img, 17, 0, 17, 17, this.x, this.y, this.w, this.h);\n        _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fillStyle = COLORS[this.numBombs + 1];\n        _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fillText(this.numBombs + '', this.x + (this.w - 15) / 2, this.y + (this.h + 20) / 2,this.w);\n\n    }\n\n    check(){\n        this.isRevealed = true;\n        if (this.isBomb) {\n            this.draw();\n            return true;\n        }\n        return false;\n    }\n\n    mark(){\n        this.isMarked = !this.isMarked;\n        return this.isMarked;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet canvas = document.getElementById('canvas');\nlet ctx = canvas.getContext('2d');\n\nctx.font = \"24px Joystix\";\nctx.imageSmoothingEnabled = false;\n\nctx.height = canvas.height;\nctx.width = canvas.height;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctx);\n\n\n//# sourceURL=webpack:///./src/context.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ \"./src/block.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nlet is_done = false;\nlet WIDTH = 10;\nlet HEIGHT = 10;\nlet b_width = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / WIDTH;\nlet b_height = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height / HEIGHT;\n\nlet marked;\nlet revealed;\nlet numBombs;\n\n\nlet blocks;\nfunction getNeighbours(x,y) {\n    let ret = [];\n    for( let i = x-1; i < x + 2; i++){\n        for( let j = y-1; j < y + 2; j++){\n            if (i < 0 || j < 0) {\n                continue;\n            }\n            let n_b = blocks[i + (j * WIDTH )];\n            if (n_b === undefined || (x == i && y == j) || i == WIDTH || j == HEIGHT) continue;\n            ret.push(n_b);\n        }\n    }\n    return ret;\n}\n\nfunction setUpLevel(w,h,bombs) {\n    is_done = false;\n    marked = 0;\n    revealed = 0;\n    numBombs = bombs;\n\n    WIDTH = w;\n    HEIGHT = h;\n    blocks = [];\n\n    b_width = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / WIDTH;\n    b_height = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height / HEIGHT;\n\n    for (let j = 0; j < HEIGHT; j++) {\n        for (let i = 0; i < WIDTH; i++) {\n            let x = i * b_width;\n            let y = j * b_height;\n            blocks.push(new _block__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y, b_width, b_height, Math.random()));\n        }\n    }\n    setBombs(bombs);\n    calculateNumbers();\n}\n\n\nwindow.onload = () => {\n    document.addEventListener('contextmenu', event => event.preventDefault());\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"button\"].onclick = () => setUpLevel(_ui__WEBPACK_IMPORTED_MODULE_2__[\"widthSlider\"].value,_ui__WEBPACK_IMPORTED_MODULE_2__[\"heightSlider\"].value, _ui__WEBPACK_IMPORTED_MODULE_2__[\"bombSlider\"].value);\n    setUpLevel(WIDTH,HEIGHT,10);\n    requestAnimationFrame(draw);\n};\n\nfunction calculateNumbers() {\n    for( let x = 0; x < WIDTH; x++){\n        for( let y = 0; y < HEIGHT; y++){\n            let b = blocks[x + y * HEIGHT];\n            if (b.isBomb) continue;\n            let neighbours = getNeighbours(x,y);\n            for (let n of neighbours) {\n                if (n.isBomb) b.numBombs++;\n            }\n        }\n    }\n}\n\n\nfunction setBombs(amount) {\n    let max = WIDTH * HEIGHT;\n    if (amount > WIDTH * HEIGHT) {\n        alert('Too many bombs! Setting them to ' + max / 2);\n        amount = max / 2;\n    }\n    let idx;\n    for( let i = 0; i < amount; i++){\n        idx = Math.floor(Math.random() * WIDTH * HEIGHT);\n        while (blocks[idx].isBomb) {\n            idx = Math.floor(Math.random() * WIDTH * HEIGHT);\n        }\n        blocks[idx].setBomb();\n    }\n}\n\nfunction draw() {\n    _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fillStyle = 'red';\n    _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fillRect(0,0,_context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height);\n\n\n    for (let b of blocks) {\n        b.draw();\n    }\n    requestAnimationFrame(draw);\n}\n\nfunction CheckForBomb(block) {\n    if (is_done) {\n        return;\n    }\n    if (block.isMarked || block.isRevealed) {\n        return;\n    }\n    if (block.check()) {\n        block.triggered = true;\n        is_done = true;\n        blocks.forEach((b) => b.isRevealed = true);\n        alert('Game Over!');\n        return;\n    }\n\n    revealed++;\n    CheckForVictory();\n    if (block.numBombs == 0) {\n        let x,y;\n        for (let i = 0; i < WIDTH; i++) {\n            for (let j = 0; j < HEIGHT; j++) {\n                let b = blocks[i + j*WIDTH];\n                if (b.x == block.x && b.y == block.y) {\n                    x = i; y = j;\n                }\n            }\n        }\n        let neighbours = getNeighbours(x,y);\n        for( let i = 0; i < neighbours.length; i++){\n            CheckForBomb(neighbours[i]);\n        }\n    }\n}\n\n\n\nlet canvas = document.getElementById('canvas');\ncanvas.onmousedown = (e) => {\n    e.preventDefault();\n    let x = e.pageX - canvas.offsetLeft;\n    let y = e.pageY - canvas.offsetTop;\n\n    x = Math.floor( x / b_width );\n    y = Math.floor( y / b_height );\n    let selected = blocks[x + y*WIDTH];\n\n    switch(e.which){\n        case 1:\n            CheckForBomb(selected);\n            break;\n        case 2:\n            if (!selected.isRevealed)\n                return;\n            getNeighbours(x,y).forEach(CheckForBomb);\n            break;\n        case 3:\n            if(selected.mark())\n                marked++;\n            else\n                marked--;\n            CheckForVictory();\n            break;\n    }\n\n};\n\nfunction CheckForVictory() {\n    if (marked == numBombs && revealed == WIDTH * HEIGHT - numBombs) {\n        alert('You win!');\n    }\n}\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let RestartButton = document.getElementById('restart');\nlet widthSlider = document.getElementById('widthslider');\nlet widthLabel = document.getElementById('widthlabel');\nlet heightSlider = document.getElementById('heightslider');\nlet heightLabel = document.getElementById('heightlabel');\n\nlet bombSlider = document.getElementById('bombslider');\nlet bombLabel = document.getElementById('bomblabel');\n\nlet message = document.getElementById('message');\n\n\nwidthSlider.onchange = (e) => widthLabel.innerHTML = e.target.value;\nwidthSlider.oninput = (e) => widthLabel.innerHTML = e.target.value;\n\n\nheightSlider.onchange = (e) => heightLabel.innerHTML = e.target.value;\nheightSlider.oninput = (e) => heightLabel.innerHTML = e.target.value;\n\n\nbombSlider.onchange = (e) => bombLabel.innerHTML = e.target.value;\nbombSlider.oninput = (e) => bombLabel.innerHTML = e.target.value;\n\n\n\nmodule.exports = {\n    button: RestartButton,\n    widthSlider,\n    heightSlider,\n    bombSlider\n};\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });