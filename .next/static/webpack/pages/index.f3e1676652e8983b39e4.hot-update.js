webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Style.module.css */ "./src/Style.module.css");
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_Style_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jennifer.sabbagh\\Desktop\\ReactPractice\\project01\\src\\ImageToggleOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();




var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  _s();

  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var isInView = function isInView() {
    var rect = imageRef.current.getBoundingClientRect();
    return rect.top >= -20 && rect.bottom <= window.innerHeight;
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inView = _useState2[0],
      setInView = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Runs after the first render is completed
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts

    return function () {
      window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
    };
  }, []); // Empty array tells the function to only run when the component is first rendered

  var scrollHandler = function scrollHandler() {
    setInView(isInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    className: _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.smallimg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, _this);
};

_s(ImageToggleOnScroll, "ZXGxYM2/GoMqCdxtGlrQhtEYGrw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwic21hbGxpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFFMUQsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRjBELGtCQUl4QkMsc0RBQVEsQ0FBQyxJQUFELENBSmdCO0FBQUEsTUFJbkRDLFNBSm1EO0FBQUEsTUFJeENDLFlBSndDOztBQU0xRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBR04sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQUMsRUFBYixJQUFtQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBaEQ7QUFDSCxHQUhEOztBQU4wRCxtQkFXOUJWLHNEQUFRLENBQUMsS0FBRCxDQVhzQjtBQUFBLE1BV25EVyxNQVhtRDtBQUFBLE1BVzNDQyxTQVgyQzs7QUFhMURDLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2RYLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FVLGFBQVMsQ0FBQ1QsUUFBUSxFQUFULENBQVQ7QUFDQU0sVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEMsRUFIWSxDQUdzQzs7QUFDbEQsV0FBTyxZQUFNO0FBQ1ROLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDLEVBRFMsQ0FDNEM7QUFDeEQsS0FGRDtBQUdILEdBUFEsRUFPTixFQVBNLENBQVQsQ0FiMEQsQ0FvQmxEOztBQUVSLE1BQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkgsYUFBUyxDQUFDVCxRQUFRLEVBQVQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxPQUFHLEVBQ0pGLFNBQVMsR0FBRyxnRkFBSCxHQUNQVSxNQUFNLEdBQUdkLFlBQUgsR0FBa0JELFVBRjlCO0FBR0ksT0FBRyxFQUFDLEVBSFI7QUFJSSxPQUFHLEVBQUVFLFFBSlQ7QUFLSSxhQUFTLEVBQUVtQiw0REFBTSxDQUFDQztBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXBDRDs7R0FBTXZCLG1COztLQUFBQSxtQjtBQXNDU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNlMTY3NjY1MmU4OTgzYjM5ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3JjL1N0eWxlLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gLTIwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBSdW5zIGFmdGVyIHRoZSBmaXJzdCByZW5kZXIgaXMgY29tcGxldGVkXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7IC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpOyAvLyBGdW5jdGlvbiB0aGF0IGlzIHJlbW92ZWQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgdGVsbHMgdGhlIGZ1bmN0aW9uIHRvIG9ubHkgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZFxyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXtcclxuICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTdcIlxyXG4gICAgICAgICAgICA6IGluVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsaW1nfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==