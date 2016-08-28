'use strict';

import path from 'path';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

//
// Webcomponent Decorator
// ---------------------------------------
const Webcomponent = (name, mapToElement = {}, options = {}) => {
  if (!name) {
    throw new Error('Must supply a name for the webcomponent.');
  }

  const defaults = {
    shadowRoot: false,
    stylesheets: []
  };
  options = Object.assign({}, defaults, options);

  return function (ReactComponent) {
    // Webcomponent which uses React internally.
    class WrappedWebcomponent extends HTMLElement {
      createdCallback(...args) {
        if (options.shadowRoot) {
          // Create shadow DOM.
          this.createShadowRoot();
        }

        // Append React component to webcomponent.
        this.renderComponent();

        this.renderStyles();

        // Invoke custom implementation of createdCallback, without overriding
        // the default implementation.
        if (mapToElement && mapToElement.createdCallback) {
          mapToElement.createdCallback.apply(this, ...args);
        }
      }

      renderComponent({...args}) {
        const mountPoint = this.shadowRoot || this;
        ReactDOM.render(
          <ReactComponent {...args}/>,
          mountPoint
        );
      }

      renderStyles() {
        const mountPoint = this.shadowRoot || this;
        if (options.stylesheets) {
          const styleElement = document.createElement('style');
          options.stylesheets.forEach(sheet => {
            // styleElement.textContent += `@import "${path.resolve(__dirname, sheet)}";\n`;
            styleElement.textContent += `@import "${sheet}";\n`;
          });
          mountPoint.appendChild(styleElement.cloneNode(true));
        }
      }
    }

    // Merge supplied prototype in mapToElement into HTMLElement.
    for (const key in mapToElement) {
      if ({}.hasOwnProperty.call(mapToElement, key)) {
        WrappedWebcomponent.prototype[key] = mapToElement[key];
      }
    }

    // Register component in DOM.
    document.registerElement(name, {prototype: WrappedWebcomponent.prototype});
    // customElements.define(name, WrappedWebcomponent);

    // React component rendering a webcomponent.
    return class ReactWebComponent extends React.Component {
      render() {
        return React.createElement(name, {...this.props});
      }
    };
  };
};

export default Webcomponent;
