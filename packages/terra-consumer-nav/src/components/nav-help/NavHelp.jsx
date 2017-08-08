import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import NavHelpContent from './NavHelpContent';
import IconInfo from '../../icons/IconInfo';
import Popup from '../Popup/Popup';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  help: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
    target: PropTypes.string,
    text: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    children: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
      text: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      children: PropTypes.array,
    })),
  })),
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
    const { help, ...customProps } = this.props;
    const helpButton = (
      <button
        id="nav-help-button"
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
      targetRef={() => document.getElementById('nav-help-button')}
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

