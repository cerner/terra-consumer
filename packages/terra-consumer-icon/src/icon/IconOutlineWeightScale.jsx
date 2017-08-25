/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M24 24l2-8" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M2 2h44v44H2z" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 10c-7.7 0-14 6.3-14 14h28c0-7.7-6.3-14-14-14z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineWeightScale";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
