import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Overlay from 'terra-overlay';
import styles from './Modal.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title to be rendered on top of the modal content
   */
  title: PropTypes.string,
  /**
   * Content to be rendered in the body of the dialog box.
   */
  content: PropTypes.element,
  /**
   * Boolean value to render modal.
   */
  isModalOpen: PropTypes.bool.isRequired,
  /**
   * Required callback function for use by parent component to update state.
   */

  closeModal: PropTypes.func.isRequired,
};

const defaultProps = {
  isModalOpen: false,
};

const Modal = ({
 title,
 content,
 isModalOpen,
 closeModal,
 ...customProps
}) => {
  const modalHeader = (
    <div className={cx('modal-header')}>
      <div className={cx('modal-title')}>
        {title}
        <Button
          className={cx('close-button')}
          onClick={closeModal}
        >
          <IconClose className={cx('close-icon')} />
        </Button>
      </div>
    </div>
    );

  return (
    <Overlay {...customProps} isOpen={isModalOpen} backgroundStyle="dark" className={cx('overlay')}>
      {modalHeader}
      <div className={cx('modal')}>
        {content}
      </div>
    </Overlay>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
