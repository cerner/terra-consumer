import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import IconInfo from '../../icons/IconInfo';
import Modal from '../modal/Modal';
import navElementShape from '../../NavPropShapes';
import NavHelpContent from './NavHelpContent';
import Popup from '../popup/Popup';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of items to be displayed as help menu/popup.
   */
  help: PropTypes.arrayOf(PropTypes.shape(
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
  id: PropTypes.string.isRequired,

  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  help: [],
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
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { help, id, intl, ...customProps } = this.props;
    const helpButton = (
      <Button
        id={id}
        onClick={this.togglePopup}
        className={cx('nav-help')}
      >
        <Arrange
          fill={<div className={cx('icon')}><IconInfo /></div>}
          fitEnd={<div className={cx('button-text-padding')}><FormattedMessage id="nav_help" /></div>}
          align="stretch"
        />
      </Button>);

    const popupContent = <NavHelpContent helpContent={help} />;

    const defaultElement = (<Modal
      isModalOpen={this.state.isOpen}
      title={intl.formatMessage({ id: 'nav_help' })}
      content={popupContent}
      closeModal={this.togglePopup}
    />);

    const popup = (<Popup
      title={intl.formatMessage({ id: 'nav_help' })}
      hasHeader
      isOpen={this.state.isOpen}
      targetRef={() => document.getElementById(id)}
      closePopup={this.togglePopup}
      contentWidth="320"
      contentHeight="240"
      classNameContent={cx('popup-content')}
      contentAttachment="middle center"
      popupContent={popupContent}
    />);

    return (

      <div {...customProps}>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
        {!this.state.isOpen && helpButton}
      </div>
    );
  }

}

NavHelp.propTypes = propTypes;
NavHelp.defaultProps = defaultProps;
export default injectIntl(NavHelp);

