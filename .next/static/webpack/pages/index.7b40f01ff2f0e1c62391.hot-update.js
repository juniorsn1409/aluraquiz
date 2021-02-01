webpackHotUpdate_N_E("pages/index",{

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
      href: name.length !== 0 ? "/quiz/".concat(projectName, "___").concat(gitHubUser, "?name=").concat(name) : '',
      "data-disabled": name.length === 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiZGIiLCJiZyIsIlF1aXpDb250YWluZXIiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibW90aW9uIiwic2VjdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJzaG93Iiwib3BhY2l0eSIsInkiLCJoaWRkZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImV4dGVybmFsIiwibWFwIiwibGlua0V4dGVybm8iLCJyZXBsYWNlIiwic3BsaXQiLCJwcm9qZWN0TmFtZSIsImdpdGh1YlVzZXIiLCJMaW5rIiwiZ2l0SHViVXNlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFKQUNGQyxxQ0FBRSxDQUFDQyxFQURELENBQXJCO0FBUUEsSUFBTUMsYUFBYSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhHQUFuQjtLQUFNRyxhO0FBV0UsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQ2Qix3QkFFTEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGSztBQUFBO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJD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QUVGLGVBQU8sRUFBRTtBQUFYO0FBRkEsS0FIWjtBQU9FLFdBQU8sRUFBQyxRQVBWO0FBUUUsV0FBTyxFQUFDLE1BUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVFRixDQUpGLEVBMkZFLE1BQUMscUVBQUQ7QUFBYyxjQUFVLEVBQUMsd0RBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRkYsQ0FERjtBQStGRDs7R0FuR3VCWixJO1VBQ1BFLHFEOzs7TUFET0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YjQwZjAxZmYyZjBlMWM2MjM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgUXVpelNjcmVlbiBmcm9tICcuLi9zcmMvc2NyZWVucy8vUXVpeic7XG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RiLmJnfSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogIHNjcm9sbDtcbmA7XG5leHBvcnQgY29uc3QgUXVpekNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46ICAxJSA4JTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIHJldHVybiAoICBcbiAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsdXJhUXVpeiAtIFN0YXIgVHJlazwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UXVpekNvbnRhaW5lcj5cbiAgICAgICAgPFF1aXpMb2dvIC8+XG4gICAgICAgIDxXaWRnZXRcbiAgICAgICAgICBhcz17bW90aW9uLnNlY3Rpb259XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMCwgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBzaG93OiB7IG9wYWNpdHk6IDEsIHk6ICcwJyB9LFxuICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6ICcxMDAlJyB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgICAgICA8aDE+e2RiLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICAgIDxwPntkYi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgIG9uU3VibWl0PXtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZm9zRG9FdmVudG8pIFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXVpej9uYW1lPSR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmF6ZW5kbyB1bWEgc3VibWlzc8OjbyBwb3IgbWVpbyBkbyByZWFjdCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21lRG9Vc3VhcmlvXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGluZm9zRG9FdmVudG8pID0+IHNldE5hbWUoaW5mb3NEb0V2ZW50by50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGlnYSBzZXUgbm9tZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XG4gICAgICAgICAgICAgICAgICBKb2dhclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDwvV2lkZ2V0PlxuXG4gICAgICAgIDxXaWRnZXRcbiAgICAgICAgICBhcz17bW90aW9uLnNlY3Rpb259XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41LCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICA8aDE+UXVpemVzIGRhIEdhbGVyYTwvaDE+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2RiLmV4dGVybmFsLm1hcCgobGlua0V4dGVybm8pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgW3Byb2plY3ROYW1lLCBnaXRodWJVc2VyXSA9IGxpbmtFeHRlcm5vXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnaHR0cHM6JywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJy52ZXJjZWwuYXBwJywgJycpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtsaW5rRXh0ZXJub30+XG4gICAgICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljXG4gICAgICAgICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtuYW1lLmxlbmd0aCAhPT0gMCA/IGAvcXVpei8ke3Byb2plY3ROYW1lfV9fXyR7Z2l0SHViVXNlcn0/bmFtZT0ke25hbWV9YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9xdWl6LyR7cHJvamVjdE5hbWV9X19fJHtnaXRodWJVc2VyfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtnaXRodWJVc2VyfS8ke3Byb2plY3ROYW1lfWB9XG4gICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIGFzPXttb3Rpb24uZm9vdGVyfVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSwgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgIC8+XG4gICAgICA8L1F1aXpDb250YWluZXI+XG4gICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vanVuaW9yc24xNDA5L2FsdXJhcXVpei1zdGFydHJlay5naXRcIiAvPlxuICAgIDwvUXVpekJhY2tncm91bmQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9