/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M31.627 23.696l-4.69 1.805" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M33.019 28.566l-4.311 1.767" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M42 32h-8l-3.55-12.423c-2.087.676-4.437.773-7.264-1.477-1.98-1.576-3.29-3.917-3.178-6.444.081-1.87.826-3.554 1.976-4.878L20 4 7.35 13.277a3 3 0 0 0-.695 4.122L27 44h19v-8a4 4 0 0 0-4-4z" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M2 28h6" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M7 35h6" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M18 42h-6" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineRunningShoe";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
