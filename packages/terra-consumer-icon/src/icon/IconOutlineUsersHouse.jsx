/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M2 13L24 3l22 10" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M20 40.672c0-1.208-.529-2.357-1.476-3.108C17.078 36.416 14.57 35 11 35s-6.078 1.416-7.524 2.564C2.529 38.315 2 39.464 2 40.672V43h18v-2.328z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M16 24c0 2.761-2.239 6-5 6s-5-3.239-5-6a5 5 0 0 1 10 0z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M46 40.672c0-1.208-.529-2.357-1.476-3.108C43.078 36.416 40.57 35 37 35s-6.078 1.416-7.524 2.564c-.947.751-1.476 1.9-1.476 3.108V43h18v-2.328z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M42 24c0 2.761-2.239 6-5 6s-5-3.239-5-6a5 5 0 0 1 10 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineUsersHouse";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
