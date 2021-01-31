webpackHotUpdate_N_E("pages/quiz",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizPage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");

var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function LoadingScreen() {
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Carregando..."), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
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
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
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
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
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
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Topic, {
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
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  var screenState = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    QUIZ: 'QUIZ',
    LOADING: 'LOADING'
  }, "QUIZ", 'QUIZ');

  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex];
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, screenState === 'QUIZ' && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }), screenState === 'LOADING' && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 47
    }
  }), screenState === 'RESULT' && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 46
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY3JlZW4iLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsInRvdGFsUXVlc3Rpb25zIiwicXVlc3Rpb25JZCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWx0ZXJuYXRpdmVzIiwibWFwIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiY29uc29sZSIsImxvZyIsImFsdGVybmF0aXZlSWQiLCJkaXNwbGF5IiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsIlFVSVoiLCJMT0FESU5HIiwiZGIiLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDckIsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBS0ksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMSixDQURKO0FBV0g7O0tBWlFBLGE7O0FBY1QsU0FBU0MsY0FBVCxPQUlJO0FBQUE7O0FBQUEs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QVcsS0FBSyxTQUFoQixJQUE2QixNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJsQyxFQVVLQSxXQUFXLEtBQUssUUFBaEIsSUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FWakMsQ0FESixDQURKO0FBZ0JIO01BMUJ1QkQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LjU0OTYzM2FiOWNlYWI2MzY1ZGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8uLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgW0Rlc2FmaW8gZG8gTG9hZGluZ11cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KCB7XHJcbiAgICBxdWVzdGlvbiwgXHJcbiAgICBxdWVzdGlvbkluZGV4LCBcclxuICAgIHRvdGFsUXVlc3Rpb25zXHJcbn0gKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKCAoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhbGEgdW0gQSBwcmEgdm9jZSB2ZXIhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlSWQgPSBgYWx0ZXJuYXRpdmVfXyR7YWx0ZXJuYXRpdmVJbmRleH1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljIGFzPVwibGFiZWxcIiBodG1sRm9yID17YWx0ZXJuYXRpdmVJZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbHRlcm5hdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgLyo8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocXVlc3Rpb24sIG51bGwsIDQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICAgIGNvbnN0IHNjcmVlblN0YXRlID0ge1xyXG4gICAgICAgIFFVSVo6J1FVSVonLFxyXG4gICAgICAgIExPQURJTkc6J0xPQURJTkcnLFxyXG4gICAgICAgIFFVSVo6J1FVSVonLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aFxyXG4gICAgY29uc3QgcXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gJ1FVSVonICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25XaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXg9e3F1ZXN0aW9uSW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09ICdMT0FESU5HJyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09ICdSRVNVTFQnICYmIDxkaXY+IHZvY2UgYWNlcnRvdSB4IHF1ZXN0b2VzLCBwYXJhYsOpbnMhPC9kaXY+IH1cclxuICAgICAgICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==