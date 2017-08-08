/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#335262" d="M13 24a2 2 0 0 1-1.414-3.414l6-6A2 2 0 0 1 19 14h10a2 2 0 0 1 0 4h-9.171l-5.415 5.414c-.39.39-.902.586-1.414.586z" ></path><path fill="#335262" d="M29 38H15a2 2 0 0 1-1.6-3.2l6-8a2 2 0 0 1 1.458-.795 2.027 2.027 0 0 1 1.556.58l8 8A2 2 0 0 1 29 38z" ></path><circle fill="#5A7A84" cx="37" cy="8" r="6" ></circle><path fill="#5A7A84" d="M46.414 14.586a2 2 0 0 0-2.828 0l-5.677 5.677s-5.5-4.934-5.834-5.212a4.536 4.536 0 0 0-6.388.581L7.294 42.058c-1.408 2.022 1.374 4.305 3.082 2.53l22.28-23.148c.064-.078.107-.165.165-.245l3.862 3.31c.378.33.848.495 1.317.495.513 0 1.025-.196 1.414-.586l7-7a2 2 0 0 0 0-2.828z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorRunning";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
