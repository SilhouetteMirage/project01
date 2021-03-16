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
    setInView(insInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5zSW5WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFFMUQsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFNQyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMscUJBQWpCLEVBQWI7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsSUFBWSxDQUFaLElBQWlCSCxJQUFJLENBQUNJLE1BQUwsSUFBZUMsTUFBTSxDQUFDQyxXQUE5QztBQUNILEdBSEQ7O0FBSjBELGtCQVM5QkMsc0RBQVEsQ0FBQyxLQUFELENBVHNCO0FBQUEsTUFTbkRDLE1BVG1EO0FBQUEsTUFTM0NDLFNBVDJDOztBQVcxREMseURBQVMsQ0FBQyxZQUFNO0FBQ1pMLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDLEVBRFksQ0FDc0M7O0FBQ2xELFdBQU8sWUFBTTtBQUNUUCxZQUFNLENBQUNRLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQyxFQURTLENBQzRDO0FBQ3hELEtBRkQ7QUFHSCxHQUxRLEVBS04sRUFMTSxDQUFULENBWDBELENBZ0JsRDs7QUFFUixNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJILGFBQVMsQ0FBQ0ssU0FBUyxFQUFWLENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssT0FBRyxFQUFFTixNQUFNLEdBQUdaLFlBQUgsR0FBaUJELFVBQWpDO0FBQ0ksT0FBRyxFQUFDLEVBRFI7QUFFSSxPQUFHLEVBQUVFO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0E1QkQ7O0dBQU1ILG1COztLQUFBQSxtQjtBQThCU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC4zOWMxZGMyOTViM2I2ZWNjOTIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTsgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7IC8vIEZ1bmN0aW9uIHRoYXQgaXMgcmVtb3ZlZCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSB0ZWxscyB0aGUgZnVuY3Rpb24gdG8gb25seSBydW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkXHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoaW5zSW5WaWV3KCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWc6IHByaW1hcnlJbWd9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9