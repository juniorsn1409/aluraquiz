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
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Carregando Pergunta..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_src_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 62,
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
        lineNumber: 63,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "Confirmar"))));
}

_c2 = QuestionWidget;
var screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};
function QuizPage() {
  _s();

  var screenState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(screenStates.LOADING);
  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex]; //[React chama de: Efeitos|| Effects] ciclo de estados!

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useState; //nasce === didMount
  // atualizado === WillUpdate
  //morre === willUnmount

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 57
    }
  }, " voce acertou x questoes, parab\xE9ns!")));
}

_s(QuizPage, "Gi7qwFGaZsm8DNnwh61YvwALcnU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsInF1ZXN0aW9uSWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFsdGVybmF0aXZlcyIsIm1hcCIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbHRlcm5hdGl2ZUlkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJkYiIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosRUFLSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQURKO0FBV0g7O0tBWlFBLGE7O0FBY1QsU0FBU0MsY0FBVCxPQUlJO0FBQUE7O0FBQUEsTUFIQUMsUUFHQSxRQUhBQSxRQUdBO0FBQUEsTUFGQUMsYUFFQSxRQUZBQSxhQUVBO0FBQUEsTUFEQUMsY0FDQSxRQURBQSxjQUNBO0FBQ0EsTUFBTUMsVUFBVSx1QkFBZUYsYUFBZixDQUFoQjtBQUNBLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2lCQSxhQUFhLEdBQUksQ0FEbEMsaUJBQzBDQyxjQUQxQyxFQURKLENBREosRUFNSTtBQUNJLE9BQUcsRUFBQyxpQkFEUjtBQUVJLFNBQUssRUFFRDtBQUNJRSxXQUFLLEVBQUMsTUFEVjtBQUNrQkMsWUFBTSxFQUFDLE9BRHpCO0FBQ2tDQyxlQUFTLEVBQUM7QUFENUMsS0FKUjtBQVFJLE9BQUcsRUFBR04sUUFBUSxDQUFDTyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFpQkksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsUUFBUSxDQUFDUSxLQURkLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tSLFFBQVEsQ0FBQ1MsV0FEZCxDQUpKLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVCxRQUFRLENBQUNVLFlBQVQsQ0FBc0JDLEdBQXRCLENBQTJCLFVBQUNDLFdBQUQsRUFBY0MsZ0JBQWQsRUFBbUM7QUFDM0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EsUUFBTUMsYUFBYSwwQkFBbUJILGdCQUFuQixDQUFuQjtBQUVBLFdBQ1EsTUFBQyw4REFBRCxDQUFRLEtBQVI7QUFBYyxRQUFFLEVBQUMsT0FBakI7QUFBeUIsYUFBTyxFQUFHRyxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDQSxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FEUDtBQUVBLFFBQUUsRUFBRUQsYUFGSjtBQUdBLFVBQUksRUFBRWIsVUFITjtBQUlBLFVBQUksRUFBQyxPQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQU9LUyxXQVBMLENBRFI7QUFXSyxHQWZSLENBREwsRUF1QkksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSixDQVBKLENBakJKLENBREo7QUF1REg7O01BN0RRYixjO0FBK0RULElBQU1tQixZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBQyxNQURZO0FBRWpCQyxTQUFPLEVBQUMsU0FGUztBQUdqQkMsUUFBTSxFQUFDO0FBSFUsQ0FBckI7QUFNZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLE1BQU1DLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlUCxZQUFZLENBQUNFLE9BQTVCLENBQXBCO0FBQ0EsTUFBTWxCLGNBQWMsR0FBR3dCLHFDQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBcEM7QUFDQSxNQUFNM0IsYUFBYSxHQUFHLENBQXRCO0FBQ0EsTUFBTUQsUUFBUSxHQUFHMEIscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhMUIsYUFBYixDQUFqQixDQUorQixDQU0vQjs7QUFDQXVCLDhDQUFLLENBQUNDLFFBQU4sQ0FQK0IsQ0FRL0I7QUFDQTtBQUNBOztBQUVBLFNBQ0ksTUFBQyxzRUFBRDtBQUFnQixtQkFBZSxFQUFFQyxxQ0FBRSxDQUFDRyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFS04sV0FBVyxLQUFLTCxZQUFZLENBQUNDLElBQTdCLElBQ0csTUFBQyxjQUFEO0FBQ0EsWUFBUSxFQUFFbkIsUUFEVjtBQUVBLGlCQUFhLEVBQUVDLGFBRmY7QUFHQSxrQkFBYyxFQUFFQyxjQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsRUFTS3FCLFdBQVcsS0FBS0wsWUFBWSxDQUFDRSxPQUE3QixJQUF3QyxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVQ3QyxFQVdLRyxXQUFXLEtBQUtMLFlBQVksQ0FBQ0csTUFBN0IsSUFBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FYNUMsQ0FESixDQURKO0FBaUJIOztHQTdCdUJDLFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei5lN2NmNmY1Y2YxNTliZTBhNTk2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28nO1xyXG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xyXG5pbXBvcnQgUXVpekNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgTG9hZGluZ09yYml0cyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nJ1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZ1NjcmVlbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvIFBlcmd1bnRhLi4uXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdPcmJpdHMvPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoIHtcclxuICAgIHF1ZXN0aW9uLCBcclxuICAgIHF1ZXN0aW9uSW5kZXgsIFxyXG4gICAgdG90YWxRdWVzdGlvbnNcclxufSApIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uSWQgPWBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2BQZXJndW50YSAke3F1ZXN0aW9uSW5kZXggICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc31gfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJEZXNjcmnDp8Ojb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzE1MHB4Jywgb2JqZWN0Rml0OidkaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcmM9IHtxdWVzdGlvbi5pbWFnZX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFsYSB1bSBBIHByYSB2b2NlIHZlciEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWMgYXM9XCJsYWJlbFwiIGh0bWxGb3IgPXthbHRlcm5hdGl2ZUlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1ZXN0aW9uSWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAvKjxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcclxuICAgIFFVSVo6J1FVSVonLFxyXG4gICAgTE9BRElORzonTE9BRElORycsXHJcbiAgICBSRVNVTFQ6J1JFU1VMVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICAgIGNvbnN0IHNjcmVlblN0YXRlID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xyXG4gICAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBkYi5xdWVzdGlvbnMubGVuZ3RoXHJcbiAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gMDtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZGIucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdO1xyXG5cclxuICAgIC8vW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zfHwgRWZmZWN0c10gY2ljbG8gZGUgZXN0YWRvcyFcclxuICAgIFJlYWN0LnVzZVN0YXRlXHJcbiAgICAvL25hc2NlID09PSBkaWRNb3VudFxyXG4gICAgLy8gYXR1YWxpemFkbyA9PT0gV2lsbFVwZGF0ZVxyXG4gICAgLy9tb3JyZSA9PT0gd2lsbFVubW91bnRcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuTE9BRElORyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPGRpdj4gdm9jZSBhY2VydG91IHggcXVlc3RvZXMsIHBhcmFiw6lucyE8L2Rpdj4gfVxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9