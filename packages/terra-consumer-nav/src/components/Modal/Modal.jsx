import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import Overlay from 'terra-overlay';
import IconClose from 'terra-icon/lib/icon/IconClose';
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
  title: null,
  content: null,
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
    <div>
      <Grid className={cx('modal-header')}>
        <Grid.Row>
          <Grid.Column col={2} />
          <Grid.Column col={8}>
            <div className={cx('modal-title')}>{title}</div>
          </Grid.Column>
          <Grid.Column className={cx('modal-close-align')} col={2}>
            <button className={cx('close-button')} onClick={() => closeModal()}>
              {<div className={cx('close-icon')}><IconClose /></div>}
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);

  const modal = (
    <Overlay isOpen={isModalOpen} backgroundStyle="dark" className={cx('overlay')}>
      {modalHeader}
      <div className={cx('modal')}>
        {content}
      </div>
    </Overlay>);

  return (
    <div {...customProps}>
      {modal}
    </div>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
