import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  linkItems: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
    text: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  })),
};

const defaultProps = {
  linkItems: [],
};

const ProfileLinks = ({
  linkItems,
  ...customProps
}) => {
  const linkElements = linkItems.map((linkItem) => {
    const linkElement = (<a key={`${linkItem.text}`} href={linkItem.uri} onClick={() => window.location = linkItem.uri} className={cx('suppress-hyperlink')}>
      <div className={cx('link', 'divider-bottom')}>{linkItem.text}</div></a>);
    return linkElement;
  });

  return (
    <div {...customProps}>
      {linkElements}
    </div>
  );
};

ProfileLinks.propTypes = propTypes;
ProfileLinks.defaultProps = defaultProps;

export default ProfileLinks;
