/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="9" r="4" ></circle><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M6 18l4.98 4.98a2 2 0 0 0 2.31.375l9.816-4.908a2 2 0 0 1 1.788 0l9.817 4.908a2 2 0 0 0 2.308-.374L42 18" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M24 18.236V36" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M10 36h28" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M2 44h44" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineMeditation";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
