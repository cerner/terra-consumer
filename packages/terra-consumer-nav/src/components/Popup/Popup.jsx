import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TerraPopup from 'terra-popup';
import Grid from 'terra-grid';
import IconClose from 'terra-icon/lib/icon/IconClose';
import styles from './Popup.scss';

const cx = classNames.bind(styles);


const propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  hasHeader: PropTypes.bool,
  popupContent: PropTypes.element,
  isOpen: PropTypes.bool,
  closePopup: PropTypes.func,
};

const defaultProps = {
  title: null,
  hasHeader: false,
  popupContent: null,
  isOpen: false,
  closePopup: null,
};

const Popup = ({
 title,
 hasHeader,
 popupContent,
 isOpen,
 closePopup,
 ...customProps
}) => {
  const popupHeader = (
    <Grid className={cx('popup-header')}>
      <Grid.Row>
        <Grid.Column col={10}>
          <div className={cx('popup-title')}>{title}</div>
        </Grid.Column>
        <Grid.Column className={cx('close-button-alignment')} col={2}>
          <button className={cx('close-button')} onClick={() => closePopup()}>{<svg className={cx('close-icon')}><IconClose /></svg>}</button>
        </Grid.Column>
      </Grid.Row>
    </Grid>);

  return (
    <TerraPopup
      {...customProps}
      isOpen={isOpen}
      onRequestClose={closePopup}
      isHeaderDisabled
    >
      <div>
        {hasHeader && popupHeader}
        {popupContent}
      </div>
    </TerraPopup>
  );
};

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
