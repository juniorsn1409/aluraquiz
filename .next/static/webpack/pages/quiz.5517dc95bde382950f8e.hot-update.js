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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.js");


var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Carregando Pergunta..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_src_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
}

_c = LoadingScreen;

function ResultWidget(_ref) {
  var _this = this;

  var results = _ref.results;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Pontos"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "voce acertou x questoes, parab\xE9ns!"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, results.map(function (results) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, "#01 Resultado: ", results === true ? 'Acertou' : 'Errou');
  }))));
}

_c2 = ResultWidget;

function QuestionWidget(_ref2) {
  _s();

  var _this2 = this;

  var question = _ref2.question,
      questionIndex = _ref2.questionIndex,
      totalQuestions = _ref2.totalQuestions,
      _onSubmit = _ref2.onSubmit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedAlternative = _React$useState2[0],
      setSelectedAlternative = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isQuestionSubmited = _React$useState4[0],
      setIsQuestionSubmited = _React$useState4[1];

  var questionId = "question__".concat(questionIndex);
  var isCorrect = selectedAlternative === question.answer;
  var hasAlternativeSelected = selectedAlternative !== undefined;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    onSubmit: function onSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(function () {
        _onSubmit();

        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
      }, 3 * 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    var alternativeId = "alternative__".concat(alternativeIndex);
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Topic, {
      as: "label",
      key: alternativeId,
      htmlFor: alternativeId,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }, __jsx("input", {
      style: {
        display: 'none'
      },
      id: alternativeId,
      name: questionId,
      onChange: function onChange() {
        return setSelectedAlternative(alternativeIndex);
      },
      type: "radio",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, "Confirmar"), isQuestionSubmited && isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 57
    }
  }, "voc\xEA acertou!"), isQuestionSubmited && !isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 58
    }
  }, "voc\xEA errou!"))));
}

_s(QuestionWidget, "gOPL1EmksK8wUP52KQZyVU1FVK0=");

_c3 = QuestionWidget;
var screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};
function QuizPage() {
  _s2();

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(screenStates.RESULT),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      screenState = _React$useState6[0],
      setScreenState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([true, false, true]),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      results = _React$useState8[0],
      setResults = _React$useState8[1];

  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      currentQuestion = _React$useState10[0],
      setCurrentQuestion = _React$useState10[1];

  var questionIndex = currentQuestion;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex]; //[React chama de: Efeitos|| Effects] ciclo de estados!
  //React.useEffet
  // atualizado === WillUpdate
  //morre === willUnmount

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    //fetch()...
    setTimeout(function () {//setScreenState(screenStates.QUIZ);
    }, 1 * 1000); //nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    var nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    onSubmit: handleSubmitQuiz,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 58
    }
  })));
}

_s2(QuizPage, "61m3UCqB3uJYaoJtx0+na8DIZHA=");

_c4 = QuizPage;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "LoadingScreen");
$RefreshReg$(_c2, "ResultWidget");
$RefreshReg$(_c3, "QuestionWidget");
$RefreshReg$(_c4, "QuizPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsIm1hcCIsIlF1ZXN0aW9uV2lkZ2V0IiwicXVlc3Rpb24iLCJxdWVzdGlvbkluZGV4IiwidG90YWxRdWVzdGlvbnMiLCJvblN1Ym1pdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEFsdGVybmF0aXZlIiwic2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSIsImlzUXVlc3Rpb25TdWJtaXRlZCIsInNldElzUXVlc3Rpb25TdWJtaXRlZCIsInF1ZXN0aW9uSWQiLCJpc0NvcnJlY3QiLCJhbnN3ZXIiLCJoYXNBbHRlcm5hdGl2ZVNlbGVjdGVkIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiYWx0ZXJuYXRpdmVzIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiYWx0ZXJuYXRpdmVJZCIsImRpc3BsYXkiLCJzY3JlZW5TdGF0ZXMiLCJRVUlaIiwiTE9BRElORyIsIlJFU1VMVCIsIlF1aXpQYWdlIiwic2NyZWVuU3RhdGUiLCJzZXRTY3JlZW5TdGF0ZSIsInNldFJlc3VsdHMiLCJkYiIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFB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WSxHQUFHM0MsYUFBYSxHQUFHLENBQXJDOztBQUVBLFFBQUkyQyxZQUFZLEdBQUcxQyxjQUFuQixFQUFtQztBQUMvQnVDLHdCQUFrQixDQUFDRyxZQUFELENBQWxCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hULG9CQUFjLENBQUNOLFlBQVksQ0FBQ0csTUFBZCxDQUFkO0FBQ0g7QUFFSjs7QUFFRCxTQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsbUJBQWUsRUFBRUsscUNBQUUsQ0FBQ1EsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUtYLFdBQVcsS0FBS0wsWUFBWSxDQUFDQyxJQUE3QixJQUNHLE1BQUMsY0FBRDtBQUNJLFlBQVEsRUFBSTlCLFFBRGhCO0FBRUksaUJBQWEsRUFBSUMsYUFGckI7QUFHSSxrQkFBYyxFQUFJQyxjQUh0QjtBQUlJLFlBQVEsRUFBSXlDLGdCQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsRUFVS1QsV0FBVyxLQUFLTCxZQUFZLENBQUNFLE9BQTdCLElBQXdDLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVjdDLEVBWUtHLFdBQVcsS0FBS0wsWUFBWSxDQUFDRyxNQUE3QixJQUF3QyxNQUFDLFlBQUQ7QUFBYyxXQUFPLEVBQUluQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWjdDLENBREosQ0FESjtBQWtCSDs7SUFqRHVCb0MsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LjU1MTdkYzk1YmRlMzgyOTUwZjhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBMb2FkaW5nT3JiaXRzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoe3Jlc3VsdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgUG9udG9zXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8cD52b2NlIGFjZXJ0b3UgeCBxdWVzdG9lcywgcGFyYWLDqW5zITwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHRzKSA9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICMwMSBSZXN1bHRhZG86IHtyZXN1bHRzID09PSB0cnVlID8gJ0FjZXJ0b3UnOiAnRXJyb3UnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KCB7XHJcbiAgICBxdWVzdGlvbiwgXHJcbiAgICBxdWVzdGlvbkluZGV4LCBcclxuICAgIHRvdGFsUXVlc3Rpb25zLFxyXG4gICAgb25TdWJtaXQgLFxyXG59ICkge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQWx0ZXJuYXRpdmUsIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmVdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gO1xyXG4gICAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xyXG4gICAgY29uc3QgaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAgMyAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpYyBhcz1cImxhYmVsXCIga2V5PXthbHRlcm5hdGl2ZUlkfSBodG1sRm9yID17YWx0ZXJuYXRpdmVJZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZShhbHRlcm5hdGl2ZUluZGV4KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWx0ZXJuYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IC8qPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgaXNDb3JyZWN0ICYmIDxwPnZvY8OqIGFjZXJ0b3UhPC9wPn1cclxuICAgICAgICAgICAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmICFpc0NvcnJlY3QgJiYgPHA+dm9jw6ogZXJyb3UhPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcclxuICAgIFFVSVo6J1FVSVonLFxyXG4gICAgTE9BRElORzonTE9BRElORycsXHJcbiAgICBSRVNVTFQ6J1JFU1VMVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICAgIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbdHJ1ZSwgZmFsc2UsIHRydWVdKTtcclxuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSBjdXJyZW50UXVlc3Rpb247XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICAvL1tSZWFjdCBjaGFtYSBkZTogRWZlaXRvc3x8IEVmZmVjdHNdIGNpY2xvIGRlIGVzdGFkb3MhXHJcbiAgICAvL1JlYWN0LnVzZUVmZmV0XHJcbiAgICAvLyBhdHVhbGl6YWRvID09PSBXaWxsVXBkYXRlXHJcbiAgICAvL21vcnJlID09PSB3aWxsVW5tb3VudFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL2ZldGNoKCkuLi5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy9zZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XHJcbiAgICAgICAgfSwgMSogMTAwMCk7XHJcbiAgICAvL25hc2NlID09PSBkaWRNb3VudFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdFF1aXooKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gcXVlc3Rpb25JbmRleCArIDE7XHJcblxyXG4gICAgICAgIGlmIChuZXh0UXVlc3Rpb24gPCB0b3RhbFF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24obmV4dFF1ZXN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlFVSVogJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IHtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXggPSB7cXVlc3Rpb25JbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zID0ge3RvdGFsUXVlc3Rpb25zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0UXVpen1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdTY3JlZW4gLz59XHJcblxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUkVTVUxUICAmJiA8UmVzdWx0V2lkZ2V0IHJlc3VsdHMgPSB7cmVzdWx0c30gLz59XHJcbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=