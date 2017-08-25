/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M36 18h-2c-5.523 0-10 4.477-10 10v4h2c5.523 0 10-4.477 10-10v-4z" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M12 8h2c5.523 0 10 4.477 10 10v4h-2c-5.523 0-10-4.477-10-10V8z" ></path><path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M24 38.253V2" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M2 46h10a4 4 0 0 1 4-4c.997 0 1.898.378 2.599.982C19.79 40.062 22.65 38 26 38a8 8 0 0 1 8 8h12" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineGrowth";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
