'use strict';
//
// App Component
//
import React from 'react';
import AppPanel from './panel.jsx';

class App extends React.Component {
  render() {
    const {prefix} = this.props;
    return React.createElement(`${prefix ? `${prefix}-` : ''}app`, null, React.Children.map(this.props.children, child => {
      const childProps = {};
      if (child.type === AppPanel) {
        childProps.prefix = prefix;
      }
      return React.cloneElement(child, childProps);
    }));
  }
}

App.propTypes = {
  prefix: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

export default App;
