import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Grid from 'terra-grid';
import Popup from 'terra-popup';
import NavHelpContent from './NavHelpContent';
import OutlineInfo from '../../icons/OutlineInfo';
import CloseIcon from '../../icons/CloseIcon';
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
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({ isOpen: true });
  }

  closePopup() {
    this.setState({ isOpen: false });
  }

  render() {
    const { help, ...customProps } = this.props;
    const helpButton = (
      <button
        id="nav-help-button"
        onClick={this.openPopup}
        className={cx('nav-help')}
      >
        <Arrange
          fitStart={<svg className={cx('help-icon')}><OutlineInfo /></svg>}
          fitEnd={<div className={cx('padding-left-xsmall')}>{translations.help}</div>}
          align="stretch"
        />
      </button>);

    const popupContent = <NavHelpContent helpContent={help} />;

    const popup = (
      <Popup
        isOpen={this.state.isOpen}
        onRequestClose={this.closePopup}
        targetRef={() => document.getElementById('nav-help-button')}
        contentWidth="320"
        contentHeight="240"
        classNameContent="popup-content"
        contentAttachment="middle center"
      >
        <div>
          <Grid className={cx('modal-header')}>
            <Grid.Row>
              <Grid.Column col={10}>
                <div className={cx('modal-title')}>{translations.help}</div>
              </Grid.Column>
              <Grid.Column className={cx('text-align-right')} col={2}>
                <button className={cx('close-button')} onClick={() => this.closePopup()}>{<div className={cx('close-icon')}><CloseIcon /></div>}</button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {popupContent}
        </div>
      </Popup>);

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

