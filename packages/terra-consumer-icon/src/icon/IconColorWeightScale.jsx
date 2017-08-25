/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#B3B3B3" d="M41 45H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h34a4 4 0 0 1 4 4v34a4 4 0 0 1-4 4z" ></path><path fill="#E6E6E6" d="M38 25H10a1 1 0 0 1-1-1c0-8.271 6.729-15 15-15s15 6.729 15 15a1 1 0 0 1-1 1z" ></path><path fill="#E86C60" d="M24 26a1 1 0 0 1-.948-1.317l3-9a1 1 0 0 1 1.897.633l-3 9c-.14.419-.53.684-.949.684z" ></path><circle fill="#5B5B5B" cx="24" cy="25" r="3" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconColorWeightScale";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
