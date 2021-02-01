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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.js");
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _src_components_AlternativeForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/AlternativeForm */ "./src/components/AlternativeForm/index.js");
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.js");
/* harmony import */ var _src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/BlackLinkArrow */ "./src/components/BlackLinkArrow/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Carregando Pergunta..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_src_components_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })));
}

_c = LoadingScreen;

function ResultWidget(_ref) {
  var _this = this;

  var results = _ref.results;
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), " Pontua\xE7\xE3o"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "voce acertou ", results.filter(function (x) {
    return x;
  }).length, " questoes, parab\xE9ns!"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, results.map(function (result, questionIndex) {
    return __jsx("li", {
      key: "result__".concat(result),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, "#0", questionIndex + 1, " Resultado: ", result === true ? 'Acertou' : 'Errou');
  }))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Quizes da Galera"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_3__.external.map(function (linkExterno) {
    var _linkExterno$replace$ = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.'),
        _linkExterno$replace$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_linkExterno$replace$, 2),
        projectName = _linkExterno$replace$2[0],
        githubUser = _linkExterno$replace$2[1];

    return __jsx("li", {
      key: linkExterno,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Topic, {
      as: _src_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"],
      disabled: name.length === 0,
      href: "/quiz/".concat(projectName, "___").concat(githubUser),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, "".concat(githubUser, "/").concat(projectName)));
  })))), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }));
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
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(_src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), " ", "Pergunta ".concat(questionIndex + 1, " de ").concat(totalQuestions))), __jsx("img", {
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
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, question.description), __jsx(_src_components_AlternativeForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSubmit: function onSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      setIsQuestionSubmited(true);
      setTimeout(function () {
        addResults(isCorrect);

        _onSubmit();

        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
      }, 2 * 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, question.alternatives.map(function (alternative, alternativeIndex) {
    var alternativeId = "alternative__".concat(alternativeIndex);
    var alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
    var isSelected = selectedAlternative === alternativeIndex;
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Topic, {
      as: "label",
      key: alternativeId,
      htmlFor: alternativeId,
      "data-selected": isSelected,
      "data-status": isQuestionSubmited && alternativeStatus,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
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
        lineNumber: 159,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Confirmar"), isQuestionSubmited && isCorrect, isQuestionSubmited && !isCorrect)));
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
    //results.push(result); funciona
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

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_3__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
      lineNumber: 237,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsIm1vdGlvbiIsInNlY3Rpb24iLCJkZWxheSIsImR1cmF0aW9uIiwic2hvdyIsIm9wYWNpdHkiLCJoaWRkZW4iLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwicXVlc3Rpb25JbmRleCIsImRiIiwiZXh0ZXJuYWwiLCJsaW5rRXh0ZXJubyIsInJlcGxhY2UiLCJzcGxpdCIsInByb2plY3ROYW1lIiwiZ2l0aHViVXNlciIsIkxpbmsiLCJuYW1lIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInRvdGFsUXVlc3Rpb25zIiwib25TdWJtaXQiLCJhZGRSZXN1bHRzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiYWx0ZXJuYXRpdmVTdGF0dXMiLCJpc1NlbGVjdGVkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsInF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDckIsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBS0ksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosQ0FESjtBQVdIOztLQVpRQSxhOztBQWNULFNBQVNDLFlBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFDN0IsU0FFSSxNQUFDLDhEQUFEO0FBQ0EsTUFBRSxFQUFFQyxvREFBTSxDQUFDQyxPQURYO0FBRUEsY0FBVSxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLGNBQVEsRUFBRTtBQUF4QixLQUZaO0FBR0EsWUFBUSxFQUFFO0FBQ1JDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURFO0FBRVJDLFlBQU0sRUFBRTtBQUFFRCxlQUFPLEVBQUU7QUFBWDtBQUZBLEtBSFY7QUFPQSxXQUFPLEVBQUMsUUFQUjtBQVFBLFdBQU8sRUFBQyxNQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFB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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGluayc7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IEFsdGVybmF0aXZlc0Zvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQWx0ZXJuYXRpdmVGb3JtJztcclxuaW1wb3J0IExvYWRpbmdPcmJpdHMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IEJhY2tMaW5rQXJyb3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQmxhY2tMaW5rQXJyb3cnO1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoe3Jlc3VsdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gIFxyXG4gICAgICAgIDxXaWRnZXRcclxuICAgICAgICBhcz17bW90aW9uLnNlY3Rpb259XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41LCBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+IFBvbnR1YcOnw6NvXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8cD57YHZvY2UgYWNlcnRvdSBgfVxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMuZmlsdGVyKCh4KSA9PiB4KS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICB7YCBxdWVzdG9lcywgcGFyYWLDqW5zIWB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBxdWVzdGlvbkluZGV4KSA9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5ID0ge2ByZXN1bHRfXyR7cmVzdWx0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjMHtxdWVzdGlvbkluZGV4ICsgMX0gUmVzdWx0YWRvOiB7cmVzdWx0ID09PSB0cnVlID8gJ0FjZXJ0b3UnOiAnRXJyb3UnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlF1aXplcyBkYSBHYWxlcmE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RiLmV4dGVybmFsLm1hcCgobGlua0V4dGVybm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3Byb2plY3ROYW1lLCBnaXRodWJVc2VyXSA9IGxpbmtFeHRlcm5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2h0dHBzOicsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJy52ZXJjZWwuYXBwJywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsaW5rRXh0ZXJub30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcXVpei8ke3Byb2plY3ROYW1lfV9fXyR7Z2l0aHViVXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtnaXRodWJVc2VyfS8ke3Byb2plY3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1bmlvcnNuMTQwOS9hbHVyYXF1aXotc3RhcnRyZWsuZ2l0XCIgLz5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KCB7XHJcbiAgICBxdWVzdGlvbiwgXHJcbiAgICBxdWVzdGlvbkluZGV4LCBcclxuICAgIHRvdGFsUXVlc3Rpb25zLFxyXG4gICAgb25TdWJtaXQsXHJcbiAgICBhZGRSZXN1bHRzLFxyXG59ICkge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQWx0ZXJuYXRpdmUsIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmVdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gO1xyXG4gICAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xyXG4gICAgY29uc3QgaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+IHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxBbHRlcm5hdGl2ZXNGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlc3VsdHMoaXNDb3JyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUXVlc3Rpb25TdWJtaXRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAgMiAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoIChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVTdGF0dXMgPSAgaXNDb3JyZWN0ID8gJ1NVQ0NFU1MnIDogJ0VSUk9SJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IGFsdGVybmF0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpYyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthbHRlcm5hdGl2ZUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zdGF0dXM9e2lzUXVlc3Rpb25TdWJtaXRlZCAmJiBhbHRlcm5hdGl2ZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZShhbHRlcm5hdGl2ZUluZGV4KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWx0ZXJuYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IC8qPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgaXNDb3JyZWN0IH1cclxuICAgICAgICAgICAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmICFpc0NvcnJlY3QgfVxyXG4gICAgICAgICAgICAgICAgPC9BbHRlcm5hdGl2ZXNGb3JtPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gICAgUVVJWjonUVVJWicsXHJcbiAgICBMT0FESU5HOidMT0FESU5HJyxcclxuICAgIFJFU1VMVDonUkVTVUxUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gICAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0cyhyZXN1bHQpIHtcclxuICAgICAgICAvL3Jlc3VsdHMucHVzaChyZXN1bHQpOyBmdW5jaW9uYVxyXG4gICAgICAgIHNldFJlc3VsdHMoW1xyXG4gICAgICAgICAgICAuLi5yZXN1bHRzLFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgXSkgXHJcbiAgICB9XHJcblxyXG4gICAgLy9bUmVhY3QgY2hhbWEgZGU6IEVmZWl0b3N8fCBFZmZlY3RzXSBjaWNsbyBkZSBlc3RhZG9zIVxyXG4gICAgLy9SZWFjdC51c2VFZmZldFxyXG4gICAgLy8gYXR1YWxpemFkbyA9PT0gV2lsbFVwZGF0ZVxyXG4gICAgLy9tb3JyZSA9PT0gd2lsbFVubW91bnRcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9mZXRjaCgpLi4uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5RVUlaKTtcclxuICAgICAgICB9LCAxKiAxMDAwKTtcclxuICAgIC8vbmFzY2UgPT09IGRpZE1vdW50XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcclxuICAgICAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5SRVNVTFQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uID0ge3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JbmRleCA9IHtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxRdWVzdGlvbnMgPSB7dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXRRdWl6fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRSZXN1bHRzID0ge2FkZFJlc3VsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5MT0FESU5HICYmIDxMb2FkaW5nU2NyZWVuIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlJFU1VMVCAgJiYgPFJlc3VsdFdpZGdldCByZXN1bHRzID0ge3Jlc3VsdHN9IC8+IH1cclxuXHJcbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=