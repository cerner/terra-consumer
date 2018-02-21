/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

class SimpleModal extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Button text={this.props.text} onClick={this.handleToggle} />
        {this.state.isOpen &&
          <div style={{
 position: 'fixed', left: 0, right: 0, bottom: 0, top: 0, backgroundColor: '#fff',
}}
          >
            <Button variant="link" text="Close" onClick={this.handleToggle} style={{ position: 'fixed', top: 0, right: 0 }} />
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

SimpleModal.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
export default SimpleModal;
