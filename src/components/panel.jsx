'use strict';
//
// Panel
//
// The panel element is just a container for other react components.
// As such, it is a permanent part of the page's schema and should not depend
// on the state of the application whatsoever. The sole job of panels is to
// organize code within the application and apply layout styles to the
// components within or to have a (usually flexbox) style that it uses.
import React from 'react';

class Panel extends React.Component {
  render() {
    const {position, prefix} = this.props;
    const panelProps = {
      className: `${position}`
    };

    return React.createElement(`${prefix ? `${prefix}-` : ''}panel`, panelProps, React.Children.map(this.props.children, child => {
      const childProps = {};
      if (child.type === Panel) {
        childProps.prefix = prefix;
      }
      return React.cloneElement(child, childProps);
    }));
  }
}

Panel.propTypes = {
  position: React.PropTypes.string,
  prefix: React.PropTypes.string,
  children: React.PropTypes.node
};

export default Panel;
