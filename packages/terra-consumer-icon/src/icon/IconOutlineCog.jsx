/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle data-color="color-2" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="6" ></circle><path fill="none" stroke="#444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M46 27v-6l-6.405-.534a15.89 15.89 0 0 0-2.072-4.991l4.155-4.91-4.243-4.243-4.91 4.155a15.876 15.876 0 0 0-4.991-2.072L27 2h-6l-.534 6.405a15.89 15.89 0 0 0-4.991 2.072l-4.91-4.155-4.243 4.243 4.155 4.91a15.876 15.876 0 0 0-2.072 4.991L2 21v6l6.405.534a15.89 15.89 0 0 0 2.072 4.991l-4.155 4.91 4.243 4.243 4.91-4.155a15.876 15.876 0 0 0 4.991 2.072L21 46h6l.534-6.405a15.89 15.89 0 0 0 4.991-2.072l4.91 4.155 4.243-4.243-4.155-4.91a15.876 15.876 0 0 0 2.072-4.991L46 27z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineCog";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
