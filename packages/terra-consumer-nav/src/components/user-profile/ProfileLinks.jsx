import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import Toggler from 'terra-toggle';
import navElementShape from '../../NavPropShapes';
import ProfileLink from './ProfileLink';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of nav items to be displayed on the user profile/ settings menu/popup.
   */
  linkItems: PropTypes.arrayOf(
    PropTypes.shape(
      navElementShape,
      {
        subItems: PropTypes.arrayOf(PropTypes.shape(navElementShape)),
      },
    ),
  ),
};

const defaultProps = {
  linkItems: [],
};

class ProfileLinks extends React.Component {
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
    const { linkItems, ...customProps } = this.props;

    const profileLinks = linkItems.map((linkItem, index) => {
      if (linkItem.subItems && linkItem.subItems.length > 0) {
        const isOpen = this.state.togglers[index];
        const toggleIcon = isOpen ? <IconChevronUp /> : <IconChevronDown />;
        return (
          <div key={linkItem.text} className={cx(isOpen && 'open')}>
            <button onClick={() => { this.handleToggle(index); }} className={cx('link', 'toggler-wrapper')}>
              <Arrange
                align="stretch"
                fill={<div>{linkItem.text}</div>}
                fitEnd={<div>{toggleIcon}</div>}
              />
            </button>
            <Toggler isOpen={isOpen} isAnimated className={cx('toggler')}>
              {linkItem.subItems.map(subItem => (<ProfileLink key={subItem.text} {...subItem} />))}
            </Toggler>
          </div>
        );
      }
      return (
        <ProfileLink
          key={linkItem.text}
          url={linkItem.url}
          text={linkItem.text}
          target={linkItem.target}
          isExternal={linkItem.isExternal}
        />);
    });

    return (
      <div {...customProps}>
        {profileLinks}
      </div>
    );
  }
}

ProfileLinks.propTypes = propTypes;
ProfileLinks.defaultProps = defaultProps;

export default ProfileLinks;
