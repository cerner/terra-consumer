import React from 'react';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import Toggler from 'terra-toggle';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

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
    const { ...customProps } = this.props;
    const toggleIcon = this.state.isOpen ? <IconChevronUp className={cx('icon')} /> : <IconChevronDown className={cx('icon')} />;

    const contentList = customProps.helpContent.map((content, i) => {
      let contentElement;
      if (content.children.length > 0) {
        contentElement = (<Button
          key={`${content.text}`}
          onClick={this.handleToggle}
          className={i > 0 ? cx('help-item', 'help-item-border') : cx('help-item')}
        >
          <Arrange
            className={cx('help-item-text')}
            align="stretch"
            fitStart={<div className={cx('icon')}>{content.icon}</div>}
            fill={<div className={cx('item-text-padding')}>{content.text}</div>}
            fitEnd={<div className={cx('icon')}>{toggleIcon}</div>}
          />
          <Toggler isOpen={this.state.isOpen} isAnimated className={cx('toggler-padding')}>
            { content.children.map(element => (
              <p key={`${element.text}`} className={cx('toggler-content-alignment')}>
                <span className={cx('help-subitem')}>
                  {element.text}
                </span>
              </p>))
            }
          </Toggler>
        </Button>);
      } else {
        contentElement = (<Button key={`${content.text}`} href={content.url} className={i > 0 ? cx('help-item', 'help-item-border') : cx('help-item')} >
          <Arrange
            className={cx('help-item-text')}
            align="center"
            fitStart={<div className={cx('icon')}>{content.icon}</div>}
            fill={<div className={cx('item-text-padding')}>{content.text}</div>}
          />
        </Button>);
      }

      return contentElement;
    });

    return (
      <div>
        {contentList}
      </div>
    );
  }
}

export default NavHelpContent;
