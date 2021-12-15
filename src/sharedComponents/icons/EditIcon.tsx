import * as React from 'react';

function Icon(props: any) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect width={24} height={24} rx={12} fill="#172338" />
      <path
        d="M15.969 6l-9.467 9.43L6 18l2.57-.538L18 8.032 15.969 6zM13.7 8.084l2.031 2.031"
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

export default Icon;
