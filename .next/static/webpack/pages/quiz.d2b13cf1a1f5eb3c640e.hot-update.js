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
  }, question.alternatives.forEach(function (alternative, alternativeIndex) {
    console.log('Fala um A pra voce ver!');
    var alternativeId = "alternative_".concat(alternativeIndex);
    return __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, "htmlFor =", alternativeId, ">", __jsx("input", {
      id: alternativeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    }));
  }), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, JSON.stringify(question, null, 4)), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWx0ZXJuYXRpdmVzIiwiZm9yRWFjaCIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbHRlcm5hdGl2ZUlkIiwiSlNPTiIsInN0cmluZ2lmeSIsIlF1aXpQYWdlIiwiZGIiLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUtJLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEosQ0FESjtBQVdIOztLQVpRQSxhOztBQWNULFNBQVNDLGNBQVQsT0FBcUU7QUFBQTs7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsTUFBakNDLGFBQWlDLFFBQWpDQSxhQUFpQztBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFDakUsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDaUJELGFBQWEsR0FBSSxDQURsQyxpQkFDMENDLGNBRDFDLEVBREosQ0FESixFQU1JO0FBQ0ksT0FBRyxFQUFDLGlCQURSO0FBRUksU0FBSyxFQUVEO0FBQ0lDLFdBQUssRUFBQyxNQURWO0FBQ2tCQyxZQUFNLEVBQUMsT0FEekI7QUFDa0NDLGVBQVMsRUFBQztBQUQ1QyxLQUpSO0FBUUksT0FBRyxFQUFHTCxRQUFRLENBQUNNLEtBUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQWlCSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixRQUFRLENBQUNPLEtBRGQsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsUUFBUSxDQUFDUSxXQURkLENBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tSLFFBQVEsQ0FBQ1MsWUFBVCxDQUFzQkMsT0FBdEIsQ0FBK0IsVUFBQ0MsV0FBRCxFQUFjQyxnQkFBZCxFQUFtQztBQUMvREMsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQSxRQUFNQyxhQUFhLHlCQUFrQkgsZ0JBQWxCLENBQW5CO0FBRUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNjRyxhQURkLE9BR0k7QUFDQSxRQUFFLEVBQUVBLGFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLENBREo7QUFTSCxHQWJBLENBREwsRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FETCxDQWhCSixFQW9CSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKLENBUEosQ0FqQkosQ0FESjtBQW9ESDs7TUFyRFFELGM7QUF1RE0sU0FBU21CLFFBQVQsR0FBb0I7QUFDL0JMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWdDSyxxQ0FBRSxDQUFDQyxTQUFuQztBQUNBLE1BQU1sQixjQUFjLEdBQUdpQixxQ0FBRSxDQUFDQyxTQUFILENBQWFDLE1BQXBDO0FBQ0EsTUFBTXBCLGFBQWEsR0FBRyxDQUF0QjtBQUNBLE1BQU1ELFFBQVEsR0FBR21CLHFDQUFFLENBQUNDLFNBQUgsQ0FBYW5CLGFBQWIsQ0FBakI7QUFFQSxTQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsbUJBQWUsRUFBRWtCLHFDQUFFLENBQUNHLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGNBQUQ7QUFDQSxZQUFRLEVBQUV0QixRQURWO0FBRUEsaUJBQWEsRUFBRUMsYUFGZjtBQUdBLGtCQUFjLEVBQUVDLGNBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFXSDtNQWpCdUJnQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouZDJiMTNjZjFhMWY1ZWIzYzY0MGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kby4uLlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBbRGVzYWZpbyBkbyBMb2FkaW5nXVxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoIHtxdWVzdGlvbiwgcXVlc3Rpb25JbmRleCwgdG90YWxRdWVzdGlvbnN9ICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCAgKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonMTUwcHgnLCBvYmplY3RGaXQ6J2Rpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNyYz0ge3F1ZXN0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLmZvckVhY2goIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFsYSB1bSBBIHByYSB2b2NlIHZlciEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV8ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvciA9e2FsdGVybmF0aXZlSWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQZXJndW50YXMgY3JpYWRhcycsZGIucXVlc3Rpb25zKTtcclxuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aFxyXG4gICAgY29uc3QgcXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbldpZGdldCBcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==