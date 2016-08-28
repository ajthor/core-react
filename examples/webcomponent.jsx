'use strict';
//
// Webcomponent Decorator
//
// usage: use the decorator with
//
// @webcomponent('component-name')
// class MyReactTemplateComponent extends React.Component {
//   ...
//
// above your react component declaration.
//
// Anything inside the react component serves as the template for the
// component itself.
//
// Unfortunately, any props you try to pass to the web component will not be
// passed down to the React template components inside automatically. This goes
// against the concept of webcomponents as encapsulated, small, *elements*.
//
// The benefit of using this decorator is to allow you to use React to handle
// the component structure and use state within the component itself. You can
// pass props down through the encapsulated React tree, but won't be able to
// pass them through the shadow DOM barrier. To handle passing data between
// this barrier, consider using custom events.
//
// If you absolutely need to pass props down to the child component, you will
// need to make use of the `attributeChangedCallback` lifecycle method for
// webcomponents. Inside, you will need to trigger a re-render of the web
// component using `renderComponent({props})`, which will wipe out any DOM
// changes you have made since the first render.

import React from 'react';
import webcomponent from '../lib/react-components/webcomponent.jsx';

const mapToElement = {
  createdCallback: function () {
    console.log('inside the createdCallback function');
    this.testFunction();
    if (this.attributeChangedCallback) {
      console.log('attributeChangedCallback exists. Pass props down to component from there using \'this.renderComponent\'.');
    }
  },

  testFunction: function () {
    console.log('inside the test function');
  }
};

const style = `
.stat-block {
  background-color: red;
}
`;

class MiniComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div onClick={this.handleClick}>{this.state.toggle ? 'yes' : 'no'}</div>
      </div>
    );
  }
}

@webcomponent('custom-webcomponent', mapToElement, style)
class CustomWebcomponent extends React.Component {
  render() {
    return (
      <div>
        <div>Webcomponent</div>
        <MiniComponent name={"Joe Bags"} />
      </div>
    );
  }
}

export default CustomWebcomponent;
