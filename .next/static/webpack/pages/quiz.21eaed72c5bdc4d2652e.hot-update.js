webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingOrbits; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\xampp\\htdocs\\aluraquiz-startrek\\src\\components\\Loading\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SpinnerBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loading__SpinnerBox",
  componentId: "fzpm7e-0"
})(["width:100%;height:180px;display:flex;justify-content:center;align-items:center;background-color:transparent;@keyframes spin{from{transform:rotate(0);}to{transform:rotate(359deg);}}@keyframes spin3D{from{transform:rotate3d(.5,.5,.5,360deg);}to{transform:rotate3d(0deg);}}"]);
_c = SpinnerBox;
var Blue = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loading__Blue",
  componentId: "fzpm7e-1"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:165px;height:165px;border:1px solid   #377d72;-webkit-animation:spin3D 3s linear .2s infinite;"]);
_c2 = Blue;
var Green = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loading__Green",
  componentId: "fzpm7e-2"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:120px;height:120px;border:1px solid #bd2800;-webkit-animation:spin3D 2s linear 1s infinite;"]);
_c3 = Green;
var Red = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loading__Red",
  componentId: "fzpm7e-3"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:90px;height:90px;border:1px solid #377d72;-webkit-animation:spin3D 2s linear 0s infinite;"]);
_c4 = Red;
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loading__Circle",
  componentId: "fzpm7e-4"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;width:90px;height:90px;border:1px solid #bd2800;-webkit-animation:spin3D 0.7s linear 1s infinite;"]);
_c5 = Circle;
function LoadingOrbits() {
  return __jsx(SpinnerBox, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(Blue, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx(Green, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(Red, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(Circle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }));
}
_c6 = LoadingOrbits;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "SpinnerBox");
$RefreshReg$(_c2, "Blue");
$RefreshReg$(_c3, "Green");
$RefreshReg$(_c4, "Red");
$RefreshReg$(_c5, "Circle");
$RefreshReg$(_c6, "LoadingOrbits");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTcGlubmVyQm94Iiwic3R5bGVkIiwiZGl2IiwiQmx1ZSIsIkdyZWVuIiwiUmVkIiwiQ2lyY2xlIiwiTG9hZGluZ09yYml0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBaEI7S0FBTUYsVTtBQTJCTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdU1BQVY7TUFBTUMsSTtBQWFOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvTUFBWDtNQUFNRSxLO0FBYU4sSUFBTUMsR0FBRyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtNQUFUO01BQU1HLEc7QUFhTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb01BQVo7TUFBTUksTTtBQWNTLFNBQVNDLGFBQVQsR0FBeUI7QUFDcEMsU0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESjtBQVNEO01BVnFCQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouMjFlYWVkNzJjNWJkYzRkMjY1MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3Bpbm5lckJveCA9IHN0eWxlZC5kaXZcclxuYFxyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxODBweDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4zRCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCguNSwuNSwuNSwgMzYwZGVnKTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBCbHVlID0gc3R5bGVkLmRpdlxyXG5gXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbndpZHRoOiAxNjVweDtcclxuaGVpZ2h0OiAxNjVweDtcclxuYm9yZGVyOiAxcHggc29saWQgICAjMzc3ZDcyO1xyXG4td2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XHJcbmBcclxuY29uc3QgR3JlZW4gPSBzdHlsZWQuZGl2XHJcbmBcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxud2lkdGg6IDEyMHB4O1xyXG5oZWlnaHQ6IDEyMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYmQyODAwO1xyXG4td2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuYFxyXG5jb25zdCBSZWQgPSBzdHlsZWQuZGl2XHJcbmBcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxud2lkdGg6IDkwcHg7XHJcbmhlaWdodDogOTBweDtcclxuYm9yZGVyOiAxcHggc29saWQgIzM3N2Q3MjtcclxuLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAycyBsaW5lYXIgMHMgaW5maW5pdGU7XHJcbmBcclxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdlxyXG5gXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbndpZHRoOiA5MHB4O1xyXG5oZWlnaHQ6IDkwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiZDI4MDA7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMC43cyBsaW5lYXIgMXMgaW5maW5pdGU7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdPcmJpdHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGlubmVyQm94PlxyXG4gICAgICAgICAgICA8Qmx1ZT48L0JsdWU+XHJcbiAgICAgICAgICAgIDxHcmVlbj48L0dyZWVuPlxyXG4gICAgICAgICAgICA8UmVkPjwvUmVkPlxyXG4gICAgICAgICAgICA8Q2lyY2xlPjwvQ2lyY2xlPlxyXG5cclxuICAgICAgICA8L1NwaW5uZXJCb3g+XHJcbiAgICApO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9