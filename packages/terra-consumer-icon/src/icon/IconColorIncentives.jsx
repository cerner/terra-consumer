/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M11 12h4" ></path><circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="13" cy="3" r="2" ></circle><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M10 21v2" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M16 21v2" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M16.5 8H9C7.75 5.042 5 6 5 6l.9 3.089A6.531 6.531 0 0 0 3.505 12H1v5h2.5a6.5 6.5 0 0 0 6 4h7a6.5 6.5 0 1 0 0-13z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorIncentives";
SvgIcon.defaultProps = {"viewBox":"0 0 24 24","height":"24","width":"24","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
