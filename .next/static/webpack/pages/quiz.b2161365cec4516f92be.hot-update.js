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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Carregando Pergunta..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_src_components_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Pontos"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
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
  }, "voce acertou ", results.filter(function (x) {
    return x;
  }).length, " questoes, parab\xE9ns!"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, results.map(function (results, questionIndex) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "#0", questionIndex + 1, " Resultado: ", results === true ? 'Acertou' : 'Errou');
  }))));
}

_c2 = ResultWidget;

function QuestionWidget(_ref2) {
  _s();

  var _this2 = this;

  var question = _ref2.question,
      questionIndex = _ref2.questionIndex,
      totalQuestions = _ref2.totalQuestions,
      _onSubmit = _ref2.onSubmit,
      addResults = _ref2.addResults;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selectedAlternative = _React$useState2[0],
      setSelectedAlternative = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isQuestionSubmited = _React$useState4[0],
      setIsQuestionSubmited = _React$useState4[1];

  var questionId = "question__".concat(questionIndex);
  var isCorrect = selectedAlternative === question.answer;
  var hasAlternativeSelected = selectedAlternative !== undefined;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    onSubmit: function onSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(function () {
        addResults(isCorrect);

        _onSubmit();

        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
      }, 3 * 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    var alternativeId = "alternative__".concat(alternativeIndex);
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"].Topic, {
      as: "label",
      key: alternativeId,
      htmlFor: alternativeId,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 114,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "Confirmar"), isQuestionSubmited && isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 57
    }
  }, "voc\xEA acertou!"), isQuestionSubmited && !isCorrect && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(screenStates.LOADING),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      screenState = _React$useState6[0],
      setScreenState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      results = _React$useState8[0],
      setResults = _React$useState8[1];

  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_3__.questions.length;

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      currentQuestion = _React$useState10[0],
      setCurrentQuestion = _React$useState10[1];

  var questionIndex = currentQuestion;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_3__.questions[questionIndex];

  function addResults(result) {
    //results.push(result);
    setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(results), [result]));
  } //[React chama de: Efeitos|| Effects] ciclo de estados!
  //React.useEffet
  // atualizado === WillUpdate
  //morre === willUnmount


  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    //fetch()...
    setTimeout(function () {
      setScreenState(screenStates.QUIZ);
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

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_3__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    onSubmit: handleSubmitQuiz,
    addResults: addResults,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 58
    }
  })));
}

_s2(QuizPage, "op6a2G6WeNFK4t0JnGKr98IrMhU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtYXAiLCJxdWVzdGlvbkluZGV4IiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInRvdGFsUXVlc3Rpb25zIiwib25TdWJtaXQiLCJhZGRSZXN1bHRzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsImRiIiwicXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwicmVzdWx0IiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0UXVpeiIsIm5leHRRdWVzdGlvbiIsImJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5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QXdDLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWDdDLEVBYUtHLFdBQVcsS0FBS0wsWUFBWSxDQUFDRyxNQUE3QixJQUF3QyxNQUFDLFlBQUQ7QUFBYyxXQUFPLEVBQUl2QyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYjdDLENBREosQ0FESjtBQW1CSDs7SUExRHVCd0MsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LmIyMTYxMzY1Y2VjNDUxNmY5MmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBMb2FkaW5nT3JiaXRzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoe3Jlc3VsdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgUG9udG9zXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8cD57YHZvY2UgYWNlcnRvdSBgfVxyXG4gICAgICAgICAgICAgICAgey8qcmVzdWx0cy5yZWR1Y2UoKHNvbWF0b3JpYUF0dWFsLCByZXN1bHRBdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWNlcnRvID0gcmVzdWx0QXR1YWwgPT09IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWNlcnRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVBBVUxPIERFVVNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tYXRvcmlhQXR1YWxcclxuICAgICAgICAgICAgICAgIH0sIDApKi99IFxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMuZmlsdGVyKCh4KSA9PiB4KS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICB7YCBxdWVzdG9lcywgcGFyYWLDqW5zIWB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0cywgcXVlc3Rpb25JbmRleCkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjMHtxdWVzdGlvbkluZGV4ICsgMX0gUmVzdWx0YWRvOiB7cmVzdWx0cyA9PT0gdHJ1ZSA/ICdBY2VydG91JzogJ0Vycm91J31cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCgge1xyXG4gICAgcXVlc3Rpb24sIFxyXG4gICAgcXVlc3Rpb25JbmRleCwgXHJcbiAgICB0b3RhbFF1ZXN0aW9ucyxcclxuICAgIG9uU3VibWl0LFxyXG4gICAgYWRkUmVzdWx0cyxcclxufSApIHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFsdGVybmF0aXZlLCBzZXRTZWxlY3RlZEFsdGVybmF0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbaXNRdWVzdGlvblN1Ym1pdGVkLCBzZXRJc1F1ZXN0aW9uU3VibWl0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcXVlc3Rpb25JZCA9YHF1ZXN0aW9uX18ke3F1ZXN0aW9uSW5kZXh9YDtcclxuICAgIGNvbnN0IGlzQ29ycmVjdCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IHF1ZXN0aW9uLmFuc3dlcjtcclxuICAgIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCAgKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonMTUwcHgnLCBvYmplY3RGaXQ6J2Rpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNyYz0ge3F1ZXN0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGluZm9zRG9FdmVudG8pID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRSZXN1bHRzKGlzQ29ycmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgIDMgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKCAoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWMgYXM9XCJsYWJlbFwiIGtleT17YWx0ZXJuYXRpdmVJZH0gaHRtbEZvciA9e2FsdGVybmF0aXZlSWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAvKjxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWhhc0FsdGVybmF0aXZlU2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmIGlzQ29ycmVjdCAmJiA8cD52b2PDqiBhY2VydG91ITwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiAhaXNDb3JyZWN0ICYmIDxwPnZvY8OqIGVycm91ITwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBzY3JlZW5TdGF0ZXMgPSB7XHJcbiAgICBRVUlaOidRVUlaJyxcclxuICAgIExPQURJTkc6J0xPQURJTkcnLFxyXG4gICAgUkVTVUxUOidSRVNVTFQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgICBjb25zdCBbc2NyZWVuU3RhdGUsIHNldFNjcmVlblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHNjcmVlblN0YXRlcy5MT0FESU5HKTtcclxuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSBjdXJyZW50UXVlc3Rpb247XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHRzKHJlc3VsdCkge1xyXG4gICAgICAgIC8vcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgc2V0UmVzdWx0cyhbXHJcbiAgICAgICAgICAgIC4uLnJlc3VsdHMsXHJcbiAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICBdKSBcclxuICAgIH1cclxuXHJcbiAgICAvL1tSZWFjdCBjaGFtYSBkZTogRWZlaXRvc3x8IEVmZmVjdHNdIGNpY2xvIGRlIGVzdGFkb3MhXHJcbiAgICAvL1JlYWN0LnVzZUVmZmV0XHJcbiAgICAvLyBhdHVhbGl6YWRvID09PSBXaWxsVXBkYXRlXHJcbiAgICAvL21vcnJlID09PSB3aWxsVW5tb3VudFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL2ZldGNoKCkuLi5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlFVSVopO1xyXG4gICAgICAgIH0sIDEqIDEwMDApO1xyXG4gICAgLy9uYXNjZSA9PT0gZGlkTW91bnRcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRRdWl6KCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5kZXggKyAxO1xyXG5cclxuICAgICAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKG5leHRRdWVzdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XHJcbiAgICAgICAgICAgIDxRdWl6Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFF1aXpMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5RVUlaICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25XaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24gPSB7cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4ID0ge3F1ZXN0aW9uSW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucyA9IHt0b3RhbFF1ZXN0aW9uc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdFF1aXp9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlc3VsdHMgPSB7YWRkUmVzdWx0c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdTY3JlZW4gLz59XHJcblxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUkVTVUxUICAmJiA8UmVzdWx0V2lkZ2V0IHJlc3VsdHMgPSB7cmVzdWx0c30gLz59XHJcbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=