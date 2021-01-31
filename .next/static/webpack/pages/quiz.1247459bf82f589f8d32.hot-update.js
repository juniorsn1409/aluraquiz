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
  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, question.description), question.alternatives.forEach(function (alternative) {
    return __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, alternative);
  }), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, JSON.stringify(question, null, 4)), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Confirmar")));
}

_c2 = QuestionWidget;
function QuizPage() {
  console.log('Perguntas criadas', _db_json__WEBPACK_IMPORTED_MODULE_1__.questions);
  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions.length;
  var questionIndex = 0;
  var question = _db_json__WEBPACK_IMPORTED_MODULE_1__.questions[questionIndex];
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_1__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx(QuestionWidget, {
    question: question,
    questionIndex: questionIndex,
    totalQuestions: totalQuestions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx(LoadingScreen, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJ0b3RhbFF1ZXN0aW9ucyIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWx0ZXJuYXRpdmVzIiwiZm9yRWFjaCIsImFsdGVybmF0aXZlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlF1aXpQYWdlIiwiY29uc29sZSIsImxvZyIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFLSSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKLENBREo7QUFXSDs7S0FaUUEsYTs7QUFjVCxTQUFTQyxjQUFULE9BQXFFO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLE1BQWpDQyxhQUFpQyxRQUFqQ0EsYUFBaUM7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ2pFLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2lCRCxhQUFhLEdBQUksQ0FEbEMsaUJBQzBDQyxjQUQxQyxFQURKLENBREosRUFNSTtBQUNJLE9BQUcsRUFBQyxpQkFEUjtBQUVJLFNBQUssRUFFRDtBQUNJQyxXQUFLLEVBQUMsTUFEVjtBQUNrQkMsWUFBTSxFQUFDLE9BRHpCO0FBQ2tDQyxlQUFTLEVBQUM7QUFENUMsS0FKUjtBQVFJLE9BQUcsRUFBR0wsUUFBUSxDQUFDTSxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFpQkksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sUUFBUSxDQUFDTyxLQURkLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFFBQVEsQ0FBQ1EsV0FEZCxDQUpKLEVBUUtSLFFBQVEsQ0FBQ1MsWUFBVCxDQUFzQkMsT0FBdEIsQ0FBK0IsVUFBQ0MsV0FBRCxFQUFpQjtBQUM3QyxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUUEsV0FBUixDQURKO0FBR0gsR0FKQSxDQVJMLEVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWIsUUFBZixFQUF5QixJQUF6QixFQUErQixDQUEvQixDQURMLENBZEosRUFrQkksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSixDQWpCSixDQURKO0FBMENIOztNQTNDUUQsYztBQTZDTSxTQUFTZSxRQUFULEdBQW9CO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFnQ0MscUNBQUUsQ0FBQ0MsU0FBbkM7QUFDQSxNQUFNaEIsY0FBYyxHQUFHZSxxQ0FBRSxDQUFDQyxTQUFILENBQWFDLE1BQXBDO0FBQ0EsTUFBTWxCLGFBQWEsR0FBRyxDQUF0QjtBQUNBLE1BQU1ELFFBQVEsR0FBR2lCLHFDQUFFLENBQUNDLFNBQUgsQ0FBYWpCLGFBQWIsQ0FBakI7QUFFQSxTQUNJLE1BQUMsc0VBQUQ7QUFBZ0IsbUJBQWUsRUFBRWdCLHFDQUFFLENBQUNHLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsY0FBRDtBQUNBLFlBQVEsRUFBRXBCLFFBRFY7QUFFQSxpQkFBYSxFQUFFQyxhQUZmO0FBR0Esa0JBQWMsRUFBRUMsY0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBT0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURKLENBREo7QUFhSDtNQW5CdUJZLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei4xMjQ3NDU5YmY4MmY1ODlmOGQzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28nO1xyXG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xyXG5pbXBvcnQgUXVpekNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZ1NjcmVlbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvLi4uXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIFtEZXNhZmlvIGRvIExvYWRpbmddXHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCgge3F1ZXN0aW9uLCBxdWVzdGlvbkluZGV4LCB0b3RhbFF1ZXN0aW9uc30gKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxNTBweCcsIG9iamVjdEZpdDonZGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3JjPSB7cXVlc3Rpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLmZvckVhY2goIChhbHRlcm5hdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YWx0ZXJuYXRpdmV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocXVlc3Rpb24sIG51bGwsIDQpfVxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUGVyZ3VudGFzIGNyaWFkYXMnLGRiLnF1ZXN0aW9ucyk7XHJcbiAgICBjb25zdCB0b3RhbFF1ZXN0aW9ucyA9IGRiLnF1ZXN0aW9ucy5sZW5ndGhcclxuICAgIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSAwO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbldpZGdldCBcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fSBcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdTY3JlZW4gLz5cclxuICAgICAgICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgICAgICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=