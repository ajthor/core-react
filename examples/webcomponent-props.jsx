'use strict';

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import Promise from 'bluebird';

import React from 'react';
import ReactDOM from 'react-dom';

import Webcomponent from '../lib/react-components/webcomponent.jsx';

Promise.promisifyAll(fs);

const mapToElement = {
  // Use the attributeChangedCallback to pass along props to the component via
  // the renderComponent method. This triggers a re-render of the component,
  // where we can do something with the props using componentWillReceiveProps.
  attributeChangedCallback: function (attrName, oldVal, newVal) {
    if (attrName === 'data-path' && oldVal !== newVal) {
      this.renderComponent({filePath: newVal});
    }
  }
};

@Webcomponent('markdown-viewer', mapToElement)
class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.loadFileContents = this.loadFileContents.bind(this);
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  // Does not trigger for the initial render, so handle any received props from
  // the attributeChangedCallback here.
  componentWillReceiveProps(nextProps) {
    const {filePath} = this.props;
    if (filePath !== nextProps.filePath) {
      this.loadFileContents(nextProps.filePath)
    }
  }

  loadFileContents(filePath) {
    const contents = fs.readFileAsync(filePath, 'utf8');

    return Promise.resolve(contents)
      .then(contents => {
        // Do something with the contents.
        // I don't know, maybe parse them or something.
        this.setState({
          loaded: true,
          contents
        });
      });
  }

  renderMarkdown() {
    if (this.state.loaded) {
      return (
        <div>{this.state.contents}</div>
      );
    }
  }

  render() {
    // Anything rendered inside here is rendered inside the shadow DOM.
    return (
      <div className="markdown-container">
        {this.renderMarkdown()}
      </div>
    );
  }
}

export default MarkdownViewer;
