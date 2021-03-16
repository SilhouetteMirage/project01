webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\jennifer.sabbagh\\Desktop\\ReactPractice\\project01\\src\\ImageToggleOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();



var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  _s();

  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var isInView = function isInView() {
    var rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts

    return function () {
      window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
    };
  }, []); // Empty array tells the function to only run when the component is first rendered

  var scrollHandler = function scrollHandler() {
    setInView(isInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    className: styles.smallimg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(ImageToggleOnScroll, "DW9zIqqhn+MB7lq14nziwyeM65c=");

_c = ImageToggleOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

var _c;

$RefreshReg$(_c, "ImageToggleOnScroll");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwic21hbGxpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUUxRCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0gsR0FIRDs7QUFKMEQsa0JBUzlCQyxzREFBUSxDQUFDLEtBQUQsQ0FUc0I7QUFBQSxNQVNuREMsTUFUbUQ7QUFBQSxNQVMzQ0MsU0FUMkM7O0FBVzFEQyx5REFBUyxDQUFDLFlBQU07QUFDWkwsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEMsRUFEWSxDQUNzQzs7QUFDbEQsV0FBTyxZQUFNO0FBQ1RQLFlBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDLEVBRFMsQ0FDNEM7QUFDeEQsS0FGRDtBQUdILEdBTFEsRUFLTixFQUxNLENBQVQsQ0FYMEQsQ0FnQmxEOztBQUVSLE1BQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkgsYUFBUyxDQUFDVixRQUFRLEVBQVQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxPQUFHLEVBQUVTLE1BQU0sR0FBR1osWUFBSCxHQUFrQkQsVUFBbEM7QUFDSSxPQUFHLEVBQUMsRUFEUjtBQUVJLE9BQUcsRUFBRUUsUUFGVDtBQUdJLGFBQVMsRUFBRWlCLE1BQU0sQ0FBQ0M7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0E5QkQ7O0dBQU1yQixtQjs7S0FBQUEsbUI7QUFnQ1NBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuNTI0MGE3YjYwZmUwZjBjOTliNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7IC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpOyAvLyBGdW5jdGlvbiB0aGF0IGlzIHJlbW92ZWQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgdGVsbHMgdGhlIGZ1bmN0aW9uIHRvIG9ubHkgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZFxyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbGltZ31cclxuICAgICAgICAvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=