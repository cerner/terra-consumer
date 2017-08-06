import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import Overlay from 'terra-overlay';
import IconClose from 'terra-icon/lib/icon/IconClose';
import NavHelpContent from '../nav-help/NavHelpContent';
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
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const defaultProps = {
  help: [],
};

const translations = {
  help: 'Help',
};

const HelpModal = ({
 help,
 isModalOpen,
 closeModal,
 ...customProps
}) => {
  const modalContent = <NavHelpContent className={cx('divider-bottom')} helpContent={help} />;
  const modalHeader = (
    <div>
      <Grid className={cx('modal-header')}>
        <Grid.Row>
          <Grid.Column col={2} />
          <Grid.Column col={8}>
            <div className={cx('modal-title')}>{translations.help}</div>
          </Grid.Column>
          <Grid.Column className={cx('text-align-right')} col={2}>
            <button className={cx('close-button')} onClick={() => closeModal()}>
              {<div className={cx('close-icon')}><IconClose /></div>}
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);


  const modal = (
    <Overlay isOpen={isModalOpen} backgroundStyle="dark">
      {modalHeader}
      <div className={cx('modal')}>
        {modalContent}
      </div>
    </Overlay>);

  return (
    <div {...customProps}>
      {modal}
    </div>
  );
};

HelpModal.propTypes = propTypes;
HelpModal.defaultProps = defaultProps;

export default HelpModal;
