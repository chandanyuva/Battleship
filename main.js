/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Anton-Regular.ttf */ "./src/Anton-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./battleship.jpg */ "./src/battleship.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Anton';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
    font-weight: 600;
    font-style: normal;
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Anton';
}

.header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    background-color: rgb(61, 228, 58);
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: 'Anton';
    font-size: 1.5rem;
    border-radius: 4px;
    transition: all 300ms;
}

button:hover {
    transform: scale(1.2);
    background-color: rgb(139, 255, 133);
    color: #cef7d6;
    cursor: pointer;
    transition: all 300ms;
}
button:active{
    transform: scale(200);
    transition: all 600ms;
}

h1 {
    margin: 0;
    font-size: 3.5rem;
}

.grid-container {
    display: grid;
    grid-template-areas:
        "header header"
        "player1 player2";
}

@media screen and (max-width: 824px) {
    .grid-container {
        grid-template-areas:
            "header"
            "player1"
            "player2";
    }
    button:hover {
        transform: scale(1.2);
        background-color: rgb(139, 255, 133);
        color: #cef7d6;
        cursor: pointer;
        transition: all 300ms;
    }
    button:active{
        transform: scale(200);
        transition: all 600ms;
    }
}

.instructions {
    margin: 0;
    font-size: 1.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

h3 {
    font-size: 1.75rem;
    margin-bottom: 0;
}

.player1,
.player2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.player1 {
    grid-area: player1;
    backdrop-filter: blur(2px);
    border-radius: 4px;
}

.player2 {
    grid-area: player2;
    backdrop-filter: blur(2px);
    border-radius: 4px;
}

.p1-container,
.p2-container {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    height: 400px;
    border-radius: 2px;
}

@media only screen and (max-width: 768px) {

    .p1-container,
    .p2-container {
        width: 350px;
        height: 300px;
        border-radius: 2px;
    }
}

/* GAMEBOARD SQUARES */

.square {
    box-sizing: border-box;
    border: solid 1px rgb(45, 45, 45);
    background: white;
    width: 10%;
    height: 10%;
    border-radius: 2px;
}

.square.active:hover {
    background-color: rgb(238, 98, 98);
}

.ship {
    background-color: black;
}

.active {
    background-color: rgb(78, 78, 78);
}

.hit-ship {
    background-color: red;
}

.hit-miss {
    background-color: rgba(255, 255, 255, 0);
}

/* WINNER MODAL */

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    text-align: center;
    font-size: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4DAA+C;IAC/C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iFAAiE;IACjE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,cAAc;IACd,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb;;yBAEqB;AACzB;;AAEA;IACI;QACI;;;qBAGa;IACjB;IACA;QACI,qBAAqB;QACrB,oCAAoC;QACpC,cAAc;QACd,eAAe;QACf,qBAAqB;IACzB;IACA;QACI,qBAAqB;QACrB,qBAAqB;IACzB;AACJ;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,8CAA8C;IAC9C,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI;;QAEI,YAAY;QACZ,aAAa;QACb,kBAAkB;IACtB;AACJ;;AAEA,sBAAsB;;AAEtB;IACI,sBAAsB;IACtB,iCAAiC;IACjC,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["@font-face {\r\n    font-family: 'Anton';\r\n    src: url('./Anton-Regular.ttf') format('woff2');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    background: url('./battleship.jpg') no-repeat center center fixed;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    font-family: 'Anton';\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(61, 228, 58);\r\n    border: none;\r\n    color: white;\r\n    padding: 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-family: 'Anton';\r\n    font-size: 1.5rem;\r\n    border-radius: 4px;\r\n    transition: all 300ms;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.2);\r\n    background-color: rgb(139, 255, 133);\r\n    color: #cef7d6;\r\n    cursor: pointer;\r\n    transition: all 300ms;\r\n}\r\nbutton:active{\r\n    transform: scale(200);\r\n    transition: all 600ms;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"player1 player2\";\r\n}\r\n\r\n@media screen and (max-width: 824px) {\r\n    .grid-container {\r\n        grid-template-areas:\r\n            \"header\"\r\n            \"player1\"\r\n            \"player2\";\r\n    }\r\n    button:hover {\r\n        transform: scale(1.2);\r\n        background-color: rgb(139, 255, 133);\r\n        color: #cef7d6;\r\n        cursor: pointer;\r\n        transition: all 300ms;\r\n    }\r\n    button:active{\r\n        transform: scale(200);\r\n        transition: all 600ms;\r\n    }\r\n}\r\n\r\n.instructions {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: 700;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.75rem;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.player1,\r\n.player2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.player1 {\r\n    grid-area: player1;\r\n    backdrop-filter: blur(2px);\r\n    border-radius: 4px;\r\n}\r\n\r\n.player2 {\r\n    grid-area: player2;\r\n    backdrop-filter: blur(2px);\r\n    border-radius: 4px;\r\n}\r\n\r\n.p1-container,\r\n.p2-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 2px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    .p1-container,\r\n    .p2-container {\r\n        width: 350px;\r\n        height: 300px;\r\n        border-radius: 2px;\r\n    }\r\n}\r\n\r\n/* GAMEBOARD SQUARES */\r\n\r\n.square {\r\n    box-sizing: border-box;\r\n    border: solid 1px rgb(45, 45, 45);\r\n    background: white;\r\n    width: 10%;\r\n    height: 10%;\r\n    border-radius: 2px;\r\n}\r\n\r\n.square.active:hover {\r\n    background-color: rgb(238, 98, 98);\r\n}\r\n\r\n.ship {\r\n    background-color: black;\r\n}\r\n\r\n.active {\r\n    background-color: rgb(78, 78, 78);\r\n}\r\n\r\n.hit-ship {\r\n    background-color: red;\r\n}\r\n\r\n.hit-miss {\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n/* WINNER MODAL */\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");



const Gameboard = () => {
    //build array of coordinates
    const buildBoard = () => {
        const board = [];
        for (let j = 0; j < 10; j += 1) {
            for (let i = 0; i < 10; i += 1) {
                board.push([j, i]);
            }
        }
        return board;
    };

    // build array with info object for each gameboard square
    const buildObjectList = (arr) => {
        const newArr = [];
        for (let i = 0; i < arr.length; i += 1) {
            newArr[i] = {
                ship: null,
                attacked: null,
            };
        }
        return newArr;
    };

    const board = buildBoard();
    const objList = buildObjectList(board);

    // Return true if there is no ship overlap & ship is 1 space apart from other ships
    const avoidOverlap = (coord, shipLength, position) => {
        let allClear = true;
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);

        if (objList[index].ship != null) allClear = false;

        function checkLeft(ind) {
            if (
                objList[ind - 1] !== undefined &&
                objList[ind - 1].ship !== null
            )
                allClear = false;
        }

        function checkRight(ind) {
            if (
                objList[ind + 1] !== undefined &&
                objList[ind + 1].ship !== null
            )
                allClear = false;
        }

        function checkAbove(ind) {
            if (
                objList[ind - 10] !== undefined &&
                objList[ind - 10].ship !== null
            )
                allClear = false;
        }

        function checkBelow(ind) {
            if (
                objList[ind + 10] !== undefined &&
                objList[ind + 10].ship !== null
            )
                allClear = false;
        }

        checkLeft(index);
        checkRight(index);
        checkAbove(index);
        checkBelow(index);

        if (position === "x") {
            for (let i = 1; i < shipLength; i += 1) {
                if (objList[index + i].ship != null) allClear = false;
                checkRight(index + i);
                checkAbove(index + i);
                checkBelow(index + i);
            }
        } else {
            let j = 10;
            for (let i = 1; i < shipLength; i += 1) {
                if (objList[index - j].ship != null) allClear = false;
                checkLeft(index - j);
                checkRight(index - j);
                checkAbove(index - j);
                j += 10;
            }
        }
        return allClear;
    };

    // Place ship at specific coordinates
    const placeShip = (coord, shipLength, position) => {
        const newShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLength);
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        objList[index].ship = newShip;

        if (position === "x") {
            for (let i = 1; i < shipLength; i += 1) {
                objList[index + i].ship = newShip;
            }
        } else {
            let j = 10;
            for (let i = 1; i < shipLength; i += 1) {
                objList[index - j].ship = newShip;
                j += 10;
            }
        }
    };

    // Place all ships randomly on gameboard
    const placeRandomShips = () => {
        function placePresets(shipLength) {
            const shipPos = randomPosition();
            const shipCoord = randomCoordRandomPos(shipPos, shipLength);
            // Place ship on board if there is no overlap, otherwise recursively call f(x)
            if (avoidOverlap(shipCoord, shipLength, shipPos) === true) {
                placeShip(shipCoord, shipLength, shipPos);
            } else {
                placePresets(shipLength);
            }
        }

        // Place each preset battleship on board
        placePresets(5);
        placePresets(4);
        placePresets(3);
        placePresets(3);
        placePresets(2);
    };

    // Check if a square contains a ship
    const hasShip = (coord) => {
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        if (objList[index].ship != null) {
            return true;
        }
        return false;
    };

    // Increase hit number if ship contained in attacked square of the that ship
    const receiveAttack = (index) => {
        // let i = findIndex(board, index);
        if (objList[index].ship != null) {
            objList[index].ship.hit();
            objList[index].attacked = true;
        } else {
            objList[index].attacked = true;
        }
    };

    // Return true if all ships on board have been sunk
    const allShipsSunk = () => {
        let result = true;
        for (let i = 0; i < objList.length; i += 1) {
            if (objList[i].ship) {
                if (objList[i].ship.isSunk() !== true) {
                    result = false;
                }
            }
        }
        return result;
    };

    return {
        board,
        objList,
        placeShip,
        placeRandomShips,
        hasShip,
        receiveAttack,
        allShipsSunk,
    };
};

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i][0] === target[0] && arr[i][1] === target[1]) {
            return i;
        }
    }
}

// Return random x or y position
function randomPosition() {
    const randomInt = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomInteger)(0, 1);
    if (randomInt === 0) return "x";
    return "y";
}

// Return random coordinates based on random position & specified ship length
function randomCoordRandomPos(position, shipLength) {
    let randomX;
    let randomY;
    if (position === "x") {
        randomX = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomInteger)(0, 9);
        randomY = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomInteger)(0, 9 - (shipLength - 1));
    } else {
        randomX = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomInteger)(0 + (shipLength - 1), 9);
        randomY = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.randomInteger)(0, 9);
    }
    const randomCoord = [randomX, randomY];
    return randomCoord;
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   randomInteger: () => (/* binding */ randomInteger)
/* harmony export */ });
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Return random coordinates contained within board
function randomIndex(game) {
    const index = randomInteger(0,99);
    if (game.objList[index].attacked === null) {
        return index;
    } 
    return randomIndex(game);
}

const Player = (enemyGame) => {

    const sendAttack = (ind) => {
        if (!ind) {
            // Attack random square if no coordinates specified
            const random = randomIndex(enemyGame);
            enemyGame.receiveAttack(random);
        } else {
            enemyGame.receiveAttack(ind);
        }
    }

    const activePlayer = false;

    return { sendAttack, activePlayer }

}

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (lengthNum) => {
    const shipLength = lengthNum;
    let hitNum = 0;
    const hit = () => {
        hitNum += 1;
    };
    const getHitNum = () => hitNum;
    const isSunk = () => {
        if (hitNum >= shipLength) {
            return true;
        }
        return false;
    };
    return { shipLength, hitNum, hit, getHitNum, isSunk };
};


/***/ }),

/***/ "./src/gameDisplay.js":
/*!****************************!*\
  !*** ./src/gameDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameDisplay: () => (/* binding */ gameDisplay),
/* harmony export */   startGameDisplay: () => (/* binding */ startGameDisplay)
/* harmony export */ });
const startGameDisplay = (button) => {
    // Display headers above gameboards
    const gridHeader1 = document.querySelector(".grid-header1");
    const gridHeader2 = document.querySelector(".grid-header2");
    const header = document.querySelector(".header");
    header.removeChild(button);
    const label1 = document.createElement("h3");
    label1.textContent = "YOUR BOARD";
    gridHeader1.appendChild(label1);
    const label2 = document.createElement("h3");
    label2.textContent = "ENEMY BOARD";
    gridHeader2.appendChild(label2);

    // Display game instructions
    const instructions = document.createElement("p");
    instructions.classList.add("instructions");
    instructions.textContent =
        "Click a square on the enemy's board to launch an attack!";
    header.appendChild(instructions);
};

const gameDisplay = (grid1, grid2, gameboard1, gameboard2, player2) => {
    const refreshGrids = () => {
        grid1.removeGrid();
        grid2.removeGrid();
        grid1.displayGrid();
        grid2.displayGrid();
    };

    // Check gameboards to see if all ships are sunk
    function checkGameboards() {
        if (
            gameboard1.allShipsSunk() === true ||
            gameboard2.allShipsSunk() === true
        ) {
            return true;
        }
        return false;
    }

    const displayWinner = () => {
        // Display the winner modal
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
        const modalContent = document.querySelector(".modal-content");
        const modalText = document.createElement("p");
        modalContent.appendChild(modalText);
        // Load the appropriate winner text
        if (gameboard1.allShipsSunk() === true) {
            modalText.textContent = "You lost! Better luck next time.";
        } else {
            modalText.textContent = "You won! Play again?";
        }

        // Game reset button
        const reset = document.createElement("button");
        modalContent.appendChild(reset);
        reset.textContent = "NEW GAME";
        reset.addEventListener("click", () => {
            location.reload();
        });
    };

    const humanPlay = () => {
        const gridList = document.querySelectorAll(".active");
        for (let i = 0; i < gridList.length; i += 1) {
            gridList[i].addEventListener("click", () => {
                // Only record attack if square hasn't been attacked yet
                if (gameboard2.objList[i].attacked === null) {
                    // Record attack & refresh grid
                    gameboard2.receiveAttack(i);
                    refreshGrids();
                    // Check for winner
                    if (checkGameboards() === true) {
                        displayWinner();
                    } else {
                        return computerPlay();
                    }
                } else {
                    // Restart turn if square has already been attacked
                    return humanPlay();
                }
            });
        }
    };

    const computerPlay = () => {
        player2.sendAttack();
        refreshGrids();
        if (checkGameboards() === true) {
            displayWinner();
        } else {
            // Pass turn back to human if no winner yet
            humanPlay();
        }
    };

    return { humanPlay, computerPlay };
};


/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Grid: () => (/* binding */ Grid)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

const Grid = (container, player, gameboard) => {
    const list = gameboard.objList;

    // Create squares for boards
    const displayGrid = () => {
        for (let i = 0; i < 100; i += 1) {
            const square = document.createElement("div");
            square.classList.add("square");

            // Add appropriate square classes for human board
            if (player.activePlayer === true) {
                if (list[i].ship != null && list[i].attacked === null) {
                    square.classList.add("ship");
                } else if (list[i].ship != null && list[i].attacked === true) {
                    square.classList.add("hit-ship");
                } else if (list[i].ship === null && list[i].attacked === true) {
                    square.classList.add("hit-miss");
                }
            } else {
                square.classList.add("active");
                if (list[i].ship != null && list[i].attacked === true) {
                    square.classList.add("hit-ship");
                } else if (list[i].ship === null && list[i].attacked === true) {
                    square.classList.add("hit-miss");
                }
            }

            container.appendChild(square);
        }
    };

    const removeGrid = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    };

    return { displayGrid, removeGrid };
};


/***/ }),

/***/ "./src/Anton-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Anton-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "170b842f9a8cd6150a0d.ttf";

/***/ }),

/***/ "./src/battleship.jpg":
/*!****************************!*\
  !*** ./src/battleship.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e407292d23af70bddd2c.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _gameDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameDisplay */ "./src/gameDisplay.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable no-else-return */






const startButton = document.querySelector("#start");
const p1Container = document.querySelector(".p1-container");
const p2Container = document.querySelector(".p2-container");

const gameLoop = () => {
    // Display gameboard headers & instructions
    (0,_gameDisplay__WEBPACK_IMPORTED_MODULE_3__.startGameDisplay)(startButton);

    // Create players, gameboards, & displays
    const humanBoard = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    humanBoard.placeRandomShips();
    const computerBoard = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    computerBoard.placeRandomShips();
    const human = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)(computerBoard);
    const computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)(humanBoard);
    const humanGrid = (0,_grid__WEBPACK_IMPORTED_MODULE_2__.Grid)(p1Container, human, humanBoard);
    const computerGrid = (0,_grid__WEBPACK_IMPORTED_MODULE_2__.Grid)(p2Container, computer, computerBoard);

    // Start game with human as first player
    human.activePlayer = true;
    humanGrid.displayGrid();
    computerGrid.displayGrid();
    const display = (0,_gameDisplay__WEBPACK_IMPORTED_MODULE_3__.gameDisplay)(
        humanGrid,
        computerGrid,
        humanBoard,
        computerBoard,
        computer
    );
    display.humanPlay();
};

startButton.addEventListener("click", gameLoop);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3dDO0FBQ047QUFDSjtBQUNnQztBQUN6QztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSx1QkFBdUIscURBQVM7QUFDaEM7QUFDQSwwQkFBMEIscURBQVM7QUFDbkM7QUFDQSxrQkFBa0IsK0NBQU07QUFDeEIscUJBQXFCLCtDQUFNO0FBQzNCLHNCQUFzQiwyQ0FBSTtBQUMxQix5QkFBeUIsMkNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9BbnRvbi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYmF0dGxlc2hpcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAyMjgsIDU4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjU1LCAxMzMpO1xyXG4gICAgY29sb3I6ICNjZWY3ZDY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuYnV0dG9uOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMjAwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxyXG4gICAgICAgIFwicGxheWVyMSBwbGF5ZXIyXCI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNHB4KSB7XHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgIFwiaGVhZGVyXCJcclxuICAgICAgICAgICAgXCJwbGF5ZXIxXCJcclxuICAgICAgICAgICAgXCJwbGF5ZXIyXCI7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyNTUsIDEzMyk7XHJcbiAgICAgICAgY29sb3I6ICNjZWY3ZDY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIH1cclxuICAgIGJ1dHRvbjphY3RpdmV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyMDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RydWN0aW9ucyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnBsYXllcjEsXHJcbi5wbGF5ZXIyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllcjEge1xyXG4gICAgZ3JpZC1hcmVhOiBwbGF5ZXIxO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5wbGF5ZXIyIHtcclxuICAgIGdyaWQtYXJlYTogcGxheWVyMjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ucDEtY29udGFpbmVyLFxyXG4ucDItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLnAxLWNvbnRhaW5lcixcclxuICAgIC5wMi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogR0FNRUJPQVJEIFNRVUFSRVMgKi9cclxuXHJcbi5zcXVhcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYig0NSwgNDUsIDQ1KTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA5OCwgOTgpO1xyXG59XHJcblxyXG4uc2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbn1cclxuXHJcbi5oaXQtc2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5oaXQtbWlzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcblxyXG4vKiBXSU5ORVIgTU9EQUwgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsNERBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpRkFBaUU7SUFDakUsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7eUJBRXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSTs7O3FCQUdhO0lBQ2pCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsb0NBQW9DO1FBQ3BDLGNBQWM7UUFDZCxlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJOztRQUVJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nO1xcclxcbiAgICBzcmM6IHVybCgnLi9BbnRvbi1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2JhdHRsZXNoaXAuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0FudG9uJztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDIyOCwgNTgpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyNTUsIDEzMyk7XFxyXFxuICAgIGNvbG9yOiAjY2VmN2Q2O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuYnV0dG9uOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInBsYXllcjEgcGxheWVyMlxcXCI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNHB4KSB7XFxyXFxuICAgIC5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxyXFxuICAgICAgICAgICAgXFxcInBsYXllcjFcXFwiXFxyXFxuICAgICAgICAgICAgXFxcInBsYXllcjJcXFwiO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyNTUsIDEzMyk7XFxyXFxuICAgICAgICBjb2xvcjogI2NlZjdkNjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b246YWN0aXZle1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyMDApO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbnMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXIxLFxcclxcbi5wbGF5ZXIyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllcjEge1xcclxcbiAgICBncmlkLWFyZWE6IHBsYXllcjE7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXIyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwbGF5ZXIyO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucDEtY29udGFpbmVyLFxcclxcbi5wMi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC5wMS1jb250YWluZXIsXFxyXFxuICAgIC5wMi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBHQU1FQk9BUkQgU1FVQVJFUyAqL1xcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoNDUsIDQ1LCA0NSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDk4LCA5OCk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxyXFxufVxcclxcblxcclxcbi5oaXQtc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdC1taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogV0lOTkVSIE1PREFMICovXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcclxuaW1wb3J0IHsgcmFuZG9tSW50ZWdlciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIC8vYnVpbGQgYXJyYXkgb2YgY29vcmRpbmF0ZXNcclxuICAgIGNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKFtqLCBpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBidWlsZCBhcnJheSB3aXRoIGluZm8gb2JqZWN0IGZvciBlYWNoIGdhbWVib2FyZCBzcXVhcmVcclxuICAgIGNvbnN0IGJ1aWxkT2JqZWN0TGlzdCA9IChhcnIpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBuZXdBcnJbaV0gPSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdBcnI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xyXG4gICAgY29uc3Qgb2JqTGlzdCA9IGJ1aWxkT2JqZWN0TGlzdChib2FyZCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlcmUgaXMgbm8gc2hpcCBvdmVybGFwICYgc2hpcCBpcyAxIHNwYWNlIGFwYXJ0IGZyb20gb3RoZXIgc2hpcHNcclxuICAgIGNvbnN0IGF2b2lkT3ZlcmxhcCA9IChjb29yZCwgc2hpcExlbmd0aCwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBsZXQgYWxsQ2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IFtjb29yZFswXSwgY29vcmRbMV1dO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4KGJvYXJkLCB0YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAob2JqTGlzdFtpbmRleF0uc2hpcCAhPSBudWxsKSBhbGxDbGVhciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0xlZnQoaW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iakxpc3RbaW5kIC0gMV0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgb2JqTGlzdFtpbmQgLSAxXS5zaGlwICE9PSBudWxsXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGFsbENsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja1JpZ2h0KGluZCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBvYmpMaXN0W2luZCArIDFdICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIG9iakxpc3RbaW5kICsgMV0uc2hpcCAhPT0gbnVsbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBhbGxDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBYm92ZShpbmQpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2JqTGlzdFtpbmQgLSAxMF0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgb2JqTGlzdFtpbmQgLSAxMF0uc2hpcCAhPT0gbnVsbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBhbGxDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tCZWxvdyhpbmQpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2JqTGlzdFtpbmQgKyAxMF0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgb2JqTGlzdFtpbmQgKyAxMF0uc2hpcCAhPT0gbnVsbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBhbGxDbGVhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tMZWZ0KGluZGV4KTtcclxuICAgICAgICBjaGVja1JpZ2h0KGluZGV4KTtcclxuICAgICAgICBjaGVja0Fib3ZlKGluZGV4KTtcclxuICAgICAgICBjaGVja0JlbG93KGluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBcInhcIikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iakxpc3RbaW5kZXggKyBpXS5zaGlwICE9IG51bGwpIGFsbENsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjaGVja1JpZ2h0KGluZGV4ICsgaSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0Fib3ZlKGluZGV4ICsgaSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0JlbG93KGluZGV4ICsgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaiA9IDEwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iakxpc3RbaW5kZXggLSBqXS5zaGlwICE9IG51bGwpIGFsbENsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjaGVja0xlZnQoaW5kZXggLSBqKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrUmlnaHQoaW5kZXggLSBqKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrQWJvdmUoaW5kZXggLSBqKTtcclxuICAgICAgICAgICAgICAgIGogKz0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENsZWFyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGFjZSBzaGlwIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmQsIHNoaXBMZW5ndGgsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gW2Nvb3JkWzBdLCBjb29yZFsxXV07XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoYm9hcmQsIHRhcmdldCk7XHJcbiAgICAgICAgb2JqTGlzdFtpbmRleF0uc2hpcCA9IG5ld1NoaXA7XHJcblxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIG9iakxpc3RbaW5kZXggKyBpXS5zaGlwID0gbmV3U2hpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gMTA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpMaXN0W2luZGV4IC0gal0uc2hpcCA9IG5ld1NoaXA7XHJcbiAgICAgICAgICAgICAgICBqICs9IDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGFjZSBhbGwgc2hpcHMgcmFuZG9tbHkgb24gZ2FtZWJvYXJkXHJcbiAgICBjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYWNlUHJlc2V0cyhzaGlwTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSByYW5kb21Qb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwQ29vcmQgPSByYW5kb21Db29yZFJhbmRvbVBvcyhzaGlwUG9zLCBzaGlwTGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gUGxhY2Ugc2hpcCBvbiBib2FyZCBpZiB0aGVyZSBpcyBubyBvdmVybGFwLCBvdGhlcndpc2UgcmVjdXJzaXZlbHkgY2FsbCBmKHgpXHJcbiAgICAgICAgICAgIGlmIChhdm9pZE92ZXJsYXAoc2hpcENvb3JkLCBzaGlwTGVuZ3RoLCBzaGlwUG9zKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXBDb29yZCwgc2hpcExlbmd0aCwgc2hpcFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVByZXNldHMoc2hpcExlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBsYWNlIGVhY2ggcHJlc2V0IGJhdHRsZXNoaXAgb24gYm9hcmRcclxuICAgICAgICBwbGFjZVByZXNldHMoNSk7XHJcbiAgICAgICAgcGxhY2VQcmVzZXRzKDQpO1xyXG4gICAgICAgIHBsYWNlUHJlc2V0cygzKTtcclxuICAgICAgICBwbGFjZVByZXNldHMoMyk7XHJcbiAgICAgICAgcGxhY2VQcmVzZXRzKDIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIHNxdWFyZSBjb250YWlucyBhIHNoaXBcclxuICAgIGNvbnN0IGhhc1NoaXAgPSAoY29vcmQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBbY29vcmRbMF0sIGNvb3JkWzFdXTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleChib2FyZCwgdGFyZ2V0KTtcclxuICAgICAgICBpZiAob2JqTGlzdFtpbmRleF0uc2hpcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluY3JlYXNlIGhpdCBudW1iZXIgaWYgc2hpcCBjb250YWluZWQgaW4gYXR0YWNrZWQgc3F1YXJlIG9mIHRoZSB0aGF0IHNoaXBcclxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBsZXQgaSA9IGZpbmRJbmRleChib2FyZCwgaW5kZXgpO1xyXG4gICAgICAgIGlmIChvYmpMaXN0W2luZGV4XS5zaGlwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgb2JqTGlzdFtpbmRleF0uc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgb2JqTGlzdFtpbmRleF0uYXR0YWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iakxpc3RbaW5kZXhdLmF0dGFja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJldHVybiB0cnVlIGlmIGFsbCBzaGlwcyBvbiBib2FyZCBoYXZlIGJlZW4gc3Vua1xyXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAob2JqTGlzdFtpXS5zaGlwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqTGlzdFtpXS5zaGlwLmlzU3VuaygpICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib2FyZCxcclxuICAgICAgICBvYmpMaXN0LFxyXG4gICAgICAgIHBsYWNlU2hpcCxcclxuICAgICAgICBwbGFjZVJhbmRvbVNoaXBzLFxyXG4gICAgICAgIGhhc1NoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcclxuICAgICAgICBhbGxTaGlwc1N1bmssXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgdGFyZ2V0KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChhcnJbaV1bMF0gPT09IHRhcmdldFswXSAmJiBhcnJbaV1bMV0gPT09IHRhcmdldFsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJldHVybiByYW5kb20geCBvciB5IHBvc2l0aW9uXHJcbmZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgcmFuZG9tSW50ID0gcmFuZG9tSW50ZWdlcigwLCAxKTtcclxuICAgIGlmIChyYW5kb21JbnQgPT09IDApIHJldHVybiBcInhcIjtcclxuICAgIHJldHVybiBcInlcIjtcclxufVxyXG5cclxuLy8gUmV0dXJuIHJhbmRvbSBjb29yZGluYXRlcyBiYXNlZCBvbiByYW5kb20gcG9zaXRpb24gJiBzcGVjaWZpZWQgc2hpcCBsZW5ndGhcclxuZnVuY3Rpb24gcmFuZG9tQ29vcmRSYW5kb21Qb3MocG9zaXRpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgIGxldCByYW5kb21YO1xyXG4gICAgbGV0IHJhbmRvbVk7XHJcbiAgICBpZiAocG9zaXRpb24gPT09IFwieFwiKSB7XHJcbiAgICAgICAgcmFuZG9tWCA9IHJhbmRvbUludGVnZXIoMCwgOSk7XHJcbiAgICAgICAgcmFuZG9tWSA9IHJhbmRvbUludGVnZXIoMCwgOSAtIChzaGlwTGVuZ3RoIC0gMSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByYW5kb21YID0gcmFuZG9tSW50ZWdlcigwICsgKHNoaXBMZW5ndGggLSAxKSwgOSk7XHJcbiAgICAgICAgcmFuZG9tWSA9IHJhbmRvbUludGVnZXIoMCwgOSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYW5kb21Db29yZCA9IFtyYW5kb21YLCByYW5kb21ZXTtcclxuICAgIHJldHVybiByYW5kb21Db29yZDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn1cclxuXHJcbi8vIFJldHVybiByYW5kb20gY29vcmRpbmF0ZXMgY29udGFpbmVkIHdpdGhpbiBib2FyZFxyXG5mdW5jdGlvbiByYW5kb21JbmRleChnYW1lKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHJhbmRvbUludGVnZXIoMCw5OSk7XHJcbiAgICBpZiAoZ2FtZS5vYmpMaXN0W2luZGV4XS5hdHRhY2tlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH0gXHJcbiAgICByZXR1cm4gcmFuZG9tSW5kZXgoZ2FtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoZW5lbXlHYW1lKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VuZEF0dGFjayA9IChpbmQpID0+IHtcclxuICAgICAgICBpZiAoIWluZCkge1xyXG4gICAgICAgICAgICAvLyBBdHRhY2sgcmFuZG9tIHNxdWFyZSBpZiBubyBjb29yZGluYXRlcyBzcGVjaWZpZWRcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gcmFuZG9tSW5kZXgoZW5lbXlHYW1lKTtcclxuICAgICAgICAgICAgZW5lbXlHYW1lLnJlY2VpdmVBdHRhY2socmFuZG9tKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbmVteUdhbWUucmVjZWl2ZUF0dGFjayhpbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4geyBzZW5kQXR0YWNrLCBhY3RpdmVQbGF5ZXIgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aE51bSkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aE51bTtcclxuICAgIGxldCBoaXROdW0gPSAwO1xyXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGhpdE51bSArPSAxO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEhpdE51bSA9ICgpID0+IGhpdE51bTtcclxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGl0TnVtID49IHNoaXBMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBzaGlwTGVuZ3RoLCBoaXROdW0sIGhpdCwgZ2V0SGl0TnVtLCBpc1N1bmsgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZURpc3BsYXkgPSAoYnV0dG9uKSA9PiB7XHJcbiAgICAvLyBEaXNwbGF5IGhlYWRlcnMgYWJvdmUgZ2FtZWJvYXJkc1xyXG4gICAgY29uc3QgZ3JpZEhlYWRlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQtaGVhZGVyMVwiKTtcclxuICAgIGNvbnN0IGdyaWRIZWFkZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWhlYWRlcjJcIik7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5yZW1vdmVDaGlsZChidXR0b24pO1xyXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbGFiZWwxLnRleHRDb250ZW50ID0gXCJZT1VSIEJPQVJEXCI7XHJcbiAgICBncmlkSGVhZGVyMS5hcHBlbmRDaGlsZChsYWJlbDEpO1xyXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gXCJFTkVNWSBCT0FSRFwiO1xyXG4gICAgZ3JpZEhlYWRlcjIuYXBwZW5kQ2hpbGQobGFiZWwyKTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IGdhbWUgaW5zdHJ1Y3Rpb25zXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGluc3RydWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID1cclxuICAgICAgICBcIkNsaWNrIGEgc3F1YXJlIG9uIHRoZSBlbmVteSdzIGJvYXJkIHRvIGxhdW5jaCBhbiBhdHRhY2shXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lRGlzcGxheSA9IChncmlkMSwgZ3JpZDIsIGdhbWVib2FyZDEsIGdhbWVib2FyZDIsIHBsYXllcjIpID0+IHtcclxuICAgIGNvbnN0IHJlZnJlc2hHcmlkcyA9ICgpID0+IHtcclxuICAgICAgICBncmlkMS5yZW1vdmVHcmlkKCk7XHJcbiAgICAgICAgZ3JpZDIucmVtb3ZlR3JpZCgpO1xyXG4gICAgICAgIGdyaWQxLmRpc3BsYXlHcmlkKCk7XHJcbiAgICAgICAgZ3JpZDIuZGlzcGxheUdyaWQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgZ2FtZWJvYXJkcyB0byBzZWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXHJcbiAgICBmdW5jdGlvbiBjaGVja0dhbWVib2FyZHMoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBnYW1lYm9hcmQxLmFsbFNoaXBzU3VuaygpID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgIGdhbWVib2FyZDIuYWxsU2hpcHNTdW5rKCkgPT09IHRydWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5V2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHdpbm5lciBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRleHQpO1xyXG4gICAgICAgIC8vIExvYWQgdGhlIGFwcHJvcHJpYXRlIHdpbm5lciB0ZXh0XHJcbiAgICAgICAgaWYgKGdhbWVib2FyZDEuYWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgbG9zdCEgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IHdvbiEgUGxheSBhZ2Fpbj9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdhbWUgcmVzZXQgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChyZXNldCk7XHJcbiAgICAgICAgcmVzZXQudGV4dENvbnRlbnQgPSBcIk5FVyBHQU1FXCI7XHJcbiAgICAgICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGh1bWFuUGxheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBncmlkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZExpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgZ3JpZExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVjb3JkIGF0dGFjayBpZiBzcXVhcmUgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkMi5vYmpMaXN0W2ldLmF0dGFja2VkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjb3JkIGF0dGFjayAmIHJlZnJlc2ggZ3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZDIucmVjZWl2ZUF0dGFjayhpKTtcclxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoR3JpZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igd2lubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrR2FtZWJvYXJkcygpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlXaW5uZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcHV0ZXJQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0YXJ0IHR1cm4gaWYgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHVtYW5QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29tcHV0ZXJQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHBsYXllcjIuc2VuZEF0dGFjaygpO1xyXG4gICAgICAgIHJlZnJlc2hHcmlkcygpO1xyXG4gICAgICAgIGlmIChjaGVja0dhbWVib2FyZHMoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5V2lubmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFzcyB0dXJuIGJhY2sgdG8gaHVtYW4gaWYgbm8gd2lubmVyIHlldFxyXG4gICAgICAgICAgICBodW1hblBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGh1bWFuUGxheSwgY29tcHV0ZXJQbGF5IH07XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gKGNvbnRhaW5lciwgcGxheWVyLCBnYW1lYm9hcmQpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBnYW1lYm9hcmQub2JqTGlzdDtcclxuXHJcbiAgICAvLyBDcmVhdGUgc3F1YXJlcyBmb3IgYm9hcmRzXHJcbiAgICBjb25zdCBkaXNwbGF5R3JpZCA9ICgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGFwcHJvcHJpYXRlIHNxdWFyZSBjbGFzc2VzIGZvciBodW1hbiBib2FyZFxyXG4gICAgICAgICAgICBpZiAocGxheWVyLmFjdGl2ZVBsYXllciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0uc2hpcCAhPSBudWxsICYmIGxpc3RbaV0uYXR0YWNrZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RbaV0uc2hpcCAhPSBudWxsICYmIGxpc3RbaV0uYXR0YWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0W2ldLnNoaXAgPT09IG51bGwgJiYgbGlzdFtpXS5hdHRhY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0LW1pc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0W2ldLnNoaXAgIT0gbnVsbCAmJiBsaXN0W2ldLmF0dGFja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFtpXS5zaGlwID09PSBudWxsICYmIGxpc3RbaV0uYXR0YWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdC1taXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBkaXNwbGF5R3JpZCwgcmVtb3ZlR3JpZCB9O1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXHJcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcclxuaW1wb3J0IHsgZ2FtZURpc3BsYXksIHN0YXJ0R2FtZURpc3BsYXkgfSBmcm9tIFwiLi9nYW1lRGlzcGxheVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0XCIpO1xyXG5jb25zdCBwMUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtY29udGFpbmVyXCIpO1xyXG5jb25zdCBwMkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItY29udGFpbmVyXCIpO1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcbiAgICAvLyBEaXNwbGF5IGdhbWVib2FyZCBoZWFkZXJzICYgaW5zdHJ1Y3Rpb25zXHJcbiAgICBzdGFydEdhbWVEaXNwbGF5KHN0YXJ0QnV0dG9uKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcGxheWVycywgZ2FtZWJvYXJkcywgJiBkaXNwbGF5c1xyXG4gICAgY29uc3QgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZCgpO1xyXG4gICAgaHVtYW5Cb2FyZC5wbGFjZVJhbmRvbVNoaXBzKCk7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcclxuICAgIGNvbnN0IGh1bWFuID0gUGxheWVyKGNvbXB1dGVyQm9hcmQpO1xyXG4gICAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoaHVtYW5Cb2FyZCk7XHJcbiAgICBjb25zdCBodW1hbkdyaWQgPSBHcmlkKHAxQ29udGFpbmVyLCBodW1hbiwgaHVtYW5Cb2FyZCk7XHJcbiAgICBjb25zdCBjb21wdXRlckdyaWQgPSBHcmlkKHAyQ29udGFpbmVyLCBjb21wdXRlciwgY29tcHV0ZXJCb2FyZCk7XHJcblxyXG4gICAgLy8gU3RhcnQgZ2FtZSB3aXRoIGh1bWFuIGFzIGZpcnN0IHBsYXllclxyXG4gICAgaHVtYW4uYWN0aXZlUGxheWVyID0gdHJ1ZTtcclxuICAgIGh1bWFuR3JpZC5kaXNwbGF5R3JpZCgpO1xyXG4gICAgY29tcHV0ZXJHcmlkLmRpc3BsYXlHcmlkKCk7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZ2FtZURpc3BsYXkoXHJcbiAgICAgICAgaHVtYW5HcmlkLFxyXG4gICAgICAgIGNvbXB1dGVyR3JpZCxcclxuICAgICAgICBodW1hbkJvYXJkLFxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQsXHJcbiAgICAgICAgY29tcHV0ZXJcclxuICAgICk7XHJcbiAgICBkaXNwbGF5Lmh1bWFuUGxheSgpO1xyXG59O1xyXG5cclxuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVMb29wKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9