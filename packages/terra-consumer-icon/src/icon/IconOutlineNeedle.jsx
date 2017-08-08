/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M13.4 34.6l-9.9 9.9" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M23.3 16.2l2.8 2.9" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M19.1 20.5l2.8 2.8" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M14.8 24.7l2.8 2.8" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M36 17.6l7.1-7" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M37.4 4.9l-7 7.1" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M23.3 4.9l19.8 19.8" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M36 3.5l8.5 8.5" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M37.4 19.1L17.6 38.8l-8.4-8.4 19.7-19.8" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineNeedle";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
