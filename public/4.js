(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/Pages/Bookmark/List/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/List/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/Layout */ "./resources/js/components/common/Layout/index.tsx"));
var BookmarkListPage = function (_a) {
    var bookmarks = _a.bookmarks;
    return react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement("div", { className: "r" },
            react_1.default.createElement("div", { className: "col-8" },
                react_1.default.createElement("ul", { className: "list-group" }, bookmarks === null || bookmarks === void 0 ? void 0 : bookmarks.map(function (bookmark, index) {
                    return react_1.default.createElement("li", { className: "list-group-item", key: index }, bookmark.title);
                })))));
};
exports.default = BookmarkListPage;


/***/ }),

/***/ "./resources/js/components/common/Layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/Layout/index.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Layout = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "container" }, children));
};
exports.default = Layout;


/***/ })

}]);