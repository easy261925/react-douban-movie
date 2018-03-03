webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = vendor_3363325a245fdb6492bb;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(49);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(4));

var _App = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById("root"));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(40);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _DoubanTitle = _interopRequireDefault(__webpack_require__(6));

var _DoubanSousuo = _interopRequireDefault(__webpack_require__(8));

var _screening = _interopRequireDefault(__webpack_require__(13));

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_DoubanTitle.default, null), _react.default.createElement(_DoubanSousuo.default, null), _react.default.createElement("div", {
        className: "app-section"
      }, _react.default.createElement(_screening.default, null)));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title =
/*#__PURE__*/
function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "douban-title"
      }, _react.default.createElement("header", null, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", {
        className: "nav-box"
      }, _react.default.createElement("div", {
        className: "nav-left"
      }, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com"
      }, "\u8C46\u74E3")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://book.douban.com"
      }, "\u8BFB\u4E66")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://movie.douban.com"
      }, "\u7535\u5F71")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://music.douban.com"
      }, "\u97F3\u4E50")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com/location"
      }, "\u540C\u57CE")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com/group"
      }, "\u5C0F\u7EC4")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://read.douban.com/?dcs=top-nav&dcm=douban"
      }, "\u9605\u8BFB")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://douban.fm/?from_=shire_top_nav"
      }, "FM")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://time.douban.com/?dt_time_source=douban-web_top_nav"
      }, "\u65F6\u95F4")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web"
      }, "\u5E02\u96C6")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "#more"
      }, "\u66F4\u591A")))), _react.default.createElement("div", {
        className: "nav-info"
      }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com/accounts/login?source=movie"
      }, "\u767B\u5F55")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com/accounts/register?source=movie"
      }, "\u6CE8\u518C"))))), _react.default.createElement("div", {
        className: "nav-doubanapp"
      }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "https://www.douban.com/doubanapp/app?channel=top-nav"
      }, "\u4E0B\u8F7D\u8C46\u74E3\u5BA2\u6237\u7AEF"))))))))));
    }
  }]);

  return Title;
}(_react.Component);

var _default = Title;
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

__webpack_require__(9);

var _logo = _interopRequireDefault(__webpack_require__(11));

var _ = _interopRequireDefault(__webpack_require__(12));

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sousuo =
/*#__PURE__*/
function (_Component) {
  _inherits(Sousuo, _Component);

  function Sousuo() {
    _classCallCheck(this, Sousuo);

    return _possibleConstructorReturn(this, (Sousuo.__proto__ || Object.getPrototypeOf(Sousuo)).apply(this, arguments));
  }

  _createClass(Sousuo, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "douban-sousuo"
      }, _react.default.createElement("header", null, _react.default.createElement("div", {
        className: "logo"
      }, _react.default.createElement("a", {
        href: "https://movie.douban.com"
      }, _react.default.createElement("img", {
        src: _logo.default,
        alt: ""
      }))), _react.default.createElement("div", {
        className: "sousuo-search"
      }, _react.default.createElement("form", {
        action: ""
      }, _react.default.createElement("fieldset", null, _react.default.createElement("div", {
        className: "inp"
      }, _react.default.createElement("input", {
        id: "inp-query",
        name: "search_text",
        size: "22",
        placeholder: "\u641C\u7D22\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u7EFC\u827A\u3001\u5F71\u4EBA"
      }))))), _react.default.createElement("div", {
        className: "inp-btn"
      }, _react.default.createElement("input", {
        type: "submit",
        value: "\u641C\u7D22"
      })), _react.default.createElement("div", {
        className: "both"
      })), _react.default.createElement("div", {
        className: "douban-sousuo-hr"
      })));
    }
  }]);

  return Sousuo;
}(_react.Component);

var _default = Sousuo;
exports.default = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAABLCAMAAACIhDT3AAABgFBMVEWPmqKUnqW8wseNmKGQmKCSnKP5+fqWoKeYoKeUnKPb3uH9/v6ZoqiQmqHw8vPN0dWUnqa4vsPi5OeMlZ6Qm6SOl6DBx8yiqrGwt72NmKKqsbbIzNDV2Nudpaz3+Pmpr7Xq7O2Olp+utLqkrLOss7mLlp6vtr2rsrmmrrTt7e3R0dGKlJyKlJ2OmaKLlZ6Wn6aSm6KMlp6OmaGPmKCLlZ2YoaiSnKSUnaSTnaWRmqKQmqONlp+PmaKQm6ONl5+RnKSOmKCZoaiVnaSMlp+Rm6SKlZ2OmKGLlJ2Tm6OXn6eSnaWQmqKNlp6UnKSYoKiPmaGWnqaSmqKLlJ6PmaCSnaSOmKKSm6OWn6eUnaWTnqWKlZ6TnKOPmKGSnKWKlJ6QmaGTnaSXn6aXoKeTm6KTnabo6+2Rm6KPmaPS1tqQm6KMl5+Nl56OmJ+TnqagqK+ZoamVnKSVnaWZoKjq6uqOmqHU1NTf39+cpKyLlp2RmqPu8PGTnKXk5uiZoqn////////ciB7mAAAAgHRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADgFS2cAAAZwSURBVHja7dzXVxtHFAbwXWSqKWtkxWBiTGxwidW1knbVBep0dbGAhMAlzWmkh/G/nu+OOHklTzlzju53Zubeudq335kHXtAWp+4LzjhEWxecMaHmNz021ILD1Bym5jA1h6k5TM1hag5Tc5iaw9QcpmZqDlNzmJrD1Bym5jA1h6k5TM1hag5TMzWHqTlMzWFqjorUU4IzJtQ/C86YUP/6M7/rMaH+89dfvuSMQ7TFP19zxiLaJ86YhKmZmsPUHKbmMDWHqTn/K/WbO6NP0If/6TuO0tT69rb+Y1zfpopso6Hy47Ye12UqexNEPZ/Pz38fnc9TnZ+/yedv8lS+z89H52/Q3VT32FptaojGwRvfpgXoOBUa4UBQZ22ivonOR+EczdPKA5jKDUZoEdQZ+xNHZep4/Ie4zD7qfnx7P76/v48zTle54m+IOhr9KSpzgHoQzR9EDw4OcEbpKlf0zSeO0tSz8MThzDrxwWCWAmwHG0181pndd0bUM/DEMZwZQnWGAuwhNprozHDmYMjUalM7MMbGgSUDXzmiqWwl9RDG2DiwZOArRzSllqmVp568dC4nnYozWXEqWJcO9Q718viXevpieDE9rA6nq8Mq1sWQ+iH18mBq1anblXY7OBm8dIKV4GWw/fHZxzZulWDFwbgSdCrBSUndqXY6genAxTBQDVwEOs9XnndwqwaqQ4yrgWE1MM3UalMHKcfH2MF2cGJRCLG41sYIkzZW+zhYkNQBytERdqAT+Gwd360vdTDCpIPVOQoYTK02tf0uaL97dyzBP4fz3xtCbOTt42P72IY3jqCkNoyAYRhHEnwOzhuL+PiJcXRkHBnwxhFgasWp7Xf2bdbE1KZtH29OiSUaosVGd0tt6NiUJSFWoL4ixOe6bmAd4TR0ftWKU/cX+vDs27u2PSU20S/Yr4QY9hcw6+OKuaTu9rq6rnf173Qd0l1D7+mPhfjtqmd0ja5lGJgztdrUC32EDntTbCygg/EczBHMFzDvS+re1ZVl9awrS18Riz2r1+3p1rJYubK6Xcx73a5uMbXir/oQpDju9TfF8iG6Rv9wTVKjlz+OqK2aZVmDmuVYK+JtbWDVmoPaklixKDX6cTBgarWpGxHoEvHpEzF1eu/wMHLY2BAvG5F7p/ca/dP+aWRE3YwNas0aWM8eCXHm1GqxWnNRvGjG/jpzmoMz6yzGr1p56kgE+xRrUazlIo1G5IGYytGgcRiJYDVuqWMx7DOsdbGUjTWbsQkhsjRo1mKxGgpTq02di+QiWDlPJPJSiLnnuSdrQjzAIJeLeOQZkdTZWDaGlW3HYi+EWH6a/bgkxAQG2WysIM8YU6tN/a3Hk8t5vs2heB5MCZmlOSOHeGhjPqIuFLJZLJTChBjlw/JNFinQxpyp1ab2IJmMPHOe35aWl5c/fIY/mDOjsYykLiDptDyzhY8f3r59O4fnP0eThzgoTK04dUaKjrCRZDKjr+Nho8tkMPkikxlRP5SiI2wkkUjf3MfDRpd+WEg//COdZmq1qaVuco9gk9/AGUfmEawfo6XsJZOSWuomdtMJ1K/gjCP9CtbP0FJ2EwmmVpt6J7mzs4e1h5r8OrT3NZrkCqhDGQxDuIUktZbQtF2sXdREWttNo0k8uC+eaWkMNRoztdrUIfdOKARr947bHcLaQRtKPnoEfXdoD30oOaJ+r0nrlPY+paVSGpK61l69wrCPeV/T+FUrTg3L0FYI4FtuquDeCvm3yJ/2Dm6jV0241yR9/V5Wovdd0/SWnV+18tR+v9/tdxOwP4QOwcW9hTuuITdGI2qfz5fypUDq82noEFxS17jjqqUwYmq1qcnWvN1u00+0Wyhoafg7hiNqsg3f7lTYR7TXKGhpeO1jauWpzboJ1XrdK7nPiyh1v4mZiXjLZtlvSupwKwzVVssluVdJuOULYxZGXKVwyRdmarWpi6Z5UgZyuVgslr1m2ayfnHjLdS/wT7x1k36W1KRa8mGjKbnCpXDL53OVWi7Cd7XIm1+14tTecrHuP69D2ix6z73lk3Nvseg1i2WAozs3y3VJ7SLc1VZJPuJVV8m36kIDdoCjrIZLLaZWnLropeUtl3GY52hQUU6K1BXPy96TvqQOu2i5SiUXmlU0qCi+MDoMSi58x1Ga+s68eSyp7wp9x1GZ+s7YT18T9X/6jqMw9eu7A0Ecd4el+b8mcJia8z/mHzO4AnLaCXCMAAAAAElFTkSuQmCC"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVQ4T5WTgU3DMBBF35+gjEAnACaATkA3oExAR4ANOgKdADYgG8AI3aBlgkM/OltOSBU4KZJl3z3/O/+IJiLiDngAroFL4At4B/aSTm1uWassIuI1i/dABxwAAzfAAlhJMnAQPSCL1y6YSsrz+ymIUvYHcDNV3Ch0KwtJq1aCAZaOJEs9GxHhuXwCS0lurw8D3NdOUg+agUS24RlVgKe7llQ3z0Eiwjdv2lwrcGEn6Xnm9gvgOKVgCzxJWs4AnLeVZH/UsAKTLe1N0uMUJAfol3qRtBsA0geesFspSb1hEm5nuj1f5H0bqrqydaIhpt/mDVZlud8J8DNfjSEVUGRFhIvKdygTTzVWOYD8AvzhJYaQOfOMz0dKun8paNr0QP1vnH4ArBiJhw/175wAAAAASUVORK5CYII="

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(14);

var _screenData = _interopRequireDefault(__webpack_require__(15));

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var screening = function screening() {
  return _react.default.createElement("div", {
    id: "screening",
    className: "s"
  }, _react.default.createElement(ScreeningHd, null), _react.default.createElement(ScreeningBd, null));
};

var ScreeningHd = function ScreeningHd() {
  return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", {
    className: "screening-hd"
  }, _react.default.createElement("h2", null, "\u6B63\u5728\u70ED\u6620", _react.default.createElement("span", null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/cinema/nowplaying/"
  }, "\u5168\u90E8\u6B63\u5728\u70ED\u6620\xBB")), _react.default.createElement("span", null, _react.default.createElement(_reactRouterDom.Link, {
    to: "./later/"
  }, "\u5373\u5C06\u4E0A\u6620\xBB"))), _react.default.createElement(SlideControl, null)));
};

var SlideControl =
/*#__PURE__*/
function (_Component) {
  _inherits(SlideControl, _Component);

  function SlideControl() {
    _classCallCheck(this, SlideControl);

    return _possibleConstructorReturn(this, (SlideControl.__proto__ || Object.getPrototypeOf(SlideControl)).apply(this, arguments));
  }

  _createClass(SlideControl, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "ui-slide-control"
      });
    }
  }]);

  return SlideControl;
}(_react.Component);

var ScreeningBd =
/*#__PURE__*/
function (_Component2) {
  _inherits(ScreeningBd, _Component2);

  function ScreeningBd(props) {
    var _this;

    _classCallCheck(this, ScreeningBd);

    _this = _possibleConstructorReturn(this, (ScreeningBd.__proto__ || Object.getPrototypeOf(ScreeningBd)).call(this, props));
    _this.state = {
      screenData: []
    };
    return _this;
  }

  _createClass(ScreeningBd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        screenData: _screenData.default
      });
    }
  }, {
    key: "render",
    value: function render() {
      var screenData = this.state.screenData.splice(0, 5);
      console.log(screenData);
      var listItems = screenData.map(function (el, i) {
        return _react.default.createElement(ScreenItem, {
          data: el,
          key: i
        });
      });
      console.log(listItems);
      return _react.default.createElement("ul", {
        className: "clear-float"
      }, listItems);
    }
  }]);

  return ScreeningBd;
}(_react.Component);

var ScreenItem =
/*#__PURE__*/
function (_Component3) {
  _inherits(ScreenItem, _Component3);

  function ScreenItem() {
    _classCallCheck(this, ScreenItem);

    return _possibleConstructorReturn(this, (ScreenItem.__proto__ || Object.getPrototypeOf(ScreenItem)).apply(this, arguments));
  }

  _createClass(ScreenItem, [{
    key: "render",
    value: function render() {
      var image = this.props.data.images.small;
      var title = this.props.data.title;
      return _react.default.createElement("li", {
        className: "l"
      }, _react.default.createElement("ul", null, _react.default.createElement("li", {
        className: "poster"
      }, _react.default.createElement("img", {
        src: image,
        alt: title,
        className: "poster-img"
      }))));
    }
  }]);

  return ScreenItem;
}(_react.Component);

var _default = screening;
exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var screenData = [{
  "rating": {
    "max": 10,
    "average": 8.5,
    "stars": "45",
    "min": 0
  },
  "genres": ["剧情", "动作", "犯罪"],
  "title": "红海行动",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1274761/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp"
    },
    "name": "张译",
    "id": "1274761"
  }, {
    "alt": "https://movie.douban.com/celebrity/1354442/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp"
    },
    "name": "黄景瑜",
    "id": "1354442"
  }, {
    "alt": "https://movie.douban.com/celebrity/1272245/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp"
    },
    "name": "海清",
    "id": "1272245"
  }],
  "collect_count": 253245,
  "original_title": "红海行动",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1275075/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp"
    },
    "name": "林超贤",
    "id": "1275075"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp"
  },
  "alt": "https://movie.douban.com/subject/26861685/",
  "id": "26861685"
}, {
  "rating": {
    "max": 10,
    "average": 7.1,
    "stars": "35",
    "min": 0
  },
  "genres": ["喜剧", "动作", "犯罪"],
  "title": "唐人街探案2",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1274388/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp"
    },
    "name": "王宝强",
    "id": "1274388"
  }, {
    "alt": "https://movie.douban.com/celebrity/1336305/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp"
    },
    "name": "刘昊然",
    "id": "1336305"
  }, {
    "alt": "https://movie.douban.com/celebrity/1274979/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp"
    },
    "name": "肖央",
    "id": "1274979"
  }],
  "collect_count": 246616,
  "original_title": "唐人街探案2",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1274763/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp"
    },
    "name": "陈思诚",
    "id": "1274763"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp"
  },
  "alt": "https://movie.douban.com/subject/26698897/",
  "id": "26698897"
}, {
  "rating": {
    "max": 10,
    "average": 5.2,
    "stars": "25",
    "min": 0
  },
  "genres": ["喜剧", "奇幻"],
  "title": "捉妖记2",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1115918/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp"
    },
    "name": "梁朝伟",
    "id": "1115918"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275542/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp"
    },
    "name": "白百何",
    "id": "1275542"
  }, {
    "alt": "https://movie.douban.com/celebrity/1274628/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp"
    },
    "name": "井柏然",
    "id": "1274628"
  }],
  "collect_count": 92902,
  "original_title": "捉妖记2",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1287124/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp"
    },
    "name": "许诚毅",
    "id": "1287124"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp"
  },
  "alt": "https://movie.douban.com/subject/26575103/",
  "id": "26575103"
}, {
  "rating": {
    "max": 10,
    "average": 4.7,
    "stars": "25",
    "min": 0
  },
  "genres": ["喜剧", "奇幻"],
  "title": "祖宗十九代",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1317663/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp"
    },
    "name": "岳云鹏",
    "id": "1317663"
  }, {
    "alt": "https://movie.douban.com/celebrity/1000525/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp"
    },
    "name": "吴京",
    "id": "1000525"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275317/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp"
    },
    "name": "吴秀波",
    "id": "1275317"
  }],
  "collect_count": 16538,
  "original_title": "祖宗十九代",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1274305/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp"
    },
    "name": "郭德纲",
    "id": "1274305"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp"
  },
  "alt": "https://movie.douban.com/subject/27114417/",
  "id": "27114417"
}, {
  "rating": {
    "max": 10,
    "average": 4.7,
    "stars": "25",
    "min": 0
  },
  "genres": ["喜剧", "爱情", "奇幻"],
  "title": "西游记女儿国",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1041390/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp"
    },
    "name": "郭富城",
    "id": "1041390"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275721/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp"
    },
    "name": "冯绍峰",
    "id": "1275721"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275620/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp"
    },
    "name": "赵丽颖",
    "id": "1275620"
  }],
  "collect_count": 47769,
  "original_title": "西游记女儿国",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1274240/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp"
    },
    "name": "郑保瑞",
    "id": "1274240"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp"
  },
  "alt": "https://movie.douban.com/subject/25829175/",
  "id": "25829175"
}, {
  "rating": {
    "max": 10,
    "average": 6.8,
    "stars": "35",
    "min": 0
  },
  "genres": ["喜剧", "动画", "冒险"],
  "title": "熊出没·变形记",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1336920/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp"
    },
    "name": "张伟",
    "id": "1336920"
  }, {
    "alt": "https://movie.douban.com/celebrity/1336919/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp"
    },
    "name": "张秉君",
    "id": "1336919"
  }, {
    "alt": "https://movie.douban.com/celebrity/1336930/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp"
    },
    "name": "谭笑",
    "id": "1336930"
  }],
  "collect_count": 4943,
  "original_title": "熊出没·变形记",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1336904/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp"
    },
    "name": "丁亮",
    "id": "1336904"
  }, {
    "alt": "https://movie.douban.com/celebrity/1336917/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp"
    },
    "name": "林汇达",
    "id": "1336917"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp"
  },
  "alt": "https://movie.douban.com/subject/27176717/",
  "id": "27176717"
}, {
  "rating": {
    "max": 10,
    "average": 8.2,
    "stars": "45",
    "min": 0
  },
  "genres": ["剧情", "爱情"],
  "title": "爱在记忆消逝前",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1054390/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp"
    },
    "name": "海伦·米伦",
    "id": "1054390"
  }, {
    "alt": "https://movie.douban.com/celebrity/1010556/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp"
    },
    "name": "唐纳德·萨瑟兰",
    "id": "1010556"
  }, {
    "alt": "https://movie.douban.com/celebrity/1027309/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp"
    },
    "name": "简·默勒尼",
    "id": "1027309"
  }],
  "collect_count": 5526,
  "original_title": "The Leisure Seeker",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1032708/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp"
    },
    "name": "保罗·维尔齐",
    "id": "1032708"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp"
  },
  "alt": "https://movie.douban.com/subject/3036465/",
  "id": "3036465"
}, {
  "rating": {
    "max": 10,
    "average": 6.9,
    "stars": "35",
    "min": 0
  },
  "genres": ["喜剧", "动画", "冒险"],
  "title": "小马宝莉大电影",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1331706/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp"
    },
    "name": "奥卓·阿杜巴",
    "id": "1331706"
  }, {
    "alt": "https://movie.douban.com/celebrity/1041022/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp"
    },
    "name": "艾米莉·布朗特",
    "id": "1041022"
  }, {
    "alt": "https://movie.douban.com/celebrity/1388191/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp"
    },
    "name": "阿什莉·鲍尔",
    "id": "1388191"
  }],
  "collect_count": 1805,
  "original_title": "My Little Pony: The Movie",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1380663/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp"
    },
    "name": "杰森·西森",
    "id": "1380663"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp"
  },
  "alt": "https://movie.douban.com/subject/26176481/",
  "id": "26176481"
}, {
  "rating": {
    "max": 10,
    "average": 7.9,
    "stars": "40",
    "min": 0
  },
  "genres": ["剧情", "传记", "歌舞"],
  "title": "马戏之王",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1010508/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp"
    },
    "name": "休·杰克曼",
    "id": "1010508"
  }, {
    "alt": "https://movie.douban.com/celebrity/1049491/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp"
    },
    "name": "米歇尔·威廉姆斯",
    "id": "1049491"
  }, {
    "alt": "https://movie.douban.com/celebrity/1016676/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp"
    },
    "name": "扎克·埃夫隆",
    "id": "1016676"
  }],
  "collect_count": 56308,
  "original_title": "The Greatest Showman",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1344735/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp"
    },
    "name": "迈克尔·格雷西",
    "id": "1344735"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp"
  },
  "alt": "https://movie.douban.com/subject/3914513/",
  "id": "3914513"
}, {
  "rating": {
    "max": 10,
    "average": 7.7,
    "stars": "40",
    "min": 0
  },
  "genres": ["剧情", "爱情", "战争"],
  "title": "无问西东",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1041014/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp"
    },
    "name": "章子怡",
    "id": "1041014"
  }, {
    "alt": "https://movie.douban.com/celebrity/1041404/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp"
    },
    "name": "黄晓明",
    "id": "1041404"
  }, {
    "alt": "https://movie.douban.com/celebrity/1077991/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp"
    },
    "name": "张震",
    "id": "1077991"
  }],
  "collect_count": 226905,
  "original_title": "无问西东",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1313682/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp"
    },
    "name": "李芳芳",
    "id": "1313682"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp"
  },
  "alt": "https://movie.douban.com/subject/6874741/",
  "id": "6874741"
}, {
  "rating": {
    "max": 10,
    "average": 7.8,
    "stars": "40",
    "min": 0
  },
  "genres": ["剧情", "历史", "战争"],
  "title": "芳华",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1276105/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449935218.59.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449935218.59.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449935218.59.webp"
    },
    "name": "黄轩",
    "id": "1276105"
  }, {
    "alt": "https://movie.douban.com/celebrity/1366978/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPfkhkmfc5Eocel_avatar_uploaded1483942631.13.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPfkhkmfc5Eocel_avatar_uploaded1483942631.13.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPfkhkmfc5Eocel_avatar_uploaded1483942631.13.webp"
    },
    "name": "苗苗",
    "id": "1366978"
  }, {
    "alt": "https://movie.douban.com/celebrity/1357009/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513674760.63.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513674760.63.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513674760.63.webp"
    },
    "name": "钟楚曦",
    "id": "1357009"
  }],
  "collect_count": 384197,
  "original_title": "芳华",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1274255/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.webp"
    },
    "name": "冯小刚",
    "id": "1274255"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.webp"
  },
  "alt": "https://movie.douban.com/subject/26862829/",
  "id": "26862829"
}, {
  "rating": {
    "max": 10,
    "average": 7.2,
    "stars": "35",
    "min": 0
  },
  "genres": ["喜剧", "惊悚", "恐怖"],
  "title": "忌日快乐",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1325899/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp"
    },
    "name": "杰西卡·罗德",
    "id": "1325899"
  }, {
    "alt": "https://movie.douban.com/celebrity/1023036/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp"
    },
    "name": "伊瑟尔·布罗萨德",
    "id": "1023036"
  }, {
    "alt": "https://movie.douban.com/celebrity/1365373/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp"
    },
    "name": "露比·莫迪恩",
    "id": "1365373"
  }],
  "collect_count": 85712,
  "original_title": "Happy Death Day",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1032310/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp"
    },
    "name": "克里斯托弗·兰登",
    "id": "1032310"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp"
  },
  "alt": "https://movie.douban.com/subject/27027913/",
  "id": "27027913"
}, {
  "rating": {
    "max": 10,
    "average": 8.6,
    "stars": "45",
    "min": 0
  },
  "genres": ["剧情", "儿童", "家庭"],
  "title": "奇迹男孩",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1332866/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp"
    },
    "name": "雅各布·特伦布莱",
    "id": "1332866"
  }, {
    "alt": "https://movie.douban.com/celebrity/1054532/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp"
    },
    "name": "朱莉娅·罗伯茨",
    "id": "1054532"
  }, {
    "alt": "https://movie.douban.com/celebrity/1335870/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp"
    },
    "name": "伊扎贝拉·维多维奇",
    "id": "1335870"
  }],
  "collect_count": 116060,
  "original_title": "Wonder",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1070754/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp"
    },
    "name": "斯蒂芬·卓博斯基",
    "id": "1070754"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp"
  },
  "alt": "https://movie.douban.com/subject/26787574/",
  "id": "26787574"
}, {
  "rating": {
    "max": 10,
    "average": 0,
    "stars": "00",
    "min": 0
  },
  "genres": ["喜剧"],
  "title": "人怕出名猪怕壮",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1324270/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354249928.47.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354249928.47.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354249928.47.webp"
    },
    "name": "沈伐",
    "id": "1324270"
  }, {
    "alt": "https://movie.douban.com/celebrity/1052863/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19421.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19421.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19421.webp"
    },
    "name": "岳红",
    "id": "1052863"
  }, {
    "alt": "https://movie.douban.com/celebrity/1377153/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499991538.78.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499991538.78.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499991538.78.webp"
    },
    "name": "方清平",
    "id": "1377153"
  }],
  "collect_count": 276,
  "original_title": "人怕出名猪怕壮",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1388226/",
    "avatars": {
      "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
      "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
      "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
    },
    "name": "彭建伟",
    "id": "1388226"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512809887.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512809887.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512809887.webp"
  },
  "alt": "https://movie.douban.com/subject/27622779/",
  "id": "27622779"
}, {
  "rating": {
    "max": 10,
    "average": 5.8,
    "stars": "30",
    "min": 0
  },
  "genres": ["喜剧", "爱情"],
  "title": "前任3：再见前任",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1275667/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.webp"
    },
    "name": "韩庚",
    "id": "1275667"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275564/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp"
    },
    "name": "郑恺",
    "id": "1275564"
  }, {
    "alt": "https://movie.douban.com/celebrity/1342252/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.webp"
    },
    "name": "于文文",
    "id": "1342252"
  }],
  "collect_count": 144209,
  "original_title": "前任3：再见前任",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1332171/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.webp"
    },
    "name": "田羽生",
    "id": "1332171"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.webp"
  },
  "alt": "https://movie.douban.com/subject/26662193/",
  "id": "26662193"
}, {
  "rating": {
    "max": 10,
    "average": 6.9,
    "stars": "35",
    "min": 0
  },
  "genres": ["爱情", "冒险"],
  "title": "南极之恋",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1274608/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp"
    },
    "name": "赵又廷",
    "id": "1274608"
  }, {
    "alt": "https://movie.douban.com/celebrity/1312862/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp"
    },
    "name": "杨子姗",
    "id": "1312862"
  }],
  "collect_count": 33875,
  "original_title": "南极之恋",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1375623/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp"
    },
    "name": "吴有音",
    "id": "1375623"
  }],
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp"
  },
  "alt": "https://movie.douban.com/subject/26628329/",
  "id": "26628329"
}, {
  "rating": {
    "max": 10,
    "average": 7.2,
    "stars": "40",
    "min": 0
  },
  "genres": ["剧情"],
  "title": "浪矢解忧杂货店",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1239272/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp"
    },
    "name": "山田凉介",
    "id": "1239272"
  }, {
    "alt": "https://movie.douban.com/celebrity/1342488/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp"
    },
    "name": "村上虹郎",
    "id": "1342488"
  }, {
    "alt": "https://movie.douban.com/celebrity/1370121/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp"
    },
    "name": "宽一郎",
    "id": "1370121"
  }],
  "collect_count": 20188,
  "original_title": "ナミヤ雑貨店の奇蹟",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1286685/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp"
    },
    "name": "广木隆一",
    "id": "1286685"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp"
  },
  "alt": "https://movie.douban.com/subject/26742730/",
  "id": "26742730"
}, {
  "rating": {
    "max": 10,
    "average": 8.6,
    "stars": "45",
    "min": 0
  },
  "genres": ["剧情", "传记", "动画"],
  "title": "至爱梵高·星空之谜",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1314461/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp"
    },
    "name": "道格拉斯·布斯",
    "id": "1314461"
  }, {
    "alt": "https://movie.douban.com/celebrity/1376200/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp"
    },
    "name": "罗伯特·古拉奇克",
    "id": "1376200"
  }, {
    "alt": "https://movie.douban.com/celebrity/1275043/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp"
    },
    "name": "埃莉诺·汤姆林森",
    "id": "1275043"
  }],
  "collect_count": 110688,
  "original_title": "Loving Vincent",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1326282/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp"
    },
    "name": "多洛塔·科别拉",
    "id": "1326282"
  }, {
    "alt": "https://movie.douban.com/celebrity/1306202/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp"
    },
    "name": "休·韦尔什曼",
    "id": "1306202"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp"
  },
  "alt": "https://movie.douban.com/subject/25837262/",
  "id": "25837262"
}, {
  "rating": {
    "max": 10,
    "average": 7.4,
    "stars": "40",
    "min": 0
  },
  "genres": ["喜剧", "动画", "冒险"],
  "title": "公牛历险记",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1044883/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp"
    },
    "name": "约翰·塞纳",
    "id": "1044883"
  }, {
    "alt": "https://movie.douban.com/celebrity/1319532/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp"
    },
    "name": "凯特·麦克金农",
    "id": "1319532"
  }, {
    "alt": "https://movie.douban.com/celebrity/1387308/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp"
    },
    "name": "莉莉·戴",
    "id": "1387308"
  }],
  "collect_count": 15577,
  "original_title": "Ferdinand",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1009704/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp"
    },
    "name": "卡洛斯·沙尔丹哈",
    "id": "1009704"
  }],
  "year": "2017",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp"
  },
  "alt": "https://movie.douban.com/subject/25846857/",
  "id": "25846857"
}, {
  "rating": {
    "max": 10,
    "average": 8.3,
    "stars": "45",
    "min": 0
  },
  "genres": ["剧情", "传记", "历史"],
  "title": "尼斯·疯狂的心",
  "casts": [{
    "alt": "https://movie.douban.com/celebrity/1050510/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp"
    },
    "name": "格劳瑞·皮尔丝",
    "id": "1050510"
  }, {
    "alt": "https://movie.douban.com/celebrity/1208135/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp"
    },
    "name": "罗伯特·罗德里格斯",
    "id": "1208135"
  }, {
    "alt": "https://movie.douban.com/celebrity/1080482/",
    "avatars": {
      "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp",
      "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp",
      "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp"
    },
    "name": "费尔南多·埃拉斯",
    "id": "1080482"
  }],
  "collect_count": 4086,
  "original_title": "Nise - O Coração da Loucura",
  "subtype": "movie",
  "directors": [{
    "alt": "https://movie.douban.com/celebrity/1278468/",
    "avatars": {
      "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp",
      "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp",
      "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp"
    },
    "name": "罗伯托·柏林厄",
    "id": "1278468"
  }],
  "year": "2015",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp"
  },
  "alt": "https://movie.douban.com/subject/26631663/",
  "id": "26631663"
}];
var _default = screenData;
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Identifier directly after number (1:11)\nYou may need an appropriate loader to handle this file type.\n| $width: 115px;\n| $height: 164px;\n| *{");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .app-section{\n|     width: 1040px;\n|     margin: 0 auto;");

/***/ })
],[3]);
//# sourceMappingURL=bundle.8a706fb.js.map