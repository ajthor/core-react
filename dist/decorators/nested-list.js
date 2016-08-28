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

var NestedList = function NestedList(prefix) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!prefix) {
    throw new Error('Must supply a prefix to \'NestedList\' component.');
  }

  var defaults = {
    defaultOpen: true,
    ulClass: '',
    liClass: ''
  };
  options = (0, _assign2.default)({}, defaults, options);

  return function (WrappedComponent) {
    return function (_React$Component) {
      (0, _inherits3.default)(NestedListComponent, _React$Component);

      function NestedListComponent(props) {
        (0, _classCallCheck3.default)(this, NestedListComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NestedListComponent.__proto__ || (0, _getPrototypeOf2.default)(NestedListComponent)).call(this, props));

        _this.state = {
          expanded: options.defaultOpen
        };

        _this.toggleListExpand = _this.toggleListExpand.bind(_this);
        return _this;
      }

      (0, _createClass3.default)(NestedListComponent, [{
        key: 'toggleListExpand',
        value: function toggleListExpand() {
          this.setState({
            expanded: !this.state.expanded
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var items = this.props.items;
          var expanded = this.state.expanded;


          var ulClassList = ['list', 'nested-list', prefix + '-list'];
          if (options.ulClass) {
            ulClassList.push(options.ulClass);
          }
          if (expanded) {
            ulClassList.push('expanded');
          }

          var liClassList = ['list-item', prefix + '-list-item'];
          if (options.liClass) {
            liClassList.push(options.liClass);
          }

          return _react2.default.createElement(
            'ul',
            { className: _lodash2.default.join(ulClassList, ' ') },
            _lodash2.default.map(items, function (item, index) {
              if (item.items) {
                return _react2.default.createElement(NestedListComponent, { items: item.items });
              }
              return _react2.default.createElement(
                'li',
                { key: index, className: _lodash2.default.join(liClassList, ' ') },
                _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, item, { index: index }))
              );
            })
          );
        }
      }]);
      return NestedListComponent;
    }(_react2.default.Component);
  };
};

exports.default = NestedList;