import React from 'react';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import Toggler from 'terra-toggle';
import SafeHtml from '../safe-html/SafeHtml';
import SmartLink from '../smart-link/SmartLink';
import styles from './NavHelp.scss';

const cx = classNames.bind(styles);

class NavHelpContent extends React.Component {
  constructor() {
    super();
    this.state = ({ togglers: {} });

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(toggleIndex) {
    this.setState({
      togglers: { ...this.state.togglers, [toggleIndex]: !this.state.togglers[toggleIndex] },
    });
  }

  render() {
    const { ...customProps } = this.props;

    const contentList = customProps.helpContent.map((content, index) => {
      let contentElement;
      const isOpen = this.state.togglers[index];
      const toggleIcon = isOpen ? <IconChevronUp /> : <IconChevronDown />;

      if (content.children && content.children.length > 0) {
        contentElement = (<Button
          key={`${content.text}`}
          onClick={() => this.handleToggle(index)}
          className={cx('help-item')}
        >
          <Arrange
            className={cx('help-item-text')}
            align="stretch"
            fitStart={<div className={cx('icon-text-padding')}>{content.icon}</div>}
            fill={<div><SafeHtml text={content.text} /></div>}
            fitEnd={<div>{toggleIcon}</div>}
          />
          <Toggler isOpen={isOpen} isAnimated className={cx('toggler-padding')}>
            { content.children.map(element => (
              <p key={`${element.text}`} className={cx('toggler-content-alignment')}>
                <span className={cx('help-subitem')}>
                  <SafeHtml text={element.text} />
                </span>
              </p>))
            }
          </Toggler>
        </Button>);
      } else {
        contentElement = (
          <SmartLink
            className={cx('help-item')}
            key={content.text}
            url={content.url}
            target={content.target}
            isExternal={content.isExternal}
          >
            <Arrange
              className={cx('help-item-text')}
              align="center"
              fitStart={<div className={cx('icon-text-padding')}>{content.icon}</div>}
              fill={<div><SafeHtml text={content.text} /></div>}
            />
          </SmartLink>
        );
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
