import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button'
import Arrange from 'terra-arrange';
import Popup from 'terra-popup';
import Modal from 'terra-modal';
import HelpToggleItem from './HelpToggleItem';
import OutlineInfo from '../../icons/OutlineInfo';
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

const defaultProps ={
  help:[{}],
};

const translations = {
  help: 'Help'
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
    this.setState({isOpen: true});
  }

  closePopup() {
    this.setState({isOpen: false});
  }

  render() {
    const { help,...customProps} = this.props;
    
    const helpButton = (<Button
      id='nav-help-button' 
      onClick={this.openPopup}
      className={cx('nav-help')}
      icon={<svg className={cx('help-icon')} style={{paddingRight: '6px'}}><OutlineInfo /></svg>}
      text={translations.help}
      />);

    
    const popupContent = help.map((navItem,i) =>
      <div key={i} className={cx('divider-top')}>
       { navItem.children.length === 0 &&
         <a href={navItem.uri} onClick={()=> window.location = navItem.uri }  className={cx('nav-help-item')} style={{padding:'0px'}}>
           <Arrange
             className={cx('nav-help-item')}
             align="stretch"
             fitStart={<div className={cx('help-icon')}>{navItem.icon}</div>}
             fill={<div style={{paddingLeft:'10px'}}>{navItem.text}</div>}
            />
          </a>
       }
       { navItem.children.length > 0 && 
         <HelpToggleItem
           navItem={navItem.text}
           navSubItems={navItem.children}
           navIcon={navItem.icon}
         />      
       }
       </div>);

    return(
       <div {...customProps}>
         {helpButton}
         <Popup
          isOpen={this.state.isOpen}
          onRequestClose={this.closePopup}
          targetRef={() => document.getElementById('nav-help-button')}
          isArrowDisplayed
          contentWidth="320"
          contentHeight="640"
          contentAttachment='top left'
         >
         {<div>{popupContent}</div>}
         </Popup>
       </div>
      );
  }

}

NavHelp.propTypes = propTypes;
NavHelp.defaultProps = defaultProps;
export default NavHelp;

