import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Overlay from 'terra-overlay';
import ResponsiveElement from 'terra-responsive-element';
import HelpToggleItem from './HelpToggleItem';
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
  help: [{}],
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
        <svg className={cx('help-icon')}><OutlineInfo /></svg>
        <span style={{ paddingLeft: '6px' }}>{translations.help}</span>
      </button>);

    const popupContent = help.map((navItem) => {
      const currentItem = navItem.children.length > 0 ?
        (<HelpToggleItem
          navItem={navItem.text}
          navSubItems={navItem.children}
          navIcon={navItem.icon}
        />)
        :
        (<a href={navItem.uri} onClick={() => window.location = navItem.uri} className={cx('nav-help-item')} style={{ padding: '0px' }}>
          <Arrange
            className={cx('nav-help-item')}
            align="stretch"
            fitStart={<div className={cx('help-icon')}>{navItem.icon}</div>}
            fill={<div style={{ paddingLeft: '10px' }}>{navItem.text}</div>}
          />
        </a>);

      return (
        <div key={`${navItem.text}`} className={cx('divider-top')}>
          {currentItem}
        </div>
      );
    });


    const defaultElement = (
      <Overlay isOpen={this.state.isOpen} backgroundStyle="dark" isScrollable>
        <div className={cx('help-modal-header-mobile')}>
          <Arrange
            fitStart={<div className={cx('help-modal-title')}>{translations.help}</div>}
            fitEnd={<button className={cx('modal-close-button-mobile')} onClick={() => this.closePopup()}>{<div className={cx('modal-close-icon')}><CloseIcon /></div>}</button>}
            align="center"
          />
        </div>
        <div className={cx('help-modal-mobile')}>
          <div>
            {popupContent}
          </div>
        </div>
      </Overlay>);


    const large = (
      <Overlay isOpen={this.state.isOpen} backgroundStyle="dark" isScrollable>
        <div className={cx('help-modal-large')}>
          <div>
            <div className={cx('help-modal-header-large')}>
              <Arrange
                fitStart={<div style={{ paddingLeft: '15px' }} className={cx('help-modal-title')}>{translations.help}</div>}
                fitEnd={<button style={{ paddingRight: '15px' }}className={cx('modal-close-button-large')} onClick={() => this.closePopup()}>{<div className={cx('modal-close-icon')}><CloseIcon /></div>}</button>}
                align="center"
              />
            </div>
            {popupContent}
          </div>
        </div>
      </Overlay>);

    return (
      <div {...customProps}>
        {helpButton}
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} large={large} />
      </div>
    );
  }

}

NavHelp.propTypes = propTypes;
NavHelp.defaultProps = defaultProps;
export default NavHelp;

