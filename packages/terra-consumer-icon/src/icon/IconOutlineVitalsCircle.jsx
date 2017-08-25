/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M2 24h10l6-12 12 24 6-12h10" ></path><circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="22" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineVitalsCircle";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
