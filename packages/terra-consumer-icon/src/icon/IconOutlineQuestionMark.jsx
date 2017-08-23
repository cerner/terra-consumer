/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="22" ></circle><circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="36" r="1" ></circle><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M24 29v-5c3.218 0 6-2.782 6-6s-2.782-6-6-6c-2.389 0-4.685 1.785-5.584 3.843" ></path><circle data-color="color-2" data-stroke="none" fill="#444" cx="24" cy="36" r="1" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineQuestionMark";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
