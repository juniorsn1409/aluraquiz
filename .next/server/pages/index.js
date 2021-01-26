module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: bg, title, description, questions, external, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://images3.alphacoders.com/551/551729.jpg\",\"title\":\"Quiz Star Trek: Discovery\",\"description\":\"Teste os seus conhecimentos sobre StarTrek\",\"questions\":[{\"image\":\"https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif\",\"title\":\"Como fazer um seletor por id via CSS?\",\"description\":\"Essa é pra aquecer\",\"answer\":2,\"alternatives\":[\".elemento\",\"*elemento\",\"#elemento\",\"%elemento\"]},{\"image\":\"https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif\",\"title\":\"Como fazer um background gradiente com css?\",\"description\":\"Faz tempo em haha\",\"answer\":0,\"alternatives\":[\"background: linear-gradient(#e66465, #9198e5);\",\"background: gradient(#e66465, #9198e5);\"]}],\"external\":[\"\"],\"theme\":{\"colors\":{\"primary\":\"#b13b15\",\"secondary\":\"#b9934a\",\"mainBg\":\"#eedfb4\",\"contrastText\":\"#a39169\",\"wrong\":\"#bd2800\",\"success\":\"#4CAF50\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: BackgroundImage, QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return BackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\conatus-progam\\JavaScript\\aluraquiz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__BackgroundImage",
  componentId: "sc-1wbo52z-0"
})(["background-image:url(", ");display:flex;min-height:100vh;background-size:100% auto;background-repeat:no-repeat;background-attachment:scroll;"], _db_json__WEBPACK_IMPORTED_MODULE_2__.bg);
const QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:350px;padding-top:0px;margin:7%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
function Home() {
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.title)), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.description))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Quizes da Galera"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "lorem ipsum dolor sit amet..."))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\conatus-progam\\JavaScript\\aluraquiz\\src\\components\\Footer\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // src/components/Footer/index.js

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1f5euyg-0"
})(["background-color:#00000099;padding:20px;display:flex;align-items:center;border-radius:4px;img{width:58px;margin-right:23px;}p{color:#fff;}a{color:#a3b29f;text-decoration:none;transition:.3s;&:hover,&:focus{opacity:.5;}span{text-decoration:underline;}}"]);
function Footer(props) {
  return (// eslint-disable-next-line react/jsx-props-no-spreading
    __jsx(FooterWrapper, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }), __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",
      alt: "Logo Alura",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, "Orgulhosamente criado durante", ' ', "a", ' ', __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "Imers\xE3o React da Alura"))))
  );
}

/***/ }),

/***/ "./src/components/GitHubCorner/index.js":
/*!**********************************************!*\
  !*** ./src/components/GitHubCorner/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHubCorner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\conatus-progam\\JavaScript\\aluraquiz\\src\\components\\GitHubCorner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/components/GitHubCorner/index.js


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GitHubCorner__Wrapper",
  componentId: "sc-1x140l1-0"
})(["position:absolute;top:0;border:0;right:0;z-index:20;"]);
const SVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "GitHubCorner__SVGWrapper",
  componentId: "sc-1x140l1-1"
})(["fill:", ";color:", ";cursor:pointer;&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){&:hover .octo-arm{animation:none}& .octo-arm{animation:octocat-wave 560ms ease-in-out}}"], ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.wrong); // eslint-disable-next-line react/prop-types

function GitHubCorner({
  projectUrl
}) {
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(SVGWrapper, {
    className: "githubCorner",
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/QuizBackground/index.js":
/*!************************************************!*\
  !*** ./src/components/QuizBackground/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/components/QuizBackground/index.js

const QuizBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizBackground",
  componentId: "ouh9z4-0"
})(["width:100%;background-size:cover;background-position:center;background-image:url(", ");background-color:", ";flex:1;@media screen and (max-width:500px){background-image:none;&:after{content:\"\";background-size:cover;background-position:center;background-image:linear-gradient(transparent,", "),url(", ");display:block;width:100%;height:210px;position:absolute;top:0;left:0;right:0;z-index:1;}*:first-child{position:relative;z-index:10;}}"], ({
  backgroundImage
}) => backgroundImage, ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.mainBg, ({
  backgroundImage
}) => backgroundImage);
/* harmony default export */ __webpack_exports__["default"] = (QuizBackground);

/***/ }),

/***/ "./src/components/QuizLogo/index.js":
/*!******************************************!*\
  !*** ./src/components/QuizLogo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\conatus-progam\\JavaScript\\aluraquiz\\src\\components\\QuizLogo\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Logo({
  className
}) {
  return __jsx("svg", {
    className: className,
    width: "135",
    height: "67",
    viewBox: "0 0 135 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("mask", {
    id: "path-1-outside-1",
    maskUnits: "userSpaceOnUse",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("rect", {
    fill: "white",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    stroke: "#252B51",
    strokeWidth: "4",
    mask: "url(#path-1-outside-1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M86.8469 62.368C84.8917 63.0142 83.211 62.938 81.805 62.1393C80.3989 61.3406 79.3095 59.9506 78.5365 57.9694C77.8934 56.3209 77.6895 54.6809 77.9248 53.0493C78.1601 51.4178 78.8115 49.9732 79.879 48.7154C80.9406 47.4425 82.334 46.521 84.0592 45.9507C85.7351 45.3968 87.2807 45.4835 88.696 46.2109C90.1219 46.9177 91.2419 48.3146 92.0561 50.4017C92.4928 51.5209 92.7099 52.6955 92.7075 53.9256C92.7051 55.1558 92.4778 56.3322 92.0254 57.4549C93.894 58.2032 94.8579 58.6529 94.9169 58.8042C95.0703 59.1974 95.0598 59.5509 94.8854 59.8646C94.7333 60.1881 94.4273 60.4258 93.9672 60.5779C93.6222 60.692 92.5301 60.4127 90.6909 59.74C89.6892 60.976 88.4079 61.852 86.8469 62.368ZM86.3954 60.2122C87.102 59.9787 87.7105 59.4702 88.221 58.6868C87.4993 58.3107 86.7651 57.8789 86.0184 57.3915C85.2882 56.8987 84.8877 56.5616 84.8169 56.3801C84.6576 55.9717 84.6306 55.6648 84.7359 55.4592C84.8518 55.2331 85.1068 55.0549 85.5012 54.9246C85.5505 54.9083 85.9935 55.0692 86.8303 55.4073C87.1653 55.5527 87.9239 55.8568 89.1062 56.3197C89.2619 55.4828 89.2926 54.6105 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5411 50.9489C88.1281 49.8902 87.5871 49.1215 86.9179 48.6426C86.2653 48.1583 85.4789 48.0682 84.5587 48.3723C83.5072 48.7199 82.7122 49.3924 82.1739 50.3899C81.6356 51.3874 81.3576 52.5293 81.3401 53.8157C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7314 83.14 59.2137C83.6541 59.6756 84.206 59.9968 84.7959 60.1775C85.3858 60.3581 85.9189 60.3697 86.3954 60.2122Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.647 55.5391C105.682 55.8179 105.602 56.0407 105.407 56.2075C105.219 56.3894 104.935 56.5428 104.557 56.6677C103.424 57.0424 102.765 56.9954 102.583 56.5265L102.394 55.6156C102.058 56.0853 101.64 56.5821 101.139 57.1061C100.639 57.63 100.183 57.9599 99.7723 58.0957C97.3405 58.8995 95.8385 58.5678 95.2662 57.1008C94.2926 54.6054 94.0498 51.6294 94.5377 48.1729C94.5992 47.7599 94.7072 47.4424 94.8618 47.2206C95.0328 46.9933 95.3894 46.7901 95.9316 46.6108C96.5067 46.4208 96.9634 46.3552 97.3018 46.4141C97.6506 46.4524 97.8634 46.5699 97.9401 46.7665C97.9578 46.8119 97.9205 46.9779 97.8283 47.2645C97.7243 47.5208 97.6449 47.769 97.5901 48.0091C96.972 50.894 97.1025 53.4632 97.9816 55.7167C98.0583 55.9133 98.2083 56.0601 98.4316 56.157C98.655 56.2539 98.8323 56.2807 98.9638 56.2372C99.3253 56.1177 99.8712 55.758 100.602 55.158C101.349 54.5525 101.887 54.0074 102.218 53.5226L101.994 51.5222C101.73 49.1337 101.574 47.6655 101.527 47.1175C101.472 46.4528 101.51 45.8853 101.642 45.4149C101.784 44.9239 102.168 44.5752 102.792 44.3688C103.663 44.081 104.193 44.179 104.382 44.663C104.411 44.7386 104.425 44.8451 104.423 44.9824C104.431 45.0991 104.442 45.198 104.455 45.279L104.903 49.28C105.253 52.4595 105.501 54.5459 105.647 55.5391Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.645 40.4037C105.462 39.9349 105.456 39.4674 105.627 39.0012C105.814 38.5296 106.195 38.1988 106.77 38.0087C107.378 37.8078 107.971 37.8079 108.551 38.0091C109.146 38.2049 109.53 38.5221 109.701 38.9607C109.872 39.3992 109.79 39.8534 109.453 40.323C109.117 40.7927 108.645 41.128 108.037 41.329C107.446 41.5245 106.941 41.5377 106.522 41.3687C106.115 41.1791 105.822 40.8574 105.645 40.4037ZM107.968 53.133C107.862 52.8607 107.531 49.8968 106.975 44.2411L106.5 43.4506C106.435 43.2842 106.492 43.1204 106.67 42.959C106.848 42.7977 107.241 42.6166 107.849 42.4156C108.326 42.2581 108.718 42.265 109.026 42.4364C109.35 42.6024 109.577 42.8517 109.707 43.1844C109.743 43.2752 109.773 43.4016 109.8 43.5637L110.792 52.4556L111.268 53.2461C111.332 53.4124 111.276 53.5763 111.098 53.7376C110.919 53.899 110.526 54.0801 109.918 54.2811C109.376 54.4603 108.967 54.4334 108.69 54.2003C108.408 53.9522 108.167 53.5964 107.968 53.133Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M122.195 49.9925C118.16 51.8214 115.862 52.8715 115.3 53.1426C114.715 53.404 114.415 53.5375 114.399 53.5429C114.103 53.6407 113.825 53.6898 113.566 53.6902C113.29 53.696 113.112 53.6439 113.032 53.5337C112.969 53.469 112.85 53.3546 112.675 53.1906C112.5 53.0265 112.386 52.8765 112.333 52.7404C112.279 52.6042 112.279 52.4848 112.332 52.382C112.379 52.2641 112.533 52.1363 112.794 51.9986C113.04 51.8664 113.211 51.7839 113.31 51.7514C113.804 50.7345 114.443 49.3536 115.228 47.6088C116.327 45.1966 117.18 43.4122 117.786 42.2557L113.049 44.3079C112.54 44.4762 112.194 44.326 112.011 43.8571C111.864 43.4791 111.864 43.0521 112.012 42.5762C112.053 42.4432 112.655 42.1077 113.818 41.5697C114.98 41.0317 116.256 40.4735 117.644 39.8951C119.043 39.2962 119.939 38.9316 120.334 38.8013C120.958 38.5949 121.4 38.8244 121.66 39.4899C121.736 39.6865 121.736 39.9 121.659 40.1303C121.576 40.3456 121.445 40.5339 121.267 40.6952L120.893 41.3055C120.32 42.4511 119.633 43.899 118.832 45.6493L116.786 49.9623C119.264 48.8017 120.864 48.1019 121.587 47.863C122.212 47.6566 122.654 47.8861 122.913 48.5516C123.014 48.8087 122.982 49.0838 122.818 49.377C122.665 49.6497 122.457 49.8548 122.195 49.9925Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M127.144 43.2346C127.205 43.6755 127.15 44.0096 126.979 44.2369C126.824 44.4587 126.476 44.6593 125.933 44.8385C125.013 45.1426 124.438 44.9998 124.208 44.41C124.061 44.0319 123.926 43.4019 123.805 42.52C123.694 41.6176 123.567 40.4131 123.424 38.9065C123.23 36.8876 123.039 35.2092 122.851 33.8713C122.726 33.0759 123.165 32.5126 124.167 32.1813C124.66 32.0184 125.071 31.9767 125.399 32.0561C125.726 32.1356 125.913 32.3299 125.96 32.6389L127.144 43.2346ZM126.495 49.0581C126.067 49.1993 125.642 49.1779 125.217 48.9937C124.787 48.7944 124.495 48.4982 124.342 48.1049C124.189 47.7117 124.244 47.2836 124.509 46.8205C124.767 46.3423 125.184 46.0082 125.759 45.8181C126.269 45.6498 126.74 45.622 127.174 45.7348C127.601 45.8325 127.904 46.1082 128.081 46.5619C128.263 47.0307 128.185 47.5178 127.844 48.0232C127.519 48.5231 127.07 48.8681 126.495 49.0581Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.918 48.6425C86.2653 48.1582 85.4789 48.0681 84.5588 48.3723C83.5072 48.7199 82.7123 49.3924 82.1739 50.3899C81.6356 51.3874 81.3577 52.5293 81.3401 53.8156C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7313 83.14 59.2137C83.6541 59.6755 84.2061 59.9968 84.7959 60.1774C85.3858 60.3581 85.919 60.3696 86.3955 60.2121C86.5752 60.1528 86.7485 60.0756 86.9155 59.9806C87.4052 59.7022 87.8404 59.2709 88.2211 58.6867C87.8894 58.5139 87.5552 58.3294 87.2183 58.1331C86.822 57.9021 86.422 57.6549 86.0185 57.3915C85.2883 56.8987 84.8878 56.5615 84.817 56.38C84.6576 55.9717 84.6306 55.6647 84.736 55.4592C84.8518 55.2331 85.1069 55.0549 85.5012 54.9245C85.5505 54.9082 85.9935 55.0691 86.8303 55.4072C86.9456 55.4572 87.1111 55.5261 87.3267 55.6137C87.7377 55.7808 88.3308 56.0161 89.1062 56.3197C89.2156 55.7319 89.2633 55.1267 89.2492 54.504C89.2433 54.24 89.2263 53.9728 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5412 50.9488C88.1282 49.8902 87.5871 49.1214 86.918 48.6425ZM76.0706 52.8227C76.348 50.8995 77.1239 49.167 78.4002 47.6611C79.691 46.1156 81.3851 45.0052 83.427 44.3303C85.551 43.6282 87.6618 43.7115 89.5957 44.7013C90.9023 45.3523 91.9307 46.3716 92.736 47.6463C92.8284 47.1947 92.9905 46.717 93.2874 46.2909L93.3053 46.2653L93.3242 46.2402C93.8433 45.5503 94.6764 45.1963 95.2995 44.9904C95.9611 44.7717 96.7751 44.5871 97.5859 44.7119C98.1981 44.7906 99.2006 45.087 99.6492 46.0635C99.6756 45.6926 99.7337 45.3314 99.8309 44.9848L99.8348 44.9709C100.169 43.8195 101.091 43.1018 102.16 42.7484C102.715 42.5649 103.452 42.3979 104.211 42.5385C104.387 42.5711 104.554 42.6182 104.712 42.6785C104.751 42.5709 104.797 42.4684 104.85 42.3714C104.406 41.9859 104.088 41.5076 103.885 40.9855C103.561 40.1566 103.547 39.2904 103.854 38.4516L103.862 38.4311L103.87 38.4108C104.271 37.3978 105.111 36.7276 106.138 36.3882C107.139 36.0572 108.186 36.046 109.195 36.3927C110.169 36.7161 111.057 37.3426 111.461 38.3787C111.817 39.2888 111.663 40.1703 111.24 40.9195C111.335 40.86 111.432 40.804 111.525 40.7521C111.889 40.549 112.382 40.3067 112.978 40.0313C114.164 39.4824 115.46 38.9154 116.864 38.3302C118.234 37.7438 119.211 37.3428 119.701 37.1808C120.176 37.024 120.759 36.9409 121.359 37.0696C121.237 35.9352 121.116 34.9468 120.998 34.1027C120.882 33.3446 121.024 32.5452 121.567 31.8491C122.081 31.1881 122.819 30.7975 123.535 30.5609C124.204 30.3399 125.032 30.1867 125.875 30.3911C126.323 30.4997 126.8 30.7203 127.184 31.1193C127.569 31.5183 127.749 31.981 127.813 32.4033L127.817 32.4329L129.003 43.0404C129.063 43.4965 129.067 44.0693 128.846 44.6302C129.313 44.9911 129.641 45.4679 129.841 45.9799C130.253 47.0361 130.012 48.0656 129.441 48.9184C128.904 49.7411 128.12 50.3503 127.127 50.6785C126.215 50.9797 125.276 50.9225 124.42 50.5509L124.398 50.5415L124.376 50.5316C124.343 50.5162 124.31 50.5005 124.278 50.4844C123.99 50.8854 123.608 51.2323 123.124 51.4871L123.074 51.5135L123.022 51.5371C118.972 53.3729 116.703 54.4094 116.168 54.6675L116.143 54.6796L116.117 54.691C115.825 54.8219 115.602 54.9215 115.449 54.9893L115.268 55.0692L115.207 55.0959L115.17 55.1113L115.135 55.1254C115.127 55.1288 115.084 55.1457 115.031 55.1633C114.58 55.3121 114.096 55.4084 113.589 55.4117C113.337 55.416 112.764 55.4033 112.217 55.1226C111.972 55.3063 111.712 55.4393 111.507 55.534C111.22 55.6658 110.895 55.7874 110.551 55.9014C109.764 56.1614 108.538 56.3295 107.523 55.5473C107.552 56.2045 107.325 56.8937 106.724 57.431C106.269 57.855 105.709 58.1165 105.19 58.288C104.546 58.5008 103.797 58.682 103.069 58.6299C102.836 58.6133 102.575 58.5707 102.308 58.4811C101.777 58.9962 101.145 59.4712 100.404 59.716C99.1819 60.1201 97.9238 60.3564 96.7544 60.1905C96.7079 60.3275 96.6493 60.464 96.5774 60.5994C96.1604 61.4419 95.3876 61.9377 94.5994 62.1983C94.0791 62.3702 93.5765 62.3257 93.3365 62.2981C93.0303 62.2629 92.7065 62.1941 92.3886 62.1128C92.0537 62.0271 91.6741 61.9141 91.2533 61.7765C90.1954 62.7662 88.9324 63.5079 87.4791 63.9883C85.1391 64.7618 82.8349 64.7475 80.8226 63.6044C78.9397 62.5347 77.6379 60.7602 76.7761 58.5512C76.0387 56.661 75.7935 54.7442 76.0706 52.8227ZM90.691 59.7399C89.6892 60.976 88.4079 61.852 86.847 62.3679C84.8917 63.0142 83.211 62.938 81.805 62.1392C80.399 61.3405 79.3095 59.9505 78.5366 57.9693C77.8934 56.3208 77.6895 54.6808 77.9248 53.0493C78.1602 51.4178 78.8115 49.9731 79.879 48.7154C80.9406 47.4425 82.334 46.5209 84.0592 45.9507C85.7352 45.3967 87.2808 45.4834 88.6961 46.2108C90.1219 46.9176 91.2419 48.3146 92.0562 50.4017C92.2034 50.7792 92.3258 51.163 92.4231 51.5531C92.6143 52.3196 92.7091 53.1104 92.7075 53.9256C92.7071 54.1719 92.6976 54.416 92.679 54.658C92.6051 55.6246 92.3872 56.5569 92.0254 57.4549C92.7167 57.7317 93.2842 57.9677 93.7278 58.1628C94.4834 58.4951 94.8797 58.7088 94.9169 58.8041C95.0216 59.0727 95.05 59.3227 95.0019 59.5541C94.9795 59.6616 94.9407 59.7651 94.8854 59.8646C94.7334 60.188 94.4273 60.4258 93.9672 60.5778C93.6222 60.6919 92.5301 60.4126 90.691 59.7399ZM95.1944 56.9122C95.2179 56.9754 95.2418 57.0382 95.2662 57.1008C95.4947 57.6866 95.8715 58.0913 96.3966 58.315C96.5082 58.3626 96.6267 58.402 96.7518 58.4333C97.5113 58.6227 98.5182 58.5102 99.7723 58.0956C100.122 57.9799 100.505 57.7232 100.92 57.3255C100.992 57.2565 101.065 57.1834 101.139 57.106C101.187 57.0561 101.234 57.0064 101.28 56.957C101.351 56.8815 101.419 56.8065 101.486 56.7321C101.491 56.7268 101.496 56.7214 101.501 56.716C101.599 56.6072 101.693 56.4996 101.784 56.3932C101.786 56.3903 101.788 56.3874 101.791 56.3845C102.015 56.1206 102.216 55.8643 102.394 55.6155L102.583 56.5265C102.714 56.8644 103.093 56.9832 103.719 56.8829C103.961 56.844 104.241 56.7723 104.557 56.6676C104.935 56.5427 105.219 56.3893 105.407 56.2074C105.602 56.0406 105.682 55.8178 105.648 55.539C105.501 54.5458 105.253 52.4595 104.903 49.2799L104.455 45.279C104.442 45.1979 104.431 45.099 104.423 44.9823C104.425 44.845 104.411 44.7386 104.382 44.663C104.193 44.179 103.663 44.0809 102.792 44.3688C102.168 44.5751 101.784 44.9238 101.642 45.4148C101.51 45.8852 101.472 46.4528 101.527 47.1175C101.574 47.6654 101.73 49.1336 101.994 51.5221L102.218 53.5226C101.955 53.9077 101.561 54.3308 101.036 54.7921C100.9 54.9115 100.755 55.0334 100.602 55.1579C100.443 55.288 100.294 55.4068 100.153 55.5143C99.6432 55.9026 99.2469 56.1436 98.9638 56.2372C98.8324 56.2806 98.655 56.2539 98.4317 56.1569C98.2084 56.06 98.0583 55.9132 97.9816 55.7166C97.1025 53.4632 96.972 50.894 97.5902 48.009C97.6449 47.769 97.7243 47.5208 97.8283 47.2644C97.9206 46.9778 97.9578 46.8119 97.9401 46.7665C97.8634 46.5699 97.6506 46.4524 97.3018 46.414C96.9635 46.3551 96.5067 46.4207 95.9317 46.6108C95.3895 46.79 95.0328 46.9933 94.8618 47.2205C94.7072 47.4424 94.5992 47.7598 94.5377 48.1728C94.3804 49.2872 94.2991 50.3517 94.2937 51.3662C94.2889 52.2589 94.343 53.113 94.4559 53.9284C94.486 54.1459 94.5203 54.3607 94.5588 54.5727C94.7079 55.3938 94.9197 56.1737 95.1944 56.9122ZM106.975 44.241C107.531 49.8967 107.862 52.8607 107.968 53.1329C108.167 53.5963 108.408 53.9521 108.69 54.2003C108.967 54.4333 109.376 54.4602 109.918 54.281C110.347 54.1394 110.669 54.0076 110.884 53.8856C110.974 53.8345 111.045 53.7852 111.098 53.7376C111.276 53.5762 111.332 53.4124 111.268 53.246L110.792 52.4555L109.8 43.5636C109.773 43.4015 109.743 43.2751 109.707 43.1844C109.628 42.9805 109.512 42.8079 109.359 42.6667C109.263 42.5774 109.151 42.5006 109.026 42.4364C108.85 42.3388 108.648 42.2945 108.418 42.3036C108.244 42.3104 108.054 42.3478 107.849 42.4155C107.241 42.6165 106.848 42.7976 106.67 42.959C106.598 43.0239 106.546 43.0893 106.514 43.155C106.466 43.2526 106.461 43.3511 106.5 43.4505L106.975 44.241ZM117.786 42.2556C117.459 42.8799 117.06 43.6871 116.589 44.6772C116.187 45.5214 115.734 46.4986 115.228 47.6088C114.443 49.3536 113.804 50.7344 113.31 51.7513C113.212 51.7839 113.04 51.8663 112.794 51.9986C112.758 52.018 112.723 52.0373 112.69 52.0563C112.67 52.0681 112.65 52.0798 112.632 52.0914C112.513 52.166 112.428 52.2374 112.376 52.3057C112.357 52.3316 112.342 52.357 112.332 52.382C112.283 52.4768 112.28 52.5859 112.321 52.7092C112.325 52.7195 112.328 52.7298 112.333 52.7403C112.349 52.7827 112.372 52.8265 112.4 52.8717C112.463 52.9713 112.554 53.0776 112.675 53.1905C112.85 53.3545 112.969 53.4689 113.032 53.5337C113.035 53.5388 113.039 53.5439 113.044 53.5488C113.064 53.5725 113.089 53.5933 113.119 53.6111C113.129 53.6169 113.14 53.6224 113.151 53.6276C113.248 53.6731 113.386 53.6939 113.566 53.6901C113.825 53.6897 114.103 53.6406 114.399 53.5429C114.415 53.5374 114.715 53.404 115.3 53.1425C115.862 52.8714 118.16 51.8214 122.196 49.9925C122.457 49.8548 122.665 49.6496 122.818 49.377C122.839 49.3385 122.859 49.3003 122.876 49.2624C122.984 49.0203 122.999 48.791 122.922 48.5743C122.919 48.5667 122.916 48.5591 122.913 48.5515C122.785 48.223 122.612 48.0007 122.395 47.8847C122.173 47.7657 121.903 47.7584 121.587 47.8629C121.161 48.0038 120.43 48.3047 119.394 48.7657C118.673 49.0869 117.803 49.4857 116.786 49.9622L118.832 45.6492C119.633 43.899 120.32 42.451 120.893 41.3054L121.267 40.6951C121.445 40.5338 121.576 40.3455 121.659 40.1303C121.661 40.1255 121.662 40.1208 121.664 40.1161C121.736 39.8911 121.735 39.6824 121.66 39.4898C121.637 39.431 121.612 39.3756 121.587 39.3237C121.556 39.262 121.523 39.2052 121.489 39.1531C121.408 39.0318 121.317 38.9365 121.215 38.8671C120.979 38.707 120.685 38.685 120.334 38.8012C119.939 38.9315 119.043 39.2962 117.644 39.8951C116.256 40.4734 114.98 41.0316 113.818 41.5696C112.655 42.1076 112.053 42.4432 112.012 42.5762C111.864 43.052 111.864 43.479 112.011 43.8571C112.194 44.3259 112.54 44.4762 113.049 44.3078L117.786 42.2556ZM123.426 38.9237C123.47 39.3826 123.512 39.8135 123.552 40.2162C123.644 41.1284 123.728 41.8963 123.805 42.52C123.926 43.4018 124.061 44.0318 124.208 44.4099C124.231 44.4683 124.257 44.5222 124.287 44.5718C124.496 44.9242 124.876 45.0558 125.427 44.9666C125.582 44.9414 125.751 44.8987 125.934 44.8384C126.476 44.6592 126.824 44.4587 126.979 44.2369C127.036 44.1606 127.08 44.0722 127.112 43.9719C127.174 43.7733 127.185 43.5275 127.144 43.2346L125.96 32.6389C125.913 32.3298 125.726 32.1355 125.399 32.0561C125.071 31.9766 124.66 32.0183 124.168 32.1813C123.165 32.5125 122.726 33.0759 122.851 33.8713C123.039 35.2092 123.23 36.8876 123.424 38.9065C123.425 38.9122 123.426 38.9179 123.426 38.9237ZM127.668 45.9692C127.528 45.8561 127.363 45.778 127.174 45.7347C126.888 45.6604 126.586 45.6471 126.268 45.6948C126.103 45.7195 125.933 45.7606 125.759 45.8181C125.244 45.9884 124.856 46.2744 124.594 46.676C124.564 46.7226 124.536 46.7708 124.509 46.8205C124.419 46.977 124.354 47.1295 124.312 47.2781C124.233 47.5605 124.24 47.8285 124.333 48.0821C124.336 48.0897 124.339 48.0973 124.342 48.1049C124.445 48.3696 124.611 48.5903 124.84 48.7672C124.951 48.853 125.077 48.9285 125.217 48.9936C125.642 49.1778 126.067 49.1993 126.495 49.0581C127.07 48.868 127.519 48.523 127.844 48.0231C128.185 47.5177 128.263 47.0307 128.081 46.5618C127.982 46.309 127.844 46.1115 127.668 45.9692ZM109.173 40.6532C109.275 40.5517 109.369 40.4416 109.453 40.323C109.79 39.8533 109.872 39.3992 109.701 38.9606C109.53 38.522 109.146 38.2048 108.551 38.009C107.971 37.8078 107.378 37.8077 106.77 38.0086C106.195 38.1987 105.814 38.5296 105.627 39.0012C105.456 39.4673 105.462 39.9348 105.645 40.4036C105.774 40.7337 105.964 40.9938 106.215 41.1841C106.309 41.2554 106.411 41.3169 106.522 41.3686C106.802 41.4816 107.121 41.5132 107.478 41.4632C107.655 41.4385 107.841 41.3937 108.037 41.3289C108.492 41.1787 108.87 40.9535 109.173 40.6532Z",
    fill: "#252B51",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "134.373",
    height: "67",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

Logo.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const QuizLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Logo).withConfig({
  displayName: "QuizLogo",
  componentId: "rct3ik-0"
})(["margin:auto;display:block;@media screen and (max-width:500px){margin:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizLogo);

/***/ }),

/***/ "./src/components/Widget/index.js":
/*!****************************************!*\
  !*** ./src/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // marron: #34130a
//laranja: #b13b15
//vermelho: #bd2800
//letras: #a39169
//amarelo claro: #eedfb4
//amarelo escuro: #b9934a
//azul claro: #a3b29f
//azul escuro: #377d72

const Widget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget",
  componentId: "i6tyvd-0"
})(["margin-top:24px;margin-bottom:24px;border:1px solid ", ";background-color:", ";border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"], ({
  theme
}) => {
  console.log(theme);
  return theme.colors.primary;
}, ({
  theme
}) => {
  console.log(theme);
  return theme.colors.mainBg;
});
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Widget__Header",
  componentId: "i6tyvd-1"
})(["display:flex;justify-content:flex-start;align-items:center;padding:18px 32px;background-color:", ";*{margin:0;}"], ({
  theme
}) => theme.colors.primary);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget__Content",
  componentId: "i6tyvd-2"
})(["padding:24px 32px 32px 32px;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}ul{list-style:none;padding:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZWQiLCJkaXYiLCJkYiIsImJnIiwiUXVpekNvbnRhaW5lciIsIkhvbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRm9vdGVyV3JhcHBlciIsImZvb3RlciIsIkZvb3RlciIsInByb3BzIiwiV3JhcHBlciIsIlNWR1dyYXBwZXIiLCJzdmciLCJ0aGVtZSIsImNvbG9ycyIsIm1haW5CZyIsIndyb25nIiwiR2l0SHViQ29ybmVyIiwicHJvamVjdFVybCIsInRyYW5zZm9ybU9yaWdpbiIsIlF1aXpCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiTG9nbyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJRdWl6TG9nbyIsIldpZGdldCIsImNvbnNvbGUiLCJsb2ciLCJwcmltYXJ5IiwiSGVhZGVyIiwiaGVhZGVyIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FB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V0FBUyxFQUFFRSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURiLENBQWpCO0FBSUEsTUFBTUMsUUFBUSxHQUFHOUIsd0RBQU0sQ0FBQ3dCLElBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxnRkFBZDtBQVFlTSx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7Q0FDUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELE1BQU1DLE1BQU0sR0FBRy9CLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVBBR0csQ0FBQztBQUFDYztBQUFELENBQUQsS0FBYTtBQUM3QmlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBWjtBQUNBLFNBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFha0IsT0FBcEI7QUFDSCxDQU5nQixFQU9HLENBQUM7QUFBQ25CO0FBQUQsQ0FBRCxLQUFhO0FBQzdCaUIsU0FBTyxDQUFDQyxHQUFSLENBQVlsQixLQUFaO0FBQ0EsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE1BQXBCO0FBQ0gsQ0FWZ0IsQ0FBWjtBQTBCUGMsTUFBTSxDQUFDSSxNQUFQLEdBQWdCbkMsd0RBQU0sQ0FBQ29DLE1BQXZCO0FBQUE7QUFBQTtBQUFBLHdIQUtzQixDQUFDO0FBQUVyQjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFrQixPQUxsRDtBQVlBSCxNQUFNLENBQUNNLE9BQVAsR0FBaUJyQyx3REFBTSxDQUFDQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQWNlOEIscUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3REEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCdcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbydcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXInXG5cblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RiLmJnfSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogIHNjcm9sbDtcbmA7XG5cbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyICA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW46ICA3JTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8V2lkZ2V0PlxuICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICAgICAgPGgxPntkYi50aXRsZX08L2gxPlxuICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgICA8cD57ZGIuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDwvV2lkZ2V0PlxuXG4gICAgICAgIDxXaWRnZXQ+XG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICAgICAgPGgxPlF1aXplcyBkYSBHYWxlcmE8L2gxPlxuXG4gICAgICAgICAgICA8cD5sb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLjwvcD5cbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9RdWl6Q29udGFpbmVyPlxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1bmlvcnNuMTQwOS9hbHVyYXF1aXotc3RhcnRyZWsuZ2l0XCIgLz5cbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbi8vIHNyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qc1xyXG5jb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDU4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgfVxyXG4gIHB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6I2EzYjI5ZiA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZ1xyXG4gICAgPEZvb3RlcldyYXBwZXIgey4uLnByb3BzfT5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFsdXJhLmNvbS5ici9cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmFsdXJhLmNvbS5ici9hc3NldHMvaW1nL2FsdXJhLWxvZ28td2hpdGUuMTU3MDU1MDcwNy5zdmdcIiBhbHQ9XCJMb2dvIEFsdXJhXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8cD5cclxuICAgICAgICBPcmd1bGhvc2FtZW50ZSBjcmlhZG8gZHVyYW50ZVxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgICAgYVxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFsdXJhLmNvbS5ici9cIj5cclxuICAgICAgICAgIDxzcGFuPkltZXJzw6NvIFJlYWN0IGRhIEFsdXJhPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9wPlxyXG4gICAgPC9Gb290ZXJXcmFwcGVyPlxyXG4gICk7XHJcbn0iLCIvLyBzcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXIvaW5kZXguanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuYDtcclxuXHJcbmNvbnN0IFNWR1dyYXBwZXIgPSBzdHlsZWQuc3ZnYFxyXG4gIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ307XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndyb25nfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciAub2N0by1hcm17XHJcbiAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgb2N0b2NhdC13YXZle1xyXG4gICAgMCUsMTAwJXt0cmFuc2Zvcm06cm90YXRlKDApfVxyXG4gICAgMjAlLDYwJXt0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyl9XHJcbiAgICA0MCUsODAle3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAmOmhvdmVyIC5vY3RvLWFybXtcclxuICAgICAgYW5pbWF0aW9uOm5vbmVcclxuICAgIH1cclxuICAgICYgLm9jdG8tYXJte1xyXG4gICAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2l0SHViQ29ybmVyKHsgcHJvamVjdFVybCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8YSBocmVmPXtwcm9qZWN0VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPFNWR1dyYXBwZXIgY2xhc3NOYW1lPVwiZ2l0aHViQ29ybmVyXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgdmlld0JveD1cIjAgMCAyNTAgMjUwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMCBMMTE1LDExNSBMMTMwLDExNSBMMTQyLDE0MiBMMjUwLDI1MCBMMjUwLDAgWlwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyOC4zLDEwOS4wIEMxMTMuOCw5OS43IDExOS4wLDg5LjYgMTE5LjAsODkuNiBDMTIyLjAsODIuNyAxMjAuNSw3OC42IDEyMC41LDc4LjYgQzExOS4yLDcyLjAgMTIzLjQsNzYuMyAxMjMuNCw3Ni4zIEMxMjcuMyw4MC45IDEyNS41LDg3LjMgMTI1LjUsODcuMyBDMTIyLjksOTcuNiAxMzAuNiwxMDEuOSAxMzQuNCwxMDMuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcxMzBweCAxMDZweCcgfX0gY2xhc3NOYW1lPVwib2N0by1hcm1cIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMTUuMCwxMTUuMCBDMTE0LjksMTE1LjEgMTE4LjcsMTE2LjUgMTE5LjgsMTE1LjQgTDEzMy43LDEwMS42IEMxMzYuOSw5OS4yIDEzOS45LDk4LjQgMTQyLjIsOTguNiBDMTMzLjgsODguMCAxMjcuNSw3NC40IDE0My44LDU4LjAgQzE0OC41LDUzLjQgMTU0LjAsNTEuMiAxNTkuNyw1MS4wIEMxNjAuMyw0OS40IDE2My4yLDQzLjYgMTcxLjQsNDAuMSBDMTcxLjQsNDAuMSAxNzYuMSw0Mi41IDE3OC44LDU2LjIgQzE4My4xLDU4LjYgMTg3LjIsNjEuOCAxOTAuOSw2NS40IEMxOTQuNSw2OS4wIDE5Ny43LDczLjIgMjAwLjEsNzcuNiBDMjEzLjgsODAuMiAyMTYuMyw4NC45IDIxNi4zLDg0LjkgQzIxMi43LDkzLjEgMjA2LjksOTYuMCAyMDUuNCw5Ni42IEMyMDUuMSwxMDIuNCAyMDMuMCwxMDcuOCAxOTguMywxMTIuNSBDMTgxLjksMTI4LjkgMTY4LjMsMTIyLjUgMTU3LjcsMTE0LjEgQzE1Ny45LDExNi45IDE1Ni43LDEyMC45IDE1Mi43LDEyNC45IEwxNDEuMCwxMzYuNSBDMTM5LjgsMTM3LjcgMTQxLjYsMTQxLjkgMTQxLjgsMTQxLjggWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJvY3RvLWJvZHlcIiAvPlxyXG4gICAgICAgIDwvU1ZHV3JhcHBlcj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn0iLCIvLyBzcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qc1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFF1aXpCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsoeyBiYWNrZ3JvdW5kSW1hZ2UgfSkgPT4gYmFja2dyb3VuZEltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkJnfTtcclxuICBmbGV4OiAxO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9KSxcclxuICAgICAgICB1cmwoJHsoeyBiYWNrZ3JvdW5kSW1hZ2UgfSkgPT4gYmFja2dyb3VuZEltYWdlfSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpekJhY2tncm91bmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gTG9nbyh7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiNjdcIiB2aWV3Qm94PVwiMCAwIDEzNSA2N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDApXCI+XHJcbiAgICAgICAgPG1hc2sgaWQ9XCJwYXRoLTEtb3V0c2lkZS0xXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMlwiIHk9XCIyXCIgd2lkdGg9XCIxMTBcIiBoZWlnaHQ9XCI1MFwiIGZpbGw9XCJibGFja1wiPlxyXG4gICAgICAgICAgPHJlY3QgZmlsbD1cIndoaXRlXCIgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMTEwXCIgaGVpZ2h0PVwiNTBcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMi4wMzQ1IDRIMzYuODM1NEMzNy4wNzY2IDQgMzcuMjc4NyA0LjE4NiAzNy4yNzg3IDQuNDA4VjQ4LjYyOEMzNy4yNzc4IDQ4LjczNjEgMzcuMjMwOSA0OC44Mzk2IDM3LjE0OCA0OC45MTYyQzM3LjA2NTEgNDguOTkyOCAzNi45NTI5IDQ5LjAzNjMgMzYuODM1NCA0OS4wMzc1SDMyLjAzNDVDMzEuOTE3MSA0OS4wMzYzIDMxLjgwNDggNDguOTkyOCAzMS43MjE5IDQ4LjkxNjJDMzEuNjM5IDQ4LjgzOTYgMzEuNTkyMSA0OC43MzYxIDMxLjU5MTMgNDguNjI4VjQuNDA4QzMxLjU5MTMgNC4xODYgMzEuNzkxNyA0IDMyLjAzNDUgNFpNNjUuMDI5NiA0MC4zODU1VjQxLjVDNjUuMDI5NiA0MS45ODMgNjQuOTQ5OCA0Mi42NTA1IDY0Ljc0NzcgNDMuNTA1NUM2NC41ODY0IDQ0LjMyMTUgNjQuMTAyNCA0NS4xNzUgNjMuMzM2NCA0NS45OTI1QzYyLjU3MDUgNDYuODEgNjEuNDQxMiA0Ny41NTI1IDU5LjkwNzcgNDguMTQ2NUM1OC4zNzU5IDQ4Ljc0MDUgNTYuMjc2OSA0OS4wMzc1IDUzLjU3NSA0OS4wMzc1QzUwLjg3MTQgNDkuMDM3NSA0OC43NzQxIDQ4Ljc0MDUgNDcuMjQyMiA0OC4xNDY1QzQ1LjcxMDQgNDcuNTUyNSA0NC41Nzk0IDQ2Ljg0NiA0My44MTM1IDQ1Ljk5MjVDNDMuMDQ3NiA0NS4xNzUgNDIuNTYxOSA0NC4zMjE1IDQyLjQwMDYgNDMuNDY4QzQyLjIzOTMgNDIuNjEzIDQyLjExODcgNDEuOTgzIDQyLjExODcgNDEuNVYxNi4zMjdDNDIuMTE4NyAxNi4xMDM1IDQyLjMyMDcgMTUuOTE5IDQyLjU2MTkgMTUuOTE5SDQ3LjM2MjhDNDcuNjA0IDE1LjkxOSA0Ny44MDYxIDE2LjEwMzUgNDcuODA2MSAxNi4zMjdWMzkuOTA0QzQ3LjgwNjEgNDAuNjg0IDQ3LjkyNjcgNDEuMjM5IDQ4LjA0ODkgNDEuNjg2QzQ4LjE2OTUgNDIuMTMxNSA0OC40MTA3IDQyLjU3NyA0OC43NzQxIDQyLjk0NzVDNDkuMTM3NSA0My4zNTcgNDkuNzAzIDQzLjY5IDUwLjQ2ODkgNDMuOTUxQzUxLjE5NDEgNDQuMjEwNSA1Mi4yMDI4IDQ0LjM1OSA1My40NTQ0IDQ0LjM1OUM1NC43NDUgNDQuMzU5IDU1Ljc5MjkgNDQuMjA5IDU2LjU1ODggNDMuOTUxQzU3LjMyNDcgNDMuNjkgNTcuODkwMiA0My4zNTcgNTguMjk0NCA0Mi45ODVDNTguNjk2OSA0Mi42MTQ1IDU4Ljk3ODggNDIuMjA1IDU5LjEwMSA0MS43NTk1QzU5LjIyMTYgNDEuMzE0IDU5LjM4MyA0MC45NDM1IDU5LjM4MyAzOS44NjY1VjE2LjMyN0M1OS4zODMgMTYuMTAzNSA1OS41ODUgMTUuOTE5IDU5LjgyNjIgMTUuOTE5SDY0LjYyNzFDNjQuODY4MyAxNS45MTkgNjUuMDcwNCAxNi4xMDM1IDY1LjA3MDQgMTYuMzI3VjQwLjM4N0g2NS4wMjk2VjQwLjM4NTVaTTgxLjM2NjcgMTUuOTE5SDg0LjU5MzNDODQuODc2OSAxNS45MTkgODUuMDc3MyAxNi4xNzg1IDg0Ljk5NzUgMTYuNDM4TDgzLjkwODkgMjAuMjk5QzgzLjg2ODIgMjAuNDg1IDgzLjY2NjEgMjAuNTk2IDgzLjUwNDcgMjAuNTk2SDgxLjI0NjFDODAuMDM1MyAyMC41OTYgNzkuMDY3MyAyMC43NDYgNzguMzAxMyAyMS4wNDE1Qzc3LjU3NjIgMjEuMzM4NSA3Ni45Njk5IDIxLjY3MyA3Ni41Njc0IDIyLjA4MUM3Ni4yMDkyIDIyLjQyNzIgNzUuOTQ2NiAyMi44NDc1IDc1LjgwMTUgMjMuMzA2NUM3NS42NzkzIDIzLjc1MiA3NS42Mzg1IDI0LjE2MTUgNzUuNjM4NSAyNC41MzJWNDguNjY1NUM3NS42Mzc3IDQ4Ljc3MzYgNzUuNTkwOCA0OC44NzcxIDc1LjUwNzkgNDguOTUzN0M3NS40MjUgNDkuMDMwMyA3NS4zMTI3IDQ5LjA3MzggNzUuMTk1MyA0OS4wNzVINzAuMzU1M0M3MC4yMzc4IDQ5LjA3MzggNzAuMTI1NiA0OS4wMzAzIDcwLjA0MjcgNDguOTUzN0M2OS45NTk4IDQ4Ljg3NzEgNjkuOTEyOCA0OC43NzM2IDY5LjkxMiA0OC42NjU1VjIzLjQ5MjVDNjkuOTEyIDIzLjA0NyA2OS45OTE5IDIyLjM3OCA3MC4xOTM5IDIxLjUyNDVDNzAuMzU1MyAyMC42Njk1IDcwLjgzOTMgMTkuODUzNSA3MS42MDUyIDE5QzcyLjM3MTEgMTguMTgyNSA3My41MDIxIDE3LjQ0IDc1LjAzMzkgMTYuODQ2Qzc2LjUyNjcgMTYuMjE2IDc4LjY2NDcgMTUuOTE5IDgxLjM2NjcgMTUuOTE5Wk0xNS40MTU2IDE1LjkxOUMxOS4zMjY3IDE1LjkxOSAyMi4xOTE2IDE2LjYyNCAyNC4wNDc3IDE4LjAzNEMyNS44NjMxIDE5LjQ0NTUgMjYuNzkwNCAyMS4yMjkgMjYuNzkwNCAyMy4zNDRWNDEuNTM3NUMyNi43OTA0IDQyLjI4IDI2LjYyOSA0My4wOTc1IDI2LjM0NzEgNDMuOTUxQzI2LjA2NTIgNDQuODQyIDI1LjQ5OTcgNDUuNjU4IDI0LjY1MjMgNDYuMzY0NUMyMy44MDQ5IDQ3LjEwNyAyMi42MzY0IDQ3LjY5OTUgMjEuMTg0NCA0OC4yMkMxOS43MzA4IDQ4LjcwMyAxNy43OTQ4IDQ4Ljk2MjUgMTUuNDU2MyA0OC45NjI1QzEzLjA3NyA0OC45NjI1IDExLjE4MDEgNDguNzAzIDkuNzI4MTUgNDguMjJDOC4yNzYxNSA0Ny43MzcgNy4xMDQ0NCA0Ny4xMDcgNi4yNTg2NyA0Ni4zNjQ1QzUuNDExMjYgNDUuNjIyIDQuODQ3NDEgNDQuODA0NSA0LjU2Mzg1IDQzLjk0OTVDNC4yODE5MyA0My4wNiA0LjEyMDU5IDQyLjI0MjUgNC4xMjA1OSA0MS41Mzc1VjM4LjY0MjVDNC4xMjA1OSAzNy4wODI1IDQuNTY1NDggMzUuNjcxIDUuNDExMjYgMzQuNDA4QzYuMjk5NDEgMzMuMTQ2NSA3LjUwODU5IDMyLjIxOCA5LjEyMzU2IDMxLjY5NzVDOS45MzAyMiAzMS40MzggMTAuODE4NCAzMS4xNzg1IDExLjg2NjIgMzAuODQ0QzEyLjg3NSAzMC41MDk1IDEzLjg4MjEgMzAuMjE0IDE0Ljg1MDEgMjkuODc4QzE1LjgxODEgMjkuNTgxIDE2LjYyNjQgMjkuMjg0IDE3LjM1MTYgMjkuMDYyQzE4LjA3ODQgMjguODAyNSAxOC41MjE2IDI4LjY5IDE4LjY4MyAyOC42MTY1QzE4Ljg0NDMgMjguNTQxNSAxOS4wODU1IDI4LjQzMDUgMTkuMzY3NCAyOC4yODJDMTkuNjUxIDI4LjEzMzUgMTkuOTMyOSAyNy45MTE1IDIwLjIxNDggMjcuNjUyQzIwLjQ5ODQgMjcuMzUzNSAyMC43MDA0IDI3LjAyMDUgMjAuOTAwOSAyNi42ODZDMjEuMTAzIDI2LjMxNCAyMS4xODQ0IDI1Ljg2ODUgMjEuMTg0NCAyNS4zODU1VjI0LjIzNUMyMS4xODQ0IDIzLjgyNyAyMS4xMDMgMjMuNDE5IDIwLjkwMDkgMjIuOTczNUMyMC43Mzk2IDIyLjUyNjUgMjAuNDE2OSAyMi4xNTYgMTkuOTczNiAyMS43ODRDMTkuNTMwNCAyMS40MTM1IDE4LjkyNDEgMjEuMTE2NSAxOC4xOTczIDIwLjg5M0MxNy40NzIxIDIwLjY3MSAxNi41NDQ5IDIwLjU2IDE1LjQxNTYgMjAuNTZDMTMuMTk3NiAyMC41NiAxMS43MDQ5IDIwLjk2OCAxMC44OTgyIDIxLjgyMTVDMTAuMjAyNCAyMi41NzE0IDkuNzkxNTUgMjMuNTEgOS43MjgxNSAyNC40OTQ1QzkuNzI4MTUgMjQuNzE4IDkuNTI2MDcgMjQuODY2NSA5LjI4NDg5IDI0Ljg2NjVINC40NDQ4OUM0LjMyNzQ0IDI0Ljg2NTcgNC4yMTUwMiAyNC44MjI1IDQuMTMxODIgMjQuNzQ2MkM0LjA0ODYxIDI0LjY2OTkgNC4wMDEyOCAyNC41NjY2IDQgMjQuNDU4NVYyMy4zODE1QzQgMjIuMzQyIDQuMjAyMDcgMjEuMzc2IDQuNjQ1MzMgMjAuNDg2NUM1LjA0OTQ4IDE5LjU5NCA1LjczMzkzIDE4Ljc3NjUgNi43MDE5MyAxOC4xMDlDNy42MzA4MiAxNy40NCA4LjgwMDg5IDE2Ljg4MzUgMTAuMjUyOSAxNi41MTNDMTEuNjY0MSAxNi4xNDEgMTMuMzk4MSAxNS45MTkgMTUuNDE1NiAxNS45MTlaTTIxLjE0MzcgMzIuMjE4QzIxLjEwNjcgMzIuNDA4NSAyMS4wMjY1IDMyLjU4OTYgMjAuOTA4MyAzMi43NDk2QzIwLjc5MDEgMzIuOTA5NiAyMC42MzY1IDMzLjA0NDkgMjAuNDU3NiAzMy4xNDY1QzIwLjA5NDIgMzMuMzY4NSAxOS43NzMyIDMzLjQ3OTUgMTkuNDQ4OSAzMy41OTJDMTguNzY0NCAzMy44MTQgMTguMDM3NiAzNC4wMzc1IDE3LjI3MTcgMzQuMjk3QzE2LjUwNTggMzQuNTU2NSAxNS43NzkgMzQuODE3NSAxNS4wOTI5IDM1LjAwMkMxNC4yODYyIDM1LjI2MyAxMy41MjAzIDM1LjQ4NSAxMi44MzQyIDM1Ljc0NDVDMTIuMjg0NyAzNS45NjU3IDExLjc2OTUgMzYuMjUzMiAxMS4zMDI0IDM2LjU5OTVDMTAuODk4MiAzNi45MzI1IDEwLjUzNDggMzcuMzQyIDEwLjIxMDUgMzcuODYxQzkuODg5NDggMzguMzgxNSA5LjcyODE1IDM5LjAxMyA5LjcyODE1IDM5Ljc5MTVDOS43MjgxNSA0MS4zNTE1IDEwLjEzMDcgNDIuNTAyIDEwLjkzNzMgNDMuMjgyQzExLjc0NCA0NC4wMjQ1IDEzLjIzNjcgNDQuNDMyNSAxNS40MTU2IDQ0LjQzMjVDMTcuNjMzNSA0NC40MzI1IDE5LjE2NyA0NC4wMjQ1IDE5Ljk3MzYgNDMuMjQ0NUMyMC43ODAzIDQyLjQyODUgMjEuMTg0NCA0MS4zMTQgMjEuMTg0NCAzOS44MjlWMzIuMjE4SDIxLjE0MzdaTTk4LjU1MTEgMTUuOTE5QzEwMi40NjIgMTUuOTE5IDEwNS4zMjcgMTYuNjI0IDEwNy4xODMgMTguMDM0QzEwOC45OTkgMTkuNDQ1NSAxMDkuOTI2IDIxLjIyOSAxMDkuOTI2IDIzLjM0NFY0MS41Mzc1QzEwOS45MjYgNDIuMjggMTA5Ljc2NSA0My4wOTc1IDEwOS40ODMgNDMuOTUxQzEwOS4xOTkgNDQuODQyIDEwOC42MzUgNDUuNjU4IDEwNy43ODggNDYuMzY0NUMxMDYuOTQgNDcuMTA3IDEwNS43NyA0Ny42OTk1IDEwNC4zMTggNDguMjJDMTAyLjg2OCA0OC43MDMgMTAwLjkzIDQ4Ljk2MjUgOTguNTkxOSA0OC45NjI1Qzk2LjIxMjYgNDguOTYyNSA5NC4zMTU3IDQ4LjcwMyA5Mi44NjM3IDQ4LjIyQzkxLjQxMTcgNDcuNzM3IDkwLjI0IDQ3LjEwNyA4OS4zOTQyIDQ2LjM2NDVDODguNTQ2OCA0NS42MjIgODcuOTgzIDQ0LjgwNDUgODcuNjk5NCA0My45NDk1Qzg3LjQxNzUgNDMuMDYgODcuMjU2MiA0Mi4yNDI1IDg3LjI1NjIgNDEuNTM3NVYzOC42NDI1Qzg3LjI1NjIgMzcuMDgyNSA4Ny42OTk0IDM1LjY3MSA4OC41NDY4IDM0LjQwOEM4OS40MzUgMzMuMTQ2NSA5MC42NDQyIDMyLjIxOCA5Mi4yNTc1IDMxLjY5NzVDOTMuMDY0MiAzMS40MzggOTMuOTUyMyAzMS4xNzg1IDk1LjAwMTggMzAuODQ0Qzk2LjAwODkgMzAuNTA5NSA5Ny4wMTc2IDMwLjIxNCA5Ny45ODU2IDI5Ljg3OEM5OC45NTM2IDI5LjU4MSA5OS43NjE5IDI5LjI4NCAxMDAuNDg3IDI5LjA2MkMxMDEuMjEyIDI4LjgwMjUgMTAxLjY1NyAyOC42OSAxMDEuODE5IDI4LjYxNjVDMTAxLjk4IDI4LjU0MTUgMTAyLjIyMSAyOC40MzA1IDEwMi41MDMgMjguMjgyQzEwMi43ODcgMjguMTMzNSAxMDMuMDY4IDI3LjkxMTUgMTAzLjM1IDI3LjY1MkMxMDMuNjM0IDI3LjM1MzUgMTAzLjgzNCAyNy4wMjA1IDEwNC4wMzYgMjYuNjg2QzEwNC4yMzkgMjYuMzE0IDEwNC4zMTggMjUuODY4NSAxMDQuMzE4IDI1LjM4NTVWMjQuMjM1QzEwNC4zMTggMjMuODI3IDEwNC4yMzcgMjMuNDE5IDEwNC4wMzYgMjIuOTczNUMxMDMuODc1IDIyLjUyNjUgMTAzLjU1MiAyMi4xNTYgMTAzLjEwOCAyMS43ODRDMTAyLjY2NiAyMS40MTM1IDEwMi4wNiAyMS4xMTY1IDEwMS4zMzUgMjAuODkzQzEwMC42MDggMjAuNjcxIDk5LjY4MDUgMjAuNTYgOTguNTUxMSAyMC41NkM5Ni4zMzE2IDIwLjU2IDk0Ljg0MDUgMjAuOTY4IDk0LjAzMzggMjEuODIxNUM5My4zMzc5IDIyLjU3MTQgOTIuOTI3MSAyMy41MSA5Mi44NjM3IDI0LjQ5NDVDOTIuODYzNyAyNC43MTggOTIuNjYxNiAyNC44NjY1IDkyLjQxODggMjQuODY2NUg4Ny41Nzg4Qzg3LjQ2MTcgMjQuODY1MyA4Ny4zNDk2IDI0LjgyMiA4Ny4yNjY4IDI0Ljc0NTdDODcuMTgzOSAyNC42Njk0IDg3LjEzNjggMjQuNTY2MyA4Ny4xMzU2IDI0LjQ1ODVWMjMuMzgxNUM4Ny4xMzU2IDIyLjM0MiA4Ny4zMzc2IDIxLjM3NiA4Ny43ODA5IDIwLjQ4NjVDODguMTgzNCAxOS41OTQgODguODY5NSAxOC43NzY1IDg5LjgzNzUgMTguMTA5QzkwLjc2NjQgMTcuNDQgOTEuOTM0OCAxNi44ODM1IDkzLjM4NjggMTYuNTEzQzk0Ljg0MDUgMTYuMTQxIDk2LjUzMzYgMTUuOTE5IDk4LjU1MTEgMTUuOTE5Wk0xMDQuMjc5IDMyLjIxOEMxMDQuMjQyIDMyLjQwODUgMTA0LjE2MiAzMi41ODk2IDEwNC4wNDQgMzIuNzQ5NkMxMDMuOTI2IDMyLjkwOTYgMTAzLjc3MiAzMy4wNDQ5IDEwMy41OTMgMzMuMTQ2NUMxMDMuMjMgMzMuMzY4NSAxMDIuOTA5IDMzLjQ3OTUgMTAyLjU4NCAzMy41OTJDMTAxLjkgMzMuODE0IDEwMS4xNzMgMzQuMDM3NSAxMDAuNDA2IDM0LjI5N0M5OS42Mzk3IDM0LjU1NjUgOTguOTE0NSAzNC44MTc1IDk4LjIyODQgMzUuMDAyQzk3LjQyMTggMzUuMjYzIDk2LjY1NDIgMzUuNDg1IDk1Ljk2OTggMzUuNzQ0NUM5NS40MTk2IDM1Ljk2NTYgOTQuOTAzOSAzNi4yNTMxIDk0LjQzNjMgMzYuNTk5NUM5NC4wMzM4IDM2LjkzMjUgOTMuNjcwNCAzNy4zNDIgOTMuMzQ3NyAzNy44NjFDOTMuMDI1IDM4LjM4MTUgOTIuODYzNyAzOS4wMTMgOTIuODYzNyAzOS43OTE1QzkyLjg2MzcgNDEuMzUxNSA5My4yNjYyIDQyLjUwMiA5NC4wNzI5IDQzLjI4MkM5NC44Nzk2IDQ0LjAyNDUgOTYuMzcyMyA0NC40MzI1IDk4LjU1MTEgNDQuNDMyNUMxMDAuNzY5IDQ0LjQzMjUgMTAyLjMwMyA0NC4wMjQ1IDEwMy4xMDkgNDMuMjQ0NUMxMDMuOTE2IDQyLjQyODUgMTA0LjMxOCA0MS4zMTQgMTA0LjMxOCAzOS44MjlWMzIuMjE4SDEwNC4yNzlaXCIgLz5cclxuICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMi4wMzQ1IDRIMzYuODM1NEMzNy4wNzY2IDQgMzcuMjc4NyA0LjE4NiAzNy4yNzg3IDQuNDA4VjQ4LjYyOEMzNy4yNzc4IDQ4LjczNjEgMzcuMjMwOSA0OC44Mzk2IDM3LjE0OCA0OC45MTYyQzM3LjA2NTEgNDguOTkyOCAzNi45NTI5IDQ5LjAzNjMgMzYuODM1NCA0OS4wMzc1SDMyLjAzNDVDMzEuOTE3MSA0OS4wMzYzIDMxLjgwNDggNDguOTkyOCAzMS43MjE5IDQ4LjkxNjJDMzEuNjM5IDQ4LjgzOTYgMzEuNTkyMSA0OC43MzYxIDMxLjU5MTMgNDguNjI4VjQuNDA4QzMxLjU5MTMgNC4xODYgMzEuNzkxNyA0IDMyLjAzNDUgNFpNNjUuMDI5NiA0MC4zODU1VjQxLjVDNjUuMDI5NiA0MS45ODMgNjQuOTQ5OCA0Mi42NTA1IDY0Ljc0NzcgNDMuNTA1NUM2NC41ODY0IDQ0LjMyMTUgNjQuMTAyNCA0NS4xNzUgNjMuMzM2NCA0NS45OTI1QzYyLjU3MDUgNDYuODEgNjEuNDQxMiA0Ny41NTI1IDU5LjkwNzcgNDguMTQ2NUM1OC4zNzU5IDQ4Ljc0MDUgNTYuMjc2OSA0OS4wMzc1IDUzLjU3NSA0OS4wMzc1QzUwLjg3MTQgNDkuMDM3NSA0OC43NzQxIDQ4Ljc0MDUgNDcuMjQyMiA0OC4xNDY1QzQ1LjcxMDQgNDcuNTUyNSA0NC41Nzk0IDQ2Ljg0NiA0My44MTM1IDQ1Ljk5MjVDNDMuMDQ3NiA0NS4xNzUgNDIuNTYxOSA0NC4zMjE1IDQyLjQwMDYgNDMuNDY4QzQyLjIzOTMgNDIuNjEzIDQyLjExODcgNDEuOTgzIDQyLjExODcgNDEuNVYxNi4zMjdDNDIuMTE4NyAxNi4xMDM1IDQyLjMyMDcgMTUuOTE5IDQyLjU2MTkgMTUuOTE5SDQ3LjM2MjhDNDcuNjA0IDE1LjkxOSA0Ny44MDYxIDE2LjEwMzUgNDcuODA2MSAxNi4zMjdWMzkuOTA0QzQ3LjgwNjEgNDAuNjg0IDQ3LjkyNjcgNDEuMjM5IDQ4LjA0ODkgNDEuNjg2QzQ4LjE2OTUgNDIuMTMxNSA0OC40MTA3IDQyLjU3NyA0OC43NzQxIDQyLjk0NzVDNDkuMTM3NSA0My4zNTcgNDkuNzAzIDQzLjY5IDUwLjQ2ODkgNDMuOTUxQzUxLjE5NDEgNDQuMjEwNSA1Mi4yMDI4IDQ0LjM1OSA1My40NTQ0IDQ0LjM1OUM1NC43NDUgNDQuMzU5IDU1Ljc5MjkgNDQuMjA5IDU2LjU1ODggNDMuOTUxQzU3LjMyNDcgNDMuNjkgNTcuODkwMiA0My4zNTcgNTguMjk0NCA0Mi45ODVDNTguNjk2OSA0Mi42MTQ1IDU4Ljk3ODggNDIuMjA1IDU5LjEwMSA0MS43NTk1QzU5LjIyMTYgNDEuMzE0IDU5LjM4MyA0MC45NDM1IDU5LjM4MyAzOS44NjY1VjE2LjMyN0M1OS4zODMgMTYuMTAzNSA1OS41ODUgMTUuOTE5IDU5LjgyNjIgMTUuOTE5SDY0LjYyNzFDNjQuODY4MyAxNS45MTkgNjUuMDcwNCAxNi4xMDM1IDY1LjA3MDQgMTYuMzI3VjQwLjM4N0g2NS4wMjk2VjQwLjM4NTVaTTgxLjM2NjcgMTUuOTE5SDg0LjU5MzNDODQuODc2OSAxNS45MTkgODUuMDc3MyAxNi4xNzg1IDg0Ljk5NzUgMTYuNDM4TDgzLjkwODkgMjAuMjk5QzgzLjg2ODIgMjAuNDg1IDgzLjY2NjEgMjAuNTk2IDgzLjUwNDcgMjAuNTk2SDgxLjI0NjFDODAuMDM1MyAyMC41OTYgNzkuMDY3MyAyMC43NDYgNzguMzAxMyAyMS4wNDE1Qzc3LjU3NjIgMjEuMzM4NSA3Ni45Njk5IDIxLjY3MyA3Ni41Njc0IDIyLjA4MUM3Ni4yMDkyIDIyLjQyNzIgNzUuOTQ2NiAyMi44NDc1IDc1LjgwMTUgMjMuMzA2NUM3NS42NzkzIDIzLjc1MiA3NS42Mzg1IDI0LjE2MTUgNzUuNjM4NSAyNC41MzJWNDguNjY1NUM3NS42Mzc3IDQ4Ljc3MzYgNzUuNTkwOCA0OC44NzcxIDc1LjUwNzkgNDguOTUzN0M3NS40MjUgNDkuMDMwMyA3NS4zMTI3IDQ5LjA3MzggNzUuMTk1MyA0OS4wNzVINzAuMzU1M0M3MC4yMzc4IDQ5LjA3MzggNzAuMTI1NiA0OS4wMzAzIDcwLjA0MjcgNDguOTUzN0M2OS45NTk4IDQ4Ljg3NzEgNjkuOTEyOCA0OC43NzM2IDY5LjkxMiA0OC42NjU1VjIzLjQ5MjVDNjkuOTEyIDIzLjA0NyA2OS45OTE5IDIyLjM3OCA3MC4xOTM5IDIxLjUyNDVDNzAuMzU1MyAyMC42Njk1IDcwLjgzOTMgMTkuODUzNSA3MS42MDUyIDE5QzcyLjM3MTEgMTguMTgyNSA3My41MDIxIDE3LjQ0IDc1LjAzMzkgMTYuODQ2Qzc2LjUyNjcgMTYuMjE2IDc4LjY2NDcgMTUuOTE5IDgxLjM2NjcgMTUuOTE5Wk0xNS40MTU2IDE1LjkxOUMxOS4zMjY3IDE1LjkxOSAyMi4xOTE2IDE2LjYyNCAyNC4wNDc3IDE4LjAzNEMyNS44NjMxIDE5LjQ0NTUgMjYuNzkwNCAyMS4yMjkgMjYuNzkwNCAyMy4zNDRWNDEuNTM3NUMyNi43OTA0IDQyLjI4IDI2LjYyOSA0My4wOTc1IDI2LjM0NzEgNDMuOTUxQzI2LjA2NTIgNDQuODQyIDI1LjQ5OTcgNDUuNjU4IDI0LjY1MjMgNDYuMzY0NUMyMy44MDQ5IDQ3LjEwNyAyMi42MzY0IDQ3LjY5OTUgMjEuMTg0NCA0OC4yMkMxOS43MzA4IDQ4LjcwMyAxNy43OTQ4IDQ4Ljk2MjUgMTUuNDU2MyA0OC45NjI1QzEzLjA3NyA0OC45NjI1IDExLjE4MDEgNDguNzAzIDkuNzI4MTUgNDguMjJDOC4yNzYxNSA0Ny43MzcgNy4xMDQ0NCA0Ny4xMDcgNi4yNTg2NyA0Ni4zNjQ1QzUuNDExMjYgNDUuNjIyIDQuODQ3NDEgNDQuODA0NSA0LjU2Mzg1IDQzLjk0OTVDNC4yODE5MyA0My4wNiA0LjEyMDU5IDQyLjI0MjUgNC4xMjA1OSA0MS41Mzc1VjM4LjY0MjVDNC4xMjA1OSAzNy4wODI1IDQuNTY1NDggMzUuNjcxIDUuNDExMjYgMzQuNDA4QzYuMjk5NDEgMzMuMTQ2NSA3LjUwODU5IDMyLjIxOCA5LjEyMzU2IDMxLjY5NzVDOS45MzAyMiAzMS40MzggMTAuODE4NCAzMS4xNzg1IDExLjg2NjIgMzAuODQ0QzEyLjg3NSAzMC41MDk1IDEzLjg4MjEgMzAuMjE0IDE0Ljg1MDEgMjkuODc4QzE1LjgxODEgMjkuNTgxIDE2LjYyNjQgMjkuMjg0IDE3LjM1MTYgMjkuMDYyQzE4LjA3ODQgMjguODAyNSAxOC41MjE2IDI4LjY5IDE4LjY4MyAyOC42MTY1QzE4Ljg0NDMgMjguNTQxNSAxOS4wODU1IDI4LjQzMDUgMTkuMzY3NCAyOC4yODJDMTkuNjUxIDI4LjEzMzUgMTkuOTMyOSAyNy45MTE1IDIwLjIxNDggMjcuNjUyQzIwLjQ5ODQgMjcuMzUzNSAyMC43MDA0IDI3LjAyMDUgMjAuOTAwOSAyNi42ODZDMjEuMTAzIDI2LjMxNCAyMS4xODQ0IDI1Ljg2ODUgMjEuMTg0NCAyNS4zODU1VjI0LjIzNUMyMS4xODQ0IDIzLjgyNyAyMS4xMDMgMjMuNDE5IDIwLjkwMDkgMjIuOTczNUMyMC43Mzk2IDIyLjUyNjUgMjAuNDE2OSAyMi4xNTYgMTkuOTczNiAyMS43ODRDMTkuNTMwNCAyMS40MTM1IDE4LjkyNDEgMjEuMTE2NSAxOC4xOTczIDIwLjg5M0MxNy40NzIxIDIwLjY3MSAxNi41NDQ5IDIwLjU2IDE1LjQxNTYgMjAuNTZDMTMuMTk3NiAyMC41NiAxMS43MDQ5IDIwLjk2OCAxMC44OTgyIDIxLjgyMTVDMTAuMjAyNCAyMi41NzE0IDkuNzkxNTUgMjMuNTEgOS43MjgxNSAyNC40OTQ1QzkuNzI4MTUgMjQuNzE4IDkuNTI2MDcgMjQuODY2NSA5LjI4NDg5IDI0Ljg2NjVINC40NDQ4OUM0LjMyNzQ0IDI0Ljg2NTcgNC4yMTUwMiAyNC44MjI1IDQuMTMxODIgMjQuNzQ2MkM0LjA0ODYxIDI0LjY2OTkgNC4wMDEyOCAyNC41NjY2IDQgMjQuNDU4NVYyMy4zODE1QzQgMjIuMzQyIDQuMjAyMDcgMjEuMzc2IDQuNjQ1MzMgMjAuNDg2NUM1LjA0OTQ4IDE5LjU5NCA1LjczMzkzIDE4Ljc3NjUgNi43MDE5MyAxOC4xMDlDNy42MzA4MiAxNy40NCA4LjgwMDg5IDE2Ljg4MzUgMTAuMjUyOSAxNi41MTNDMTEuNjY0MSAxNi4xNDEgMTMuMzk4MSAxNS45MTkgMTUuNDE1NiAxNS45MTlaTTIxLjE0MzcgMzIuMjE4QzIxLjEwNjcgMzIuNDA4NSAyMS4wMjY1IDMyLjU4OTYgMjAuOTA4MyAzMi43NDk2QzIwLjc5MDEgMzIuOTA5NiAyMC42MzY1IDMzLjA0NDkgMjAuNDU3NiAzMy4xNDY1QzIwLjA5NDIgMzMuMzY4NSAxOS43NzMyIDMzLjQ3OTUgMTkuNDQ4OSAzMy41OTJDMTguNzY0NCAzMy44MTQgMTguMDM3NiAzNC4wMzc1IDE3LjI3MTcgMzQuMjk3QzE2LjUwNTggMzQuNTU2NSAxNS43NzkgMzQuODE3NSAxNS4wOTI5IDM1LjAwMkMxNC4yODYyIDM1LjI2MyAxMy41MjAzIDM1LjQ4NSAxMi44MzQyIDM1Ljc0NDVDMTIuMjg0NyAzNS45NjU3IDExLjc2OTUgMzYuMjUzMiAxMS4zMDI0IDM2LjU5OTVDMTAuODk4MiAzNi45MzI1IDEwLjUzNDggMzcuMzQyIDEwLjIxMDUgMzcuODYxQzkuODg5NDggMzguMzgxNSA5LjcyODE1IDM5LjAxMyA5LjcyODE1IDM5Ljc5MTVDOS43MjgxNSA0MS4zNTE1IDEwLjEzMDcgNDIuNTAyIDEwLjkzNzMgNDMuMjgyQzExLjc0NCA0NC4wMjQ1IDEzLjIzNjcgNDQuNDMyNSAxNS40MTU2IDQ0LjQzMjVDMTcuNjMzNSA0NC40MzI1IDE5LjE2NyA0NC4wMjQ1IDE5Ljk3MzYgNDMuMjQ0NUMyMC43ODAzIDQyLjQyODUgMjEuMTg0NCA0MS4zMTQgMjEuMTg0NCAzOS44MjlWMzIuMjE4SDIxLjE0MzdaTTk4LjU1MTEgMTUuOTE5QzEwMi40NjIgMTUuOTE5IDEwNS4zMjcgMTYuNjI0IDEwNy4xODMgMTguMDM0QzEwOC45OTkgMTkuNDQ1NSAxMDkuOTI2IDIxLjIyOSAxMDkuOTI2IDIzLjM0NFY0MS41Mzc1QzEwOS45MjYgNDIuMjggMTA5Ljc2NSA0My4wOTc1IDEwOS40ODMgNDMuOTUxQzEwOS4xOTkgNDQuODQyIDEwOC42MzUgNDUuNjU4IDEwNy43ODggNDYuMzY0NUMxMDYuOTQgNDcuMTA3IDEwNS43NyA0Ny42OTk1IDEwNC4zMTggNDguMjJDMTAyLjg2OCA0OC43MDMgMTAwLjkzIDQ4Ljk2MjUgOTguNTkxOSA0OC45NjI1Qzk2LjIxMjYgNDguOTYyNSA5NC4zMTU3IDQ4LjcwMyA5Mi44NjM3IDQ4LjIyQzkxLjQxMTcgNDcuNzM3IDkwLjI0IDQ3LjEwNyA4OS4zOTQyIDQ2LjM2NDVDODguNTQ2OCA0NS42MjIgODcuOTgzIDQ0LjgwNDUgODcuNjk5NCA0My45NDk1Qzg3LjQxNzUgNDMuMDYgODcuMjU2MiA0Mi4yNDI1IDg3LjI1NjIgNDEuNTM3NVYzOC42NDI1Qzg3LjI1NjIgMzcuMDgyNSA4Ny42OTk0IDM1LjY3MSA4OC41NDY4IDM0LjQwOEM4OS40MzUgMzMuMTQ2NSA5MC42NDQyIDMyLjIxOCA5Mi4yNTc1IDMxLjY5NzVDOTMuMDY0MiAzMS40MzggOTMuOTUyMyAzMS4xNzg1IDk1LjAwMTggMzAuODQ0Qzk2LjAwODkgMzAuNTA5NSA5Ny4wMTc2IDMwLjIxNCA5Ny45ODU2IDI5Ljg3OEM5OC45NTM2IDI5LjU4MSA5OS43NjE5IDI5LjI4NCAxMDAuNDg3IDI5LjA2MkMxMDEuMjEyIDI4LjgwMjUgMTAxLjY1NyAyOC42OSAxMDEuODE5IDI4LjYxNjVDMTAxLjk4IDI4LjU0MTUgMTAyLjIyMSAyOC40MzA1IDEwMi41MDMgMjguMjgyQzEwMi43ODcgMjguMTMzNSAxMDMuMDY4IDI3LjkxMTUgMTAzLjM1IDI3LjY1MkMxMDMuNjM0IDI3LjM1MzUgMTAzLjgzNCAyNy4wMjA1IDEwNC4wMzYgMjYuNjg2QzEwNC4yMzkgMjYuMzE0IDEwNC4zMTggMjUuODY4NSAxMDQuMzE4IDI1LjM4NTVWMjQuMjM1QzEwNC4zMTggMjMuODI3IDEwNC4yMzcgMjMuNDE5IDEwNC4wMzYgMjIuOTczNUMxMDMuODc1IDIyLjUyNjUgMTAzLjU1MiAyMi4xNTYgMTAzLjEwOCAyMS43ODRDMTAyLjY2NiAyMS40MTM1IDEwMi4wNiAyMS4xMTY1IDEwMS4zMzUgMjAuODkzQzEwMC42MDggMjAuNjcxIDk5LjY4MDUgMjAuNTYgOTguNTUxMSAyMC41NkM5Ni4zMzE2IDIwLjU2IDk0Ljg0MDUgMjAuOTY4IDk0LjAzMzggMjEuODIxNUM5My4zMzc5IDIyLjU3MTQgOTIuOTI3MSAyMy41MSA5Mi44NjM3IDI0LjQ5NDVDOTIuODYzNyAyNC43MTggOTIuNjYxNiAyNC44NjY1IDkyLjQxODggMjQuODY2NUg4Ny41Nzg4Qzg3LjQ2MTcgMjQuODY1MyA4Ny4zNDk2IDI0LjgyMiA4Ny4yNjY4IDI0Ljc0NTdDODcuMTgzOSAyNC42Njk0IDg3LjEzNjggMjQuNTY2MyA4Ny4xMzU2IDI0LjQ1ODVWMjMuMzgxNUM4Ny4xMzU2IDIyLjM0MiA4Ny4zMzc2IDIxLjM3NiA4Ny43ODA5IDIwLjQ4NjVDODguMTgzNCAxOS41OTQgODguODY5NSAxOC43NzY1IDg5LjgzNzUgMTguMTA5QzkwLjc2NjQgMTcuNDQgOTEuOTM0OCAxNi44ODM1IDkzLjM4NjggMTYuNTEzQzk0Ljg0MDUgMTYuMTQxIDk2LjUzMzYgMTUuOTE5IDk4LjU1MTEgMTUuOTE5Wk0xMDQuMjc5IDMyLjIxOEMxMDQuMjQyIDMyLjQwODUgMTA0LjE2MiAzMi41ODk2IDEwNC4wNDQgMzIuNzQ5NkMxMDMuOTI2IDMyLjkwOTYgMTAzLjc3MiAzMy4wNDQ5IDEwMy41OTMgMzMuMTQ2NUMxMDMuMjMgMzMuMzY4NSAxMDIuOTA5IDMzLjQ3OTUgMTAyLjU4NCAzMy41OTJDMTAxLjkgMzMuODE0IDEwMS4xNzMgMzQuMDM3NSAxMDAuNDA2IDM0LjI5N0M5OS42Mzk3IDM0LjU1NjUgOTguOTE0NSAzNC44MTc1IDk4LjIyODQgMzUuMDAyQzk3LjQyMTggMzUuMjYzIDk2LjY1NDIgMzUuNDg1IDk1Ljk2OTggMzUuNzQ0NUM5NS40MTk2IDM1Ljk2NTYgOTQuOTAzOSAzNi4yNTMxIDk0LjQzNjMgMzYuNTk5NUM5NC4wMzM4IDM2LjkzMjUgOTMuNjcwNCAzNy4zNDIgOTMuMzQ3NyAzNy44NjFDOTMuMDI1IDM4LjM4MTUgOTIuODYzNyAzOS4wMTMgOTIuODYzNyAzOS43OTE1QzkyLjg2MzcgNDEuMzUxNSA5My4yNjYyIDQyLjUwMiA5NC4wNzI5IDQzLjI4MkM5NC44Nzk2IDQ0LjAyNDUgOTYuMzcyMyA0NC40MzI1IDk4LjU1MTEgNDQuNDMyNUMxMDAuNzY5IDQ0LjQzMjUgMTAyLjMwMyA0NC4wMjQ1IDEwMy4xMDkgNDMuMjQ0NUMxMDMuOTE2IDQyLjQyODUgMTA0LjMxOCA0MS4zMTQgMTA0LjMxOCAzOS44MjlWMzIuMjE4SDEwNC4yNzlaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMyLjAzNDUgNEgzNi44MzU0QzM3LjA3NjYgNCAzNy4yNzg3IDQuMTg2IDM3LjI3ODcgNC40MDhWNDguNjI4QzM3LjI3NzggNDguNzM2MSAzNy4yMzA5IDQ4LjgzOTYgMzcuMTQ4IDQ4LjkxNjJDMzcuMDY1MSA0OC45OTI4IDM2Ljk1MjkgNDkuMDM2MyAzNi44MzU0IDQ5LjAzNzVIMzIuMDM0NUMzMS45MTcxIDQ5LjAzNjMgMzEuODA0OCA0OC45OTI4IDMxLjcyMTkgNDguOTE2MkMzMS42MzkgNDguODM5NiAzMS41OTIxIDQ4LjczNjEgMzEuNTkxMyA0OC42MjhWNC40MDhDMzEuNTkxMyA0LjE4NiAzMS43OTE3IDQgMzIuMDM0NSA0Wk02NS4wMjk2IDQwLjM4NTVWNDEuNUM2NS4wMjk2IDQxLjk4MyA2NC45NDk4IDQyLjY1MDUgNjQuNzQ3NyA0My41MDU1QzY0LjU4NjQgNDQuMzIxNSA2NC4xMDI0IDQ1LjE3NSA2My4zMzY0IDQ1Ljk5MjVDNjIuNTcwNSA0Ni44MSA2MS40NDEyIDQ3LjU1MjUgNTkuOTA3NyA0OC4xNDY1QzU4LjM3NTkgNDguNzQwNSA1Ni4yNzY5IDQ5LjAzNzUgNTMuNTc1IDQ5LjAzNzVDNTAuODcxNCA0OS4wMzc1IDQ4Ljc3NDEgNDguNzQwNSA0Ny4yNDIyIDQ4LjE0NjVDNDUuNzEwNCA0Ny41NTI1IDQ0LjU3OTQgNDYuODQ2IDQzLjgxMzUgNDUuOTkyNUM0My4wNDc2IDQ1LjE3NSA0Mi41NjE5IDQ0LjMyMTUgNDIuNDAwNiA0My40NjhDNDIuMjM5MyA0Mi42MTMgNDIuMTE4NyA0MS45ODMgNDIuMTE4NyA0MS41VjE2LjMyN0M0Mi4xMTg3IDE2LjEwMzUgNDIuMzIwNyAxNS45MTkgNDIuNTYxOSAxNS45MTlINDcuMzYyOEM0Ny42MDQgMTUuOTE5IDQ3LjgwNjEgMTYuMTAzNSA0Ny44MDYxIDE2LjMyN1YzOS45MDRDNDcuODA2MSA0MC42ODQgNDcuOTI2NyA0MS4yMzkgNDguMDQ4OSA0MS42ODZDNDguMTY5NSA0Mi4xMzE1IDQ4LjQxMDcgNDIuNTc3IDQ4Ljc3NDEgNDIuOTQ3NUM0OS4xMzc1IDQzLjM1NyA0OS43MDMgNDMuNjkgNTAuNDY4OSA0My45NTFDNTEuMTk0MSA0NC4yMTA1IDUyLjIwMjggNDQuMzU5IDUzLjQ1NDQgNDQuMzU5QzU0Ljc0NSA0NC4zNTkgNTUuNzkyOSA0NC4yMDkgNTYuNTU4OCA0My45NTFDNTcuMzI0NyA0My42OSA1Ny44OTAyIDQzLjM1NyA1OC4yOTQ0IDQyLjk4NUM1OC42OTY5IDQyLjYxNDUgNTguOTc4OCA0Mi4yMDUgNTkuMTAxIDQxLjc1OTVDNTkuMjIxNiA0MS4zMTQgNTkuMzgzIDQwLjk0MzUgNTkuMzgzIDM5Ljg2NjVWMTYuMzI3QzU5LjM4MyAxNi4xMDM1IDU5LjU4NSAxNS45MTkgNTkuODI2MiAxNS45MTlINjQuNjI3MUM2NC44NjgzIDE1LjkxOSA2NS4wNzA0IDE2LjEwMzUgNjUuMDcwNCAxNi4zMjdWNDAuMzg3SDY1LjAyOTZWNDAuMzg1NVpNODEuMzY2NyAxNS45MTlIODQuNTkzM0M4NC44NzY5IDE1LjkxOSA4NS4wNzczIDE2LjE3ODUgODQuOTk3NSAxNi40MzhMODMuOTA4OSAyMC4yOTlDODMuODY4MiAyMC40ODUgODMuNjY2MSAyMC41OTYgODMuNTA0NyAyMC41OTZIODEuMjQ2MUM4MC4wMzUzIDIwLjU5NiA3OS4wNjczIDIwLjc0NiA3OC4zMDEzIDIxLjA0MTVDNzcuNTc2MiAyMS4zMzg1IDc2Ljk2OTkgMjEuNjczIDc2LjU2NzQgMjIuMDgxQzc2LjIwOTIgMjIuNDI3MiA3NS45NDY2IDIyLjg0NzUgNzUuODAxNSAyMy4zMDY1Qzc1LjY3OTMgMjMuNzUyIDc1LjYzODUgMjQuMTYxNSA3NS42Mzg1IDI0LjUzMlY0OC42NjU1Qzc1LjYzNzcgNDguNzczNiA3NS41OTA4IDQ4Ljg3NzEgNzUuNTA3OSA0OC45NTM3Qzc1LjQyNSA0OS4wMzAzIDc1LjMxMjcgNDkuMDczOCA3NS4xOTUzIDQ5LjA3NUg3MC4zNTUzQzcwLjIzNzggNDkuMDczOCA3MC4xMjU2IDQ5LjAzMDMgNzAuMDQyNyA0OC45NTM3QzY5Ljk1OTggNDguODc3MSA2OS45MTI4IDQ4Ljc3MzYgNjkuOTEyIDQ4LjY2NTVWMjMuNDkyNUM2OS45MTIgMjMuMDQ3IDY5Ljk5MTkgMjIuMzc4IDcwLjE5MzkgMjEuNTI0NUM3MC4zNTUzIDIwLjY2OTUgNzAuODM5MyAxOS44NTM1IDcxLjYwNTIgMTlDNzIuMzcxMSAxOC4xODI1IDczLjUwMjEgMTcuNDQgNzUuMDMzOSAxNi44NDZDNzYuNTI2NyAxNi4yMTYgNzguNjY0NyAxNS45MTkgODEuMzY2NyAxNS45MTlaTTE1LjQxNTYgMTUuOTE5QzE5LjMyNjcgMTUuOTE5IDIyLjE5MTYgMTYuNjI0IDI0LjA0NzcgMTguMDM0QzI1Ljg2MzEgMTkuNDQ1NSAyNi43OTA0IDIxLjIyOSAyNi43OTA0IDIzLjM0NFY0MS41Mzc1QzI2Ljc5MDQgNDIuMjggMjYuNjI5IDQzLjA5NzUgMjYuMzQ3MSA0My45NTFDMjYuMDY1MiA0NC44NDIgMjUuNDk5NyA0NS42NTggMjQuNjUyMyA0Ni4zNjQ1QzIzLjgwNDkgNDcuMTA3IDIyLjYzNjQgNDcuNjk5NSAyMS4xODQ0IDQ4LjIyQzE5LjczMDggNDguNzAzIDE3Ljc5NDggNDguOTYyNSAxNS40NTYzIDQ4Ljk2MjVDMTMuMDc3IDQ4Ljk2MjUgMTEuMTgwMSA0OC43MDMgOS43MjgxNSA0OC4yMkM4LjI3NjE1IDQ3LjczNyA3LjEwNDQ0IDQ3LjEwNyA2LjI1ODY3IDQ2LjM2NDVDNS40MTEyNiA0NS42MjIgNC44NDc0MSA0NC44MDQ1IDQuNTYzODUgNDMuOTQ5NUM0LjI4MTkzIDQzLjA2IDQuMTIwNTkgNDIuMjQyNSA0LjEyMDU5IDQxLjUzNzVWMzguNjQyNUM0LjEyMDU5IDM3LjA4MjUgNC41NjU0OCAzNS42NzEgNS40MTEyNiAzNC40MDhDNi4yOTk0MSAzMy4xNDY1IDcuNTA4NTkgMzIuMjE4IDkuMTIzNTYgMzEuNjk3NUM5LjkzMDIyIDMxLjQzOCAxMC44MTg0IDMxLjE3ODUgMTEuODY2MiAzMC44NDRDMTIuODc1IDMwLjUwOTUgMTMuODgyMSAzMC4yMTQgMTQuODUwMSAyOS44NzhDMTUuODE4MSAyOS41ODEgMTYuNjI2NCAyOS4yODQgMTcuMzUxNiAyOS4wNjJDMTguMDc4NCAyOC44MDI1IDE4LjUyMTYgMjguNjkgMTguNjgzIDI4LjYxNjVDMTguODQ0MyAyOC41NDE1IDE5LjA4NTUgMjguNDMwNSAxOS4zNjc0IDI4LjI4MkMxOS42NTEgMjguMTMzNSAxOS45MzI5IDI3LjkxMTUgMjAuMjE0OCAyNy42NTJDMjAuNDk4NCAyNy4zNTM1IDIwLjcwMDQgMjcuMDIwNSAyMC45MDA5IDI2LjY4NkMyMS4xMDMgMjYuMzE0IDIxLjE4NDQgMjUuODY4NSAyMS4xODQ0IDI1LjM4NTVWMjQuMjM1QzIxLjE4NDQgMjMuODI3IDIxLjEwMyAyMy40MTkgMjAuOTAwOSAyMi45NzM1QzIwLjczOTYgMjIuNTI2NSAyMC40MTY5IDIyLjE1NiAxOS45NzM2IDIxLjc4NEMxOS41MzA0IDIxLjQxMzUgMTguOTI0MSAyMS4xMTY1IDE4LjE5NzMgMjAuODkzQzE3LjQ3MjEgMjAuNjcxIDE2LjU0NDkgMjAuNTYgMTUuNDE1NiAyMC41NkMxMy4xOTc2IDIwLjU2IDExLjcwNDkgMjAuOTY4IDEwLjg5ODIgMjEuODIxNUMxMC4yMDI0IDIyLjU3MTQgOS43OTE1NSAyMy41MSA5LjcyODE1IDI0LjQ5NDVDOS43MjgxNSAyNC43MTggOS41MjYwNyAyNC44NjY1IDkuMjg0ODkgMjQuODY2NUg0LjQ0NDg5QzQuMzI3NDQgMjQuODY1NyA0LjIxNTAyIDI0LjgyMjUgNC4xMzE4MiAyNC43NDYyQzQuMDQ4NjEgMjQuNjY5OSA0LjAwMTI4IDI0LjU2NjYgNCAyNC40NTg1VjIzLjM4MTVDNCAyMi4zNDIgNC4yMDIwNyAyMS4zNzYgNC42NDUzMyAyMC40ODY1QzUuMDQ5NDggMTkuNTk0IDUuNzMzOTMgMTguNzc2NSA2LjcwMTkzIDE4LjEwOUM3LjYzMDgyIDE3LjQ0IDguODAwODkgMTYuODgzNSAxMC4yNTI5IDE2LjUxM0MxMS42NjQxIDE2LjE0MSAxMy4zOTgxIDE1LjkxOSAxNS40MTU2IDE1LjkxOVpNMjEuMTQzNyAzMi4yMThDMjEuMTA2NyAzMi40MDg1IDIxLjAyNjUgMzIuNTg5NiAyMC45MDgzIDMyLjc0OTZDMjAuNzkwMSAzMi45MDk2IDIwLjYzNjUgMzMuMDQ0OSAyMC40NTc2IDMzLjE0NjVDMjAuMDk0MiAzMy4zNjg1IDE5Ljc3MzIgMzMuNDc5NSAxOS40NDg5IDMzLjU5MkMxOC43NjQ0IDMzLjgxNCAxOC4wMzc2IDM0LjAzNzUgMTcuMjcxNyAzNC4yOTdDMTYuNTA1OCAzNC41NTY1IDE1Ljc3OSAzNC44MTc1IDE1LjA5MjkgMzUuMDAyQzE0LjI4NjIgMzUuMjYzIDEzLjUyMDMgMzUuNDg1IDEyLjgzNDIgMzUuNzQ0NUMxMi4yODQ3IDM1Ljk2NTcgMTEuNzY5NSAzNi4yNTMyIDExLjMwMjQgMzYuNTk5NUMxMC44OTgyIDM2LjkzMjUgMTAuNTM0OCAzNy4zNDIgMTAuMjEwNSAzNy44NjFDOS44ODk0OCAzOC4zODE1IDkuNzI4MTUgMzkuMDEzIDkuNzI4MTUgMzkuNzkxNUM5LjcyODE1IDQxLjM1MTUgMTAuMTMwNyA0Mi41MDIgMTAuOTM3MyA0My4yODJDMTEuNzQ0IDQ0LjAyNDUgMTMuMjM2NyA0NC40MzI1IDE1LjQxNTYgNDQuNDMyNUMxNy42MzM1IDQ0LjQzMjUgMTkuMTY3IDQ0LjAyNDUgMTkuOTczNiA0My4yNDQ1QzIwLjc4MDMgNDIuNDI4NSAyMS4xODQ0IDQxLjMxNCAyMS4xODQ0IDM5LjgyOVYzMi4yMThIMjEuMTQzN1pNOTguNTUxMSAxNS45MTlDMTAyLjQ2MiAxNS45MTkgMTA1LjMyNyAxNi42MjQgMTA3LjE4MyAxOC4wMzRDMTA4Ljk5OSAxOS40NDU1IDEwOS45MjYgMjEuMjI5IDEwOS45MjYgMjMuMzQ0VjQxLjUzNzVDMTA5LjkyNiA0Mi4yOCAxMDkuNzY1IDQzLjA5NzUgMTA5LjQ4MyA0My45NTFDMTA5LjE5OSA0NC44NDIgMTA4LjYzNSA0NS42NTggMTA3Ljc4OCA0Ni4zNjQ1QzEwNi45NCA0Ny4xMDcgMTA1Ljc3IDQ3LjY5OTUgMTA0LjMxOCA0OC4yMkMxMDIuODY4IDQ4LjcwMyAxMDAuOTMgNDguOTYyNSA5OC41OTE5IDQ4Ljk2MjVDOTYuMjEyNiA0OC45NjI1IDk0LjMxNTcgNDguNzAzIDkyLjg2MzcgNDguMjJDOTEuNDExNyA0Ny43MzcgOTAuMjQgNDcuMTA3IDg5LjM5NDIgNDYuMzY0NUM4OC41NDY4IDQ1LjYyMiA4Ny45ODMgNDQuODA0NSA4Ny42OTk0IDQzLjk0OTVDODcuNDE3NSA0My4wNiA4Ny4yNTYyIDQyLjI0MjUgODcuMjU2MiA0MS41Mzc1VjM4LjY0MjVDODcuMjU2MiAzNy4wODI1IDg3LjY5OTQgMzUuNjcxIDg4LjU0NjggMzQuNDA4Qzg5LjQzNSAzMy4xNDY1IDkwLjY0NDIgMzIuMjE4IDkyLjI1NzUgMzEuNjk3NUM5My4wNjQyIDMxLjQzOCA5My45NTIzIDMxLjE3ODUgOTUuMDAxOCAzMC44NDRDOTYuMDA4OSAzMC41MDk1IDk3LjAxNzYgMzAuMjE0IDk3Ljk4NTYgMjkuODc4Qzk4Ljk1MzYgMjkuNTgxIDk5Ljc2MTkgMjkuMjg0IDEwMC40ODcgMjkuMDYyQzEwMS4yMTIgMjguODAyNSAxMDEuNjU3IDI4LjY5IDEwMS44MTkgMjguNjE2NUMxMDEuOTggMjguNTQxNSAxMDIuMjIxIDI4LjQzMDUgMTAyLjUwMyAyOC4yODJDMTAyLjc4NyAyOC4xMzM1IDEwMy4wNjggMjcuOTExNSAxMDMuMzUgMjcuNjUyQzEwMy42MzQgMjcuMzUzNSAxMDMuODM0IDI3LjAyMDUgMTA0LjAzNiAyNi42ODZDMTA0LjIzOSAyNi4zMTQgMTA0LjMxOCAyNS44Njg1IDEwNC4zMTggMjUuMzg1NVYyNC4yMzVDMTA0LjMxOCAyMy44MjcgMTA0LjIzNyAyMy40MTkgMTA0LjAzNiAyMi45NzM1QzEwMy44NzUgMjIuNTI2NSAxMDMuNTUyIDIyLjE1NiAxMDMuMTA4IDIxLjc4NEMxMDIuNjY2IDIxLjQxMzUgMTAyLjA2IDIxLjExNjUgMTAxLjMzNSAyMC44OTNDMTAwLjYwOCAyMC42NzEgOTkuNjgwNSAyMC41NiA5OC41NTExIDIwLjU2Qzk2LjMzMTYgMjAuNTYgOTQuODQwNSAyMC45NjggOTQuMDMzOCAyMS44MjE1QzkzLjMzNzkgMjIuNTcxNCA5Mi45MjcxIDIzLjUxIDkyLjg2MzcgMjQuNDk0NUM5Mi44NjM3IDI0LjcxOCA5Mi42NjE2IDI0Ljg2NjUgOTIuNDE4OCAyNC44NjY1SDg3LjU3ODhDODcuNDYxNyAyNC44NjUzIDg3LjM0OTYgMjQuODIyIDg3LjI2NjggMjQuNzQ1N0M4Ny4xODM5IDI0LjY2OTQgODcuMTM2OCAyNC41NjYzIDg3LjEzNTYgMjQuNDU4NVYyMy4zODE1Qzg3LjEzNTYgMjIuMzQyIDg3LjMzNzYgMjEuMzc2IDg3Ljc4MDkgMjAuNDg2NUM4OC4xODM0IDE5LjU5NCA4OC44Njk1IDE4Ljc3NjUgODkuODM3NSAxOC4xMDlDOTAuNzY2NCAxNy40NCA5MS45MzQ4IDE2Ljg4MzUgOTMuMzg2OCAxNi41MTNDOTQuODQwNSAxNi4xNDEgOTYuNTMzNiAxNS45MTkgOTguNTUxMSAxNS45MTlaTTEwNC4yNzkgMzIuMjE4QzEwNC4yNDIgMzIuNDA4NSAxMDQuMTYyIDMyLjU4OTYgMTA0LjA0NCAzMi43NDk2QzEwMy45MjYgMzIuOTA5NiAxMDMuNzcyIDMzLjA0NDkgMTAzLjU5MyAzMy4xNDY1QzEwMy4yMyAzMy4zNjg1IDEwMi45MDkgMzMuNDc5NSAxMDIuNTg0IDMzLjU5MkMxMDEuOSAzMy44MTQgMTAxLjE3MyAzNC4wMzc1IDEwMC40MDYgMzQuMjk3Qzk5LjYzOTcgMzQuNTU2NSA5OC45MTQ1IDM0LjgxNzUgOTguMjI4NCAzNS4wMDJDOTcuNDIxOCAzNS4yNjMgOTYuNjU0MiAzNS40ODUgOTUuOTY5OCAzNS43NDQ1Qzk1LjQxOTYgMzUuOTY1NiA5NC45MDM5IDM2LjI1MzEgOTQuNDM2MyAzNi41OTk1Qzk0LjAzMzggMzYuOTMyNSA5My42NzA0IDM3LjM0MiA5My4zNDc3IDM3Ljg2MUM5My4wMjUgMzguMzgxNSA5Mi44NjM3IDM5LjAxMyA5Mi44NjM3IDM5Ljc5MTVDOTIuODYzNyA0MS4zNTE1IDkzLjI2NjIgNDIuNTAyIDk0LjA3MjkgNDMuMjgyQzk0Ljg3OTYgNDQuMDI0NSA5Ni4zNzIzIDQ0LjQzMjUgOTguNTUxMSA0NC40MzI1QzEwMC43NjkgNDQuNDMyNSAxMDIuMzAzIDQ0LjAyNDUgMTAzLjEwOSA0My4yNDQ1QzEwMy45MTYgNDIuNDI4NSAxMDQuMzE4IDQxLjMxNCAxMDQuMzE4IDM5LjgyOVYzMi4yMThIMTA0LjI3OVpcIiBzdHJva2U9XCIjMjUyQjUxXCIgc3Ryb2tlV2lkdGg9XCI0XCIgbWFzaz1cInVybCgjcGF0aC0xLW91dHNpZGUtMSlcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNODYuODQ2OSA2Mi4zNjhDODQuODkxNyA2My4wMTQyIDgzLjIxMSA2Mi45MzggODEuODA1IDYyLjEzOTNDODAuMzk4OSA2MS4zNDA2IDc5LjMwOTUgNTkuOTUwNiA3OC41MzY1IDU3Ljk2OTRDNzcuODkzNCA1Ni4zMjA5IDc3LjY4OTUgNTQuNjgwOSA3Ny45MjQ4IDUzLjA0OTNDNzguMTYwMSA1MS40MTc4IDc4LjgxMTUgNDkuOTczMiA3OS44NzkgNDguNzE1NEM4MC45NDA2IDQ3LjQ0MjUgODIuMzM0IDQ2LjUyMSA4NC4wNTkyIDQ1Ljk1MDdDODUuNzM1MSA0NS4zOTY4IDg3LjI4MDcgNDUuNDgzNSA4OC42OTYgNDYuMjEwOUM5MC4xMjE5IDQ2LjkxNzcgOTEuMjQxOSA0OC4zMTQ2IDkyLjA1NjEgNTAuNDAxN0M5Mi40OTI4IDUxLjUyMDkgOTIuNzA5OSA1Mi42OTU1IDkyLjcwNzUgNTMuOTI1NkM5Mi43MDUxIDU1LjE1NTggOTIuNDc3OCA1Ni4zMzIyIDkyLjAyNTQgNTcuNDU0OUM5My44OTQgNTguMjAzMiA5NC44NTc5IDU4LjY1MjkgOTQuOTE2OSA1OC44MDQyQzk1LjA3MDMgNTkuMTk3NCA5NS4wNTk4IDU5LjU1MDkgOTQuODg1NCA1OS44NjQ2Qzk0LjczMzMgNjAuMTg4MSA5NC40MjczIDYwLjQyNTggOTMuOTY3MiA2MC41Nzc5QzkzLjYyMjIgNjAuNjkyIDkyLjUzMDEgNjAuNDEyNyA5MC42OTA5IDU5Ljc0Qzg5LjY4OTIgNjAuOTc2IDg4LjQwNzkgNjEuODUyIDg2Ljg0NjkgNjIuMzY4Wk04Ni4zOTU0IDYwLjIxMjJDODcuMTAyIDU5Ljk3ODcgODcuNzEwNSA1OS40NzAyIDg4LjIyMSA1OC42ODY4Qzg3LjQ5OTMgNTguMzEwNyA4Ni43NjUxIDU3Ljg3ODkgODYuMDE4NCA1Ny4zOTE1Qzg1LjI4ODIgNTYuODk4NyA4NC44ODc3IDU2LjU2MTYgODQuODE2OSA1Ni4zODAxQzg0LjY1NzYgNTUuOTcxNyA4NC42MzA2IDU1LjY2NDggODQuNzM1OSA1NS40NTkyQzg0Ljg1MTggNTUuMjMzMSA4NS4xMDY4IDU1LjA1NDkgODUuNTAxMiA1NC45MjQ2Qzg1LjU1MDUgNTQuOTA4MyA4NS45OTM1IDU1LjA2OTIgODYuODMwMyA1NS40MDczQzg3LjE2NTMgNTUuNTUyNyA4Ny45MjM5IDU1Ljg1NjggODkuMTA2MiA1Ni4zMTk3Qzg5LjI2MTkgNTUuNDgyOCA4OS4yOTI2IDU0LjYxMDUgODkuMTk4MSA1My43MDI2Qzg5LjExNDIgNTIuNzc0MiA4OC44OTUyIDUxLjg1NjMgODguNTQxMSA1MC45NDg5Qzg4LjEyODEgNDkuODkwMiA4Ny41ODcxIDQ5LjEyMTUgODYuOTE3OSA0OC42NDI2Qzg2LjI2NTMgNDguMTU4MyA4NS40Nzg5IDQ4LjA2ODIgODQuNTU4NyA0OC4zNzIzQzgzLjUwNzIgNDguNzE5OSA4Mi43MTIyIDQ5LjM5MjQgODIuMTczOSA1MC4zODk5QzgxLjYzNTYgNTEuMzg3NCA4MS4zNTc2IDUyLjUyOTMgODEuMzQwMSA1My44MTU3QzgxLjMxNjcgNTUuMDg2OSA4MS41MjkyIDU2LjI5NzIgODEuOTc3NiA1Ny40NDY2QzgyLjI0OSA1OC4xNDIzIDgyLjYzNjUgNTguNzMxNCA4My4xNCA1OS4yMTM3QzgzLjY1NDEgNTkuNjc1NiA4NC4yMDYgNTkuOTk2OCA4NC43OTU5IDYwLjE3NzVDODUuMzg1OCA2MC4zNTgxIDg1LjkxODkgNjAuMzY5NyA4Ni4zOTU0IDYwLjIxMjJaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTEwNS42NDcgNTUuNTM5MUMxMDUuNjgyIDU1LjgxNzkgMTA1LjYwMiA1Ni4wNDA3IDEwNS40MDcgNTYuMjA3NUMxMDUuMjE5IDU2LjM4OTQgMTA0LjkzNSA1Ni41NDI4IDEwNC41NTcgNTYuNjY3N0MxMDMuNDI0IDU3LjA0MjQgMTAyLjc2NSA1Ni45OTU0IDEwMi41ODMgNTYuNTI2NUwxMDIuMzk0IDU1LjYxNTZDMTAyLjA1OCA1Ni4wODUzIDEwMS42NCA1Ni41ODIxIDEwMS4xMzkgNTcuMTA2MUMxMDAuNjM5IDU3LjYzIDEwMC4xODMgNTcuOTU5OSA5OS43NzIzIDU4LjA5NTdDOTcuMzQwNSA1OC44OTk1IDk1LjgzODUgNTguNTY3OCA5NS4yNjYyIDU3LjEwMDhDOTQuMjkyNiA1NC42MDU0IDk0LjA0OTggNTEuNjI5NCA5NC41Mzc3IDQ4LjE3MjlDOTQuNTk5MiA0Ny43NTk5IDk0LjcwNzIgNDcuNDQyNCA5NC44NjE4IDQ3LjIyMDZDOTUuMDMyOCA0Ni45OTMzIDk1LjM4OTQgNDYuNzkwMSA5NS45MzE2IDQ2LjYxMDhDOTYuNTA2NyA0Ni40MjA4IDk2Ljk2MzQgNDYuMzU1MiA5Ny4zMDE4IDQ2LjQxNDFDOTcuNjUwNiA0Ni40NTI0IDk3Ljg2MzQgNDYuNTY5OSA5Ny45NDAxIDQ2Ljc2NjVDOTcuOTU3OCA0Ni44MTE5IDk3LjkyMDUgNDYuOTc3OSA5Ny44MjgzIDQ3LjI2NDVDOTcuNzI0MyA0Ny41MjA4IDk3LjY0NDkgNDcuNzY5IDk3LjU5MDEgNDguMDA5MUM5Ni45NzIgNTAuODk0IDk3LjEwMjUgNTMuNDYzMiA5Ny45ODE2IDU1LjcxNjdDOTguMDU4MyA1NS45MTMzIDk4LjIwODMgNTYuMDYwMSA5OC40MzE2IDU2LjE1N0M5OC42NTUgNTYuMjUzOSA5OC44MzIzIDU2LjI4MDcgOTguOTYzOCA1Ni4yMzcyQzk5LjMyNTMgNTYuMTE3NyA5OS44NzEyIDU1Ljc1OCAxMDAuNjAyIDU1LjE1OEMxMDEuMzQ5IDU0LjU1MjUgMTAxLjg4NyA1NC4wMDc0IDEwMi4yMTggNTMuNTIyNkwxMDEuOTk0IDUxLjUyMjJDMTAxLjczIDQ5LjEzMzcgMTAxLjU3NCA0Ny42NjU1IDEwMS41MjcgNDcuMTE3NUMxMDEuNDcyIDQ2LjQ1MjggMTAxLjUxIDQ1Ljg4NTMgMTAxLjY0MiA0NS40MTQ5QzEwMS43ODQgNDQuOTIzOSAxMDIuMTY4IDQ0LjU3NTIgMTAyLjc5MiA0NC4zNjg4QzEwMy42NjMgNDQuMDgxIDEwNC4xOTMgNDQuMTc5IDEwNC4zODIgNDQuNjYzQzEwNC40MTEgNDQuNzM4NiAxMDQuNDI1IDQ0Ljg0NTEgMTA0LjQyMyA0NC45ODI0QzEwNC40MzEgNDUuMDk5MSAxMDQuNDQyIDQ1LjE5OCAxMDQuNDU1IDQ1LjI3OUwxMDQuOTAzIDQ5LjI4QzEwNS4yNTMgNTIuNDU5NSAxMDUuNTAxIDU0LjU0NTkgMTA1LjY0NyA1NS41MzkxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMDUuNjQ1IDQwLjQwMzdDMTA1LjQ2MiAzOS45MzQ5IDEwNS40NTYgMzkuNDY3NCAxMDUuNjI3IDM5LjAwMTJDMTA1LjgxNCAzOC41Mjk2IDEwNi4xOTUgMzguMTk4OCAxMDYuNzcgMzguMDA4N0MxMDcuMzc4IDM3LjgwNzggMTA3Ljk3MSAzNy44MDc5IDEwOC41NTEgMzguMDA5MUMxMDkuMTQ2IDM4LjIwNDkgMTA5LjUzIDM4LjUyMjEgMTA5LjcwMSAzOC45NjA3QzEwOS44NzIgMzkuMzk5MiAxMDkuNzkgMzkuODUzNCAxMDkuNDUzIDQwLjMyM0MxMDkuMTE3IDQwLjc5MjcgMTA4LjY0NSA0MS4xMjggMTA4LjAzNyA0MS4zMjlDMTA3LjQ0NiA0MS41MjQ1IDEwNi45NDEgNDEuNTM3NyAxMDYuNTIyIDQxLjM2ODdDMTA2LjExNSA0MS4xNzkxIDEwNS44MjIgNDAuODU3NCAxMDUuNjQ1IDQwLjQwMzdaTTEwNy45NjggNTMuMTMzQzEwNy44NjIgNTIuODYwNyAxMDcuNTMxIDQ5Ljg5NjggMTA2Ljk3NSA0NC4yNDExTDEwNi41IDQzLjQ1MDZDMTA2LjQzNSA0My4yODQyIDEwNi40OTIgNDMuMTIwNCAxMDYuNjcgNDIuOTU5QzEwNi44NDggNDIuNzk3NyAxMDcuMjQxIDQyLjYxNjYgMTA3Ljg0OSA0Mi40MTU2QzEwOC4zMjYgNDIuMjU4MSAxMDguNzE4IDQyLjI2NSAxMDkuMDI2IDQyLjQzNjRDMTA5LjM1IDQyLjYwMjQgMTA5LjU3NyA0Mi44NTE3IDEwOS43MDcgNDMuMTg0NEMxMDkuNzQzIDQzLjI3NTIgMTA5Ljc3MyA0My40MDE2IDEwOS44IDQzLjU2MzdMMTEwLjc5MiA1Mi40NTU2TDExMS4yNjggNTMuMjQ2MUMxMTEuMzMyIDUzLjQxMjQgMTExLjI3NiA1My41NzYzIDExMS4wOTggNTMuNzM3NkMxMTAuOTE5IDUzLjg5OSAxMTAuNTI2IDU0LjA4MDEgMTA5LjkxOCA1NC4yODExQzEwOS4zNzYgNTQuNDYwMyAxMDguOTY3IDU0LjQzMzQgMTA4LjY5IDU0LjIwMDNDMTA4LjQwOCA1My45NTIyIDEwOC4xNjcgNTMuNTk2NCAxMDcuOTY4IDUzLjEzM1pcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIyLjE5NSA0OS45OTI1QzExOC4xNiA1MS44MjE0IDExNS44NjIgNTIuODcxNSAxMTUuMyA1My4xNDI2QzExNC43MTUgNTMuNDA0IDExNC40MTUgNTMuNTM3NSAxMTQuMzk5IDUzLjU0MjlDMTE0LjEwMyA1My42NDA3IDExMy44MjUgNTMuNjg5OCAxMTMuNTY2IDUzLjY5MDJDMTEzLjI5IDUzLjY5NiAxMTMuMTEyIDUzLjY0MzkgMTEzLjAzMiA1My41MzM3QzExMi45NjkgNTMuNDY5IDExMi44NSA1My4zNTQ2IDExMi42NzUgNTMuMTkwNkMxMTIuNSA1My4wMjY1IDExMi4zODYgNTIuODc2NSAxMTIuMzMzIDUyLjc0MDRDMTEyLjI3OSA1Mi42MDQyIDExMi4yNzkgNTIuNDg0OCAxMTIuMzMyIDUyLjM4MkMxMTIuMzc5IDUyLjI2NDEgMTEyLjUzMyA1Mi4xMzYzIDExMi43OTQgNTEuOTk4NkMxMTMuMDQgNTEuODY2NCAxMTMuMjExIDUxLjc4MzkgMTEzLjMxIDUxLjc1MTRDMTEzLjgwNCA1MC43MzQ1IDExNC40NDMgNDkuMzUzNiAxMTUuMjI4IDQ3LjYwODhDMTE2LjMyNyA0NS4xOTY2IDExNy4xOCA0My40MTIyIDExNy43ODYgNDIuMjU1N0wxMTMuMDQ5IDQ0LjMwNzlDMTEyLjU0IDQ0LjQ3NjIgMTEyLjE5NCA0NC4zMjYgMTEyLjAxMSA0My44NTcxQzExMS44NjQgNDMuNDc5MSAxMTEuODY0IDQzLjA1MjEgMTEyLjAxMiA0Mi41NzYyQzExMi4wNTMgNDIuNDQzMiAxMTIuNjU1IDQyLjEwNzcgMTEzLjgxOCA0MS41Njk3QzExNC45OCA0MS4wMzE3IDExNi4yNTYgNDAuNDczNSAxMTcuNjQ0IDM5Ljg5NTFDMTE5LjA0MyAzOS4yOTYyIDExOS45MzkgMzguOTMxNiAxMjAuMzM0IDM4LjgwMTNDMTIwLjk1OCAzOC41OTQ5IDEyMS40IDM4LjgyNDQgMTIxLjY2IDM5LjQ4OTlDMTIxLjczNiAzOS42ODY1IDEyMS43MzYgMzkuOSAxMjEuNjU5IDQwLjEzMDNDMTIxLjU3NiA0MC4zNDU2IDEyMS40NDUgNDAuNTMzOSAxMjEuMjY3IDQwLjY5NTJMMTIwLjg5MyA0MS4zMDU1QzEyMC4zMiA0Mi40NTExIDExOS42MzMgNDMuODk5IDExOC44MzIgNDUuNjQ5M0wxMTYuNzg2IDQ5Ljk2MjNDMTE5LjI2NCA0OC44MDE3IDEyMC44NjQgNDguMTAxOSAxMjEuNTg3IDQ3Ljg2M0MxMjIuMjEyIDQ3LjY1NjYgMTIyLjY1NCA0Ny44ODYxIDEyMi45MTMgNDguNTUxNkMxMjMuMDE0IDQ4LjgwODcgMTIyLjk4MiA0OS4wODM4IDEyMi44MTggNDkuMzc3QzEyMi42NjUgNDkuNjQ5NyAxMjIuNDU3IDQ5Ljg1NDggMTIyLjE5NSA0OS45OTI1WlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMjcuMTQ0IDQzLjIzNDZDMTI3LjIwNSA0My42NzU1IDEyNy4xNSA0NC4wMDk2IDEyNi45NzkgNDQuMjM2OUMxMjYuODI0IDQ0LjQ1ODcgMTI2LjQ3NiA0NC42NTkzIDEyNS45MzMgNDQuODM4NUMxMjUuMDEzIDQ1LjE0MjYgMTI0LjQzOCA0NC45OTk4IDEyNC4yMDggNDQuNDFDMTI0LjA2MSA0NC4wMzE5IDEyMy45MjYgNDMuNDAxOSAxMjMuODA1IDQyLjUyQzEyMy42OTQgNDEuNjE3NiAxMjMuNTY3IDQwLjQxMzEgMTIzLjQyNCAzOC45MDY1QzEyMy4yMyAzNi44ODc2IDEyMy4wMzkgMzUuMjA5MiAxMjIuODUxIDMzLjg3MTNDMTIyLjcyNiAzMy4wNzU5IDEyMy4xNjUgMzIuNTEyNiAxMjQuMTY3IDMyLjE4MTNDMTI0LjY2IDMyLjAxODQgMTI1LjA3MSAzMS45NzY3IDEyNS4zOTkgMzIuMDU2MUMxMjUuNzI2IDMyLjEzNTYgMTI1LjkxMyAzMi4zMjk5IDEyNS45NiAzMi42Mzg5TDEyNy4xNDQgNDMuMjM0NlpNMTI2LjQ5NSA0OS4wNTgxQzEyNi4wNjcgNDkuMTk5MyAxMjUuNjQyIDQ5LjE3NzkgMTI1LjIxNyA0OC45OTM3QzEyNC43ODcgNDguNzk0NCAxMjQuNDk1IDQ4LjQ5ODIgMTI0LjM0MiA0OC4xMDQ5QzEyNC4xODkgNDcuNzExNyAxMjQuMjQ0IDQ3LjI4MzYgMTI0LjUwOSA0Ni44MjA1QzEyNC43NjcgNDYuMzQyMyAxMjUuMTg0IDQ2LjAwODIgMTI1Ljc1OSA0NS44MTgxQzEyNi4yNjkgNDUuNjQ5OCAxMjYuNzQgNDUuNjIyIDEyNy4xNzQgNDUuNzM0OEMxMjcuNjAxIDQ1LjgzMjUgMTI3LjkwNCA0Ni4xMDgyIDEyOC4wODEgNDYuNTYxOUMxMjguMjYzIDQ3LjAzMDcgMTI4LjE4NSA0Ny41MTc4IDEyNy44NDQgNDguMDIzMkMxMjcuNTE5IDQ4LjUyMzEgMTI3LjA3IDQ4Ljg2ODEgMTI2LjQ5NSA0OS4wNTgxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk04Ni45MTggNDguNjQyNUM4Ni4yNjUzIDQ4LjE1ODIgODUuNDc4OSA0OC4wNjgxIDg0LjU1ODggNDguMzcyM0M4My41MDcyIDQ4LjcxOTkgODIuNzEyMyA0OS4zOTI0IDgyLjE3MzkgNTAuMzg5OUM4MS42MzU2IDUxLjM4NzQgODEuMzU3NyA1Mi41MjkzIDgxLjM0MDEgNTMuODE1NkM4MS4zMTY3IDU1LjA4NjkgODEuNTI5MiA1Ni4yOTcyIDgxLjk3NzYgNTcuNDQ2NkM4Mi4yNDkgNTguMTQyMyA4Mi42MzY1IDU4LjczMTMgODMuMTQgNTkuMjEzN0M4My42NTQxIDU5LjY3NTUgODQuMjA2MSA1OS45OTY4IDg0Ljc5NTkgNjAuMTc3NEM4NS4zODU4IDYwLjM1ODEgODUuOTE5IDYwLjM2OTYgODYuMzk1NSA2MC4yMTIxQzg2LjU3NTIgNjAuMTUyOCA4Ni43NDg1IDYwLjA3NTYgODYuOTE1NSA1OS45ODA2Qzg3LjQwNTIgNTkuNzAyMiA4Ny44NDA0IDU5LjI3MDkgODguMjIxMSA1OC42ODY3Qzg3Ljg4OTQgNTguNTEzOSA4Ny41NTUyIDU4LjMyOTQgODcuMjE4MyA1OC4xMzMxQzg2LjgyMiA1Ny45MDIxIDg2LjQyMiA1Ny42NTQ5IDg2LjAxODUgNTcuMzkxNUM4NS4yODgzIDU2Ljg5ODcgODQuODg3OCA1Ni41NjE1IDg0LjgxNyA1Ni4zOEM4NC42NTc2IDU1Ljk3MTcgODQuNjMwNiA1NS42NjQ3IDg0LjczNiA1NS40NTkyQzg0Ljg1MTggNTUuMjMzMSA4NS4xMDY5IDU1LjA1NDkgODUuNTAxMiA1NC45MjQ1Qzg1LjU1MDUgNTQuOTA4MiA4NS45OTM1IDU1LjA2OTEgODYuODMwMyA1NS40MDcyQzg2Ljk0NTYgNTUuNDU3MiA4Ny4xMTExIDU1LjUyNjEgODcuMzI2NyA1NS42MTM3Qzg3LjczNzcgNTUuNzgwOCA4OC4zMzA4IDU2LjAxNjEgODkuMTA2MiA1Ni4zMTk3Qzg5LjIxNTYgNTUuNzMxOSA4OS4yNjMzIDU1LjEyNjcgODkuMjQ5MiA1NC41MDRDODkuMjQzMyA1NC4yNCA4OS4yMjYzIDUzLjk3MjggODkuMTk4MSA1My43MDI2Qzg5LjExNDIgNTIuNzc0MiA4OC44OTUyIDUxLjg1NjMgODguNTQxMiA1MC45NDg4Qzg4LjEyODIgNDkuODkwMiA4Ny41ODcxIDQ5LjEyMTQgODYuOTE4IDQ4LjY0MjVaTTc2LjA3MDYgNTIuODIyN0M3Ni4zNDggNTAuODk5NSA3Ny4xMjM5IDQ5LjE2NyA3OC40MDAyIDQ3LjY2MTFDNzkuNjkxIDQ2LjExNTYgODEuMzg1MSA0NS4wMDUyIDgzLjQyNyA0NC4zMzAzQzg1LjU1MSA0My42MjgyIDg3LjY2MTggNDMuNzExNSA4OS41OTU3IDQ0LjcwMTNDOTAuOTAyMyA0NS4zNTIzIDkxLjkzMDcgNDYuMzcxNiA5Mi43MzYgNDcuNjQ2M0M5Mi44Mjg0IDQ3LjE5NDcgOTIuOTkwNSA0Ni43MTcgOTMuMjg3NCA0Ni4yOTA5TDkzLjMwNTMgNDYuMjY1M0w5My4zMjQyIDQ2LjI0MDJDOTMuODQzMyA0NS41NTAzIDk0LjY3NjQgNDUuMTk2MyA5NS4yOTk1IDQ0Ljk5MDRDOTUuOTYxMSA0NC43NzE3IDk2Ljc3NTEgNDQuNTg3MSA5Ny41ODU5IDQ0LjcxMTlDOTguMTk4MSA0NC43OTA2IDk5LjIwMDYgNDUuMDg3IDk5LjY0OTIgNDYuMDYzNUM5OS42NzU2IDQ1LjY5MjYgOTkuNzMzNyA0NS4zMzE0IDk5LjgzMDkgNDQuOTg0OEw5OS44MzQ4IDQ0Ljk3MDlDMTAwLjE2OSA0My44MTk1IDEwMS4wOTEgNDMuMTAxOCAxMDIuMTYgNDIuNzQ4NEMxMDIuNzE1IDQyLjU2NDkgMTAzLjQ1MiA0Mi4zOTc5IDEwNC4yMTEgNDIuNTM4NUMxMDQuMzg3IDQyLjU3MTEgMTA0LjU1NCA0Mi42MTgyIDEwNC43MTIgNDIuNjc4NUMxMDQuNzUxIDQyLjU3MDkgMTA0Ljc5NyA0Mi40Njg0IDEwNC44NSA0Mi4zNzE0QzEwNC40MDYgNDEuOTg1OSAxMDQuMDg4IDQxLjUwNzYgMTAzLjg4NSA0MC45ODU1QzEwMy41NjEgNDAuMTU2NiAxMDMuNTQ3IDM5LjI5MDQgMTAzLjg1NCAzOC40NTE2TDEwMy44NjIgMzguNDMxMUwxMDMuODcgMzguNDEwOEMxMDQuMjcxIDM3LjM5NzggMTA1LjExMSAzNi43Mjc2IDEwNi4xMzggMzYuMzg4MkMxMDcuMTM5IDM2LjA1NzIgMTA4LjE4NiAzNi4wNDYgMTA5LjE5NSAzNi4zOTI3QzExMC4xNjkgMzYuNzE2MSAxMTEuMDU3IDM3LjM0MjYgMTExLjQ2MSAzOC4zNzg3QzExMS44MTcgMzkuMjg4OCAxMTEuNjYzIDQwLjE3MDMgMTExLjI0IDQwLjkxOTVDMTExLjMzNSA0MC44NiAxMTEuNDMyIDQwLjgwNCAxMTEuNTI1IDQwLjc1MjFDMTExLjg4OSA0MC41NDkgMTEyLjM4MiA0MC4zMDY3IDExMi45NzggNDAuMDMxM0MxMTQuMTY0IDM5LjQ4MjQgMTE1LjQ2IDM4LjkxNTQgMTE2Ljg2NCAzOC4zMzAyQzExOC4yMzQgMzcuNzQzOCAxMTkuMjExIDM3LjM0MjggMTE5LjcwMSAzNy4xODA4QzEyMC4xNzYgMzcuMDI0IDEyMC43NTkgMzYuOTQwOSAxMjEuMzU5IDM3LjA2OTZDMTIxLjIzNyAzNS45MzUyIDEyMS4xMTYgMzQuOTQ2OCAxMjAuOTk4IDM0LjEwMjdDMTIwLjg4MiAzMy4zNDQ2IDEyMS4wMjQgMzIuNTQ1MiAxMjEuNTY3IDMxLjg0OTFDMTIyLjA4MSAzMS4xODgxIDEyMi44MTkgMzAuNzk3NSAxMjMuNTM1IDMwLjU2MDlDMTI0LjIwNCAzMC4zMzk5IDEyNS4wMzIgMzAuMTg2NyAxMjUuODc1IDMwLjM5MTFDMTI2LjMyMyAzMC40OTk3IDEyNi44IDMwLjcyMDMgMTI3LjE4NCAzMS4xMTkzQzEyNy41NjkgMzEuNTE4MyAxMjcuNzQ5IDMxLjk4MSAxMjcuODEzIDMyLjQwMzNMMTI3LjgxNyAzMi40MzI5TDEyOS4wMDMgNDMuMDQwNEMxMjkuMDYzIDQzLjQ5NjUgMTI5LjA2NyA0NC4wNjkzIDEyOC44NDYgNDQuNjMwMkMxMjkuMzEzIDQ0Ljk5MTEgMTI5LjY0MSA0NS40Njc5IDEyOS44NDEgNDUuOTc5OUMxMzAuMjUzIDQ3LjAzNjEgMTMwLjAxMiA0OC4wNjU2IDEyOS40NDEgNDguOTE4NEMxMjguOTA0IDQ5Ljc0MTEgMTI4LjEyIDUwLjM1MDMgMTI3LjEyNyA1MC42Nzg1QzEyNi4yMTUgNTAuOTc5NyAxMjUuMjc2IDUwLjkyMjUgMTI0LjQyIDUwLjU1MDlMMTI0LjM5OCA1MC41NDE1TDEyNC4zNzYgNTAuNTMxNkMxMjQuMzQzIDUwLjUxNjIgMTI0LjMxIDUwLjUwMDUgMTI0LjI3OCA1MC40ODQ0QzEyMy45OSA1MC44ODU0IDEyMy42MDggNTEuMjMyMyAxMjMuMTI0IDUxLjQ4NzFMMTIzLjA3NCA1MS41MTM1TDEyMy4wMjIgNTEuNTM3MUMxMTguOTcyIDUzLjM3MjkgMTE2LjcwMyA1NC40MDk0IDExNi4xNjggNTQuNjY3NUwxMTYuMTQzIDU0LjY3OTZMMTE2LjExNyA1NC42OTFDMTE1LjgyNSA1NC44MjE5IDExNS42MDIgNTQuOTIxNSAxMTUuNDQ5IDU0Ljk4OTNMMTE1LjI2OCA1NS4wNjkyTDExNS4yMDcgNTUuMDk1OUwxMTUuMTcgNTUuMTExM0wxMTUuMTM1IDU1LjEyNTRDMTE1LjEyNyA1NS4xMjg4IDExNS4wODQgNTUuMTQ1NyAxMTUuMDMxIDU1LjE2MzNDMTE0LjU4IDU1LjMxMjEgMTE0LjA5NiA1NS40MDg0IDExMy41ODkgNTUuNDExN0MxMTMuMzM3IDU1LjQxNiAxMTIuNzY0IDU1LjQwMzMgMTEyLjIxNyA1NS4xMjI2QzExMS45NzIgNTUuMzA2MyAxMTEuNzEyIDU1LjQzOTMgMTExLjUwNyA1NS41MzRDMTExLjIyIDU1LjY2NTggMTEwLjg5NSA1NS43ODc0IDExMC41NTEgNTUuOTAxNEMxMDkuNzY0IDU2LjE2MTQgMTA4LjUzOCA1Ni4zMjk1IDEwNy41MjMgNTUuNTQ3M0MxMDcuNTUyIDU2LjIwNDUgMTA3LjMyNSA1Ni44OTM3IDEwNi43MjQgNTcuNDMxQzEwNi4yNjkgNTcuODU1IDEwNS43MDkgNTguMTE2NSAxMDUuMTkgNTguMjg4QzEwNC41NDYgNTguNTAwOCAxMDMuNzk3IDU4LjY4MiAxMDMuMDY5IDU4LjYyOTlDMTAyLjgzNiA1OC42MTMzIDEwMi41NzUgNTguNTcwNyAxMDIuMzA4IDU4LjQ4MTFDMTAxLjc3NyA1OC45OTYyIDEwMS4xNDUgNTkuNDcxMiAxMDAuNDA0IDU5LjcxNkM5OS4xODE5IDYwLjEyMDEgOTcuOTIzOCA2MC4zNTY0IDk2Ljc1NDQgNjAuMTkwNUM5Ni43MDc5IDYwLjMyNzUgOTYuNjQ5MyA2MC40NjQgOTYuNTc3NCA2MC41OTk0Qzk2LjE2MDQgNjEuNDQxOSA5NS4zODc2IDYxLjkzNzcgOTQuNTk5NCA2Mi4xOTgzQzk0LjA3OTEgNjIuMzcwMiA5My41NzY1IDYyLjMyNTcgOTMuMzM2NSA2Mi4yOTgxQzkzLjAzMDMgNjIuMjYyOSA5Mi43MDY1IDYyLjE5NDEgOTIuMzg4NiA2Mi4xMTI4QzkyLjA1MzcgNjIuMDI3MSA5MS42NzQxIDYxLjkxNDEgOTEuMjUzMyA2MS43NzY1QzkwLjE5NTQgNjIuNzY2MiA4OC45MzI0IDYzLjUwNzkgODcuNDc5MSA2My45ODgzQzg1LjEzOTEgNjQuNzYxOCA4Mi44MzQ5IDY0Ljc0NzUgODAuODIyNiA2My42MDQ0Qzc4LjkzOTcgNjIuNTM0NyA3Ny42Mzc5IDYwLjc2MDIgNzYuNzc2MSA1OC41NTEyQzc2LjAzODcgNTYuNjYxIDc1Ljc5MzUgNTQuNzQ0MiA3Ni4wNzA2IDUyLjgyMjdaTTkwLjY5MSA1OS43Mzk5Qzg5LjY4OTIgNjAuOTc2IDg4LjQwNzkgNjEuODUyIDg2Ljg0NyA2Mi4zNjc5Qzg0Ljg5MTcgNjMuMDE0MiA4My4yMTEgNjIuOTM4IDgxLjgwNSA2Mi4xMzkyQzgwLjM5OSA2MS4zNDA1IDc5LjMwOTUgNTkuOTUwNSA3OC41MzY2IDU3Ljk2OTNDNzcuODkzNCA1Ni4zMjA4IDc3LjY4OTUgNTQuNjgwOCA3Ny45MjQ4IDUzLjA0OTNDNzguMTYwMiA1MS40MTc4IDc4LjgxMTUgNDkuOTczMSA3OS44NzkgNDguNzE1NEM4MC45NDA2IDQ3LjQ0MjUgODIuMzM0IDQ2LjUyMDkgODQuMDU5MiA0NS45NTA3Qzg1LjczNTIgNDUuMzk2NyA4Ny4yODA4IDQ1LjQ4MzQgODguNjk2MSA0Ni4yMTA4QzkwLjEyMTkgNDYuOTE3NiA5MS4yNDE5IDQ4LjMxNDYgOTIuMDU2MiA1MC40MDE3QzkyLjIwMzQgNTAuNzc5MiA5Mi4zMjU4IDUxLjE2MyA5Mi40MjMxIDUxLjU1MzFDOTIuNjE0MyA1Mi4zMTk2IDkyLjcwOTEgNTMuMTEwNCA5Mi43MDc1IDUzLjkyNTZDOTIuNzA3MSA1NC4xNzE5IDkyLjY5NzYgNTQuNDE2IDkyLjY3OSA1NC42NThDOTIuNjA1MSA1NS42MjQ2IDkyLjM4NzIgNTYuNTU2OSA5Mi4wMjU0IDU3LjQ1NDlDOTIuNzE2NyA1Ny43MzE3IDkzLjI4NDIgNTcuOTY3NyA5My43Mjc4IDU4LjE2MjhDOTQuNDgzNCA1OC40OTUxIDk0Ljg3OTcgNTguNzA4OCA5NC45MTY5IDU4LjgwNDFDOTUuMDIxNiA1OS4wNzI3IDk1LjA1IDU5LjMyMjcgOTUuMDAxOSA1OS41NTQxQzk0Ljk3OTUgNTkuNjYxNiA5NC45NDA3IDU5Ljc2NTEgOTQuODg1NCA1OS44NjQ2Qzk0LjczMzQgNjAuMTg4IDk0LjQyNzMgNjAuNDI1OCA5My45NjcyIDYwLjU3NzhDOTMuNjIyMiA2MC42OTE5IDkyLjUzMDEgNjAuNDEyNiA5MC42OTEgNTkuNzM5OVpNOTUuMTk0NCA1Ni45MTIyQzk1LjIxNzkgNTYuOTc1NCA5NS4yNDE4IDU3LjAzODIgOTUuMjY2MiA1Ny4xMDA4Qzk1LjQ5NDcgNTcuNjg2NiA5NS44NzE1IDU4LjA5MTMgOTYuMzk2NiA1OC4zMTVDOTYuNTA4MiA1OC4zNjI2IDk2LjYyNjcgNTguNDAyIDk2Ljc1MTggNTguNDMzM0M5Ny41MTEzIDU4LjYyMjcgOTguNTE4MiA1OC41MTAyIDk5Ljc3MjMgNTguMDk1NkMxMDAuMTIyIDU3Ljk3OTkgMTAwLjUwNSA1Ny43MjMyIDEwMC45MiA1Ny4zMjU1QzEwMC45OTIgNTcuMjU2NSAxMDEuMDY1IDU3LjE4MzQgMTAxLjEzOSA1Ny4xMDZDMTAxLjE4NyA1Ny4wNTYxIDEwMS4yMzQgNTcuMDA2NCAxMDEuMjggNTYuOTU3QzEwMS4zNTEgNTYuODgxNSAxMDEuNDE5IDU2LjgwNjUgMTAxLjQ4NiA1Ni43MzIxQzEwMS40OTEgNTYuNzI2OCAxMDEuNDk2IDU2LjcyMTQgMTAxLjUwMSA1Ni43MTZDMTAxLjU5OSA1Ni42MDcyIDEwMS42OTMgNTYuNDk5NiAxMDEuNzg0IDU2LjM5MzJDMTAxLjc4NiA1Ni4zOTAzIDEwMS43ODggNTYuMzg3NCAxMDEuNzkxIDU2LjM4NDVDMTAyLjAxNSA1Ni4xMjA2IDEwMi4yMTYgNTUuODY0MyAxMDIuMzk0IDU1LjYxNTVMMTAyLjU4MyA1Ni41MjY1QzEwMi43MTQgNTYuODY0NCAxMDMuMDkzIDU2Ljk4MzIgMTAzLjcxOSA1Ni44ODI5QzEwMy45NjEgNTYuODQ0IDEwNC4yNDEgNTYuNzcyMyAxMDQuNTU3IDU2LjY2NzZDMTA0LjkzNSA1Ni41NDI3IDEwNS4yMTkgNTYuMzg5MyAxMDUuNDA3IDU2LjIwNzRDMTA1LjYwMiA1Ni4wNDA2IDEwNS42ODIgNTUuODE3OCAxMDUuNjQ4IDU1LjUzOUMxMDUuNTAxIDU0LjU0NTggMTA1LjI1MyA1Mi40NTk1IDEwNC45MDMgNDkuMjc5OUwxMDQuNDU1IDQ1LjI3OUMxMDQuNDQyIDQ1LjE5NzkgMTA0LjQzMSA0NS4wOTkgMTA0LjQyMyA0NC45ODIzQzEwNC40MjUgNDQuODQ1IDEwNC40MTEgNDQuNzM4NiAxMDQuMzgyIDQ0LjY2M0MxMDQuMTkzIDQ0LjE3OSAxMDMuNjYzIDQ0LjA4MDkgMTAyLjc5MiA0NC4zNjg4QzEwMi4xNjggNDQuNTc1MSAxMDEuNzg0IDQ0LjkyMzggMTAxLjY0MiA0NS40MTQ4QzEwMS41MSA0NS44ODUyIDEwMS40NzIgNDYuNDUyOCAxMDEuNTI3IDQ3LjExNzVDMTAxLjU3NCA0Ny42NjU0IDEwMS43MyA0OS4xMzM2IDEwMS45OTQgNTEuNTIyMUwxMDIuMjE4IDUzLjUyMjZDMTAxLjk1NSA1My45MDc3IDEwMS41NjEgNTQuMzMwOCAxMDEuMDM2IDU0Ljc5MjFDMTAwLjkgNTQuOTExNSAxMDAuNzU1IDU1LjAzMzQgMTAwLjYwMiA1NS4xNTc5QzEwMC40NDMgNTUuMjg4IDEwMC4yOTQgNTUuNDA2OCAxMDAuMTUzIDU1LjUxNDNDOTkuNjQzMiA1NS45MDI2IDk5LjI0NjkgNTYuMTQzNiA5OC45NjM4IDU2LjIzNzJDOTguODMyNCA1Ni4yODA2IDk4LjY1NSA1Ni4yNTM5IDk4LjQzMTcgNTYuMTU2OUM5OC4yMDg0IDU2LjA2IDk4LjA1ODMgNTUuOTEzMiA5Ny45ODE2IDU1LjcxNjZDOTcuMTAyNSA1My40NjMyIDk2Ljk3MiA1MC44OTQgOTcuNTkwMiA0OC4wMDlDOTcuNjQ0OSA0Ny43NjkgOTcuNzI0MyA0Ny41MjA4IDk3LjgyODMgNDcuMjY0NEM5Ny45MjA2IDQ2Ljk3NzggOTcuOTU3OCA0Ni44MTE5IDk3Ljk0MDEgNDYuNzY2NUM5Ny44NjM0IDQ2LjU2OTkgOTcuNjUwNiA0Ni40NTI0IDk3LjMwMTggNDYuNDE0Qzk2Ljk2MzUgNDYuMzU1MSA5Ni41MDY3IDQ2LjQyMDcgOTUuOTMxNyA0Ni42MTA4Qzk1LjM4OTUgNDYuNzkgOTUuMDMyOCA0Ni45OTMzIDk0Ljg2MTggNDcuMjIwNUM5NC43MDcyIDQ3LjQ0MjQgOTQuNTk5MiA0Ny43NTk4IDk0LjUzNzcgNDguMTcyOEM5NC4zODA0IDQ5LjI4NzIgOTQuMjk5MSA1MC4zNTE3IDk0LjI5MzcgNTEuMzY2MkM5NC4yODg5IDUyLjI1ODkgOTQuMzQzIDUzLjExMyA5NC40NTU5IDUzLjkyODRDOTQuNDg2IDU0LjE0NTkgOTQuNTIwMyA1NC4zNjA3IDk0LjU1ODggNTQuNTcyN0M5NC43MDc5IDU1LjM5MzggOTQuOTE5NyA1Ni4xNzM3IDk1LjE5NDQgNTYuOTEyMlpNMTA2Ljk3NSA0NC4yNDFDMTA3LjUzMSA0OS44OTY3IDEwNy44NjIgNTIuODYwNyAxMDcuOTY4IDUzLjEzMjlDMTA4LjE2NyA1My41OTYzIDEwOC40MDggNTMuOTUyMSAxMDguNjkgNTQuMjAwM0MxMDguOTY3IDU0LjQzMzMgMTA5LjM3NiA1NC40NjAyIDEwOS45MTggNTQuMjgxQzExMC4zNDcgNTQuMTM5NCAxMTAuNjY5IDU0LjAwNzYgMTEwLjg4NCA1My44ODU2QzExMC45NzQgNTMuODM0NSAxMTEuMDQ1IDUzLjc4NTIgMTExLjA5OCA1My43Mzc2QzExMS4yNzYgNTMuNTc2MiAxMTEuMzMyIDUzLjQxMjQgMTExLjI2OCA1My4yNDZMMTEwLjc5MiA1Mi40NTU1TDEwOS44IDQzLjU2MzZDMTA5Ljc3MyA0My40MDE1IDEwOS43NDMgNDMuMjc1MSAxMDkuNzA3IDQzLjE4NDRDMTA5LjYyOCA0Mi45ODA1IDEwOS41MTIgNDIuODA3OSAxMDkuMzU5IDQyLjY2NjdDMTA5LjI2MyA0Mi41Nzc0IDEwOS4xNTEgNDIuNTAwNiAxMDkuMDI2IDQyLjQzNjRDMTA4Ljg1IDQyLjMzODggMTA4LjY0OCA0Mi4yOTQ1IDEwOC40MTggNDIuMzAzNkMxMDguMjQ0IDQyLjMxMDQgMTA4LjA1NCA0Mi4zNDc4IDEwNy44NDkgNDIuNDE1NUMxMDcuMjQxIDQyLjYxNjUgMTA2Ljg0OCA0Mi43OTc2IDEwNi42NyA0Mi45NTlDMTA2LjU5OCA0My4wMjM5IDEwNi41NDYgNDMuMDg5MyAxMDYuNTE0IDQzLjE1NUMxMDYuNDY2IDQzLjI1MjYgMTA2LjQ2MSA0My4zNTExIDEwNi41IDQzLjQ1MDVMMTA2Ljk3NSA0NC4yNDFaTTExNy43ODYgNDIuMjU1NkMxMTcuNDU5IDQyLjg3OTkgMTE3LjA2IDQzLjY4NzEgMTE2LjU4OSA0NC42NzcyQzExNi4xODcgNDUuNTIxNCAxMTUuNzM0IDQ2LjQ5ODYgMTE1LjIyOCA0Ny42MDg4QzExNC40NDMgNDkuMzUzNiAxMTMuODA0IDUwLjczNDQgMTEzLjMxIDUxLjc1MTNDMTEzLjIxMiA1MS43ODM5IDExMy4wNCA1MS44NjYzIDExMi43OTQgNTEuOTk4NkMxMTIuNzU4IDUyLjAxOCAxMTIuNzIzIDUyLjAzNzMgMTEyLjY5IDUyLjA1NjNDMTEyLjY3IDUyLjA2ODEgMTEyLjY1IDUyLjA3OTggMTEyLjYzMiA1Mi4wOTE0QzExMi41MTMgNTIuMTY2IDExMi40MjggNTIuMjM3NCAxMTIuMzc2IDUyLjMwNTdDMTEyLjM1NyA1Mi4zMzE2IDExMi4zNDIgNTIuMzU3IDExMi4zMzIgNTIuMzgyQzExMi4yODMgNTIuNDc2OCAxMTIuMjggNTIuNTg1OSAxMTIuMzIxIDUyLjcwOTJDMTEyLjMyNSA1Mi43MTk1IDExMi4zMjggNTIuNzI5OCAxMTIuMzMzIDUyLjc0MDNDMTEyLjM0OSA1Mi43ODI3IDExMi4zNzIgNTIuODI2NSAxMTIuNCA1Mi44NzE3QzExMi40NjMgNTIuOTcxMyAxMTIuNTU0IDUzLjA3NzYgMTEyLjY3NSA1My4xOTA1QzExMi44NSA1My4zNTQ1IDExMi45NjkgNTMuNDY4OSAxMTMuMDMyIDUzLjUzMzdDMTEzLjAzNSA1My41Mzg4IDExMy4wMzkgNTMuNTQzOSAxMTMuMDQ0IDUzLjU0ODhDMTEzLjA2NCA1My41NzI1IDExMy4wODkgNTMuNTkzMyAxMTMuMTE5IDUzLjYxMTFDMTEzLjEyOSA1My42MTY5IDExMy4xNCA1My42MjI0IDExMy4xNTEgNTMuNjI3NkMxMTMuMjQ4IDUzLjY3MzEgMTEzLjM4NiA1My42OTM5IDExMy41NjYgNTMuNjkwMUMxMTMuODI1IDUzLjY4OTcgMTE0LjEwMyA1My42NDA2IDExNC4zOTkgNTMuNTQyOUMxMTQuNDE1IDUzLjUzNzQgMTE0LjcxNSA1My40MDQgMTE1LjMgNTMuMTQyNUMxMTUuODYyIDUyLjg3MTQgMTE4LjE2IDUxLjgyMTQgMTIyLjE5NiA0OS45OTI1QzEyMi40NTcgNDkuODU0OCAxMjIuNjY1IDQ5LjY0OTYgMTIyLjgxOCA0OS4zNzdDMTIyLjgzOSA0OS4zMzg1IDEyMi44NTkgNDkuMzAwMyAxMjIuODc2IDQ5LjI2MjRDMTIyLjk4NCA0OS4wMjAzIDEyMi45OTkgNDguNzkxIDEyMi45MjIgNDguNTc0M0MxMjIuOTE5IDQ4LjU2NjcgMTIyLjkxNiA0OC41NTkxIDEyMi45MTMgNDguNTUxNUMxMjIuNzg1IDQ4LjIyMyAxMjIuNjEyIDQ4LjAwMDcgMTIyLjM5NSA0Ny44ODQ3QzEyMi4xNzMgNDcuNzY1NyAxMjEuOTAzIDQ3Ljc1ODQgMTIxLjU4NyA0Ny44NjI5QzEyMS4xNjEgNDguMDAzOCAxMjAuNDMgNDguMzA0NyAxMTkuMzk0IDQ4Ljc2NTdDMTE4LjY3MyA0OS4wODY5IDExNy44MDMgNDkuNDg1NyAxMTYuNzg2IDQ5Ljk2MjJMMTE4LjgzMiA0NS42NDkyQzExOS42MzMgNDMuODk5IDEyMC4zMiA0Mi40NTEgMTIwLjg5MyA0MS4zMDU0TDEyMS4yNjcgNDAuNjk1MUMxMjEuNDQ1IDQwLjUzMzggMTIxLjU3NiA0MC4zNDU1IDEyMS42NTkgNDAuMTMwM0MxMjEuNjYxIDQwLjEyNTUgMTIxLjY2MiA0MC4xMjA4IDEyMS42NjQgNDAuMTE2MUMxMjEuNzM2IDM5Ljg5MTEgMTIxLjczNSAzOS42ODI0IDEyMS42NiAzOS40ODk4QzEyMS42MzcgMzkuNDMxIDEyMS42MTIgMzkuMzc1NiAxMjEuNTg3IDM5LjMyMzdDMTIxLjU1NiAzOS4yNjIgMTIxLjUyMyAzOS4yMDUyIDEyMS40ODkgMzkuMTUzMUMxMjEuNDA4IDM5LjAzMTggMTIxLjMxNyAzOC45MzY1IDEyMS4yMTUgMzguODY3MUMxMjAuOTc5IDM4LjcwNyAxMjAuNjg1IDM4LjY4NSAxMjAuMzM0IDM4LjgwMTJDMTE5LjkzOSAzOC45MzE1IDExOS4wNDMgMzkuMjk2MiAxMTcuNjQ0IDM5Ljg5NTFDMTE2LjI1NiA0MC40NzM0IDExNC45OCA0MS4wMzE2IDExMy44MTggNDEuNTY5NkMxMTIuNjU1IDQyLjEwNzYgMTEyLjA1MyA0Mi40NDMyIDExMi4wMTIgNDIuNTc2MkMxMTEuODY0IDQzLjA1MiAxMTEuODY0IDQzLjQ3OSAxMTIuMDExIDQzLjg1NzFDMTEyLjE5NCA0NC4zMjU5IDExMi41NCA0NC40NzYyIDExMy4wNDkgNDQuMzA3OEwxMTcuNzg2IDQyLjI1NTZaTTEyMy40MjYgMzguOTIzN0MxMjMuNDcgMzkuMzgyNiAxMjMuNTEyIDM5LjgxMzUgMTIzLjU1MiA0MC4yMTYyQzEyMy42NDQgNDEuMTI4NCAxMjMuNzI4IDQxLjg5NjMgMTIzLjgwNSA0Mi41MkMxMjMuOTI2IDQzLjQwMTggMTI0LjA2MSA0NC4wMzE4IDEyNC4yMDggNDQuNDA5OUMxMjQuMjMxIDQ0LjQ2ODMgMTI0LjI1NyA0NC41MjIyIDEyNC4yODcgNDQuNTcxOEMxMjQuNDk2IDQ0LjkyNDIgMTI0Ljg3NiA0NS4wNTU4IDEyNS40MjcgNDQuOTY2NkMxMjUuNTgyIDQ0Ljk0MTQgMTI1Ljc1MSA0NC44OTg3IDEyNS45MzQgNDQuODM4NEMxMjYuNDc2IDQ0LjY1OTIgMTI2LjgyNCA0NC40NTg3IDEyNi45NzkgNDQuMjM2OUMxMjcuMDM2IDQ0LjE2MDYgMTI3LjA4IDQ0LjA3MjIgMTI3LjExMiA0My45NzE5QzEyNy4xNzQgNDMuNzczMyAxMjcuMTg1IDQzLjUyNzUgMTI3LjE0NCA0My4yMzQ2TDEyNS45NiAzMi42Mzg5QzEyNS45MTMgMzIuMzI5OCAxMjUuNzI2IDMyLjEzNTUgMTI1LjM5OSAzMi4wNTYxQzEyNS4wNzEgMzEuOTc2NiAxMjQuNjYgMzIuMDE4MyAxMjQuMTY4IDMyLjE4MTNDMTIzLjE2NSAzMi41MTI1IDEyMi43MjYgMzMuMDc1OSAxMjIuODUxIDMzLjg3MTNDMTIzLjAzOSAzNS4yMDkyIDEyMy4yMyAzNi44ODc2IDEyMy40MjQgMzguOTA2NUMxMjMuNDI1IDM4LjkxMjIgMTIzLjQyNiAzOC45MTc5IDEyMy40MjYgMzguOTIzN1pNMTI3LjY2OCA0NS45NjkyQzEyNy41MjggNDUuODU2MSAxMjcuMzYzIDQ1Ljc3OCAxMjcuMTc0IDQ1LjczNDdDMTI2Ljg4OCA0NS42NjA0IDEyNi41ODYgNDUuNjQ3MSAxMjYuMjY4IDQ1LjY5NDhDMTI2LjEwMyA0NS43MTk1IDEyNS45MzMgNDUuNzYwNiAxMjUuNzU5IDQ1LjgxODFDMTI1LjI0NCA0NS45ODg0IDEyNC44NTYgNDYuMjc0NCAxMjQuNTk0IDQ2LjY3NkMxMjQuNTY0IDQ2LjcyMjYgMTI0LjUzNiA0Ni43NzA4IDEyNC41MDkgNDYuODIwNUMxMjQuNDE5IDQ2Ljk3NyAxMjQuMzU0IDQ3LjEyOTUgMTI0LjMxMiA0Ny4yNzgxQzEyNC4yMzMgNDcuNTYwNSAxMjQuMjQgNDcuODI4NSAxMjQuMzMzIDQ4LjA4MjFDMTI0LjMzNiA0OC4wODk3IDEyNC4zMzkgNDguMDk3MyAxMjQuMzQyIDQ4LjEwNDlDMTI0LjQ0NSA0OC4zNjk2IDEyNC42MTEgNDguNTkwMyAxMjQuODQgNDguNzY3MkMxMjQuOTUxIDQ4Ljg1MyAxMjUuMDc3IDQ4LjkyODUgMTI1LjIxNyA0OC45OTM2QzEyNS42NDIgNDkuMTc3OCAxMjYuMDY3IDQ5LjE5OTMgMTI2LjQ5NSA0OS4wNTgxQzEyNy4wNyA0OC44NjggMTI3LjUxOSA0OC41MjMgMTI3Ljg0NCA0OC4wMjMxQzEyOC4xODUgNDcuNTE3NyAxMjguMjYzIDQ3LjAzMDcgMTI4LjA4MSA0Ni41NjE4QzEyNy45ODIgNDYuMzA5IDEyNy44NDQgNDYuMTExNSAxMjcuNjY4IDQ1Ljk2OTJaTTEwOS4xNzMgNDAuNjUzMkMxMDkuMjc1IDQwLjU1MTcgMTA5LjM2OSA0MC40NDE2IDEwOS40NTMgNDAuMzIzQzEwOS43OSAzOS44NTMzIDEwOS44NzIgMzkuMzk5MiAxMDkuNzAxIDM4Ljk2MDZDMTA5LjUzIDM4LjUyMiAxMDkuMTQ2IDM4LjIwNDggMTA4LjU1MSAzOC4wMDlDMTA3Ljk3MSAzNy44MDc4IDEwNy4zNzggMzcuODA3NyAxMDYuNzcgMzguMDA4NkMxMDYuMTk1IDM4LjE5ODcgMTA1LjgxNCAzOC41Mjk2IDEwNS42MjcgMzkuMDAxMkMxMDUuNDU2IDM5LjQ2NzMgMTA1LjQ2MiAzOS45MzQ4IDEwNS42NDUgNDAuNDAzNkMxMDUuNzc0IDQwLjczMzcgMTA1Ljk2NCA0MC45OTM4IDEwNi4yMTUgNDEuMTg0MUMxMDYuMzA5IDQxLjI1NTQgMTA2LjQxMSA0MS4zMTY5IDEwNi41MjIgNDEuMzY4NkMxMDYuODAyIDQxLjQ4MTYgMTA3LjEyMSA0MS41MTMyIDEwNy40NzggNDEuNDYzMkMxMDcuNjU1IDQxLjQzODUgMTA3Ljg0MSA0MS4zOTM3IDEwOC4wMzcgNDEuMzI4OUMxMDguNDkyIDQxLjE3ODcgMTA4Ljg3IDQwLjk1MzUgMTA5LjE3MyA0MC42NTMyWlwiIGZpbGw9XCIjMjUyQjUxXCIgLz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMzQuMzczXCIgaGVpZ2h0PVwiNjdcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbkxvZ28ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgUXVpekxvZ28gPSBzdHlsZWQoTG9nbylgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpekxvZ287IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbiAgICAgICAgLy8gbWFycm9uOiAjMzQxMzBhXHJcbiAgICAgICAgLy9sYXJhbmphOiAjYjEzYjE1XHJcbiAgICAgICAgLy92ZXJtZWxobzogI2JkMjgwMFxyXG4gICAgICAgIC8vbGV0cmFzOiAjYTM5MTY5XHJcbiAgICAgICAgLy9hbWFyZWxvIGNsYXJvOiAjZWVkZmI0XHJcbiAgICAgICAgLy9hbWFyZWxvIGVzY3VybzogI2I5OTM0YVxyXG4gICAgICAgIC8vYXp1bCBjbGFybzogI2EzYjI5ZlxyXG4gICAgICAgIC8vYXp1bCBlc2N1cm86ICMzNzdkNzJcclxuZXhwb3J0IGNvbnN0IFdpZGdldCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHt0aGVtZX0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhlbWUpO1xyXG4gICAgICByZXR1cm4gdGhlbWUuY29sb3JzLnByaW1hcnk7XHJcbiAgfX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoe3RoZW1lfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGVtZSk7XHJcbiAgICAgIHJldHVybiB0aGVtZS5jb2xvcnMubWFpbkJnO1xyXG4gIH19O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuV2lkZ2V0LkhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuV2lkZ2V0LkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDI0cHggMzJweCAzMnB4IDMycHg7XHJcbiAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgJiA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9