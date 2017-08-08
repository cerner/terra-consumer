/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M28 16c2.2 0 4-1.8 4-4s-4-8-4-8-4 5.8-4 8 1.8 4 4 4z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M36 28v-6H20v6" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M42 28H14v14c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V28z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M14 28h-4c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h4v24z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineCigarette";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
