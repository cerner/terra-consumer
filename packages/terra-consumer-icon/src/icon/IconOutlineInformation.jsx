/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="22" ></circle><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 14v12" ></path><circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="33" r="1" ></circle><circle data-color="color-2" data-stroke="none" fill="#444" cx="24" cy="33" r="1" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineInformation";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
