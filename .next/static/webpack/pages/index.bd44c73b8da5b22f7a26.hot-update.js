webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GitHubCorner/index.js":
/*!**********************************************!*\
  !*** ./src/components/GitHubCorner/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHubCorner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\GitHubCorner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/components/GitHubCorner/index.js


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GitHubCorner__Wrapper",
  componentId: "sc-1x140l1-0"
})(["position:absolute;top:0;border:0;right:0;z-index:20;"]);
_c = Wrapper;
var SVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg.withConfig({
  displayName: "GitHubCorner__SVGWrapper",
  componentId: "sc-1x140l1-1"
})(["fill:", ";color:", ";cursor:pointer;&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){&:hover .octo-arm{animation:none}& .octo-arm{animation:octocat-wave 560ms ease-in-out}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.mainBg;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}); // eslint-disable-next-line react/prop-types

_c2 = SVGWrapper;
function GitHubCorner(_ref3) {
  var projectUrl = _ref3.projectUrl;
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(SVGWrapper, {
    className: "githubCorner",
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}
_c3 = GitHubCorner;

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "SVGWrapper");
$RefreshReg$(_c3, "GitHubCorner");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTVkdXcmFwcGVyIiwic3ZnIiwidGhlbWUiLCJjb2xvcnMiLCJtYWluQmciLCJwcmltYXJ5IiwiR2l0SHViQ29ybmVyIiwicHJvamVjdFVybCIsInRyYW5zZm9ybU9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNERBQWI7S0FBTUYsTztBQVFOLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSw4VUFDTjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUE1QjtBQUFBLENBRE0sRUFFTDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxPQUE1QjtBQUFBLENBRkssQ0FBaEIsQyxDQXNCQTs7TUF0Qk1MLFU7QUF1QlMsU0FBU00sWUFBVCxRQUFzQztBQUFBLE1BQWRDLFVBQWMsU0FBZEEsVUFBYztBQUNuRCxTQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVBLFVBQVQ7QUFBcUIsVUFBTSxFQUFDLFFBQTVCO0FBQXFDLE9BQUcsRUFBQyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLGNBQXRCO0FBQXFDLFNBQUssRUFBQyxJQUEzQztBQUFnRCxVQUFNLEVBQUMsSUFBdkQ7QUFBNEQsV0FBTyxFQUFDLGFBQXBFO0FBQWtGLG1CQUFZLE1BQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLEtBQUMsRUFBQyxtREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLEtBQUMsRUFBQywwTEFBUjtBQUFtTSxRQUFJLEVBQUMsY0FBeE07QUFBdU4sU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkIsS0FBOU47QUFBa1EsYUFBUyxFQUFDLFVBQTVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sS0FBQyxFQUFDLHFoQkFBUjtBQUE4aEIsUUFBSSxFQUFDLGNBQW5pQjtBQUFrakIsYUFBUyxFQUFDLFdBQTVqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQURGLENBREY7QUFXRDtNQVp1QkYsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZDQ0YzczYjhkYTViMjJmN2EyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyL2luZGV4LmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjA7XHJcbmA7XHJcblxyXG5jb25zdCBTVkdXcmFwcGVyID0gc3R5bGVkLnN2Z2BcclxuICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciAub2N0by1hcm17XHJcbiAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgb2N0b2NhdC13YXZle1xyXG4gICAgMCUsMTAwJXt0cmFuc2Zvcm06cm90YXRlKDApfVxyXG4gICAgMjAlLDYwJXt0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyl9XHJcbiAgICA0MCUsODAle3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAmOmhvdmVyIC5vY3RvLWFybXtcclxuICAgICAgYW5pbWF0aW9uOm5vbmVcclxuICAgIH1cclxuICAgICYgLm9jdG8tYXJte1xyXG4gICAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2l0SHViQ29ybmVyKHsgcHJvamVjdFVybCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8YSBocmVmPXtwcm9qZWN0VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPFNWR1dyYXBwZXIgY2xhc3NOYW1lPVwiZ2l0aHViQ29ybmVyXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgdmlld0JveD1cIjAgMCAyNTAgMjUwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMCBMMTE1LDExNSBMMTMwLDExNSBMMTQyLDE0MiBMMjUwLDI1MCBMMjUwLDAgWlwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyOC4zLDEwOS4wIEMxMTMuOCw5OS43IDExOS4wLDg5LjYgMTE5LjAsODkuNiBDMTIyLjAsODIuNyAxMjAuNSw3OC42IDEyMC41LDc4LjYgQzExOS4yLDcyLjAgMTIzLjQsNzYuMyAxMjMuNCw3Ni4zIEMxMjcuMyw4MC45IDEyNS41LDg3LjMgMTI1LjUsODcuMyBDMTIyLjksOTcuNiAxMzAuNiwxMDEuOSAxMzQuNCwxMDMuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcxMzBweCAxMDZweCcgfX0gY2xhc3NOYW1lPVwib2N0by1hcm1cIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMTUuMCwxMTUuMCBDMTE0LjksMTE1LjEgMTE4LjcsMTE2LjUgMTE5LjgsMTE1LjQgTDEzMy43LDEwMS42IEMxMzYuOSw5OS4yIDEzOS45LDk4LjQgMTQyLjIsOTguNiBDMTMzLjgsODguMCAxMjcuNSw3NC40IDE0My44LDU4LjAgQzE0OC41LDUzLjQgMTU0LjAsNTEuMiAxNTkuNyw1MS4wIEMxNjAuMyw0OS40IDE2My4yLDQzLjYgMTcxLjQsNDAuMSBDMTcxLjQsNDAuMSAxNzYuMSw0Mi41IDE3OC44LDU2LjIgQzE4My4xLDU4LjYgMTg3LjIsNjEuOCAxOTAuOSw2NS40IEMxOTQuNSw2OS4wIDE5Ny43LDczLjIgMjAwLjEsNzcuNiBDMjEzLjgsODAuMiAyMTYuMyw4NC45IDIxNi4zLDg0LjkgQzIxMi43LDkzLjEgMjA2LjksOTYuMCAyMDUuNCw5Ni42IEMyMDUuMSwxMDIuNCAyMDMuMCwxMDcuOCAxOTguMywxMTIuNSBDMTgxLjksMTI4LjkgMTY4LjMsMTIyLjUgMTU3LjcsMTE0LjEgQzE1Ny45LDExNi45IDE1Ni43LDEyMC45IDE1Mi43LDEyNC45IEwxNDEuMCwxMzYuNSBDMTM5LjgsMTM3LjcgMTQxLjYsMTQxLjkgMTQxLjgsMTQxLjggWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJvY3RvLWJvZHlcIiAvPlxyXG4gICAgICAgIDwvU1ZHV3JhcHBlcj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9