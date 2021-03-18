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
    return rect.top >= -60 && rect.bottom <= window.innerHeight + 40;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwic21hbGxpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFFMUQsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRjBELGtCQUl4QkMsc0RBQVEsQ0FBQyxJQUFELENBSmdCO0FBQUEsTUFJbkRDLFNBSm1EO0FBQUEsTUFJeENDLFlBSndDOztBQU0xRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBR04sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQUMsRUFBYixJQUFtQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixFQUE5RDtBQUNILEdBSEQ7O0FBTjBELG1CQVc5QlYsc0RBQVEsQ0FBQyxLQUFELENBWHNCO0FBQUEsTUFXbkRXLE1BWG1EO0FBQUEsTUFXM0NDLFNBWDJDOztBQWExREMseURBQVMsQ0FBQyxZQUFNO0FBQUU7QUFDZFgsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQVUsYUFBUyxDQUFDVCxRQUFRLEVBQVQsQ0FBVDtBQUNBTSxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQyxFQUhZLENBR3NDOztBQUNsRCxXQUFPLFlBQU07QUFDVE4sWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckMsRUFEUyxDQUM0QztBQUN4RCxLQUZEO0FBR0gsR0FQUSxFQU9OLEVBUE0sQ0FBVCxDQWIwRCxDQW9CbEQ7O0FBRVIsTUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCSCxhQUFTLENBQUNULFFBQVEsRUFBVCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFLLE9BQUcsRUFDSkYsU0FBUyxHQUFHLGdGQUFILEdBQ1BVLE1BQU0sR0FBR2QsWUFBSCxHQUFrQkQsVUFGOUI7QUFHSSxPQUFHLEVBQUMsRUFIUjtBQUlJLE9BQUcsRUFBRUUsUUFKVDtBQUtJLGFBQVMsRUFBRW1CLDREQUFNLENBQUNDO0FBTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBcENEOztHQUFNdkIsbUI7O0tBQUFBLG1CO0FBc0NTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOWYwNGIwZmQ5MWRlODczNWQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zcmMvU3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAtNjAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0ICsgNDA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy8gUnVucyBhZnRlciB0aGUgZmlyc3QgcmVuZGVyIGlzIGNvbXBsZXRlZFxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpOyAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTsgLy8gRnVuY3Rpb24gdGhhdCBpcyByZW1vdmVkIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IHRlbGxzIHRoZSBmdW5jdGlvbiB0byBvbmx5IHJ1biB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgcmVuZGVyZWRcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nIHNyYz17XHJcbiAgICAgICAgICAgIGlzTG9hZGluZyA/IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCJcclxuICAgICAgICAgICAgOiBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbGltZ31cclxuICAgICAgICAvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=