/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M43 40H5a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3z" ></path><path data-color="color-2" data-stroke="none" fillRule="evenodd" clipRule="evenodd" fill="#444" d="M31.736 28.206c-.423.937-.625 1.355-1.17 2.183-.759 1.156-1.83 2.596-3.157 2.608-1.179.011-1.482-.767-3.082-.758-1.6.009-1.934.772-3.113.761-1.327-.012-2.341-1.312-3.101-2.469-2.124-3.233-2.346-7.027-1.036-9.044.931-1.434 2.4-2.272 3.781-2.272 1.406 0 2.29.771 3.453.771 1.128 0 1.815-.772 3.441-.772 1.229 0 2.531.669 3.459 1.825-3.04 1.666-2.546 6.006.525 7.167z" ></path><path data-color="color-2" data-stroke="none" fillRule="evenodd" clipRule="evenodd" fill="#444" d="M26.519 17.922c.591-.758 1.039-1.828.876-2.922-.965.066-2.093.68-2.752 1.48-.598.726-1.092 1.803-.9 2.85 1.053.033 2.143-.596 2.776-1.408z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineApple";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
