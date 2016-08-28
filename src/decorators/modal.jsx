'use strict';

import _ from 'lodash';
import React from 'react';

const Modal = options => {
  const defaults = {
    type: 'center'
  };
  options = Object.assign({}, defaults, options);

  return WrappedComponent => {
    class ModalComponent extends WrappedComponent {
      constructor(props) {
        super(props);
        // Bind functions to this.
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
      }

      handleKeyDown(event) {
        if (super.handleKeyDown) {
          super.handleKeyDown(event);
        }
        // Close on 'Escape'.
        if (event.key === 'Escape') {
          this.closeModal();
        }
      }

      openModal(event) {
        if (super.openModal) {
          super.openModal(event);
        }
        this.setState({
          isOpen: true,
          ...event.detail
        });
      }

      closeModal(event) {
        if (super.closeModal) {
          super.closeModal(event);
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
        window.document.addEventListener(`${name}/open`, this.openModal, true);
        document.addEventListener(`${name}/close`, this.closeModal, true);
      }

      // Remove the event listeners from the 'componentWillUnmount' method.
      componentWillUnmount() {
        if (super.componentWillUnmount) {
          super.componentWillUnmount();
        }
        // Get component name.
        const name = WrappedComponent.displayName || WrappedComponent.name;
        document.removeEventListener(`${name}/open`, this.openModal);
        document.removeEventListener(`${name}/close`, this.closeModal);
      }

      render() {
        const modalClassList = ['modal', 'overlay', `modal-${options.type}`];
        if (this.state && this.state.isOpen) {
          modalClassList.push('open');
        }

        return (
          <modal
            role="dialog"
            type={`${options.type}`}
            className={_.join(modalClassList, ' ')}
            onKeyDown={this.handleKeyDown}
            >
            {super.render()}
          </modal>
        );
      }
    }

    return ModalComponent;
  };
};

export default Modal;
