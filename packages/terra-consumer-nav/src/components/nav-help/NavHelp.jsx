import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import Modal from '../modal/Modal';
import navElementShape from '../../NavPropShapes';
import NavHelpContent from './NavHelpContent';
import NavHelpPopup from './NavHelpPopup';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of items to be displayed as help menu/popup.
   */
  helpNavs: PropTypes.arrayOf(PropTypes.shape(
    navElementShape,
    {
      children: PropTypes.arrayOf(PropTypes.shape(
      navElementShape,
        {
          children: PropTypes.array,
        },
      )),
    },
  )),
  /**
   * A unique id set to the help button that will be referred in help menu/popup .
   */
  id: PropTypes.string,
  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  id: 'terra-consumer-nav-help-button',
  helpNavs: [],
};

class NavHelp extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { helpNavs, id, intl, ...customProps } = this.props;
    const helpText = intl.formatMessage({ id: 'Terra.Consumer.NavHelp.help' });
    const helpButton = (
      <button
        id={id}
        onClick={this.togglePopup}
        className={cx('nav-help')}
      >
        <Arrange
          fill={<IconOutlineQuestionMark />}
          fitEnd={<div className={cx('button-text-padding')}>{helpText}</div>}
          align="stretch"
        />
      </button>
    );

    const popupContent = <NavHelpContent helpContent={helpNavs} />;

    const defaultElement = (
      <Modal
        isModalOpen={this.state.isOpen}
        title={helpText}
        onRequestClose={this.togglePopup}
      >
        {popupContent}
      </Modal>
    );

    const popup = (
      <NavHelpPopup
        title={helpText}
        hasHeader
        isOpen={this.state.isOpen}
        targetRef={() => document.getElementById(id)}
        closePopup={this.togglePopup}
        contentWidth="320"
        contentHeight="240"
        classNameContent={cx('popup-content')}
        contentAttachment="middle center"
        popupContent={popupContent}
        rowCount={helpNavs.length}
      />
    );

    return (
      <div {...customProps}>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
        {helpButton}
      </div>
    );
  }
}

NavHelp.propTypes = propTypes;
NavHelp.defaultProps = defaultProps;

export default injectIntl(NavHelp);
