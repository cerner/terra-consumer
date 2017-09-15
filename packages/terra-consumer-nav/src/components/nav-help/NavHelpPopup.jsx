import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import TerraPopup from 'terra-popup';
import SafeHtml from '../safe-html/SafeHtml';
import styles from './NavHelpPopup.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title to be rendered on top of the popup content
   */
  title: PropTypes.string,
  /**
   * Boolean value to hide/display popup header with title and close button
   */
  hasHeader: PropTypes.bool,
  /**
   * Content to be displayed in a dialog
   */
  popupContent: PropTypes.element,
  /**
   * Boolean value to render the popup
   */
  isOpen: PropTypes.bool,
  /**
   * Required callback function for use by parent component to update state.
   */
  closePopup: PropTypes.func,
};

const defaultProps = {
  hasHeader: false,
  isOpen: false,
  closePopup: null,
};

const NavHelpPopup = ({
 title,
 hasHeader,
 popupContent,
 isOpen,
 closePopup,
 ...customProps
}) => {
  const popupHeader = (hasHeader &&
    <div className={cx('popup-title')}>
      <SafeHtml text={title} />
      <Button
        className={cx('close-button')}
        onClick={closePopup}
        variant={'link'}
        icon={<IconClose />}
        isCompact
      />
    </div>
  );

  return (
    <TerraPopup
      {...customProps}
      isOpen={isOpen}
      onRequestClose={closePopup}
      isHeaderDisabled
    >
      <div>
        {popupHeader}
        <div className={cx('popup-body')}>
          {popupContent}
        </div>
      </div>
    </TerraPopup>
  );
};

NavHelpPopup.propTypes = propTypes;
NavHelpPopup.defaultProps = defaultProps;

export default NavHelpPopup;
