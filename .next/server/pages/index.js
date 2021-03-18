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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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

var _jsxFileName = "C:\\Users\\jennifer.sabbagh\\Desktop\\ReactPractice\\project01\\pages\\index.js";




const ImageChangeOnScroll = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _src_Style_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.centerDiv,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic1-bw.jpg",
        secondaryImg: "/static/color/pic1-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic2-bw.jpg",
        secondaryImg: "/static/color/pic2-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic3-bw.jpg",
        secondaryImg: "/static/color/pic3-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic4-bw.jpg",
        secondaryImg: "/static/color/pic4-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic1-bw.jpg",
        secondaryImg: "/static/color/pic1-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic2-bw.jpg",
        secondaryImg: "/static/color/pic2-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic3-bw.jpg",
        secondaryImg: "/static/color/pic3-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "imgDiv",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primaryImg: "/static/bw/pic4-bw.jpg",
        secondaryImg: "/static/color/pic4-color.jpg",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= -260 && rect.bottom <= window.innerHeight + 260;
  };

  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Runs after the first render is completed
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts

    return () => {
      window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
    };
  }, []); // Empty dependency array tells the function to only run when the component is first rendered

  const scrollHandler = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwic3R5bGVzIiwiY2VudGVyRGl2IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic21hbGxpbWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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O0FBTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILENBcENEOztBQXNDZXRCLGtGQUFmLEU7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zcmMvU3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJEaXZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0RpdlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgcHJpbWFyeUltZz1cIi9zdGF0aWMvYncvcGljMS1idy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvY29sb3IvcGljMS1jb2xvci5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1hcnlJbWc9XCIvc3RhdGljL2J3L3BpYzItYncuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzItY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMzLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPVwiL3N0YXRpYy9jb2xvci9waWMzLWNvbG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1hcnlJbWc9XCIvc3RhdGljL2J3L3BpYzQtYncuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzQtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWMxLWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPVwiL3N0YXRpYy9jb2xvci9waWMxLWNvbG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0RpdlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgcHJpbWFyeUltZz1cIi9zdGF0aWMvYncvcGljMi1idy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvY29sb3IvcGljMi1jb2xvci5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdEaXZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1hcnlJbWc9XCIvc3RhdGljL2J3L3BpYzMtYncuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2NvbG9yL3BpYzMtY29sb3IuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPVwiL3N0YXRpYy9idy9waWM0LWJ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPVwiL3N0YXRpYy9jb2xvci9waWM0LWNvbG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zcmMvU3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAtMjYwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCArIDI2MDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyBSdW5zIGFmdGVyIHRoZSBmaXJzdCByZW5kZXIgaXMgY29tcGxldGVkXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7IC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpOyAvLyBGdW5jdGlvbiB0aGF0IGlzIHJlbW92ZWQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0ZWxscyB0aGUgZnVuY3Rpb24gdG8gb25seSBydW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkXHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9e1xyXG4gICAgICAgICAgICBpc0xvYWRpbmcgPyBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBN1wiXHJcbiAgICAgICAgICAgIDogaW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ31cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxpbWd9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzbWFsbGltZ1wiOiBcIlN0eWxlX3NtYWxsaW1nX19QSmZBMlwiLFxuXHRcImNlbnRlckRpdlwiOiBcIlN0eWxlX2NlbnRlckRpdl9fM0hoYzNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9