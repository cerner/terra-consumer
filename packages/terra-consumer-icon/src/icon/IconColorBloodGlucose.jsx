/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <g fill="none" strokeWidth="4" strokeLinecap="square" strokeMiterlimit="10" ><path stroke="#e86c60" d="M8 30C8 20.1 24 4 24 4s16 16.1 16 26c0 10.1-8.3 16-16 16S8 40.1 8 30z" ></path><path data-color="color-2" stroke="#c64b4b" d="M24 36c-1.6 0-6-1.1-6-6" ></path></g>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorBloodGlucose";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
