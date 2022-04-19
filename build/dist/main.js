/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boot.js":
/*!*********************!*\
  !*** ./src/boot.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boot": () => (/* binding */ boot)
/* harmony export */ });
/* harmony import */ var _init_windowcomponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init/windowcomponents */ "./src/init/windowcomponents.js");
/* harmony import */ var _init_recoverymode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init/recoverymode */ "./src/init/recoverymode.js");
/* harmony import */ var _init_taskbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init/taskbar */ "./src/init/taskbar.js");



const boot = () => {
    function listenF8() {
        let e = window.event;
        if (e.keyCode == 119) {
            console.log("Starting Recovery");
            //remove listener
            document.removeEventListener("keydown", listenF8);
            //f8 key pressed
            //load recovery mode
            (0,_init_recoverymode__WEBPACK_IMPORTED_MODULE_1__.startRecoveryMode)();
        }
    }
    //listen for f8 key
    document.addEventListener('keydown', listenF8);
    //Set progress
    document.getElementById("1prog").style = "width: 100px;";
    document.getElementById("2prog").style = "width: 100px;";
    document.getElementById("3prog").style = "width: 100px;";
    document.getElementById("loadstatetext").innerHTML = "imported init scripts";
    //delete loadscreen
    document.getElementById("container").remove();
    //remove listener
    document.removeEventListener("keydown", listenF8);
    //create taskbar
    let taskbar = new _init_taskbar__WEBPACK_IMPORTED_MODULE_2__.Taskbar();
    taskbar.init();
    //play start sound
    let startSound = new Audio("./sounds/boot.mp3");
    startSound.play();
    //create window
    let win = new _init_windowcomponents__WEBPACK_IMPORTED_MODULE_0__.WindowComponents("Welcome", `<h1>Welcome to Windows NT Classic</h1>`, 600, 100, 50, 50, "", "desktop");
    win.activate();
};

/***/ }),

/***/ "./src/init/draggable.js":
/*!*******************************!*\
  !*** ./src/init/draggable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "draggable": () => (/* binding */ draggable)
/* harmony export */ });
const draggable = (elmnt) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

/***/ }),

/***/ "./src/init/recoverymode.js":
/*!**********************************!*\
  !*** ./src/init/recoverymode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startRecoveryMode": () => (/* binding */ startRecoveryMode)
/* harmony export */ });
/* harmony import */ var _windowcomponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowcomponents */ "./src/init/windowcomponents.js");

const startRecoveryMode = () => {
    //Recovery Mode
    //Make a window with windowcomponents
    let win = new _windowcomponents__WEBPACK_IMPORTED_MODULE_0__.WindowComponents("Recovery Mode", `<h1>Will finnish later</h1>`, 400, 400, 50, 50, "", "desktop");
    win.activate();
}


/***/ }),

/***/ "./src/init/taskbar.js":
/*!*****************************!*\
  !*** ./src/init/taskbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Taskbar": () => (/* binding */ Taskbar)
/* harmony export */ });
class Taskbar {
    constructor() {
    }

    init() {
        //create div
        let taskbar = document.createElement("div");
        taskbar.id = "taskbar";
        //add start button
        let startbutton = document.createElement("button");
        startbutton.id = "startbutton";
        startbutton.innerText = "Start";
        taskbar.appendChild(startbutton);
        taskbar.classList.add("fadeIn");
        document.body.appendChild(taskbar);
    }
    
    hide() {
        //apply class "dontshow"
        document.getElementById("taskbar").classList.add("dontshow");
    }

    unhide() {
        //remove class "dontshow"
        document.getElementById("taskbar").classList.remove("dontshow");
    }
}


/***/ }),

/***/ "./src/init/windowcomponents.js":
/*!**************************************!*\
  !*** ./src/init/windowcomponents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowComponents": () => (/* binding */ WindowComponents)
/* harmony export */ });
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draggable */ "./src/init/draggable.js");

class WindowComponents {
    constructor(title, content, width, height, x, y, icon, parent) {
        this.title = title;
        this.content = content;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.icon = icon;
        this.parent = parent;
        this.id = "";
    }

    activate() {
        //readable
        //create a random id
        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let window = document.createElement("div");
            window.classList.add("window");
            window.style.width = this.width + "px";	
            window.style.height = this.height + "px";
            window.style.left = this.x + "px";
            window.style.top = this.y + "px";
            //add titlebar to window
            let titlebar = document.createElement("div");
                titlebar.classList.add("titlebar");
                titlebar.classList.add("fadeIn");
                let title = document.createElement("span");
                    title.innerHTML = this.title;
                    title.id = this.id + "header";
                titlebar.appendChild(title);
                //add close button to titlebar
                let closebutton = document.createElement("button");
                    closebutton.classList.add("closebutton");
                    closebutton.innerHTML = "&times;";
                    closebutton.id = this.id + "closebutton";
                    closebutton.addEventListener("click", () => {
                        //remove window
                        document.getElementById(this.id).remove();
                        //remove eventlistener
                        document.removeEventListener("keydown", this.keyListener);
                    });
                titlebar.appendChild(closebutton);
            //add content to window
            let content = document.createElement("div");
                content.classList.add("contentwin");
                content.classList.add("fadeIn");
                content.innerHTML = this.content;
            //append titlebar and content to window
            window.appendChild(titlebar);
            window.appendChild(content);
            //fade in window
            window.classList.add("fadeIn");
            //add id to window
            window.id = this.id;
            //make window draggable
            (0,_draggable__WEBPACK_IMPORTED_MODULE_0__.draggable)(window);
            //append window to parent
            document.getElementById(this.parent).appendChild(window);
        console.log("Window created");
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot */ "./src/boot.js");
/*
No longer a placeholder i like the name                                                                         
 _ _ _ _       _                  _____ _____    _____ _             _     
| | | |_|___ _| |___ _ _ _ ___   |   | |_   _|  |     | |___ ___ ___|_|___ 
| | | | |   | . | . | | | |_ -|  | | | | | |    |   --| | .'|_ -|_ -| |  _|
|_____|_|_|_|___|___|_____|___|  |_|___| |_|    |_____|_|__,|___|___|_|___|
                                                                           
This is Windows NT Classic made by Pr0G4m1ngXD and inspired by Windows 93, 96 and Whistler (Watercolor theme)

MIT License

Copyright (c) 2021 Pr0G4m1ngXD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

(0,_boot__WEBPACK_IMPORTED_MODULE_0__.boot)();
})();

/******/ })()
;