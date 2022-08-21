"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TypingApp/TypingApp.js":
/*!***********************************************!*\
  !*** ./src/components/TypingApp/TypingApp.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TypingApp.module.css */ \"./src/components/TypingApp/TypingApp.module.css\");\n/* harmony import */ var _TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TestContainer_TestContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TestContainer/TestContainer */ \"./src/components/TestContainer/TestContainer.js\");\n/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/source */ \"./src/data/source.js\");\n/* harmony import */ var _helper_randomSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/randomSelector */ \"./src/helper/randomSelector.js\");\n/* harmony import */ var _helper_testDetailsCalculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/testDetailsCalculator */ \"./src/helper/testDetailsCalculator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/fatima/Desktop/Typing_Game_App/src/components/TypingApp/TypingApp.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar app = function app() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timerStarted = _useState[0],\n      setTimerStarted = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60),\n      timeRemaining = _useState2[0],\n      setTimeRemaining = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    words: 0,\n    characters: 0,\n    mistakes: 0\n  }),\n      detailsData = _useState3[0],\n      setDetailsData = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      selectedParagraph = _useState4[0],\n      setSelectedParagraph = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setSelectedParagraph((0,_helper_randomSelector__WEBPACK_IMPORTED_MODULE_3__.randomElementSelector)(_data_source__WEBPACK_IMPORTED_MODULE_2__.typingTestData));\n  }, []);\n\n  var handleKeyPress = function handleKeyPress(inputValue) {\n    if (!timerStarted) startTimer();\n    var updatedDetails = (0,_helper_testDetailsCalculator__WEBPACK_IMPORTED_MODULE_4__.testDetailsCalculator)(selectedParagraph, inputValue);\n    setDetailsData(updatedDetails);\n  };\n\n  var startAgain = function startAgain() {\n    return setSelectedParagraph((0,_helper_randomSelector__WEBPACK_IMPORTED_MODULE_3__.randomElementSelector)(_data_source__WEBPACK_IMPORTED_MODULE_2__.typingTestData));\n  };\n\n  var startTimer = function startTimer() {\n    setTimerStarted(true);\n    var timer = setInterval(function () {\n      if (timeRemaining > 0) {\n        setTimeRemaining(function (prevTimeRemaining) {\n          return prevTimeRemaining - 1;\n        });\n      } else {\n        clearInterval(timer);\n      }\n    }, 1000);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6___default().appContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      className: (_TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainHeading),\n      children: \"Accurate Speedy\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n      className: (_TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainHeadingTips),\n      children: \"hey there! you might want to test for either of spead and then accuracy before trying to perfect both, you can do this!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_TypingApp_module_css__WEBPACK_IMPORTED_MODULE_6___default().testMontainerMain),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TestContainer_TestContainer__WEBPACK_IMPORTED_MODULE_1__.TestContainer, {\n        handleKeyPress: handleKeyPress,\n        timeRemaining: timeRemaining,\n        timerStarted: timerStarted,\n        startAgain: startAgain,\n        words: detailsData.words,\n        characters: detailsData.characters,\n        mistakes: detailsData.mistakes,\n        selectedParagraph: selectedParagraph\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(app, \"R/ScCXhZ4q6Pdb/GfKiMZQsXlDs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UeXBpbmdBcHAvVHlwaW5nQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUlBLElBQU1PLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDaEIsa0JBQXdDUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPUSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUEwQ1QsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUEsTUFBT1UsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQXNDWCwrQ0FBUSxDQUFDO0FBQzdDWSxJQUFBQSxLQUFLLEVBQUUsQ0FEc0M7QUFFN0NDLElBQUFBLFVBQVUsRUFBRSxDQUZpQztBQUc3Q0MsSUFBQUEsUUFBUSxFQUFFO0FBSG1DLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUtBLG1CQUFrRGhCLCtDQUFRLENBQUMsRUFBRCxDQUExRDtBQUFBLE1BQU9pQixpQkFBUDtBQUFBLE1BQTBCQyxvQkFBMUI7O0FBSUFqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZmlCLElBQUFBLG9CQUFvQixDQUFDYiw2RUFBcUIsQ0FBQ0Qsd0RBQUQsQ0FBdEIsQ0FBcEI7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1lLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQyxRQUFJLENBQUNaLFlBQUwsRUFBbUJhLFVBQVU7QUFDN0IsUUFBTUMsY0FBYyxHQUFHaEIsb0ZBQXFCLENBQzFDVyxpQkFEMEMsRUFFMUNHLFVBRjBDLENBQTVDO0FBS0RKLElBQUFBLGNBQWMsQ0FBQ00sY0FBRCxDQUFkO0FBQ0EsR0FSRDs7QUFVQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ25CTCxvQkFBb0IsQ0FBQ2IsNkVBQXFCLENBQUNELHdEQUFELENBQXRCLENBREQ7QUFBQSxHQUFuQjs7QUFHQSxNQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlosSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBLFFBQU1lLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDOUIsVUFBSWYsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBRXJCQyxRQUFBQSxnQkFBZ0IsQ0FBQyxVQUFDZSxpQkFBRDtBQUFBLGlCQUF1QkEsaUJBQWlCLEdBQUcsQ0FBM0M7QUFBQSxTQUFELENBQWhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0xDLFFBQUFBLGFBQWEsQ0FBQ0gsS0FBRCxDQUFiO0FBQ0Q7QUFDRixLQVB3QixFQU90QixJQVBzQixDQUF6QjtBQVFELEdBVkQ7O0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUV0QiwyRUFBaEI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUEsMEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sZUFBUyxFQUFFQSw4RUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU1FO0FBQUssZUFBUyxFQUFFQSxnRkFBaEI7QUFBQSw2QkFDRSw4REFBQyx1RUFBRDtBQUNFLHNCQUFjLEVBQUVpQixjQURsQjtBQUVFLHFCQUFhLEVBQUVULGFBRmpCO0FBR0Usb0JBQVksRUFBRUYsWUFIaEI7QUFJRSxrQkFBVSxFQUFFZSxVQUpkO0FBS0UsYUFBSyxFQUFFUixXQUFXLENBQUNILEtBTHJCO0FBTUUsa0JBQVUsRUFBRUcsV0FBVyxDQUFDRixVQU4xQjtBQU9FLGdCQUFRLEVBQUVFLFdBQVcsQ0FBQ0QsUUFQeEI7QUFRRSx5QkFBaUIsRUFBRUc7QUFSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTlERDs7R0FBTVY7O0FBZ0VOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1R5cGluZ0FwcC9UeXBpbmdBcHAuanM/Yzk0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1R5cGluZ0FwcC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBUZXN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL1Rlc3RDb250YWluZXIvVGVzdENvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyB0eXBpbmdUZXN0RGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL3NvdXJjZVwiO1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9yYW5kb21TZWxlY3RvclwiO1xuXG5pbXBvcnQgeyB0ZXN0RGV0YWlsc0NhbGN1bGF0b3IgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rlc3REZXRhaWxzQ2FsY3VsYXRvclwiO1xuXG5cblxuY29uc3QgYXBwID0gKCkgPT4ge1xuICBjb25zdCBbdGltZXJTdGFydGVkLCBzZXRUaW1lclN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZVJlbWFpbmluZywgc2V0VGltZVJlbWFpbmluZ10gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFtkZXRhaWxzRGF0YSwgc2V0RGV0YWlsc0RhdGFdID0gdXNlU3RhdGUoe1xuICAgIHdvcmRzOiAwLFxuICAgIGNoYXJhY3RlcnM6IDAsXG4gICAgbWlzdGFrZXM6IDAsXG4gIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRQYXJhZ3JhcGgsIHNldFNlbGVjdGVkUGFyYWdyYXBoXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgc2V0U2VsZWN0ZWRQYXJhZ3JhcGgocmFuZG9tRWxlbWVudFNlbGVjdG9yKHR5cGluZ1Rlc3REYXRhKSlcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGlucHV0VmFsdWUpID0+IHtcbiAgICBpZiAoIXRpbWVyU3RhcnRlZCkgc3RhcnRUaW1lcigpO1xuICAgIGNvbnN0IHVwZGF0ZWREZXRhaWxzID0gdGVzdERldGFpbHNDYWxjdWxhdG9yKFxuICAgICAgc2VsZWN0ZWRQYXJhZ3JhcGgsXG4gICAgICBpbnB1dFZhbHVlXG4gICAgKTtcblxuICAgc2V0RGV0YWlsc0RhdGEodXBkYXRlZERldGFpbHMpXG4gIH07XG5cbiAgY29uc3Qgc3RhcnRBZ2FpbiA9ICgpID0+XG4gIHNldFNlbGVjdGVkUGFyYWdyYXBoKHJhbmRvbUVsZW1lbnRTZWxlY3Rvcih0eXBpbmdUZXN0RGF0YSkpXG5cbiAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICBzZXRUaW1lclN0YXJ0ZWQodHJ1ZSlcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aW1lUmVtYWluaW5nID4gMCkge1xuXG4gICAgICAgIHNldFRpbWVSZW1haW5pbmcoKHByZXZUaW1lUmVtYWluaW5nKSA9PiBwcmV2VGltZVJlbWFpbmluZyAtIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwQ29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tYWluSGVhZGluZ30+QWNjdXJhdGUgU3BlZWR5PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1haW5IZWFkaW5nVGlwc30+XG4gICAgICAgIGhleSB0aGVyZSEgeW91IG1pZ2h0IHdhbnQgdG8gdGVzdCBmb3IgZWl0aGVyIG9mIHNwZWFkIGFuZCB0aGVuIGFjY3VyYWN5IGJlZm9yZSB0cnlpbmdcbiAgICAgICAgdG8gcGVyZmVjdCBib3RoLCB5b3UgY2FuIGRvIHRoaXMhXG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlc3RNb250YWluZXJNYWlufT5cbiAgICAgICAgPFRlc3RDb250YWluZXJcbiAgICAgICAgICBoYW5kbGVLZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAgICAgdGltZVJlbWFpbmluZz17dGltZVJlbWFpbmluZ31cbiAgICAgICAgICB0aW1lclN0YXJ0ZWQ9e3RpbWVyU3RhcnRlZH1cbiAgICAgICAgICBzdGFydEFnYWluPXtzdGFydEFnYWlufVxuICAgICAgICAgIHdvcmRzPXtkZXRhaWxzRGF0YS53b3Jkc31cbiAgICAgICAgICBjaGFyYWN0ZXJzPXtkZXRhaWxzRGF0YS5jaGFyYWN0ZXJzfVxuICAgICAgICAgIG1pc3Rha2VzPXtkZXRhaWxzRGF0YS5taXN0YWtlc31cbiAgICAgICAgICBzZWxlY3RlZFBhcmFncmFwaD17c2VsZWN0ZWRQYXJhZ3JhcGh9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlRlc3RDb250YWluZXIiLCJ0eXBpbmdUZXN0RGF0YSIsInJhbmRvbUVsZW1lbnRTZWxlY3RvciIsInRlc3REZXRhaWxzQ2FsY3VsYXRvciIsImFwcCIsInRpbWVyU3RhcnRlZCIsInNldFRpbWVyU3RhcnRlZCIsInRpbWVSZW1haW5pbmciLCJzZXRUaW1lUmVtYWluaW5nIiwid29yZHMiLCJjaGFyYWN0ZXJzIiwibWlzdGFrZXMiLCJkZXRhaWxzRGF0YSIsInNldERldGFpbHNEYXRhIiwic2VsZWN0ZWRQYXJhZ3JhcGgiLCJzZXRTZWxlY3RlZFBhcmFncmFwaCIsImhhbmRsZUtleVByZXNzIiwiaW5wdXRWYWx1ZSIsInN0YXJ0VGltZXIiLCJ1cGRhdGVkRGV0YWlscyIsInN0YXJ0QWdhaW4iLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldlRpbWVSZW1haW5pbmciLCJjbGVhckludGVydmFsIiwiYXBwQ29udGFpbmVyIiwibWFpbkhlYWRpbmciLCJtYWluSGVhZGluZ1RpcHMiLCJ0ZXN0TW9udGFpbmVyTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TypingApp/TypingApp.js\n");

/***/ })

});