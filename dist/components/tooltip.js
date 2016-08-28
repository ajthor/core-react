'use strict';

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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip(props) {
    (0, _classCallCheck3.default)(this, Tooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, props));

    _this.state = {
      open: false
    };

    _this.openTooltip = _this.openTooltip.bind(_this);
    _this.closeTooltip = _this.closeTooltip.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'openTooltip',
    value: function openTooltip(event) {
      if ((0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'openTooltip', this)) {
        (0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'openTooltip', this).call(this, event);
      }
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: 'closeTooltip',
    value: function closeTooltip(event) {
      if ((0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'closeTooltip', this)) {
        (0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'closeTooltip', this).call(this, event);
      }
      this.setState({
        isOpen: false
      });
    }

    // Add the event listeners to the 'componentDidMount' method.

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ((0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'componentDidMount', this)) {
        (0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'componentDidMount', this).call(this);
      }
      // Get component name.
      var name = WrappedComponent.displayName || WrappedComponent.name;

      // Set up event listeners.
      document.addEventListener(name + '/open', this.openTooltip, true);
      document.addEventListener(name + '/close', this.closeTooltip, true);
    }

    // Remove the event listeners from the 'componentWillUnmount' method.

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if ((0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'componentWillUnmount', this)) {
        (0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'componentWillUnmount', this).call(this);
      }
      // Get component name.
      var name = WrappedComponent.displayName || WrappedComponent.name;
      document.removeEventListener(name + '/open', this.openTooltip);
      document.removeEventListener(name + '/close', this.closeTooltip);
    }
  }, {
    key: 'render',
    value: function render() {
      var tooltipClassList = ['tooltip', 'overlay'];
      if (this.state.visible) {
        tooltipClassList.push('open');
      }

      return _react2.default.createElement(
        'div',
        { role: 'tooltip', className: _lodash2.default.join(tooltipClassList, ' ') },
        (0, _get3.default)(Tooltip.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tooltip.prototype), 'render', this).call(this)
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

exports.default = Tooltip;