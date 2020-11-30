(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
var ziggy_1 = __importDefault(__webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/index.js"));
var Menu = function () {
    var _a = inertia_react_1.usePage().props, auth = _a.auth, appName = _a.appName;
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand-md navbar-light bg-white shadow-sm" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(inertia_react_1.InertiaLink, { className: "navbar-brand", href: ziggy_1.default('home') }, appName),
            react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "nav" },
                react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
            react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                react_1.default.createElement("ul", { className: "navbar-nav mr-auto" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_1.default('bookmarks.index') }, "Bookmarks")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_1.default('bookmarks.add') }, "Bookmark add"))),
                react_1.default.createElement("ul", { className: "navbar-nav ml-auto" },
                    react_1.default.createElement("li", { className: "nav-item dropdown" },
                        react_1.default.createElement("a", { id: "navbarDropdown", className: "nav-link dropdown-toggle", href: "#", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, auth.user.email),
                        react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                            react_1.default.createElement(inertia_react_1.InertiaLink, { method: "post", href: ziggy_1.default('logout'), className: "dropdown-item", as: "button" }, "Logout"))))))));
};
exports.default = Menu;


/***/ }),

/***/ "./vendor/tightenco/ziggy/dist/index.js":
/*!**********************************************!*\
  !*** ./vendor/tightenco/ziggy/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  var t = Object.prototype.hasOwnProperty,
      e = Array.isArray,
      r = function () {
    for (var t = [], e = 0; e < 256; ++e) {
      t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    }

    return t;
  }(),
      n = function n(t, e) {
    for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) {
      void 0 !== t[n] && (r[n] = t[n]);
    }

    return r;
  },
      i = {
    arrayToObject: n,
    assign: function assign(t, e) {
      return Object.keys(e).reduce(function (t, r) {
        return t[r] = e[r], t;
      }, t);
    },
    combine: function combine(t, e) {
      return [].concat(t, e);
    },
    compact: function compact(t) {
      for (var r = [{
        obj: {
          o: t
        },
        prop: "o"
      }], n = [], i = 0; i < r.length; ++i) {
        for (var o = r[i], u = o.obj[o.prop], f = Object.keys(u), a = 0; a < f.length; ++a) {
          var s = f[a],
              c = u[s];
          "object" == _typeof(c) && null !== c && -1 === n.indexOf(c) && (r.push({
            obj: u,
            prop: s
          }), n.push(c));
        }
      }

      return function (t) {
        for (; t.length > 1;) {
          var r = t.pop(),
              n = r.obj[r.prop];

          if (e(n)) {
            for (var i = [], o = 0; o < n.length; ++o) {
              void 0 !== n[o] && i.push(n[o]);
            }

            r.obj[r.prop] = i;
          }
        }
      }(r), t;
    },
    decode: function decode(t, e, r) {
      var n = t.replace(/\+/g, " ");
      if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);

      try {
        return decodeURIComponent(n);
      } catch (t) {
        return n;
      }
    },
    encode: function encode(t, e, n) {
      if (0 === t.length) return t;
      var i = t;
      if ("symbol" == _typeof(t) ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
        return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
      });

      for (var o = "", u = 0; u < i.length; ++u) {
        var f = i.charCodeAt(u);
        45 === f || 46 === f || 95 === f || 126 === f || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 ? o += i.charAt(u) : f < 128 ? o += r[f] : f < 2048 ? o += r[192 | f >> 6] + r[128 | 63 & f] : f < 55296 || f >= 57344 ? o += r[224 | f >> 12] + r[128 | f >> 6 & 63] + r[128 | 63 & f] : (f = 65536 + ((1023 & f) << 10 | 1023 & i.charCodeAt(u += 1)), o += r[240 | f >> 18] + r[128 | f >> 12 & 63] + r[128 | f >> 6 & 63] + r[128 | 63 & f]);
      }

      return o;
    },
    isBuffer: function isBuffer(t) {
      return !(!t || "object" != _typeof(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
    },
    isRegExp: function isRegExp(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    },
    maybeMap: function maybeMap(t, r) {
      if (e(t)) {
        for (var n = [], i = 0; i < t.length; i += 1) {
          n.push(r(t[i]));
        }

        return n;
      }

      return r(t);
    },
    merge: function r(i, o, u) {
      if (!o) return i;

      if ("object" != _typeof(o)) {
        if (e(i)) i.push(o);else {
          if (!i || "object" != _typeof(i)) return [i, o];
          (u && (u.plainObjects || u.allowPrototypes) || !t.call(Object.prototype, o)) && (i[o] = !0);
        }
        return i;
      }

      if (!i || "object" != _typeof(i)) return [i].concat(o);
      var f = i;
      return e(i) && !e(o) && (f = n(i, u)), e(i) && e(o) ? (o.forEach(function (e, n) {
        if (t.call(i, n)) {
          var o = i[n];
          o && "object" == _typeof(o) && e && "object" == _typeof(e) ? i[n] = r(o, e, u) : i.push(e);
        } else i[n] = e;
      }), i) : Object.keys(o).reduce(function (e, n) {
        var i = o[n];
        return e[n] = t.call(e, n) ? r(e[n], i, u) : i, e;
      }, f);
    }
  },
      o = String.prototype.replace,
      u = /%20/g,
      f = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  },
      a = i.assign({
    "default": f.RFC3986,
    formatters: {
      RFC1738: function RFC1738(t) {
        return o.call(t, u, "+");
      },
      RFC3986: function RFC3986(t) {
        return String(t);
      }
    }
  }, f),
      s = Object.prototype.hasOwnProperty,
      c = {
    brackets: function brackets(t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function indices(t, e) {
      return t + "[" + e + "]";
    },
    repeat: function repeat(t) {
      return t;
    }
  },
      l = Array.isArray,
      p = Array.prototype.push,
      y = function y(t, e) {
    p.apply(t, l(e) ? e : [e]);
  },
      d = Date.prototype.toISOString,
      h = a["default"],
      b = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: i.encode,
    encodeValuesOnly: !1,
    format: h,
    formatter: a.formatters[h],
    indices: !1,
    serializeDate: function serializeDate(t) {
      return d.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
      v = function t(e, r, n, o, u, f, a, s, c, p, d, h, v) {
    var m,
        g = e;

    if ("function" == typeof a ? g = a(r, g) : g instanceof Date ? g = p(g) : "comma" === n && l(g) && (g = i.maybeMap(g, function (t) {
      return t instanceof Date ? p(t) : t;
    }).join(",")), null === g) {
      if (o) return f && !h ? f(r, b.encoder, v, "key") : r;
      g = "";
    }

    if ("string" == typeof (m = g) || "number" == typeof m || "boolean" == typeof m || "symbol" == _typeof(m) || "bigint" == typeof m || i.isBuffer(g)) return f ? [d(h ? r : f(r, b.encoder, v, "key")) + "=" + d(f(g, b.encoder, v, "value"))] : [d(r) + "=" + d(String(g))];
    var w,
        j = [];
    if (void 0 === g) return j;
    if (l(a)) w = a;else {
      var O = Object.keys(g);
      w = s ? O.sort(s) : O;
    }

    for (var E = 0; E < w.length; ++E) {
      var S = w[E],
          N = g[S];

      if (!u || null !== N) {
        var R = l(g) ? "function" == typeof n ? n(r, S) : r : r + (c ? "." + S : "[" + S + "]");
        y(j, t(N, R, n, o, u, f, a, s, c, p, d, h, v));
      }
    }

    return j;
  },
      m = Object.prototype.hasOwnProperty,
      g = Array.isArray,
      w = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: i.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
      j = function j(t) {
    return t.replace(/&#(\d+);/g, function (t, e) {
      return String.fromCharCode(parseInt(e, 10));
    });
  },
      O = function O(t, e) {
    return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
  },
      E = function E(t, e, r, n) {
    if (t) {
      var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          o = /(\[[^[\]]*])/g,
          u = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
          f = u ? i.slice(0, u.index) : i,
          a = [];

      if (f) {
        if (!r.plainObjects && m.call(Object.prototype, f) && !r.allowPrototypes) return;
        a.push(f);
      }

      for (var s = 0; r.depth > 0 && null !== (u = o.exec(i)) && s < r.depth;) {
        if (s += 1, !r.plainObjects && m.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes) return;
        a.push(u[1]);
      }

      return u && a.push("[" + i.slice(u.index) + "]"), function (t, e, r, n) {
        for (var i = n ? e : O(e, r), o = t.length - 1; o >= 0; --o) {
          var u,
              f = t[o];
          if ("[]" === f && r.parseArrays) u = [].concat(i);else {
            u = r.plainObjects ? Object.create(null) : {};
            var a = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                s = parseInt(a, 10);
            r.parseArrays || "" !== a ? !isNaN(s) && f !== a && String(s) === a && s >= 0 && r.parseArrays && s <= r.arrayLimit ? (u = [])[s] = i : u[a] = i : u = {
              0: i
            };
          }
          i = u;
        }

        return i;
      }(a, e, r, n);
    }
  },
      S = function S(t, e) {
    var r = function (t) {
      if (!t) return w;
      if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
      if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      return {
        allowDots: void 0 === t.allowDots ? w.allowDots : !!t.allowDots,
        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : w.allowPrototypes,
        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : w.arrayLimit,
        charset: void 0 === t.charset ? w.charset : t.charset,
        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : w.charsetSentinel,
        comma: "boolean" == typeof t.comma ? t.comma : w.comma,
        decoder: "function" == typeof t.decoder ? t.decoder : w.decoder,
        delimiter: "string" == typeof t.delimiter || i.isRegExp(t.delimiter) ? t.delimiter : w.delimiter,
        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : w.depth,
        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : w.interpretNumericEntities,
        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : w.parameterLimit,
        parseArrays: !1 !== t.parseArrays,
        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : w.plainObjects,
        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : w.strictNullHandling
      };
    }(e);

    if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};

    for (var n = "string" == typeof t ? function (t, e) {
      var r,
          n = {},
          o = (e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(e.delimiter, Infinity === e.parameterLimit ? void 0 : e.parameterLimit),
          u = -1,
          f = e.charset;
      if (e.charsetSentinel) for (r = 0; r < o.length; ++r) {
        0 === o[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === o[r] ? f = "utf-8" : "utf8=%26%2310003%3B" === o[r] && (f = "iso-8859-1"), u = r, r = o.length);
      }

      for (r = 0; r < o.length; ++r) {
        if (r !== u) {
          var a,
              s,
              c = o[r],
              l = c.indexOf("]="),
              p = -1 === l ? c.indexOf("=") : l + 1;
          -1 === p ? (a = e.decoder(c, w.decoder, f, "key"), s = e.strictNullHandling ? null : "") : (a = e.decoder(c.slice(0, p), w.decoder, f, "key"), s = i.maybeMap(O(c.slice(p + 1), e), function (t) {
            return e.decoder(t, w.decoder, f, "value");
          })), s && e.interpretNumericEntities && "iso-8859-1" === f && (s = j(s)), c.indexOf("[]=") > -1 && (s = g(s) ? [s] : s), n[a] = m.call(n, a) ? i.combine(n[a], s) : s;
        }
      }

      return n;
    }(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, u = Object.keys(n), f = 0; f < u.length; ++f) {
      var a = u[f],
          s = E(a, n[a], r, "string" == typeof t);
      o = i.merge(o, s, r);
    }

    return i.compact(o);
  };

  var N = /*#__PURE__*/function () {
    function N(t, e, r) {
      _classCallCheck(this, N);

      var n;
      this.name = t, this.definition = e, this.bindings = null != (n = e.bindings) ? n : {}, this.config = r;
    }

    _createClass(N, [{
      key: "matchesUrl",
      value: function matchesUrl(t) {
        if (!this.definition.methods.includes("GET")) return !1;
        var e = this.template.replace(/\/{[^}?]*\?}/g, "(/[^/?]+)?").replace(/{[^}]+}/g, "[^/?]+").replace(/^\w+:\/\//, "");
        return new RegExp("^" + e + "$").test(t.replace(/\/+$/, "").split("?").shift());
      }
    }, {
      key: "compile",
      value: function compile(t) {
        var _this = this;

        return this.parameterSegments.length ? this.template.replace(/{([^}?]+)\??}/g, function (e, r) {
          var n;
          if ([null, void 0].includes(t[r]) && _this.parameterSegments.find(function (_ref) {
            var t = _ref.name;
            return t === r;
          }).required) throw new Error("Ziggy error: '" + r + "' parameter is required for route '" + _this.name + "'.");
          return encodeURIComponent(null != (n = t[r]) ? n : "");
        }).replace(/\/+$/, "") : this.template;
      }
    }, {
      key: "template",
      get: function get() {
        return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
      }
    }, {
      key: "parameterSegments",
      get: function get() {
        var t, e;
        return null != (t = null === (e = this.template.match(/{[^}?]+\??}/g)) || void 0 === e ? void 0 : e.map(function (t) {
          return {
            name: t.replace(/{|\??}/g, ""),
            required: !/\?}$/.test(t)
          };
        })) ? t : [];
      }
    }]);

    return N;
  }();

  var R = /*#__PURE__*/function (_String) {
    _inherits(R, _String);

    var _super = _createSuper(R);

    function R(t, e) {
      var _this2;

      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var n = arguments.length > 3 ? arguments[3] : undefined;

      _classCallCheck(this, R);

      var i;

      if (_this2 = _super.call(this), _this2.t = null != (i = null != n ? n : Ziggy) ? i : null === globalThis || void 0 === globalThis ? void 0 : globalThis.Ziggy, _this2.t = _objectSpread(_objectSpread({}, _this2.t), {}, {
        absolute: r
      }), t) {
        if (!_this2.t.routes[t]) throw new Error("Ziggy error: route '" + t + "' is not in the route list.");
        _this2.i = new N(t, _this2.t.routes[t], _this2.t), _this2.u = _this2.s(e);
      }

      return _possibleConstructorReturn(_this2);
    }

    _createClass(R, [{
      key: "toString",
      value: function toString() {
        var _this3 = this;

        var t = Object.keys(this.u).filter(function (t) {
          return !_this3.i.parameterSegments.some(function (_ref2) {
            var e = _ref2.name;
            return e === t;
          });
        }).filter(function (t) {
          return "_query" !== t;
        }).reduce(function (t, e) {
          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e, _this3.u[e]));
        }, {});
        return this.i.compile(this.u) + function (t, e) {
          var r,
              n = t,
              i = function (t) {
            if (!t) return b;
            if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
            var e = t.charset || b.charset;
            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = a["default"];

            if (void 0 !== t.format) {
              if (!s.call(a.formatters, t.format)) throw new TypeError("Unknown format option provided.");
              r = t.format;
            }

            var n = a.formatters[r],
                i = b.filter;
            return ("function" == typeof t.filter || l(t.filter)) && (i = t.filter), {
              addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : b.addQueryPrefix,
              allowDots: void 0 === t.allowDots ? b.allowDots : !!t.allowDots,
              charset: e,
              charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : b.charsetSentinel,
              delimiter: void 0 === t.delimiter ? b.delimiter : t.delimiter,
              encode: "boolean" == typeof t.encode ? t.encode : b.encode,
              encoder: "function" == typeof t.encoder ? t.encoder : b.encoder,
              encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : b.encodeValuesOnly,
              filter: i,
              formatter: n,
              serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : b.serializeDate,
              skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : b.skipNulls,
              sort: "function" == typeof t.sort ? t.sort : null,
              strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : b.strictNullHandling
            };
          }(e);

          "function" == typeof i.filter ? n = (0, i.filter)("", n) : l(i.filter) && (r = i.filter);
          var o = [];
          if ("object" != _typeof(n) || null === n) return "";
          var u = c[e && e.arrayFormat in c ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices"];
          r || (r = Object.keys(n)), i.sort && r.sort(i.sort);

          for (var f = 0; f < r.length; ++f) {
            var p = r[f];
            i.skipNulls && null === n[p] || y(o, v(n[p], p, u, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset));
          }

          var d = o.join(i.delimiter),
              h = !0 === i.addQueryPrefix ? "?" : "";
          return i.charsetSentinel && (h += "iso-8859-1" === i.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), d.length > 0 ? h + d : "";
        }(_objectSpread(_objectSpread({}, t), this.u._query), {
          addQueryPrefix: !0,
          arrayFormat: "indices",
          encodeValuesOnly: !0,
          skipNulls: !0,
          encoder: function encoder(t, e) {
            return "boolean" == typeof t ? Number(t) : e(t);
          }
        });
      }
    }, {
      key: "current",
      value: function current(t, e) {
        var _this4 = this;

        var r = this.t.absolute ? window.location.host + window.location.pathname : window.location.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/"),
            _ref3 = Object.entries(this.t.routes).find(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              e = _ref6[0],
              n = _ref6[1];

          return new N(t, n, _this4.t).matchesUrl(r);
        }) || [void 0, void 0],
            _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            i = _ref4[1];

        if (!t) return n;
        var o = new RegExp("^" + t.replace(".", "\\.").replace("*", ".*") + "$").test(n);
        return e ? (e = this.s(e, new N(n, i, this.t)), Object.entries(this.l(i)).filter(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 1),
              t = _ref8[0];

          return e.hasOwnProperty(t);
        }).every(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              t = _ref10[0],
              r = _ref10[1];

          return e[t] == r;
        })) : o;
      }
    }, {
      key: "has",
      value: function has(t) {
        return Object.keys(this.t.routes).includes(t);
      }
    }, {
      key: "s",
      value: function s() {
        var _this5 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.i;
        t = ["string", "number"].includes(_typeof(t)) ? [t] : t;
        var r = e.parameterSegments.filter(function (_ref11) {
          var t = _ref11.name;
          return !_this5.t.defaults[t];
        });
        return Array.isArray(t) ? t = t.reduce(function (t, e, n) {
          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, r[n].name, e));
        }, {}) : 1 !== r.length || t[r[0].name] || !t.hasOwnProperty(Object.values(e.bindings)[0]) && !t.hasOwnProperty("id") || (t = _defineProperty({}, r[0].name, t)), _objectSpread(_objectSpread({}, this.p(e)), this.h(t, e.bindings));
      }
    }, {
      key: "p",
      value: function p(t) {
        var _this6 = this;

        return t.parameterSegments.filter(function (_ref12) {
          var t = _ref12.name;
          return _this6.t.defaults[t];
        }).reduce(function (t, _ref13, r) {
          var e = _ref13.name;
          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e, _this6.t.defaults[e]));
        }, {});
      }
    }, {
      key: "h",
      value: function h(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Object.entries(t).reduce(function (t, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              r = _ref15[0],
              n = _ref15[1];

          if (!n || "object" != _typeof(n) || Array.isArray(n) || "_query" === r) return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, r, n));

          if (!n.hasOwnProperty(e[r])) {
            if (!n.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + r + "' parameter is missing route model binding key '" + e[r] + "'.");
            e[r] = "id";
          }

          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, r, n[e[r]]));
        }, {});
      }
    }, {
      key: "l",
      value: function l(t) {
        var e;
        var r = window.location.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "");

        var n = function n(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var r = arguments.length > 2 ? arguments[2] : undefined;

          var _map = [t, e].map(function (t) {
            return t.split(r);
          }),
              _map2 = _slicedToArray(_map, 2),
              n = _map2[0],
              i = _map2[1];

          return i.reduce(function (t, e, r) {
            return /^{[^}?]+\??}$/.test(e) && n[r] ? _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e.replace(/^{|\??}$/g, ""), n[r])) : t;
          }, {});
        };

        return _objectSpread(_objectSpread(_objectSpread({}, n(window.location.host, t.domain, ".")), n(r, t.uri, "/")), S(null === (e = window.location.search) || void 0 === e ? void 0 : e.replace(/^\?/, "")));
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        return this.toString();
      }
    }, {
      key: "check",
      value: function check(t) {
        return this.has(t);
      }
    }, {
      key: "params",
      get: function get() {
        return this.l(this.t.routes[this.current()]);
      }
    }]);

    return R;
  }( /*#__PURE__*/_wrapNativeSuper(String));

  return function (t, e, r, n) {
    var i = new R(t, e, r, n);
    return t ? i.toString() : i;
  };
});

/***/ })

}]);