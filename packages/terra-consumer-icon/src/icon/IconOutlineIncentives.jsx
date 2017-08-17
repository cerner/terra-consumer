/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#D39B75" d="M42 31.112a1 1 0 1 1 0-2c1.369 0 3-.52 3-3 0-1.637-1.018-1.973-1.222-2.025a1.008 1.008 0 0 1-.743-1.195.986.986 0 0 1 1.17-.758c.966.201 2.795 1.292 2.795 3.978 0 3.037-1.962 5-5 5z" ></path><path fill="#EEBC99" d="M30 17H18.641c-2.36-4.749-6.848-4.682-8.97-3.944a1 1 0 0 0-.62 1.26l1.656 4.968A13.048 13.048 0 0 0 6.012 25H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.087A13.054 13.054 0 0 0 13 41.988V46a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3h6v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.012C39.813 39.98 43 35.25 43 30c0-7.168-5.832-13-13-13z" ></path><path fill="#D39B75" d="M30 23h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" ></path><circle fill="#EFD358" cx="26" cy="6" r="5" ></circle><path fill="#444" d="M14 28c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-1.999h.01H14zm0 0h.01H14zm0 0h.01H14zm0 0h.01H14zm0 0h.01H14zM14 26h.01H14zm0 0h.01H14zm0 0h.01H14z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutlineIncentives";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
