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
      href: name.length !== 0 ? "/quiz/".concat(projectName, "___").concat(gitHubUser, "?name=").concat(name) : '',
      disabled: name.length === 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiZGIiLCJiZyIsIlF1aXpDb250YWluZXIiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibW90aW9uIiwic2VjdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJzaG93Iiwib3BhY2l0eSIsInkiLCJoaWRkZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImV4dGVybmFsIiwibWFwIiwibGlua0V4dGVybm8iLCJyZXBsYWNlIiwic3BsaXQiLCJwcm9qZWN0TmFtZSIsImdpdGh1YlVzZXIiLCJMaW5rIiwiZ2l0SHViVXNlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSkFDRkMscUNBQUUsQ0FBQ0MsRUFERCxDQUFyQjtBQVFBLElBQU1DLGFBQWEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4R0FBbkI7S0FBTUcsYTtBQVdFLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsd0JBRUxDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRks7QUFBQTtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxP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WDtBQUZBLEtBSFo7QUFPRSxXQUFPLEVBQUMsUUFQVjtBQVFFLFdBQU8sRUFBQyxNQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRUYsQ0FKRixFQTBGRSxNQUFDLHFFQUFEO0FBQWMsY0FBVSxFQUFDLHdEQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUZGLENBREY7QUE4RkQ7O0dBbEd1QlosSTtVQUNQRSxxRDs7O01BRE9GLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk2NTExNGExZGE3MWNlOGY0M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IFF1aXpTY3JlZW4gZnJvbSAnLi4vc3JjL3NjcmVlbnMvL1F1aXonO1xuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28nO1xuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XG5cbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkYi5iZ30pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6ICBzY3JvbGw7XG5gO1xuZXhwb3J0IGNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAgMSUgOCU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKCAgXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbHVyYVF1aXogLSBTdGFyIFRyZWs8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFF1aXpDb250YWluZXI+XG4gICAgICAgIDxRdWl6TG9nbyAvPlxuICAgICAgICA8V2lkZ2V0XG4gICAgICAgICAgYXM9e21vdGlvbi5zZWN0aW9ufVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgc2hvdzogeyBvcGFjaXR5OiAxLCB5OiAnMCcgfSxcbiAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAnMTAwJScgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICAgICAgPGgxPntkYi50aXRsZX08L2gxPlxuICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgICA8cD57ZGIuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICBvblN1Ym1pdD17XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChpbmZvc0RvRXZlbnRvKSBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3F1aXo/bmFtZT0ke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhemVuZG8gdW1hIHN1Ym1pc3PDo28gcG9yIG1laW8gZG8gcmVhY3QnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwibm9tZURvVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmZvc0RvRXZlbnRvKSA9PiBzZXROYW1lKGluZm9zRG9FdmVudG8udGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRpZ2Egc2V1IG5vbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bmFtZS5sZW5ndGggPT09IDB9PlxuICAgICAgICAgICAgICAgICAgSm9nYXJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cblxuICAgICAgICA8V2lkZ2V0XG4gICAgICAgICAgYXM9e21vdGlvbi5zZWN0aW9ufVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSwgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgPGgxPlF1aXplcyBkYSBHYWxlcmE8L2gxPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtkYi5leHRlcm5hbC5tYXAoKGxpbmtFeHRlcm5vKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IFtwcm9qZWN0TmFtZSwgZ2l0aHViVXNlcl0gPSBsaW5rRXh0ZXJub1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2h0dHBzOicsICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcudmVyY2VsLmFwcCcsICcnKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bGlua0V4dGVybm99PlxuICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xuICAgICAgICAgICAgICAgICAgICBhcz17TGlua31ocmVmPXtuYW1lLmxlbmd0aCAhPT0gMCA/IGAvcXVpei8ke3Byb2plY3ROYW1lfV9fXyR7Z2l0SHViVXNlcn0/bmFtZT0ke25hbWV9YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bmFtZS5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Ake2dpdGh1YlVzZXJ9LyR7cHJvamVjdE5hbWV9YH1cbiAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDwvV2lkZ2V0PlxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgYXM9e21vdGlvbi5mb290ZXJ9XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41LCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgLz5cbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS9qdW5pb3JzbjE0MDkvYWx1cmFxdWl6LXN0YXJ0cmVrLmdpdFwiIC8+XG4gICAgPC9RdWl6QmFja2dyb3VuZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=