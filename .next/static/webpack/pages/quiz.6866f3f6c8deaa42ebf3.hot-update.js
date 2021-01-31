webpackHotUpdate_N_E("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Carregando..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "[Desafio do Loading]"));
}

_c = LoadingScreen;

function QuestionWidget(_ref) {
  var _this = this;

  var question = _ref.question,
      questionIndex = _ref.questionIndex,
      totalQuestions = _ref.totalQuestions;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Pergunta ".concat(questionIndex + 1, " de ").concat(totalQuestions))), __jsx("img", {
    alt: "Descri\xE7\xE3o",
    style: {
      width: '100%',
      height: '150px',
      objectFit: 'display'
    },
    src: question.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    console.log('Fala um A pra voce ver!');
    var alternativeId = "alternative__".concat(alternativeIndex);
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
      as: true,
      htmlFor: alternativeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    }, __jsx("input", {
      id: alternativeId,
      type: "radio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 37
      }
    }), "alternative}");
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Confirmar"))));
}

_c2 = QuestionWidget;
function QuizPage() {
  console.log('Perguntas criadas', _db_json__WEBPACK_IMPORTED_MODULE_1__.questions);
  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex];
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })));
}
_c3 = QuizPage;

var _c, _c2, _c3;

$RefreshReg$(_c, "LoadingScreen");
$RefreshReg$(_c2, "QuestionWidget");
$RefreshReg$(_c3, "QuizPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWx0ZXJuYXRpdmVzIiwibWFwIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiY29uc29sZSIsImxvZyIsImFsdGVybmF0aXZlSWQiLCJRdWl6UGFnZSIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFLSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKLENBREo7QUFXSDs7S0FaUUEsYTs7QUFjVCxTQUFTQyxjQUFULE9BQXFFO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ2pFLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2lCRCxhQUFhLEdBQUksQ0FEbEMsaUJBQzBDQyxjQUQxQyxFQURKLENBREosRUFNSTtBQUNJLE9BQUcsRUFBQyxpQkFEUjtBQUVJLFNBQUssRUFFRDtBQUNJQyxXQUFLLEVBQUMsTUFEVjtBQUNrQkMsWUFBTSxFQUFDLE9BRHpCO0FBQ2tDQyxlQUFTLEVBQUM7QUFENUMsS0FKUjtBQVFJLE9BQUcsRUFBR0wsUUFBUSxDQUFDTSxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFpQkksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sUUFBUSxDQUFDTyxLQURkLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFFBQVEsQ0FBQ1EsV0FEZCxDQUpKLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUixRQUFRLENBQUNTLFlBQVQsQ0FBc0JDLEdBQXRCLENBQTJCLFVBQUNDLFdBQUQsRUFBY0MsZ0JBQWQsRUFBbUM7QUFDM0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EsUUFBTUMsYUFBYSwwQkFBbUJILGdCQUFuQixDQUFuQjtBQUVBLFdBQ1EsTUFBQyw4REFBRCxDQUFRLEtBQVI7QUFBYyxRQUFFLE1BQWhCO0FBQWlCLGFBQU8sRUFBR0csYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJO0FBQU8sUUFBRSxFQUFFQSxhQUFYO0FBQTBCLFVBQUksRUFBQyxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosaUJBRFI7QUFPSyxHQVhSLENBREwsRUFvQkksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCSixDQVBKLENBakJKLENBREo7QUFvREg7O01BckRRaEIsYztBQXVETSxTQUFTaUIsUUFBVCxHQUFvQjtBQUMvQkgsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBZ0NHLHFDQUFFLENBQUNDLFNBQW5DO0FBQ0EsTUFBTWhCLGNBQWMsR0FBR2UscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxNQUFwQztBQUNBLE1BQU1sQixhQUFhLEdBQUcsQ0FBdEI7QUFDQSxNQUFNRCxRQUFRLEdBQUdpQixxQ0FBRSxDQUFDQyxTQUFILENBQWFqQixhQUFiLENBQWpCO0FBRUEsU0FDSSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVnQixxQ0FBRSxDQUFDRyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxjQUFEO0FBQ0EsWUFBUSxFQUFFcEIsUUFEVjtBQUVBLGlCQUFhLEVBQUVDLGFBRmY7QUFHQSxrQkFBYyxFQUFFQyxjQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKO0FBV0g7TUFqQnVCYyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouNjg2NmYzZjZjOGRlYWE0MmViZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kby4uLlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBbRGVzYWZpbyBkbyBMb2FkaW5nXVxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoIHtxdWVzdGlvbiwgcXVlc3Rpb25JbmRleCwgdG90YWxRdWVzdGlvbnN9ICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCAgKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonMTUwcHgnLCBvYmplY3RGaXQ6J2Rpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNyYz0ge3F1ZXN0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLm1hcCggKGFsdGVybmF0aXZlLCBhbHRlcm5hdGl2ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWxhIHVtIEEgcHJhIHZvY2UgdmVyIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpYyBhcyBodG1sRm9yID17YWx0ZXJuYXRpdmVJZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXthbHRlcm5hdGl2ZUlkfSB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IC8qPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUGVyZ3VudGFzIGNyaWFkYXMnLGRiLnF1ZXN0aW9ucyk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGhcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSAwO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25XaWRnZXQgXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JbmRleD17cXVlc3Rpb25JbmRleH0gXHJcbiAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgICAgICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=