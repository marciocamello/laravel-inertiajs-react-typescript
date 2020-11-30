(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Bookmark/Add/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Bookmark/Add/index.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/Layout */ "./resources/js/components/common/Layout/index.tsx"));
var BookmarkAddPage = function (_a) {
    var errors = _a.errors;
    var _b = react_1.useState({
        title: 'Some hardecoded title',
        link: ''
    }), state = _b[0], setState = _b[1];
    var handleChange = function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.currentTarget.name] = event.currentTarget.value, _a)));
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        inertia_1.Inertia.post('/bookmarks/preview', state);
    };
    return react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("form", { onSubmit: handleSubmit },
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("label", { htmlFor: "link" }, "Link"),
                        react_1.default.createElement("input", { type: "url", className: "" + ((errors === null || errors === void 0 ? void 0 : errors.link) ? 'form-control is-invalid' : 'form-control'), id: "link", name: "link", "aria-describedby": "link", onChange: handleChange }),
                        react_1.default.createElement("small", { id: "link", className: "form-text text-muted" }, "Create a bookmark link"),
                        react_1.default.createElement("div", { id: "validate-link", className: "" + (errors ? 'invalid-feedback' : 'is-valid') }, errors === null || errors === void 0 ? void 0 : errors.link))))));
};
exports.default = BookmarkAddPage;


/***/ })

}]);