import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function Icon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={24} height={24} rx={12} fill="#172338" />
      <Path
        d="M14.933 10.333l3.2-2.666L14.933 5M9.067 14.6l-3.2 2.666 3.2 2.667"
        stroke="#8797B1"
        strokeMiterlimit={10}
      />
      <Path
        d="M4 14.067v-6.4h14.156M20 10.866v6.4H5.867"
        stroke="#8797B1"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Icon;
