/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M4.4 22H14l4-6 8 12 4-6h13.6" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M34 2c-4.2 0-7.9 2.1-10 5.4C21.9 4.1 18.2 2 14 2 7.4 2 2 7.4 2 14c0 12 22 30 22 30s22-18 22-30c0-6.6-5.4-12-12-12z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineHeartBeat";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
