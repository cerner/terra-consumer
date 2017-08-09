import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavHelpContent from '../nav-help/NavHelpContent';
import Modal from '../modal/Modal';
import navElementShape from '../../NavPropShapes';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of navigation elements to be displayed in help menu/popup.
   */
  help: PropTypes.arrayOf(PropTypes.shape(
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
  /**
   * Boolean value to render modal.
   */
  isOpen: PropTypes.bool,
  /**
   * Required callback function for use by parent component to update state.
   */
  closeModal: PropTypes.func.isRequired,
};

const defaultProps = {
  help: [],
  isOpen: false,
};

const translations = {
  help: 'Help',
};

const HelpModal = ({
 help,
 isOpen,
 closeModal,
 ...customProps
}) => {
  const modalContent = <NavHelpContent className={cx('nav-item-border')} helpContent={help} />;

  return (
    <Modal
      {...customProps}
      isModalOpen={isOpen}
      title={translations.help}
      content={modalContent}
      closeModal={closeModal}
    />);
};

HelpModal.propTypes = propTypes;
HelpModal.defaultProps = defaultProps;

export default HelpModal;
