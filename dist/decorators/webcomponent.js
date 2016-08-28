'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Webcomponent Decorator
// ---------------------------------------
var Webcomponent = function Webcomponent(name) {
  var mapToElement = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  if (!name) {
    throw new Error('Must supply a name for the webcomponent.');
  }

  var defaults = {
    shadowRoot: false,
    stylesheets: []
  };
  options = (0, _assign2.default)({}, defaults, options);

  return function (ReactComponent) {
    // Webcomponent which uses React internally.
    var WrappedWebcomponent = function (_HTMLElement) {
      (0, _inherits3.default)(WrappedWebcomponent, _HTMLElement);

      function WrappedWebcomponent() {
        (0, _classCallCheck3.default)(this, WrappedWebcomponent);
        return (0, _possibleConstructorReturn3.default)(this, (WrappedWebcomponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedWebcomponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(WrappedWebcomponent, [{
        key: 'createdCallback',
        value: function createdCallback() {
          if (options.shadowRoot) {
            // Create shadow DOM.
            this.createShadowRoot();
          }

          // Append React component to webcomponent.
          this.renderComponent();

          this.renderStyles();

          // Invoke custom implementation of createdCallback, without overriding
          // the default implementation.
          if (mapToElement && mapToElement.createdCallback) {
            var _mapToElement$created;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_mapToElement$created = mapToElement.createdCallback).apply.apply(_mapToElement$created, [this].concat(args));
          }
        }
      }, {
        key: 'renderComponent',
        value: function renderComponent(_ref) {
          var args = (0, _objectWithoutProperties3.default)(_ref, []);

          var mountPoint = this.shadowRoot || this;
          _reactDom2.default.render(_react2.default.createElement(ReactComponent, args), mountPoint);
        }
      }, {
        key: 'renderStyles',
        value: function renderStyles() {
          var mountPoint = this.shadowRoot || this;
          if (options.stylesheets) {
            (function () {
              var styleElement = document.createElement('style');
              styleElement.type = 'text/css';
              options.stylesheets.forEach(function (sheet) {
                // styleElement.textContent += `@import "${path.resolve(__dirname, sheet)}";\n`;
                styleElement.textContent += '@import url("' + sheet + '");\n';
              });
              mountPoint.appendChild(styleElement.cloneNode(true));
            })();
          }
        }
      }]);
      return WrappedWebcomponent;
    }(HTMLElement);

    // Merge supplied prototype in mapToElement into HTMLElement.


    for (var key in mapToElement) {
      if ({}.hasOwnProperty.call(mapToElement, key)) {
        WrappedWebcomponent.prototype[key] = mapToElement[key];
      }
    }

    // Register component in DOM.
    document.registerElement(name, { prototype: WrappedWebcomponent.prototype });
    // customElements.define(name, WrappedWebcomponent);

    // React component rendering a webcomponent.
    return function (_React$Component) {
      (0, _inherits3.default)(ReactWebComponent, _React$Component);

      function ReactWebComponent() {
        (0, _classCallCheck3.default)(this, ReactWebComponent);
        return (0, _possibleConstructorReturn3.default)(this, (ReactWebComponent.__proto__ || (0, _getPrototypeOf2.default)(ReactWebComponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(ReactWebComponent, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(name, (0, _extends3.default)({}, this.props));
        }
      }]);
      return ReactWebComponent;
    }(_react2.default.Component);
  };
};

exports.default = Webcomponent;