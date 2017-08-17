/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#EA9860" d="M45 26H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h42a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" ></path><path fill="#EA9860" d="M45 12H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h42a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" ></path><path fill="#EA9860" d="M45 40H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h42a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineNav";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
