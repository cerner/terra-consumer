/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M22 26c-5.523 0-10-6.477-10-12v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2c0 5.523-4.477 12-10 12z" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M36.115 32.885C32.638 31.924 27.778 31 22 31c-6.288 0-11.477 1.098-14.993 2.144A6.998 6.998 0 0 0 2 39.856V44h19" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M33 44l-5 1 1-5 12-12 4 4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineUserEdit";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
