'use strict';

import _ from 'lodash';
import React from 'react';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
  }

  openTooltip(event) {
    if (super.openTooltip) {
      super.openTooltip(event);
    }
    this.setState({
      isOpen: true
    });
  }

  closeTooltip(event) {
    if (super.closeTooltip) {
      super.closeTooltip(event);
    }
    this.setState({
      isOpen: false
    });
  }

  // Add the event listeners to the 'componentDidMount' method.
  componentDidMount() {
    if (super.componentDidMount) {
      super.componentDidMount();
    }
    // Get component name.
    const name = WrappedComponent.displayName || WrappedComponent.name;

    // Set up event listeners.
    document.addEventListener(`${name}/open`, this.openTooltip, true);
    document.addEventListener(`${name}/close`, this.closeTooltip, true);
  }

  // Remove the event listeners from the 'componentWillUnmount' method.
  componentWillUnmount() {
    if (super.componentWillUnmount) {
      super.componentWillUnmount();
    }
    // Get component name.
    const name = WrappedComponent.displayName || WrappedComponent.name;
    document.removeEventListener(`${name}/open`, this.openTooltip);
    document.removeEventListener(`${name}/close`, this.closeTooltip);
  }

  render() {
    const tooltipClassList = ['tooltip', 'overlay'];
    if (this.state.visible) {
      tooltipClassList.push('open');
    }

    return (
      <div role="tooltip" className={_.join(tooltipClassList, ' ')}>
        {super.render()}
      </div>
    );
  }
}

export default Tooltip;
