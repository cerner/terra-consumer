/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#E6E6E6" d="M40 35c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7z" ></path><path fill="#B3B3B3" d="M22.531 33H9.469a5.026 5.026 0 0 1-4.95-4.293L1.336 6.425A2.998 2.998 0 0 1 4.306 3H10a1 1 0 1 1 0 2H4.306c-.294 0-.563.122-.756.345s-.276.506-.234.797l3.183 22.282A3.015 3.015 0 0 0 9.469 31h13.062a3.015 3.015 0 0 0 2.97-2.576l3.183-22.282c.042-.291-.042-.574-.234-.797S27.988 5 27.694 5H22a1 1 0 1 1 0-2h5.694a3.002 3.002 0 0 1 2.97 3.425L27.48 28.707A5.024 5.024 0 0 1 22.531 33z" ></path><path fill="#B3B3B3" d="M10 7a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z" ></path><path fill="#B3B3B3" d="M22 7a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z" ></path><path fill="#B3B3B3" d="M40 27a1 1 0 0 0-1 1v6c0 6.065-4.935 11-11 11s-11-4.935-11-11v-2a1 1 0 1 0-2 0v2c0 7.168 5.832 13 13 13s13-5.832 13-13v-6a1 1 0 0 0-1-1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorBloodPressure";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
