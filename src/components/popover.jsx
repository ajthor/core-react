'use strict';

import _ from 'lodash';
import React from 'react';

function Popover(WrappedComponent) {
  return class PopoverComponent extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };

      this.openPopover = this.openPopover.bind(this);
      this.closePopover = this.closePopover.bind(this);
    }

    openPopover(event) {
      if (super.openPopover) {
        super.openPopover(event);
      }
      this.setState({
        isOpen: true
      });
    }

    closePopover(event) {
      if (super.closePopover) {
        super.closePopover(event);
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
      document.addEventListener(`${name}/open`, this.openPopover, true);
      document.addEventListener(`${name}/close`, this.closePopover, true);
    }

    // Remove the event listeners from the 'componentWillUnmount' method.
    componentWillUnmount() {
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
      // Get component name.
      const name = WrappedComponent.displayName || WrappedComponent.name;
      document.removeEventListener(`${name}/open`, this.openPopover);
      document.removeEventListener(`${name}/close`, this.closePopover);
    }

    render() {
      const popoverClassList = ['popover', 'overlay'];
      if (this.state.visible) {
        popoverClassList.push('open');
      }

      return (
        <div className={_.join(popoverClassList, ' ')}>
          {super.render()}
        </div>
      );
    }
  };
}

export default Popover;
