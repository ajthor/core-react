'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(options) {
  var defaults = {
    type: 'center'
  };
  options = (0, _assign2.default)({}, defaults, options);

  return function (WrappedComponent) {
    var ModalComponent = function (_WrappedComponent) {
      (0, _inherits3.default)(ModalComponent, _WrappedComponent);

      function ModalComponent(props) {
        (0, _classCallCheck3.default)(this, ModalComponent);

        // Bind functions to this.
        var _this = (0, _possibleConstructorReturn3.default)(this, (ModalComponent.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent)).call(this, props));

        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
      }

      (0, _createClass3.default)(ModalComponent, [{
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
          if ((0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'handleKeyDown', this)) {
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'handleKeyDown', this).call(this, event);
          }
          // Close on 'Escape'.
          if (event.key === 'Escape') {
            this.closeModal();
          }
        }
      }, {
        key: 'openModal',
        value: function openModal(event) {
          if ((0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'openModal', this)) {
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'openModal', this).call(this, event);
          }
          this.setState((0, _extends3.default)({
            isOpen: true
          }, event.detail));
        }
      }, {
        key: 'closeModal',
        value: function closeModal(event) {
          if ((0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'closeModal', this)) {
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'closeModal', this).call(this, event);
          }
          this.setState({
            isOpen: false
          });
        }

        // Add the event listeners to the 'componentDidMount' method.

      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if ((0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'componentDidMount', this)) {
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'componentDidMount', this).call(this);
          }
          // Get component name.
          var name = WrappedComponent.displayName || WrappedComponent.name;

          // Set up event listeners.
          window.document.addEventListener(name + '/open', this.openModal, true);
          document.addEventListener(name + '/close', this.closeModal, true);
        }

        // Remove the event listeners from the 'componentWillUnmount' method.

      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if ((0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'componentWillUnmount', this)) {
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'componentWillUnmount', this).call(this);
          }
          // Get component name.
          var name = WrappedComponent.displayName || WrappedComponent.name;
          document.removeEventListener(name + '/open', this.openModal);
          document.removeEventListener(name + '/close', this.closeModal);
        }
      }, {
        key: 'render',
        value: function render() {
          var modalClassList = ['modal', 'overlay', 'modal-' + options.type];
          if (this.state && this.state.isOpen) {
            modalClassList.push('open');
          }

          return _react2.default.createElement(
            'modal',
            {
              role: 'dialog',
              type: '' + options.type,
              className: _lodash2.default.join(modalClassList, ' '),
              onKeyDown: this.handleKeyDown
            },
            (0, _get3.default)(ModalComponent.prototype.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent.prototype), 'render', this).call(this)
          );
        }
      }]);
      return ModalComponent;
    }(WrappedComponent);

    return ModalComponent;
  };
};

exports.default = Modal;