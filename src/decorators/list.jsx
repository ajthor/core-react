'use strict';

import _ from 'lodash';
import React from 'react';

const List = (prefix, options = {}) => {
  if (!prefix) {
    throw new Error('Must supply a prefix to \'List\' component.');
  }

  const defaults = {
    ulClass: '',
    liClass: ''
  };
  options = Object.assign({}, defaults, options);

  return WrappedComponent => {
    class ListComponent extends React.Component {
      render() {
        const {items} = this.props;
        const ulClassList = ['list', `${prefix}-list`];
        if (options.ulClass) {
          ulClassList.push(options.ulClass);
        }

        const liClassList = ['list-item', `${prefix}-list-item`];
        if (options.liClass) {
          liClassList.push(options.liClass);
        }

        return (
          <ul className={_.join(ulClassList, ' ')}>
            {
              _.map(items, (item, index) => (
                <li key={index} className={_.join(liClassList, ' ')}>
                  <WrappedComponent {...item} index={index}/>
                </li>
              ))
            }
          </ul>
        );
      }
    }

    ListComponent.propTypes = {
      items: React.PropTypes.object.isRequired
    };

    return ListComponent;
  };
};

export default List;
