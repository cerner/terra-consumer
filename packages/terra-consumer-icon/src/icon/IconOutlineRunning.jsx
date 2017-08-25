/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M8 20h6" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M2 27h6" ></path><circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="37" cy="7" r="4" ></circle><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M29.94 14.06L22 22a4 4 0 0 0 .61 6.157l6.125 4.083a2 2 0 0 1 .452 2.914L24 42" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M15 13l3.468-3.468a4 4 0 0 1 5.328-.295l13.408 10.526a4 4 0 0 0 5.328-.295L46 16" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M17 30l-2.259 3.518a4 4 0 0 1-2.313 2.006L2 39" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineRunning";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
