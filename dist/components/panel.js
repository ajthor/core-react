'use strict';
//
// Panel
//
// The panel element is just a container for other react components.
// As such, it is a permanent part of the page's schema and should not depend
// on the state of the application whatsoever. The sole job of panels is to
// organize code within the application and apply layout styles to the
// components within or to have a (usually flexbox) style that it uses.

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel() {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var position = _props.position;
      var prefix = _props.prefix;

      var panelProps = {
        className: '' + position
      };

      return _react2.default.createElement((prefix ? prefix + '-' : '') + 'panel', panelProps, _react2.default.Children.map(this.props.children, function (child) {
        var childProps = {};
        if (child.type === Panel) {
          childProps.prefix = prefix;
        }
        return _react2.default.cloneElement(child, childProps);
      }));
    }
  }]);
  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  position: _react2.default.PropTypes.string,
  prefix: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

exports.default = Panel;