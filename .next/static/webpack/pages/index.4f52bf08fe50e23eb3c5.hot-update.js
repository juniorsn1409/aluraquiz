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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_screens_Quiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/screens//Quiz */ "./src/screens/Quiz/index.js");
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
/* harmony import */ var _src_components_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");


var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__BackgroundImage",
  componentId: "sc-1wbo52z-0"
})(["background-image:url(", ");display:flex;min-height:100vh;background-size:100% auto;background-repeat:no-repeat;background-attachment:scroll;"], _db_json__WEBPACK_IMPORTED_MODULE_7__.bg);
var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:350px;margin:1% 8%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
_c = QuizContainer;
function Home() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_11__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_7__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].section,
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
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
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
  }, _db_json__WEBPACK_IMPORTED_MODULE_7__.title)), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"].Content, {
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
  }, _db_json__WEBPACK_IMPORTED_MODULE_7__.description), __jsx("form", {
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
  }, __jsx(_src_components_Input__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Jogar")))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].section,
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
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"].Content, {
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
  }, _db_json__WEBPACK_IMPORTED_MODULE_7__.external.map(function (linkExterno) {
    var _linkExterno$replace$ = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.'),
        _linkExterno$replace$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_linkExterno$replace$, 2),
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
    }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"].Topic, {
      as: _src_components_Link__WEBPACK_IMPORTED_MODULE_9__["default"],
      "data-disabled": playerName.length === 0,
      href: "/quiz/".concat(projectName, "___").concat(githubUser),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, "".concat(githubUser, "/").concat(projectName)));
  })))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].footer,
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
      lineNumber: 121,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_13__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }));
}

_s(Home, "zozF88P8uj78zrN27VtW7FzdZVI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiZGIiLCJiZyIsIlF1aXpDb250YWluZXIiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibW90aW9uIiwic2VjdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJzaG93Iiwib3BhY2l0eSIsInkiLCJoaWRkZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImV4dGVybmFsIiwibWFwIiwibGlua0V4dGVybm8iLCJyZXBsYWNlIiwic3BsaXQiLCJwcm9qZWN0TmFtZSIsImdpdGh1YlVzZXIiLCJMaW5rIiwicGxheWVyTmFtZSIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSkFDRkMscUNBQUUsQ0FBQ0MsRUFERCxDQUFyQjtBQVFBLElBQU1DLGFBQWEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4R0FBbkI7S0FBTUcsYTtBQVdFLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsd0JBRUxDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRks7QUFBQTtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxP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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0VGLENBSkYsRUEwRkUsTUFBQyxxRUFBRDtBQUFjLGNBQVUsRUFBQyx3REFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFGRixDQURGO0FBOEZEOztHQWxHdUJaLEk7VUFDUEUscUQ7OztNQURPRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmNTJiZjA4ZmU1MGUyM2ViM2M1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBRdWl6U2NyZWVuIGZyb20gJy4uL3NyYy9zY3JlZW5zLy9RdWl6JztcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGIuYmd9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiAgc2Nyb2xsO1xuYDtcbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogIDElIDglO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuICggIFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWx1cmFRdWl6IC0gU3RhciBUcmVrPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAgPFdpZGdldFxuICAgICAgICAgIGFzPXttb3Rpb24uc2VjdGlvbn1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSwgeTogJzAnIH0sXG4gICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogJzEwMCUnIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57ZGIudGl0bGV9PC9oMT5cbiAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICAgICAgPHA+e2RiLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgb25TdWJtaXQ9e1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5mb3NEb0V2ZW50bykgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9xdWl6P25hbWU9JHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYXplbmRvIHVtYSBzdWJtaXNzw6NvIHBvciBtZWlvIGRvIHJlYWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVEb1VzdWFyaW9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5mb3NEb0V2ZW50bykgPT4gc2V0TmFtZShpbmZvc0RvRXZlbnRvLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkaWdhIHNldSBub21lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfT5cbiAgICAgICAgICAgICAgICAgIEpvZ2FyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgICAgPC9XaWRnZXQ+XG5cbiAgICAgICAgPFdpZGdldFxuICAgICAgICAgIGFzPXttb3Rpb24uc2VjdGlvbn1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgc2hvdzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICAgIDxoMT5RdWl6ZXMgZGEgR2FsZXJhPC9oMT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7ZGIuZXh0ZXJuYWwubWFwKChsaW5rRXh0ZXJubykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBbcHJvamVjdE5hbWUsIGdpdGh1YlVzZXJdID0gbGlua0V4dGVybm9cbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdodHRwczonLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnLnZlcmNlbC5hcHAnLCAnJylcbiAgICAgICAgICAgICAgICAuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xpbmtFeHRlcm5vfT5cbiAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcbiAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzYWJsZWQ9e3BsYXllck5hbWUubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3F1aXovJHtwcm9qZWN0TmFtZX1fX18ke2dpdGh1YlVzZXJ9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Ake2dpdGh1YlVzZXJ9LyR7cHJvamVjdE5hbWV9YH1cbiAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDwvV2lkZ2V0PlxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgYXM9e21vdGlvbi5mb290ZXJ9XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41LCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgLz5cbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS9qdW5pb3JzbjE0MDkvYWx1cmFxdWl6LXN0YXJ0cmVrLmdpdFwiIC8+XG4gICAgPC9RdWl6QmFja2dyb3VuZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=