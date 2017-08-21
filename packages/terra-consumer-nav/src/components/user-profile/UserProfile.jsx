import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import TerraPopup from 'terra-popup';
import ResponsiveElement from 'terra-responsive-element';
import Modal from '../modal/Modal';
import navElementShape from '../../NavPropShapes';
import ProfileLinks from './ProfileLinks';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * User name to be displayed in profile.
   */
  name: PropTypes.string.isRequired,
  /**
   * Avatar to be displayed in profile.
   */
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * A unique id set to the profile popup button that will be referred in profile popup.
   */
  id: PropTypes.string.isRequired,
  /**
   * The path signout button would redirect to.
   */
  signoutUrl: PropTypes.string.isRequired,
  /**
   * The content of the each profile items.
   */
  profileLinks: PropTypes.arrayOf(PropTypes.shape(
    navElementShape)),
  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  profile: {
    avatar: null,
    profileLinks: [],
  },
};


class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      showModal: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  togglePopup() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleModal() {
    this.setState({ isOpen: false, showModal: !this.state.showModal });
  }

  render() {
    const { name, avatar, id, signoutUrl, profileLinks, intl, ...customProps } = this.props;

    const signout = (
      <Button
        className={cx('link', 'signout-border')}
        href={signoutUrl}
      >
        <FormattedMessage id="nav_signout" />
      </Button>);

    const defaultElement = (
      <Modal
        isModalOpen={this.state.isOpen}
        title={intl.formatMessage({ id: 'nav_profile_title' })}
        content={
          <div>
            <ProfileLinks
              linkItems={profileLinks}
            />
            {signout}
          </div>
        }
        closeModal={this.togglePopup}
      />);

    const popup = (
      <TerraPopup
        isOpen={this.state.isOpen}
        onRequestClose={this.togglePopup}
        targetRef={() => document.getElementById(id)}
        contentWidth="240"
        contentHeight="240"
        contentAttachment="top right"
        isArrowDisplayed
      >
        <div>
          <ProfileLinks linkItems={profileLinks} />
          {signout}
        </div>
      </TerraPopup>
      );

    return (

      <div {...customProps} className={cx('profile')}>
        <Button className={cx('popup-button')} onClick={() => this.togglePopup()}>
          <Arrange
            fitStart={<svg className={cx('icon')}>{avatar}</svg>}
            fill={<div className={cx('profile-text-padding')}>{name}</div>}
            fitEnd={<IconEllipses className={cx('icon')} id={id} />}
            align="center"
          />
        </Button>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default injectIntl(UserProfile);
