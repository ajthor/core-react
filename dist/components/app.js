'use strict';
//
// App Component
//

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('./panel.jsx');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var prefix = this.props.prefix;

      return _react2.default.createElement((prefix ? prefix + '-' : '') + 'app', null, _react2.default.Children.map(this.props.children, function (child) {
        var childProps = {};
        if (child.type === _panel2.default) {
          childProps.prefix = prefix;
        }
        return _react2.default.cloneElement(child, childProps);
      }));
    }
  }]);
  return App;
}(_react2.default.Component);

App.propTypes = {
  prefix: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = App;