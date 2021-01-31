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
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\pages\\quiz.js";
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
  var screenState = screenStates.LOADING;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsInF1ZXN0aW9uSWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFsdGVybmF0aXZlcyIsIm1hcCIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbHRlcm5hdGl2ZUlkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJzY3JlZW5TdGF0ZSIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDckIsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBS0ksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosQ0FESjtBQVdIOztLQVpRQSxhOztBQWNULFNBQVNDLGNBQVQsT0FJSTtBQUFBOztBQUFBLE1BSEFDLFFBR0EsUUFIQUEsUUFHQTtBQUFBLE1BRkFDLGFBRUEsUUFGQUEsYUFFQTtBQUFBLE1BREFDLGNBQ0EsUUFEQUEsY0FD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QUVuQixRQURWO0FBRUEsaUJBQWEsRUFBRUMsYUFGZjtBQUdBLGtCQUFjLEVBQUVDLGNBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQVNLcUIsV0FBVyxLQUFLTCxZQUFZLENBQUNFLE9BQTdCLElBQXdDLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVDdDLEVBV0tHLFdBQVcsS0FBS0wsWUFBWSxDQUFDRyxNQUE3QixJQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQVg1QyxDQURKLENBREo7QUFpQkg7TUE3QnVCQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouNTE1NWFjNjY3N2FmYzE1ZjA2NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IExvYWRpbmdPcmJpdHMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZydcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kbyBQZXJndW50YS4uLlxyXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nT3JiaXRzLz5cclxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KCB7XHJcbiAgICBxdWVzdGlvbiwgXHJcbiAgICBxdWVzdGlvbkluZGV4LCBcclxuICAgIHRvdGFsUXVlc3Rpb25zXHJcbn0gKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbklkID1gcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKCAoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhbGEgdW0gQSBwcmEgdm9jZSB2ZXIhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlSWQgPSBgYWx0ZXJuYXRpdmVfXyR7YWx0ZXJuYXRpdmVJbmRleH1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljIGFzPVwibGFiZWxcIiBodG1sRm9yID17YWx0ZXJuYXRpdmVJZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbHRlcm5hdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgLyo8cHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocXVlc3Rpb24sIG51bGwsIDQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBzY3JlZW5TdGF0ZXMgPSB7XHJcbiAgICBRVUlaOidRVUlaJyxcclxuICAgIExPQURJTkc6J0xPQURJTkcnLFxyXG4gICAgUkVTVUxUOidSRVNVTFQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgICBjb25zdCBzY3JlZW5TdGF0ZSA9IHNjcmVlblN0YXRlcy5MT0FESU5HO1xyXG4gICAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBkYi5xdWVzdGlvbnMubGVuZ3RoXHJcbiAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gMDtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZGIucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdO1xyXG5cclxuICAgIC8vW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zfHwgRWZmZWN0c10gY2ljbG8gZGUgZXN0YWRvcyFcclxuICAgIFJlYWN0LnVzZVN0YXRlXHJcbiAgICAvL25hc2NlID09PSBkaWRNb3VudFxyXG4gICAgLy8gYXR1YWxpemFkbyA9PT0gV2lsbFVwZGF0ZVxyXG4gICAgLy9tb3JyZSA9PT0gd2lsbFVubW91bnRcclxuXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuTE9BRElORyAmJiA8TG9hZGluZ1NjcmVlbiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPGRpdj4gdm9jZSBhY2VydG91IHggcXVlc3RvZXMsIHBhcmFiw6lucyE8L2Rpdj4gfVxyXG4gICAgICAgICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9