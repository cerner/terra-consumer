import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toggler from 'terra-toggle';
import Arrange from 'terra-arrange';
import OutlineChevronDown from '../../icons/OutlineChevronDown';
import OutlineChevronUp from '../../icons/OutlineChevronUp';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  navItem: PropTypes.string,
  navIcon: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.element,
    ),
  navSubItems: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.oneOfType(
          PropTypes.string,
          PropTypes.element,
          ),
        uri: PropTypes.string,
      }),
    ),
  ),
};

const defaultProps = {
  navItem: '',
  navSubItems: '',
  navIcon: '',
};

class HelpToggleItem extends React.Component {
  constructor() {
    super();
    this.state = ({ isCollapsed: true });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    const { navItem, navSubItems, navIcon, ...customProps } = this.props;
    const toggleIcon = this.state.isCollapsed ? <OutlineChevronDown /> : <OutlineChevronUp />;
    let toggleContent;
    if (!Array.isArray(navSubItems)) {
      toggleContent = <p style={{ pointerEvents: 'none' }}>navSubItems</p>;
    }
    let toggleContentList;
    if (Array.isArray(navSubItems)) {
      toggleContentList = navSubItems.map((item) => {
        return (<a onClick={() => window.location = item.uri} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Arrange
            align="stretch"
            fitStart={<div className={cx('help-icon')}>{item.icon}</div>}
            fill={<div style={{ paddingLeft: '10px', textDecoration: 'none' }}>{item.text}</div>}
          />
        </a>);
      });
    }

    return (
      <div className={cx('nav-help-item')} {...customProps}>
        <a onClick={this.handleOnClick}>
          <Arrange
            align="stretch"
            fitStart={<div className={cx('help-icon')}>{navIcon}</div>}
            fill={<div role="button" style={{ paddingLeft: '10px' }}>{navItem}</div>}
            fitEnd={toggleIcon}
          />
        </a>
        <Toggler isOpen={!this.state.isCollapsed} isAnimated style={{ padding: 0 }}>
          <div>{toggleContent}</div>
          <div className={cx('nav-help-subitem')}>{toggleContentList}</div>
        </Toggler>
      </div>
    );
  }
}

HelpToggleItem.propTypes = propTypes;
HelpToggleItem.defaultProps = defaultProps;
export default HelpToggleItem;
