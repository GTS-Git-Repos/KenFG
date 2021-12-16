import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function Icon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={24} height={24} rx={12} fill="#172338" />
      <Path
        d="M15.969 6l-9.467 9.43L6 18l2.57-.538L18 8.032 15.969 6zM13.7 8.084l2.031 2.031"
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Icon;
