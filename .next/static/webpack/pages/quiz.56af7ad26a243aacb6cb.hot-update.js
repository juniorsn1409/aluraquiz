webpackHotUpdate_N_E("pages/quiz",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

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
  var questionId = "question__".concat(questionIndex);
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    console.log('Fala um A pra voce ver!');
    var alternativeId = "alternative__".concat(alternativeIndex);
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
      as: "label",
      htmlFor: alternativeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    }, __jsx("input", {
      style: {
        display: 'none'
      },
      id: alternativeId,
      name: questionId,
      type: "radio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "Confirmar"))));
}

_c2 = QuestionWidget;
function QuizPage() {
  var screenState = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
  };
  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex];
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, screenState === screenState.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }), screenState === screenState.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 57
    }
  }), screenState === screenState.RESULT && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 56
    }
  }, " voce acertou x questoes, parab\xE9ns!")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsInF1ZXN0aW9uSWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFsdGVybmF0aXZlcyIsIm1hcCIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbHRlcm5hdGl2ZUlkIiwiZGlzcGxheSIsIlF1aXpQYWdlIiwic2NyZWVuU3RhdGUiLCJRVUlaIiwiTE9BRElORyIsIlJFU1VMVCIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFLSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKLENBREo7QUFXSDs7S0FaUUEsYTs7QUFjVCxTQUFTQyxjQUFULE9BSUk7QUFBQTs7QUFBQSxNQUhBQyxRQUdBLFFBSEFBLFFBR0E7QUFBQSxNQUZBQyxhQUVBLFFBRkFBLGFBRUE7QUFBQSxNQURBQyxjQUNBLFFBREFBLGNBQ0E7QUFDQSxNQUFNQyxVQUFVLHVCQUFlRixhQUFmLENBQWhCO0FBQ0EsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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O0FBQUE7QUFBQTtBQUFBLDhDQVYzQyxDQURKLENBREo7QUFnQkg7TUExQnVCSixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouNTZhZjdhZDI2YTI0M2FhY2I2Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kby4uLlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBbRGVzYWZpbyBkbyBMb2FkaW5nXVxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoIHtcclxuICAgIHF1ZXN0aW9uLCBcclxuICAgIHF1ZXN0aW9uSW5kZXgsIFxyXG4gICAgdG90YWxRdWVzdGlvbnNcclxufSApIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uSWQgPWBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2BQZXJndW50YSAke3F1ZXN0aW9uSW5kZXggICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc31gfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJEZXNjcmnDp8Ojb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzE1MHB4Jywgb2JqZWN0Rml0OidkaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcmM9IHtxdWVzdGlvbi5pbWFnZX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFsYSB1bSBBIHByYSB2b2NlIHZlciEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWMgYXM9XCJsYWJlbFwiIGh0bWxGb3IgPXthbHRlcm5hdGl2ZUlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1ZXN0aW9uSWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAvKjxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gICAgY29uc3Qgc2NyZWVuU3RhdGUgPSB7XHJcbiAgICAgICAgUVVJWjonUVVJWicsXHJcbiAgICAgICAgTE9BRElORzonTE9BRElORycsXHJcbiAgICAgICAgUkVTVUxUOidSRVNVTFQnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aFxyXG4gICAgY29uc3QgcXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGUuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZS5MT0FESU5HICYmIDxMb2FkaW5nU2NyZWVuIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGUuUkVTVUxUICYmIDxkaXY+IHZvY2UgYWNlcnRvdSB4IHF1ZXN0b2VzLCBwYXJhYsOpbnMhPC9kaXY+IH1cclxuICAgICAgICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==