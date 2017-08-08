import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toggler from 'terra-toggle';
import Arrange from 'terra-arrange';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  helpContent: PropTypes.arrayOf(PropTypes.shape({
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
  helpContent: [],
};

class NavHelpContent extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { helpContent, ...customProps } = this.props;
    const toggleIcon = this.state.isOpen ? <IconChevronUp className={cx('icon')} /> : <IconChevronDown className={cx('icon')} />;
    const contentList = helpContent.map((content) => {
      const contentElement = content.children.length > 0 ?
      (<a key={`${content.text}`} onClick={this.handleToggle} href="#info" className={cx('link-text-style')}>
        <div className={cx('help-item')}>
          <Arrange
            align="stretch"
            fitStart={<div className={cx('icon')}>{content.icon}</div>}
            fill={<div className={cx('item-text-padding')}>{content.text}</div>}
            fitEnd={<div className={cx('icon')}>{toggleIcon}</div>}
          />
          <Toggler isOpen={this.state.isOpen} isAnimated className={cx('toggler-padding')}>
            { content.children.map(element => (
              <div key={`${element.text}`} className={cx('help-subitem', 'toggler-content-padding')}>{element.text}</div>
              ))
            }
          </Toggler>
        </div>
      </a>
      )
      :
      (
        <a key={`${content.text}`} onClick={() => { window.location = content.uri; }} href="content.uri" className={cx('link-text-style')} >
          <div className={cx('help-item')}>
            <Arrange
              align="center"
              fitStart={<div className={cx('icon')}>{content.icon}</div>}
              fill={<div className={cx('item-text-padding')}>{content.text}</div>}
            />
          </div>
        </a>
      );
      return contentElement;
    });

    return (
      <div {...customProps}>
        {contentList}
      </div>
    );
  }
}

NavHelpContent.propTypes = propTypes;
NavHelpContent.defaultProps = defaultProps;
export default NavHelpContent;
