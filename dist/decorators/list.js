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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(prefix) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!prefix) {
    throw new Error('Must supply a prefix to \'List\' component.');
  }

  var defaults = {
    ulClass: '',
    liClass: ''
  };
  options = (0, _assign2.default)({}, defaults, options);

  return function (WrappedComponent) {
    var ListComponent = function (_React$Component) {
      (0, _inherits3.default)(ListComponent, _React$Component);

      function ListComponent() {
        (0, _classCallCheck3.default)(this, ListComponent);
        return (0, _possibleConstructorReturn3.default)(this, (ListComponent.__proto__ || (0, _getPrototypeOf2.default)(ListComponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(ListComponent, [{
        key: 'render',
        value: function render() {
          var items = this.props.items;

          var ulClassList = ['list', prefix + '-list'];
          if (options.ulClass) {
            ulClassList.push(options.ulClass);
          }

          var liClassList = ['list-item', prefix + '-list-item'];
          if (options.liClass) {
            liClassList.push(options.liClass);
          }

          return _react2.default.createElement(
            'ul',
            { className: _lodash2.default.join(ulClassList, ' ') },
            _lodash2.default.map(items, function (item, index) {
              return _react2.default.createElement(
                'li',
                { key: index, className: _lodash2.default.join(liClassList, ' ') },
                _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, item, { index: index }))
              );
            })
          );
        }
      }]);
      return ListComponent;
    }(_react2.default.Component);

    ListComponent.propTypes = {
      items: _react2.default.PropTypes.array.isRequired
    };

    return ListComponent;
  };
};

exports.default = List;