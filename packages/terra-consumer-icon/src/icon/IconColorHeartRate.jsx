/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#E86C60" d="M34 1a12.971 12.971 0 0 0-10 4.698A12.971 12.971 0 0 0 14 1C6.832 1 1 6.832 1 14c0 12.332 21.453 30.027 22.367 30.774a.994.994 0 0 0 1.266 0C25.547 44.027 47 26.332 47 14c0-7.168-5.832-13-13-13z" ></path><path fill="#E6E6E6" d="M26 29c-.334 0-.646-.167-.832-.445L18 17.803l-3.168 4.752A1.001 1.001 0 0 1 14 23H1a1 1 0 1 1 0-2h12.465l3.703-5.555c.371-.557 1.293-.557 1.664 0L26 26.197l3.168-4.752c.186-.278.498-.445.832-.445h17a1 1 0 1 1 0 2H30.535l-3.703 5.555A1.001 1.001 0 0 1 26 29z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorHeartRate";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
