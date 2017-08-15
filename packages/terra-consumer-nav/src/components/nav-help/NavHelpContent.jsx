import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import Toggler from 'terra-toggle';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import navElementShape from '../../NavPropShapes';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A list of items to be displayed in help menu/popup/modal.
   */
  helpContent: PropTypes.arrayOf(PropTypes.shape(
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
    const contentList = helpContent.map((content, i) => {
      const contentElement = content.children.length > 0 ?
      (<Button key={`${content.text}`} onClick={this.handleToggle} className={i > 0 ? cx('help-item', 'help-item-border') : cx('help-item')}>
        <div className={cx('help-item-text')}>
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
      </Button>
      )
      :
      (
        <Button key={`${content.text}`} href={content.uri} className={i > 0 ? cx('help-item', 'help-item-border') : cx('help-item')} >
          <div className={cx('help-item-text')}>
            <Arrange
              align="center"
              fitStart={<svg className={cx('icon')}>{content.icon}</svg>}
              fill={<div className={cx('item-text-padding')}>{content.text}</div>}
            />
          </div>
        </Button>
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
