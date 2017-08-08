/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M34 11L22 3l-12 8" ></path><path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M27 39H2V11h40v9.071" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M10 21h14" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M10 29h8" ></path><path data-cap="butt" data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" d="M44 32.292V45l-6-3-6 3V32.292" ></path><circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="38" cy="27" r="8" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineCertificate";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
