/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 2c-5.5 0-10 4.5-10 10v6h20v-6c0-5.5-4.5-10-10-10z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M8 18h32v28H8z" ></path><circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="30" r="4" ></circle><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 34v4" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineNotAuthorized";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
