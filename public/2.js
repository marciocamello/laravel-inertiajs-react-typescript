(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ziggy_1 = __importDefault(__webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/index.js"));
var Layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/Layout */ "./resources/js/components/common/Layout/index.tsx"));
var BookmarkListPage = function (_a) {
    var bookmarks = _a.bookmarks;
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("ul", { className: "list-group" }, bookmarks.length > 0 &&
                    bookmarks.map(function (bookmark, index) {
                        return (react_1.default.createElement("li", { className: "list-group-item", key: index },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", null,
                                    react_1.default.createElement(inertia_react_1.InertiaLink, { href: ziggy_1.default('bookmarks.view', {
                                            bookmark: bookmark
                                        }) }, bookmark.title)),
                                react_1.default.createElement("br", null),
                                react_1.default.createElement("span", null, bookmark.description))));
                    }))))));
};
exports.default = BookmarkListPage;


/***/ })

}]);