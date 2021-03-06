(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
            react_1.default.createElement("div", { className: "col-md-6" }, bookmark.title && (react_1.default.createElement("div", { className: "card" },
                react_1.default.createElement("div", { className: "card-header" }, bookmark.title),
                react_1.default.createElement("div", { className: "card-body" },
                    react_1.default.createElement("p", null,
                        "Url: ",
                        bookmark.url),
                    react_1.default.createElement("p", null, bookmark.description),
                    react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("img", { src: bookmark.img_url, alt: bookmark.title, width: "100%" })),
                    react_1.default.createElement("button", { className: "btn btn-primary", onClick: handleSave }, "Save"))))))));
};
exports.default = BookmarkViewPage;


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
var Nav_1 = __importDefault(__webpack_require__(/*! ../Nav */ "./resources/js/components/common/Nav/index.tsx"));
var Layout = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(Nav_1.default, null)),
        react_1.default.createElement("div", { className: "container" }, children));
};
exports.default = Layout;


/***/ }),

/***/ "./resources/js/components/common/Nav/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/common/Nav/index.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ziggy_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ziggy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var Menu = function () {
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand-md navbar-light bg-white shadow-sm" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(inertia_react_1.InertiaLink, { className: "navbar-brand", href: ziggy_1.default('home').url() }, "Bookmarks"),
            react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "nav" },
                react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
            react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                react_1.default.createElement("ul", { className: "navbar-nav mr-auto" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_1.default('bookmark.index').url() }, "Bookmarks")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_1.default('bookmark.add').url() }, "Bookmark add"))),
                react_1.default.createElement("ul", { className: "navbar-nav ml-auto" },
                    react_1.default.createElement("li", { className: "nav-item dropdown" },
                        react_1.default.createElement("a", { id: "navbarDropdown", className: "nav-link dropdown-toggle", href: "#", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Amitav Roy"),
                        react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                            react_1.default.createElement(inertia_react_1.InertiaLink, { method: "post", href: ziggy_1.default('logout').url(), className: "dropdown-item" }, "Logout"))))))));
};
exports.default = Menu;


/***/ })

}]);