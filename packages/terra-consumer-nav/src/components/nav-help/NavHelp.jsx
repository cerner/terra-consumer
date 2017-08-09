import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import NavHelpContent from './NavHelpContent';
import IconInfo from '../../icons/IconInfo';
import Popup from '../popup/Popup';
import navElementShape from '../../NavPropShapes';
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
};

const defaultProps = {
  help: [],
};

const translations = {
  help: 'Help',
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
    const { help, id, ...customProps } = this.props;
    const helpButton = (
      <button
        id={id}
        onClick={this.togglePopup}
        className={cx('nav-help')}
      >
        <Arrange
          fill={<div className={cx('icon')}><IconInfo /></div>}
          fitEnd={<div className={cx('button-text-padding')}>{translations.help}</div>}
          align="stretch"
        />
      </button>);

    const popupContent = <NavHelpContent helpContent={help} />;

    const popup = (<Popup
      title={translations.help}
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
        {popup}
        {helpButton}
      </div>
    );
  }

}

NavHelp.propTypes = propTypes;
NavHelp.defaultProps = defaultProps;
export default NavHelp;

