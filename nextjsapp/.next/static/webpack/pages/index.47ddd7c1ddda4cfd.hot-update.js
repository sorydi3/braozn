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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"My name is Ibrahima Sory Diallo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ibrah\\\\braozn\\\\nextjsapp\\\\pages\\\\index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFDakMsU0FBU0MsT0FBTyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDtJQUNkLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDN0M7S0FGU0Q7QUFJVCxTQUFTRyxXQUFXOztJQUNsQixNQUFNQyxRQUFRO1FBQUM7UUFBZ0I7UUFBZ0I7S0FBb0I7SUFFbkUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNRLGNBQWM7UUFDckJELFNBQVNELFFBQVE7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDUjtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNkLDhEQUFDRDtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNkLDhEQUFDUTswQkFDRUwsTUFBTU0sR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztrQ0FBZUQ7dUJBQVBBOzs7Ozs7Ozs7OzBCQUliLDhEQUFDRTtnQkFBT0MsU0FBU1A7O29CQUFhO29CQUFPRjtvQkFBTTs7Ozs7Ozs7Ozs7OztBQUdqRDtHQXRCU0Y7TUFBQUE7QUF3QlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBuYW1lcyA9IFsnQWRhIExvdmVsYWNlJywgJ0dyYWNlIEhvcHBlcicsICdNYXJnYXJldCBIYW1pbHRvbiddO1xyXG5cclxuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIHNldExpa2VzKGxpa2VzICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiTXkgbmFtZSBpcyBJYnJhaGltYSBTb3J5IERpYWxsb1wiLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtuYW1lcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5MaWtlICh7bGlrZXN9KTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwibmFtZXMiLCJsaWtlcyIsInNldExpa2VzIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});