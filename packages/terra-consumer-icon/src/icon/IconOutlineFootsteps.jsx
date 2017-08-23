/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M21 13h-6c0-3.8-1-4.6-1-7 0-3 1.8-5 4-5s4 2 4 5-1 7-1 7z" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M18 21c-2.1 0-3.6-1.9-3.2-3.9L15 16h6l.2 1.1c.4 2-1.1 3.9-3.2 3.9z" ></path><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M3 15h6c0-3.8 1-4.6 1-7 0-3-1.8-5-4-5S2 5 2 8s1 7 1 7z" ></path><path data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M6 23c2.1 0 3.6-1.9 3.2-3.9L9 18H3l-.2 1.1C2.4 21.1 3.9 23 6 23z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineFootsteps";
SvgIcon.defaultProps = {"viewBox":"0 0 24 24","height":"24","width":"24","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
