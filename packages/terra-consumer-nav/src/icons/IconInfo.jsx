/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24,1C11.317,1,1,11.318,1,24s10.317,23,23,23s23-10.318,23-23S36.683,1,24,1z M24,45C12.421,45,3,35.58,3,24S12.421,3,24,3s21,9.42,21,21S35.579,45,24,45z" />
      <circle cx="24" cy="36" r="2" />
      <path
        d="M24,11c-2.642,0-5.375,1.868-6.5,4.442c-0.222,0.506,0.01,1.096,0.516,1.317c0.508,0.222,1.097-0.01,1.316-0.516
        C20.141,14.395,22.147,13,24,13c2.663,0,5,2.336,5,5s-2.337,5-5,5c-0.553,0-1,0.448-1,1v5c0,0.552,0.447,1,1,1s1-0.448,1-1v-4.075
        c3.341-0.502,6-3.47,6-6.925C31,14.206,27.794,11,24,11z"
      />
    </IconBase>
  );
};

SvgIcon.displayName = "IconInfo";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
