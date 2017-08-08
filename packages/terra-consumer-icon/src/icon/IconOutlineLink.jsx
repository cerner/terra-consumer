/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M26.8 21.2c3.9 3.9 3.9 10.2 0 14.1L21.2 41c-3.9 3.9-10.2 3.9-14.1 0-3.9-3.9-3.9-10.2 0-14.1l5-4.8" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M21.2 26.8c-3.9-3.9-3.9-10.2 0-14.1L26.8 7C30.7 3.1 37.1 3.1 41 7c3.9 3.9 3.9 10.2 0 14.1L36 26" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineLink";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
