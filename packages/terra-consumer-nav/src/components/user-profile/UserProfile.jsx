import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button'
import Arrange from 'terra-arrange';
import Popup from 'terra-popup';
import Overlay from 'terra-overlay';
import ResponsiveElement from 'terra-responsive-element';
import CloseIcon from '../../icons/CloseIcon';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const translations = {
  signout: 'Sign Out',
  settings: 'Settings'
};
const propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      ]).isRequired,
    avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      ]),
    signoutUrl: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
      text: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        ]),
       }),
    ),
})
};

const defaultProps = {
  profile: {
    avatar: null,
    links: [],
  },
};


class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({isOpen: true});
  }

  closePopup() {
    this.setState({isOpen: false});
  }

  render() {
    const { profile,...customProps} = this.props;
    
    const profileLinks = profile.links;
    let links; 
    if(profileLinks.length > 0) {
      links = profileLinks.map((item,i) =>
      <div key={i} style={{ padding:'20px'}}>
       { profileLinks.length > 0 &&
         <a href={item.uri} onClick={()=> window.location = item.uri }  className={cx('profile-link')} style={{padding:'0px'}}>
           <Arrange
             align="stretch"
             fitStart={<div className={cx('profile-icon')}>{item.icon}</div>}
             fill={<div style={{paddingLeft:'10px'}}>{item.text}</div>}
            />
          </a>
       }
       </div>);
    } 

    const defaultElement = (<Overlay isOpen={this.state.isOpen} onRequestClose={this.closePopup} backgroundStyle='dark'>
          <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
            <span>
            <div className={cx('profile-modal-title')}>{translations.settings}</div>
            <a><div className={cx('modal-close-button')}><CloseIcon/></div></a>
            </span>
          </div>
          <div className={cx('profile-modal')}>
          {(<div>  
           {links}
           <div className={cx('divider-top')} style={{ padding:'20px'}}>
             <a className={cx('profile-link')}href={profile.signoutUrl} onClick={()=> window.location = profile.signoutUrl} style={{padding:'0px'}}>
             {translations.signout}
             </a>
          </div>
          </div>)}
          </div>
        </Overlay>);

    const large = (<Popup
          isOpen={this.state.isOpen}
          onRequestClose={this.closePopup}
          targetRef={() => document.getElementById('profile-link-icon')}
          isArrowDisplayed
          contentWidth="320"
          contentHeight="640"
          contentAttachment='top right'
         >
         {<div>  
           {links}
           <div className={cx('divider-top')} style={{ padding:'20px'}}>
             <a className={cx('profile-link')}href={profile.signoutUrl} onClick={()=> window.location = profile.signoutUrl} style={{padding:'0px'}}>
             {translations.signout}
             </a>
          </div>
          </div>
        }
         </Popup>);
    

    return(
       <div {...customProps}>
          <Arrange
            className={cx('profile')}
            fitStart={<svg className={cx('profile-icon')}>{profile.avatar}</svg> }
            fill={<div style={{paddingLeft:'10px'}}>{profile.name}</div>}
            fitEnd={<a id='profile-link-icon' onClick={this.openPopup}><div className={cx('profile-icon')}>{profile.icon}</div></a>}
            align="center"
          />
          <ResponsiveElement responsiveTo='window' defaultElement={defaultElement} large={large} />
       </div>
      );
  }

}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;