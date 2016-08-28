'use strict';

import _ from 'lodash';
import React from 'react';

const NestedList = (prefix, options = {}) => {
  if (!prefix) {
    throw new Error('Must supply a prefix to \'NestedList\' component.');
  }

  const defaults = {
    defaultOpen: true,
    ulClass: '',
    liClass: ''
  };
  options = Object.assign({}, defaults, options);

  return function(WrappedComponent) {
    return class NestedListComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          expanded: options.defaultOpen
        };

        this.toggleListExpand = this.toggleListExpand.bind(this);
      }

      toggleListExpand() {
        this.setState({
          expanded: !this.state.expanded
        });
      }

      render() {
        const {items} = this.props;
        const {expanded} = this.state;

        const ulClassList = ['list', 'nested-list', `${prefix}-list`];
        if (options.ulClass) {
          ulClassList.push(options.ulClass);
        }
        if (expanded) {
          ulClassList.push('expanded');
        }

        const liClassList = ['list-item', `${prefix}-list-item`];
        if (options.liClass) {
          liClassList.push(options.liClass);
        }

        return (
          <ul className={_.join(ulClassList, ' ')}>
            {
              _.map(items, (item, index) => {
                if (item.items) {
                  return (
                    <NestedListComponent items={item.items} />
                  );
                }
                return (
                  <li key={index} className={_.join(liClassList, ' ')}>
                    <WrappedComponent {...item} index={index} />
                  </li>
                );
              })
            }
          </ul>
        );
      }
    };
  };
};

export default NestedList;
