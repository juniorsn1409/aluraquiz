webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: BackgroundImage, QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return BackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_screens_Quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/screens//Quiz */ "./src/screens/Quiz/index.js");
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
/* harmony import */ var _src_components_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__BackgroundImage",
  componentId: "sc-1wbo52z-0"
})(["background-image:url(", ");display:flex;min-height:100vh;background-size:100% auto;background-repeat:no-repeat;background-attachment:scroll;"], _db_json__WEBPACK_IMPORTED_MODULE_8__.bg);
var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:350px;margin:1% 8%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
_c = QuizContainer;
function Home() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_12__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_8__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "AluraQuiz - Star Trek")), __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section,
    transition: {
      delay: 0,
      duration: 0.5
    },
    variants: {
      show: {
        opacity: 1,
        y: '0'
      },
      hidden: {
        opacity: 0,
        y: '100%'
      }
    },
    initial: "hidden",
    animate: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_8__.title)), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_8__.description), __jsx("form", {
    onSubmit: function onSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      router.push("/quiz?name=".concat(name));
      console.log('Fazendo uma submissão por meio do react');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_src_components_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: "nomeDoUsuario",
    onChange: function onChange(infosDoEvento) {
      return setName(infosDoEvento.target.value);
    },
    placeholder: "diga seu nome",
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Jogar")))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section,
    transition: {
      delay: 0.5,
      duration: 0.5
    },
    variants: {
      show: {
        opacity: 1
      },
      hidden: {
        opacity: 0
      }
    },
    initial: "hidden",
    animate: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Quizes da Galera"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_8__.external.map(function (linkExterno) {
    var _jsx;

    var _linkExterno$replace$ = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.'),
        _linkExterno$replace$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_linkExterno$replace$, 2),
        projectName = _linkExterno$replace$2[0],
        githubUser = _linkExterno$replace$2[1];

    return __jsx("li", {
      key: linkExterno,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"].Topic, (_jsx = {
      as: _src_components_Link__WEBPACK_IMPORTED_MODULE_10__["default"],
      disabled: name.length === 0,
      href: name.length !== 0 ? "/quiz/".concat(projectName, "___").concat(gitHubUser, "?name=").concat(name) : ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", "/quiz/".concat(projectName, "___").concat(githubUser)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }), _jsx), "".concat(githubUser, "/").concat(projectName)));
  })))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].footer,
    transition: {
      delay: 0.5,
      duration: 0.5
    },
    variants: {
      show: {
        opacity: 1
      },
      hidden: {
        opacity: 0
      }
    },
    initial: "hidden",
    animate: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }));
}

_s(Home, "zozF88P8uj78zrN27VtW7FzdZVI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "QuizContainer");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZWQiLCJkaXYiLCJkYiIsImJnIiwiUXVpekNvbnRhaW5lciIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJtb3Rpb24iLCJzZWN0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsInNob3ciLCJvcGFjaXR5IiwieSIsImhpZGRlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiZXh0ZXJuYWwiLCJtYXAiLCJsaW5rRXh0ZXJubyIsInJlcGxhY2UiLCJzcGxpdCIsInByb2plY3ROYW1lIiwiZ2l0aHViVXNlciIsIkxpbmsiLCJnaXRIdWJVc2VyIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUpBQ0ZDLHFDQUFFLENBQUNDLEVBREQsQ0FBckI7QUFRQSxJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEdBQW5CO0tBQU1HLGE7QUFXRSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDZCLHdCQUVMQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZLO0FBQUE7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBSTdCLFNBQ0UsTUFBQyx1RUFBRDtBQUFnQixtQkFBZSxFQUFFVCxxQ0FBRSxDQUFDQyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGLEVBSUUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOERBQUQ7QUFDRSxNQUFFLEVBQUVTLG9EQUFNLENBQUNDLE9BRGI7QUFFRSxjQUFVLEVBQUU7QUFBRUMsV0FBSyxFQUFFLENBQVQ7QUFBWUMsY0FBUSxFQUFFO0FBQXRCLEtBRmQ7QUFHRSxZQUFRLEVBQUU7QUFDUkMsVUFBSSxFQUFFO0FBQUVDLGVBQU8sRUFBRSxDQUFYO0FBQWNDLFNBQUMsRUFBRTtBQUFqQixPQURFO0FBRVJDLFlBQU0sRUFBRTtBQUFFRixlQUFPLEVBQUUsQ0FBWDtBQUFjQyxTQUFDLEVBQUU7QUFBakI7QUFGQSxLQUhaO0FBT0UsV0FBTyxFQUFDLFFBUFY7QUFRRSxXQUFPLEVBQUMsTUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS2hCLHFDQUFFLENBQUNrQixLQUFSLENBREYsQ0FWRixFQWFFLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlsQixxQ0FBRSxDQUFDbUIsV0FBUCxDQURGLEVBRUU7QUFDQSxZQUFRLEVBQ04sa0JBQVVDLGFBQVYsRUFDQTtBQUNFQSxtQkFBYSxDQUFDQyxjQUFkO0FBQ0FqQixZQUFNLENBQUNrQixJQUFQLHNCQUEwQmQsSUFBMUI7QUFDQWUsYUFBTyxDQUFDQyxHQUFSLENBQVkseUNBQVo7QUFDRCxLQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDhEQUFEO0FBQ0UsUUFBSSxFQUFDLGVBRFA7QUFFRSxZQUFRLEVBQUUsa0JBQUNKLGFBQUQ7QUFBQSxhQUFtQlgsT0FBTyxDQUFDVyxhQUFhLENBQUNLLE1BQWQsQ0FBcUJDLEtBQXRCLENBQTFCO0FBQUEsS0FGWjtBQUdFLGVBQVcsRUFBQyxlQUhkO0FBSUUsU0FBSyxFQUFFbEIsSUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFnQkUsTUFBQywrREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBRUEsSUFBSSxDQUFDbUIsTUFBTCxLQUFnQixDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLENBRkYsQ0FiRixDQUZGLEVBd0NFLE1BQUMsOERBQUQ7QUFDRSxNQUFFLEVBQUVqQixvREFBTSxDQUFDQyxPQURiO0FBRUUsY0FBVSxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLGNBQVEsRUFBRTtBQUF4QixLQUZkO0FBR0UsWUFBUSxFQUFFO0FBQ1JDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURFO0FBRVJFLFlBQU0sRUFBRTtBQUFFRixlQUFPLEVBQUU7QUFBWDtBQUZBLEtBSFo7QUFPRSxXQUFPLEVBQUMsUUFQVjtBQVFFLFdBQU8sRUFBQyxNQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YscUNBQUUsQ0FBQzRCLFFBQUgsQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxXQUFELEVBQWlCO0FBQUE7O0FBQUEsZ0NBQ0VBLFdBQVcsQ0FDMUNDLE9BRCtCLENBQ3ZCLEtBRHVCLEVBQ2hCLEVBRGdCLEVBRS9CQSxPQUYrQixDQUV2QixRQUZ1QixFQUViLEVBRmEsRUFHL0JBLE9BSCtCLENBR3ZCLGFBSHVCLEVBR1IsRUFIUSxFQUkvQkMsS0FKK0IsQ0FJekIsR0FKeUIsQ0FERjtBQUFBO0FBQUEsUUFDekJDLFdBRHlCO0FBQUEsUUFDWkMsVUFEWTs7QUFPaEMsV0FDRTtBQUFJLFNBQUcsRUFBRUosV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRCxDQUFRLEtBQVI7QUFDRSxRQUFFLEVBQUVLLDZEQUROO0FBRUUsY0FBUSxFQUFFM0IsSUFBSSxDQUFDbUIsTUFBTCxLQUFnQixDQUY1QjtBQUdFLFVBQUksRUFBRW5CLElBQUksQ0FBQ21CLE1BQUwsS0FBZ0IsQ0FBaEIsbUJBQTZCTSxXQUE3QixnQkFBOENHLFVBQTlDLG1CQUFpRTVCLElBQWpFLElBQTBFO0FBSGxGLCtIQUlpQnlCLFdBSmpCLGdCQUlrQ0MsVUFKbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFNTUEsVUFOTixjQU1vQkQsV0FOcEIsRUFERixDQURGO0FBWUQsR0FuQkEsQ0FESCxDQUZBLENBVkYsQ0F4Q0YsRUE0RUUsTUFBQywrREFBRDtBQUNFLE1BQUUsRUFBRXZCLG9EQUFNLENBQUMyQixNQURiO0FBRUUsY0FBVSxFQUFFO0FBQUV6QixXQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFRLEVBQUU7QUFBeEIsS0FGZDtBQUdFLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FERTtBQUVSRSxZQUFNLEVBQUU7QUFBRUYsZUFBTyxFQUFFO0FBQVg7QUFGQSxLQUhaO0FBT0UsV0FBTyxFQUFDLFFBUFY7QUFRRSxXQUFPLEVBQUMsTUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUVGLENBSkYsRUEyRkUsTUFBQyxxRUFBRDtBQUFjLGNBQVUsRUFBQyx3REFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGRixDQURGO0FBK0ZEOztHQW5HdUJaLEk7VUFDUEUscUQ7OztNQURPRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiYjBmMjY5YjYwNTBiMDBjODYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBRdWl6U2NyZWVuIGZyb20gJy4uL3NyYy9zY3JlZW5zLy9RdWl6JztcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGIuYmd9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiAgc2Nyb2xsO1xuYDtcbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogIDElIDglO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuICggIFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWx1cmFRdWl6IC0gU3RhciBUcmVrPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAgPFdpZGdldFxuICAgICAgICAgIGFzPXttb3Rpb24uc2VjdGlvbn1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSwgeTogJzAnIH0sXG4gICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogJzEwMCUnIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57ZGIudGl0bGV9PC9oMT5cbiAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICAgICAgPHA+e2RiLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgb25TdWJtaXQ9e1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5mb3NEb0V2ZW50bykgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9xdWl6P25hbWU9JHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYXplbmRvIHVtYSBzdWJtaXNzw6NvIHBvciBtZWlvIGRvIHJlYWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVEb1VzdWFyaW9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5mb3NEb0V2ZW50bykgPT4gc2V0TmFtZShpbmZvc0RvRXZlbnRvLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkaWdhIHNldSBub21lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfT5cbiAgICAgICAgICAgICAgICAgIEpvZ2FyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgICAgPC9XaWRnZXQ+XG5cbiAgICAgICAgPFdpZGdldFxuICAgICAgICAgIGFzPXttb3Rpb24uc2VjdGlvbn1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgc2hvdzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICAgIDxoMT5RdWl6ZXMgZGEgR2FsZXJhPC9oMT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7ZGIuZXh0ZXJuYWwubWFwKChsaW5rRXh0ZXJubykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBbcHJvamVjdE5hbWUsIGdpdGh1YlVzZXJdID0gbGlua0V4dGVybm9cbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdodHRwczonLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnLnZlcmNlbC5hcHAnLCAnJylcbiAgICAgICAgICAgICAgICAuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xpbmtFeHRlcm5vfT5cbiAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcbiAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bmFtZS5sZW5ndGggIT09IDAgPyBgL3F1aXovJHtwcm9qZWN0TmFtZX1fX18ke2dpdEh1YlVzZXJ9P25hbWU9JHtuYW1lfWAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9xdWl6LyR7cHJvamVjdE5hbWV9X19fJHtnaXRodWJVc2VyfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtnaXRodWJVc2VyfS8ke3Byb2plY3ROYW1lfWB9XG4gICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIGFzPXttb3Rpb24uZm9vdGVyfVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSwgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgIC8+XG4gICAgICA8L1F1aXpDb250YWluZXI+XG4gICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vanVuaW9yc24xNDA5L2FsdXJhcXVpei1zdGFydHJlay5naXRcIiAvPlxuICAgIDwvUXVpekJhY2tncm91bmQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9