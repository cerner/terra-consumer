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
    this.state = ({ isOpen: true });

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { helpContent, ...customProps } = this.props;
    const toggleIcon = this.state.isOpen ? <IconChevronDown className={cx('icon')} /> : <IconChevronUp className={cx('icon')} />;
    const contentList = helpContent.map((content) => {
      const contentElement = content.children.length > 0 ?
      (<div key={`${content.text}`} className={cx('help-item')}>
        <a onClick={this.handleToggle}>
          <Arrange
            align="stretch"
            fitStart={<div className={cx('icon')}>{content.icon}</div>}
            fill={<div className={cx('padding-left-small')}>{content.text}</div>}
            fitEnd={<div className={cx('icon')}>{toggleIcon}</div>}
          />
        </a>
        <Toggler isOpen={!this.state.isOpen} isAnimated className={cx('padding-none')}>
          { content.children.map((element) => {
            const helpInfo = (<div key={`${element.text}`} className={cx('help-subitem', 'padding-top-md')}>{element.text}</div>);
            return helpInfo;
          })
          }
        </Toggler>
      </div>
      )
      :
      (<div key={`${content.text}`} className={cx('help-item')}>
        <a onClick={() => window.location = content.uri}>
          <Arrange
            align="center"
            fitStart={<div className={cx('icon')}>{content.icon}</div>}
            fill={<div className={cx('padding-left-small')}>{content.text}</div>}
          />
        </a>
      </div>
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
