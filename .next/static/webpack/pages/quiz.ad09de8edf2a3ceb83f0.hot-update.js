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
    _s = $RefreshSig$();

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

function QuestionWidget(_ref) {
  var _this = this;

  var question = _ref.question,
      questionIndex = _ref.questionIndex,
      totalQuestions = _ref.totalQuestions,
      onSubmit = _ref.onSubmit;
  var questionId = "question__".concat(questionIndex);
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, question.description), __jsx("form", {
    onSubmit: function onSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    console.log('Fala um A pra voce ver!');
    var alternativeId = "alternative__".concat(alternativeIndex);
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Topic, {
      as: "label",
      htmlFor: alternativeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
        lineNumber: 68,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(screenStates.LOADING),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      screenState = _React$useState2[0],
      setScreenState = _React$useState2[1];

  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      currentQuestion = _React$useState4[0],
      setCurrentQuestion = _React$useState4[1];

  var questionIndex = currentQuestion;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex]; //[React chama de: Efeitos|| Effects] ciclo de estados!
  //React.useEffect
  // atualizado === WillUpdate
  //morre === willUnmount

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    //fetch()...
    setTimeout(function () {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000); //nasce === didMount
  }, []);

  function handleSubmit() {
    var nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 57
    }
  }, " voce acertou x questoes, parab\xE9ns!")));
}

_s(QuizPage, "uFzTItWrf72xkd+gzQBa3gJACYU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIm9uU3VibWl0IiwicXVlc3Rpb25JZCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwiYWx0ZXJuYXRpdmVzIiwibWFwIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiY29uc29sZSIsImxvZyIsImFsdGVybmF0aXZlSWQiLCJkaXNwbGF5Iiwic2NyZWVuU3RhdGVzIiwiUVVJWiIsIkxPQURJTkciLCJSRVNVTFQiLCJRdWl6UGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwiZGIiLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU3VibWl0IiwibmV4dFF1ZXN0aW9uIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixFQUtJLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBREo7QUFXSDs7S0FaUUEsYTs7QUFjVCxTQUFTQyxjQUFULE9BS0k7QUFBQTs7QUFBQSxNQUpBQyxRQUlBLFFBSkFBLFFBSUE7QUFBQSxNQUhBQyxhQUdBLFFBSEFBLGFBR0E7QUFBQSxNQUZBQyxjQUVBLFFBRkFBLGNBRUE7QUFBQSxNQURBQyxRQUNBLFFBREFBLFFBQ0E7QUFDQSxNQUFNQyxVQUFVLHVCQUFlSCxhQUFmLENBQWhCO0FBQ0EsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDaUJBLGFBQWEsR0FBSSxDQURsQyxpQkFDMENDLGNBRDFDLEVBREosQ0FESixFQU1JO0FBQ0ksT0FBRyxFQUFDLGlCQURSO0FBRUksU0FBSyxFQUVEO0FBQ0lHLFdBQUssRUFBQyxNQURWO0FBQ2tCQyxZQUFNLEVBQUMsT0FEekI7QUFDa0NDLGVBQVMsRUFBQztBQUQ1QyxLQUpSO0FBUUksT0FBRyxFQUFHUCxRQUFRLENBQUNRLEtBUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQWlCSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUixRQUFRLENBQUNTLEtBRGQsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsUUFBUSxDQUFDVSxXQURkLENBSkosRUFPSTtBQUNJLFlBQVEsRUFBRSxrQkFBQ0MsYUFBRCxFQUFrQjtBQUN4QkEsbUJBQWEsQ0FBQ0MsY0FBZDtBQUNILEtBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLWixRQUFRLENBQUNhLFlBQVQsQ0FBc0JDLEdBQXRCLENBQTJCLFVBQUNDLFdBQUQsRUFBY0MsZ0JBQWQsRUFBbUM7QUFDM0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EsUUFBTUMsYUFBYSwwQkFBbUJILGdCQUFuQixDQUFuQjtBQUVBLFdBQ1EsTUFBQyw4REFBRCxDQUFRLEtBQVI7QUFBYyxRQUFFLEVBQUMsT0FBakI7QUFBeUIsYUFBTyxFQUFHRyxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDQSxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FEUDtBQUVBLFFBQUUsRUFBRUQsYUFGSjtBQUdBLFVBQUksRUFBRWYsVUFITjtBQUlBLFVBQUksRUFBQyxPQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQU9LVyxXQVBMLENBRFI7QUFXSyxHQWZSLENBTEwsRUEyQkksTUFBQyw4REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKLENBUEosQ0FqQkosQ0FESjtBQTJESDs7TUFsRVFoQixjO0FBb0VULElBQU1zQixZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBQyxNQURZO0FBRWpCQyxTQUFPLEVBQUMsU0FGUztBQUdqQkMsUUFBTSxFQUFDO0FBSFUsQ0FBckI7QUFNZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsd0JBQ09DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZU4sWUFBWSxDQUFDRSxPQUE1QixDQURQO0FBQUE7QUFBQSxNQUN4QkssV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUUvQixNQUFNM0IsY0FBYyxHQUFHNEIscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxNQUFwQzs7QUFGK0IseUJBR2VOLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBSGY7QUFBQTtBQUFBLE1BR3hCTSxlQUh3QjtBQUFBLE1BR1BDLGtCQUhPOztBQUkvQixNQUFNakMsYUFBYSxHQUFHZ0MsZUFBdEI7QUFDQSxNQUFNakMsUUFBUSxHQUFHOEIscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhOUIsYUFBYixDQUFqQixDQUwrQixDQU8vQjtBQUNBO0FBRUE7QUFDQTs7QUFFQXlCLDhDQUFLLENBQUNTLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQjtBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNiUCxvQkFBYyxDQUFDUixZQUFZLENBQUNDLElBQWQsQ0FBZDtBQUNILEtBRlMsRUFFUCxJQUFHLElBRkksQ0FBVixDQUZrQixDQUt0QjtBQUNDLEdBTkQsRUFNRyxFQU5IOztBQVFBLFdBQVNlLFlBQVQsR0FBd0I7QUFDcEIsUUFBTUMsWUFBWSxHQUFHckMsYUFBYSxHQUFHLENBQXJDOztBQUVBLFFBQUlxQyxZQUFZLEdBQUdwQyxjQUFuQixFQUFtQztBQUMvQmdDLHdCQUFrQixDQUFDakMsYUFBYSxHQUFHLENBQWpCLENBQWxCO0FBQ0gsS0FGRCxNQUVPO0FBQ0g0QixvQkFBYyxDQUFDUixZQUFZLENBQUNHLE1BQWQsQ0FBZDtBQUNIO0FBRUo7O0FBRUQsU0FDSSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVNLHFDQUFFLENBQUNTLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLWCxXQUFXLEtBQUtQLFlBQVksQ0FBQ0MsSUFBN0IsSUFDRyxNQUFDLGNBQUQ7QUFDSSxZQUFRLEVBQUl0QixRQURoQjtBQUVJLGlCQUFhLEVBQUlDLGFBRnJCO0FBR0ksa0JBQWMsRUFBSUMsY0FIdEI7QUFJSSxZQUFRLEVBQUltQyxZQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsRUFVS1QsV0FBVyxLQUFLUCxZQUFZLENBQUNFLE9BQTdCLElBQXdDLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVjdDLEVBWUtLLFdBQVcsS0FBS1AsWUFBWSxDQUFDRyxNQUE3QixJQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQVo1QyxDQURKLENBREo7QUFrQkg7O0dBbER1QkMsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LmFkMDlkZThlZGYyYTNjZWI4M2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBMb2FkaW5nT3JiaXRzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCgge1xyXG4gICAgcXVlc3Rpb24sIFxyXG4gICAgcXVlc3Rpb25JbmRleCwgXHJcbiAgICB0b3RhbFF1ZXN0aW9ucyxcclxuICAgIG9uU3VibWl0XHJcbn0gKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKCAoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhbGEgdW0gQSBwcmEgdm9jZSB2ZXIhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlSWQgPSBgYWx0ZXJuYXRpdmVfXyR7YWx0ZXJuYXRpdmVJbmRleH1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljIGFzPVwibGFiZWxcIiBodG1sRm9yID17YWx0ZXJuYXRpdmVJZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbHRlcm5hdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgLyo8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocXVlc3Rpb24sIG51bGwsIDQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gICAgUVVJWjonUVVJWicsXHJcbiAgICBMT0FESU5HOidMT0FESU5HJyxcclxuICAgIFJFU1VMVDonUkVTVUxUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gICAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGhcclxuICAgIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSBjdXJyZW50UXVlc3Rpb247XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICAvL1tSZWFjdCBjaGFtYSBkZTogRWZlaXRvc3x8IEVmZmVjdHNdIGNpY2xvIGRlIGVzdGFkb3MhXHJcbiAgICAvL1JlYWN0LnVzZUVmZmVjdFxyXG4gICAgXHJcbiAgICAvLyBhdHVhbGl6YWRvID09PSBXaWxsVXBkYXRlXHJcbiAgICAvL21vcnJlID09PSB3aWxsVW5tb3VudFxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9mZXRjaCgpLi4uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5RVUlaKTtcclxuICAgICAgICB9LCAxKiAxMDAwKTtcclxuICAgIC8vbmFzY2UgPT09IGRpZE1vdW50XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5kZXggKyAxO1xyXG5cclxuICAgICAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKHF1ZXN0aW9uSW5kZXggKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlFVSVogJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IHtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXggPSB7cXVlc3Rpb25JbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zID0ge3RvdGFsUXVlc3Rpb25zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuTE9BRElORyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPGRpdj4gdm9jZSBhY2VydG91IHggcXVlc3RvZXMsIHBhcmFiw6lucyE8L2Rpdj4gfVxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9