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
  }))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Quizes da Galera"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
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
        lineNumber: 74,
        columnNumber: 21
      }
    }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Topic, {
      as: _src_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"],
      disabled: name.length === 0,
      href: "/quiz/".concat(projectName, "___").concat(githubUser),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, "".concat(githubUser, "/").concat(projectName)));
  }))), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    projectUrl: "https://github.com/juniorsn1409/aluraquiz-startrek.git",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_src_components_BlackLinkArrow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 132,
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
        lineNumber: 150,
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
        lineNumber: 157,
        columnNumber: 37
      }
    }), alternative);
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    disabled: !hasAlternativeSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 235,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {
    results: results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsIm1vdGlvbiIsInNlY3Rpb24iLCJkZWxheSIsImR1cmF0aW9uIiwic2hvdyIsIm9wYWNpdHkiLCJoaWRkZW4iLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwicXVlc3Rpb25JbmRleCIsImRiIiwiZXh0ZXJuYWwiLCJsaW5rRXh0ZXJubyIsInJlcGxhY2UiLCJzcGxpdCIsInByb2plY3ROYW1lIiwiZ2l0aHViVXNlciIsIkxpbmsiLCJuYW1lIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInRvdGFsUXVlc3Rpb25zIiwib25TdWJtaXQiLCJhZGRSZXN1bHRzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiYWx0ZXJuYXRpdmVTdGF0dXMiLCJpc1NlbGVjdGVkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsInF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDckIsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBS0ksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosQ0FESjtBQVdIOztLQVpRQSxhOztBQWNULFNBQVNDLFlBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFDN0IsU0FFSSxNQUFDLDhEQUFEO0FBQ0EsTUFBRSxFQUFFQyxvREFBTSxDQUFDQyxPQURYO0FBRUEsY0FBVSxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLGNBQVEsRUFBRTtBQUF4QixLQUZaO0FBR0EsWUFBUSxFQUFFO0FBQ1JDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURFO0FBRVJDLFlBQU0sRUFBRTtBQUFFRCxlQUFPLEVBQUU7QUFBWDtBQUZBLEtBSFY7QUFPQSxXQUFPLEVBQUMsUUFQUjtBQVFBLFdBQU8sRUFBQyxNQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFB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RUEsUUFBSXVELFlBQVksR0FBRzNDLGNBQW5CLEVBQW1DO0FBQy9Cd0Msd0JBQWtCLENBQUNHLFlBQUQsQ0FBbEI7QUFDSCxLQUZELE1BRU87QUFDSFAsb0JBQWMsQ0FBQ04sWUFBWSxDQUFDRyxNQUFkLENBQWQ7QUFDSDtBQUVKOztBQUVELFNBQ0ksTUFBQyxzRUFBRDtBQUFnQixtQkFBZSxFQUFFNUMscUNBQUUsQ0FBQ3VELEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLVCxXQUFXLEtBQUtMLFlBQVksQ0FBQ0MsSUFBN0IsSUFDRyxNQUFDLGNBQUQ7QUFDSSxZQUFRLEVBQUloQyxRQURoQjtBQUVJLGlCQUFhLEVBQUlYLGFBRnJCO0FBR0ksa0JBQWMsRUFBSVksY0FIdEI7QUFJSSxZQUFRLEVBQUkwQyxnQkFKaEI7QUFLSSxjQUFVLEVBQUl4QyxVQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsRUFXS2lDLFdBQVcsS0FBS0wsWUFBWSxDQUFDRSxPQUE3QixJQUF3QyxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVg3QyxFQWFLRyxXQUFXLEtBQUtMLFlBQVksQ0FBQ0csTUFBN0IsSUFBd0MsTUFBQyxZQUFEO0FBQWMsV0FBTyxFQUFJMUQsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWI3QyxDQURKLENBREo7QUFvQkg7O0lBM0R1QjJELFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei5kYjE5NTY5ZWM1YmEzYjBhMDAyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xpbmsnO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBBbHRlcm5hdGl2ZXNGb3JtIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0FsdGVybmF0aXZlRm9ybSc7XHJcbmltcG9ydCBMb2FkaW5nT3JiaXRzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcnXHJcbmltcG9ydCBCYWNrTGlua0Fycm93IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JsYWNrTGlua0Fycm93JztcclxuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXInO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZ1NjcmVlbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvIFBlcmd1bnRhLi4uXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdPcmJpdHMvPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdWx0V2lkZ2V0KHtyZXN1bHRzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICBcclxuICAgICAgICA8V2lkZ2V0XHJcbiAgICAgICAgYXM9e21vdGlvbi5zZWN0aW9ufVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSwgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcclxuICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICBhbmltYXRlPVwic2hvd1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiAvPiBQb250dWHDp8Ojb1xyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPHA+e2B2b2NlIGFjZXJ0b3UgYH1cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLmZpbHRlcigoeCkgPT4geCkubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAge2AgcXVlc3RvZXMsIHBhcmFiw6lucyFgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgcXVlc3Rpb25JbmRleCkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleSA9IHtgcmVzdWx0X18ke3Jlc3VsdH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIzB7cXVlc3Rpb25JbmRleCArIDF9IFJlc3VsdGFkbzoge3Jlc3VsdCA9PT0gdHJ1ZSA/ICdBY2VydG91JzogJ0Vycm91J31cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5RdWl6ZXMgZGEgR2FsZXJhPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2RiLmV4dGVybmFsLm1hcCgobGlua0V4dGVybm8pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcm9qZWN0TmFtZSwgZ2l0aHViVXNlcl0gPSBsaW5rRXh0ZXJub1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2h0dHBzOicsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcudmVyY2VsLmFwcCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGlua0V4dGVybm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9xdWl6LyR7cHJvamVjdE5hbWV9X19fJHtnaXRodWJVc2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7Z2l0aHViVXNlcn0vJHtwcm9qZWN0TmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1bmlvcnNuMTQwOS9hbHVyYXF1aXotc3RhcnRyZWsuZ2l0XCIgLz5cclxuICAgICAgICA8L1dpZGdldD5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCgge1xyXG4gICAgcXVlc3Rpb24sIFxyXG4gICAgcXVlc3Rpb25JbmRleCwgXHJcbiAgICB0b3RhbFF1ZXN0aW9ucyxcclxuICAgIG9uU3VibWl0LFxyXG4gICAgYWRkUmVzdWx0cyxcclxufSApIHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFsdGVybmF0aXZlLCBzZXRTZWxlY3RlZEFsdGVybmF0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbaXNRdWVzdGlvblN1Ym1pdGVkLCBzZXRJc1F1ZXN0aW9uU3VibWl0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcXVlc3Rpb25JZCA9YHF1ZXN0aW9uX18ke3F1ZXN0aW9uSW5kZXh9YDtcclxuICAgIGNvbnN0IGlzQ29ycmVjdCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IHF1ZXN0aW9uLmFuc3dlcjtcclxuICAgIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiAvPiB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCAgKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonMTUwcHgnLCBvYmplY3RGaXQ6J2Rpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNyYz0ge3F1ZXN0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8QWx0ZXJuYXRpdmVzRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGluZm9zRG9FdmVudG8pID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRSZXN1bHRzKGlzQ29ycmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgIDIgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKCAoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlU3RhdHVzID0gIGlzQ29ycmVjdCA/ICdTVUNDRVNTJyA6ICdFUlJPUic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlID09PSBhbHRlcm5hdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWRnZXQuVG9waWMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJsYWJlbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YWx0ZXJuYXRpdmVJZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV2lkZ2V0LlRvcGljPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAvKjxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWhhc0FsdGVybmF0aXZlU2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmIGlzQ29ycmVjdCB9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiAhaXNDb3JyZWN0IH1cclxuICAgICAgICAgICAgICAgIDwvQWx0ZXJuYXRpdmVzRm9ybT5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcclxuICAgIFFVSVo6J1FVSVonLFxyXG4gICAgTE9BRElORzonTE9BRElORycsXHJcbiAgICBSRVNVTFQ6J1JFU1VMVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICAgIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xyXG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBkYi5xdWVzdGlvbnMubGVuZ3RoO1xyXG4gICAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZGIucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFJlc3VsdHMocmVzdWx0KSB7XHJcbiAgICAgICAgLy9yZXN1bHRzLnB1c2gocmVzdWx0KTsgZnVuY2lvbmFcclxuICAgICAgICBzZXRSZXN1bHRzKFtcclxuICAgICAgICAgICAgLi4ucmVzdWx0cyxcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgIF0pIFxyXG4gICAgfVxyXG5cclxuICAgIC8vW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zfHwgRWZmZWN0c10gY2ljbG8gZGUgZXN0YWRvcyFcclxuICAgIC8vUmVhY3QudXNlRWZmZXRcclxuICAgIC8vIGF0dWFsaXphZG8gPT09IFdpbGxVcGRhdGVcclxuICAgIC8vbW9ycmUgPT09IHdpbGxVbm1vdW50XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vZmV0Y2goKS4uLlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XHJcbiAgICAgICAgfSwgMSogMTAwMCk7XHJcbiAgICAvL25hc2NlID09PSBkaWRNb3VudFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdFF1aXooKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gcXVlc3Rpb25JbmRleCArIDE7XHJcblxyXG4gICAgICAgIGlmIChuZXh0UXVlc3Rpb24gPCB0b3RhbFF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24obmV4dFF1ZXN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlFVSVogJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IHtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXggPSB7cXVlc3Rpb25JbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zID0ge3RvdGFsUXVlc3Rpb25zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0UXVpen1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUmVzdWx0cyA9IHthZGRSZXN1bHRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuTE9BRElORyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgICYmIDxSZXN1bHRXaWRnZXQgcmVzdWx0cyA9IHtyZXN1bHRzfSAvPiB9XHJcblxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9