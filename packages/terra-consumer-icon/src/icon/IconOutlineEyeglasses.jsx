/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M16 6h-6L2 28v10c0 2.2 1.8 4 4 4h11c2.2 0 4-1.8 4-4V28H2" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M32 6h6l8 22v10c0 2.2-1.8 4-4 4H31c-2.2 0-4-1.8-4-4V28h19" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M21 28h6" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineEyeglasses";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
