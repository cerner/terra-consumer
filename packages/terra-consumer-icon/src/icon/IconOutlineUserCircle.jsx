/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M38 40.971v-1.489a6 6 0 0 0-3.023-5.209l-5.971-3.425" ></path><path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M18.995 30.847l-5.971 3.425A6.002 6.002 0 0 0 10 39.482v1.489" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 33c-4.418 0-8-4.582-8-9v-4a8 8 0 0 1 16 0v4c0 4.418-3.582 9-8 9z" ></path><circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="22" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineUserCircle";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
