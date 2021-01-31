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
      totalQuestions = _ref.totalQuestions;
  var questionId = "question__".concat(questionIndex);
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
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
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
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
    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Topic, {
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
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(screenStates.LOADING),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      screenState = _React$useState2[0],
      setScreenState = _React$useState2[1];

  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex];
  setScreenState(screenStates.QUIZ); //[React chama de: Efeitos|| Effects] ciclo de estados!
  //React.useEffect
  //nasce === didMount
  // atualizado === WillUpdate
  //morre === willUnmount

  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), screenState === screenStates.LOADING && __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 58
    }
  }), screenState === screenStates.RESULT && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 57
    }
  }, " voce acertou x questoes, parab\xE9ns!")));
}

_s(QuizPage, "jIUAWcBzc5wf7CekpfYBTKtG7H4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsInF1ZXN0aW9uSWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFsdGVybmF0aXZlcyIsIm1hcCIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbHRlcm5hdGl2ZUlkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic2NyZWVuU3RhdGUiLCJzZXRTY3JlZW5TdGF0ZSIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixFQUtJLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBREo7QUFXSDs7S0FaUUEsYTs7QUFjVCxTQUFTQyxjQUFULE9BSUk7QUFBQTs7QUFBQSxNQUhBQyxRQUdBLFFBSEFBLFFBR0E7QUFBQSxNQUZBQyxhQUVBLFFBRkFBLGFBRUE7QUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLTCxXQUFXLEtBQUtQLFlBQVksQ0FBQ0MsSUFBN0IsSUFDRyxNQUFDLGNBQUQ7QUFDQSxZQUFRLEVBQUVuQixRQURWO0FBRUEsaUJBQWEsRUFBRUMsYUFGZjtBQUdBLGtCQUFjLEVBQUVDLGNBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQVNLdUIsV0FBVyxLQUFLUCxZQUFZLENBQUNFLE9BQTdCLElBQXdDLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVDdDLEVBV0tLLFdBQVcsS0FBS1AsWUFBWSxDQUFDRyxNQUE3QixJQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQVg1QyxDQURKLENBREo7QUFpQkg7O0dBL0J1QkMsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LmU1ZjRkMTczN2RmNDZiZWQ2NjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBMb2FkaW5nT3JiaXRzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8gUGVyZ3VudGEuLi5cclxuICAgICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ09yYml0cy8+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCgge1xyXG4gICAgcXVlc3Rpb24sIFxyXG4gICAgcXVlc3Rpb25JbmRleCwgXHJcbiAgICB0b3RhbFF1ZXN0aW9uc1xyXG59ICkge1xyXG4gICAgY29uc3QgcXVlc3Rpb25JZCA9YHF1ZXN0aW9uX18ke3F1ZXN0aW9uSW5kZXh9YFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCAgKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonMTUwcHgnLCBvYmplY3RGaXQ6J2Rpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNyYz0ge3F1ZXN0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLm1hcCggKGFsdGVybmF0aXZlLCBhbHRlcm5hdGl2ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWxhIHVtIEEgcHJhIHZvY2UgdmVyIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpYyBhcz1cImxhYmVsXCIgaHRtbEZvciA9e2FsdGVybmF0aXZlSWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YWx0ZXJuYXRpdmVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWx0ZXJuYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IC8qPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLCBudWxsLCA0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc2NyZWVuU3RhdGVzID0ge1xyXG4gICAgUVVJWjonUVVJWicsXHJcbiAgICBMT0FESU5HOidMT0FESU5HJyxcclxuICAgIFJFU1VMVDonUkVTVUxUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gICAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGhcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSAwO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XHJcblxyXG4gICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlFVSVopO1xyXG5cclxuICAgIC8vW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zfHwgRWZmZWN0c10gY2ljbG8gZGUgZXN0YWRvcyFcclxuICAgIC8vUmVhY3QudXNlRWZmZWN0XHJcbiAgICAvL25hc2NlID09PSBkaWRNb3VudFxyXG4gICAgLy8gYXR1YWxpemFkbyA9PT0gV2lsbFVwZGF0ZVxyXG4gICAgLy9tb3JyZSA9PT0gd2lsbFVubW91bnRcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuTE9BRElORyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPGRpdj4gdm9jZSBhY2VydG91IHggcXVlc3RvZXMsIHBhcmFiw6lucyE8L2Rpdj4gfVxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9