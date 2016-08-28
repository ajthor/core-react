'use strict';
//
// Panel
//
// The panel element is just a container for other react components.
// As such, it is a permanent part of the page's schema and should not depend
// on the state of the application whatsoever. The sole job of panels is to
// organize code within the application and apply layout styles to the
// components within or to have a (usually flexbox) style that it uses.
import {join} from 'lodash';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  render() {
    const {children, position} = this.props;
    const panelClasses = [`${position}`];
    if (this.state.collapsed) {
      panelClasses.push('collapsed');
    }

    return (
      <app-panel class={join(panelClasses, ' ')}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {})
        )}
      </app-panel>
    );
  }
}

export default Panel;
