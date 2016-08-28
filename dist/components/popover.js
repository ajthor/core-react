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

function Popover(WrappedComponent) {
  return function (_WrappedComponent) {
    (0, _inherits3.default)(PopoverComponent, _WrappedComponent);

    function PopoverComponent(props) {
      (0, _classCallCheck3.default)(this, PopoverComponent);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PopoverComponent.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent)).call(this, props));

      _this.state = {
        open: false
      };

      _this.openPopover = _this.openPopover.bind(_this);
      _this.closePopover = _this.closePopover.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(PopoverComponent, [{
      key: 'openPopover',
      value: function openPopover(event) {
        if ((0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'openPopover', this)) {
          (0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'openPopover', this).call(this, event);
        }
        this.setState({
          isOpen: true
        });
      }
    }, {
      key: 'closePopover',
      value: function closePopover(event) {
        if ((0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'closePopover', this)) {
          (0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'closePopover', this).call(this, event);
        }
        this.setState({
          isOpen: false
        });
      }

      // Add the event listeners to the 'componentDidMount' method.

    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if ((0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'componentDidMount', this)) {
          (0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'componentDidMount', this).call(this);
        }
        // Get component name.
        var name = WrappedComponent.displayName || WrappedComponent.name;

        // Set up event listeners.
        document.addEventListener(name + '/open', this.openPopover, true);
        document.addEventListener(name + '/close', this.closePopover, true);
      }

      // Remove the event listeners from the 'componentWillUnmount' method.

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'componentWillUnmount', this)) {
          (0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'componentWillUnmount', this).call(this);
        }
        // Get component name.
        var name = WrappedComponent.displayName || WrappedComponent.name;
        document.removeEventListener(name + '/open', this.openPopover);
        document.removeEventListener(name + '/close', this.closePopover);
      }
    }, {
      key: 'render',
      value: function render() {
        var popoverClassList = ['popover', 'overlay'];
        if (this.state.visible) {
          popoverClassList.push('open');
        }

        return _react2.default.createElement(
          'div',
          { className: _lodash2.default.join(popoverClassList, ' ') },
          (0, _get3.default)(PopoverComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(PopoverComponent.prototype), 'render', this).call(this)
        );
      }
    }]);
    return PopoverComponent;
  }(WrappedComponent);
}

exports.default = Popover;