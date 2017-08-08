import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavHelpContent from '../nav-help/NavHelpContent';
import Modal from '../Modal/Modal';
import styles from './UserProfile.scss';

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
  isOpen: PropTypes.bool,
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
