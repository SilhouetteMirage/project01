module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll.js */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Style.module.css */ "./src/Style.module.css");
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_Style_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\jennifer.sabbagh\\Desktop\\ReactPractice\\project01\\pages\\ImageChangeOnScroll.js";




const ImageChangeOnScroll = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _src_Style_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.centerDiv,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic1-bw.jpg",
      secondaryImg: "/static/color/pic1-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic2-bw.jpg",
      secondaryImg: "/static/color/pic2-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic3-bw.jpg",
      secondaryImg: "/static/color/pic3-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic4-bw.jpg",
      secondaryImg: "/static/color/pic4-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic1-bw.jpg",
      secondaryImg: "/static/color/pic1-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic2-bw.jpg",
      secondaryImg: "/static/color/pic2-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic3-bw.jpg",
      secondaryImg: "/static/color/pic3-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primaryImg: "/static/bw/pic4-bw.jpg",
      secondaryImg: "/static/color/pic4-color.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Style.module.css */ "./src/Style.module.css");
/* harmony import */ var _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_Style_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jennifer.sabbagh\\Desktop\\ReactPractice\\project01\\src\\ImageToggleOnScroll.js";



const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts

    return () => {
      window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
    };
  }, []); // Empty array tells the function to only run when the component is first rendered

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    className: _src_Style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.smallimg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Style.module.css":
/*!******************************!*\
  !*** ./src/Style.module.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"smallimg": "Style_smallimg__PJfA2",
	"centerDiv": "Style_centerDiv__3Hhc3"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkltYWdlQ2hhbmdlT25TY3JvbGwiLCJzdHlsZXMiLCJjZW50ZXJEaXYiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzbWFsbGltZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3JjL1N0eWxlLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJEaXZ9PlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMxLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzEtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMyLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzItY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMzLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzMtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWM0LWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzQtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMxLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzEtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMyLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzItY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMzLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzMtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWM0LWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzQtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3NyYy9TdHlsZS5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTsgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7IC8vIEZ1bmN0aW9uIHRoYXQgaXMgcmVtb3ZlZCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSB0ZWxscyB0aGUgZnVuY3Rpb24gdG8gb25seSBydW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkXHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsaW1nfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic21hbGxpbWdcIjogXCJTdHlsZV9zbWFsbGltZ19fUEpmQTJcIixcblx0XCJjZW50ZXJEaXZcIjogXCJTdHlsZV9jZW50ZXJEaXZfXzNIaGMzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==