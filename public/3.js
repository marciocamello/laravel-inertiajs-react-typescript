(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/Pages/Bookmark/View/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/View/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/Layout */ "./resources/js/components/common/Layout/index.tsx"));
var BookmarkViewPage = function (_a) {
    var bookmark = _a.bookmark;
    var handleSave = function (event) {
        event.preventDefault();
        inertia_1.Inertia.post('/bookmarks/make-active', { id: bookmark.id });
    };
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-12" }, bookmark.title && (react_1.default.createElement("div", { className: "card" },
                react_1.default.createElement("div", { className: "card-header" }, bookmark.title),
                react_1.default.createElement("div", { className: "card-body" },
                    react_1.default.createElement("p", null,
                        "Url: ",
                        bookmark.url),
                    react_1.default.createElement("p", null, bookmark.description),
                    bookmark.image_url && react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("img", { src: bookmark.image_url, alt: bookmark.title, width: "100%" })),
                    react_1.default.createElement("button", { className: "btn btn-primary", onClick: handleSave }, "Save"))))))));
};
exports.default = BookmarkViewPage;


/***/ })

}]);