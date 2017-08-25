/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#42A6DD" d="M27.66 17H2a1 1 0 1 1 0-2h25.66c2.756 0 5-2.243 5-5s-2.244-5-5-5a5.008 5.008 0 0 0-4.717 3.333 1 1 0 0 1-1.886-.666A7.012 7.012 0 0 1 27.659 3c3.86 0 7 3.14 7 7s-3.14 7-7 7z" ></path><path fill="#42A6DD" d="M15.66 45a7.013 7.013 0 0 1-6.603-4.668 1.002 1.002 0 0 1 1.886-.666A5.008 5.008 0 0 0 15.66 43c2.757 0 5-2.243 5-5s-2.243-5-5-5H2a1 1 0 1 1 0-2h13.66c3.859 0 7 3.14 7 7s-3.141 7-7 7z" ></path><path fill="#42A6DD" d="M40 37a7.012 7.012 0 0 1-6.602-4.668.998.998 0 0 1 .61-1.275.998.998 0 0 1 1.275.609A5.011 5.011 0 0 0 40 35c2.757 0 5-2.243 5-5s-2.243-5-5-5H2a1 1 0 1 1 0-2h38c3.86 0 7 3.14 7 7s-3.14 7-7 7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorPeakFlow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
