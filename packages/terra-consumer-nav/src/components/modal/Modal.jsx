
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Overlay from 'terra-overlay';
import DangerousHtml from '../dangerous-html/DangerousHtml';
import styles from './Modal.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title to be rendered on top of the modal content
   */
  title: PropTypes.string,
  /**
   * Boolean value to render modal.
   */
  isModalOpen: PropTypes.bool.isRequired,
  /**
   * Required callback function for use by parent component to update state.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Content to be rendered in the body of the dialog box.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isModalOpen: false,
};

const Modal = ({
  title,
  isModalOpen,
  onRequestClose,
  children,
  ...customProps
}) => {
  const modalHeader = (
    <div className={cx('modal-title')}>
      <DangerousHtml text={title} />
      <Button className={cx('close-button')} onClick={onRequestClose}>
        <IconClose />
      </Button>
    </div>
  );

  return (
    <Overlay {...customProps} isOpen={isModalOpen} className={cx('overlay')}>
      {modalHeader}
      <div className={cx('modal')}>
        {children}
      </div>
    </Overlay>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
