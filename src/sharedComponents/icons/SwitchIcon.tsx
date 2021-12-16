import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function Icon(props: any) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="24" height="24" rx="12" fill="#172338" />
      <Path
        d="M14.9333 10.3333L18.1334 7.6672L14.9333 5"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M9.06664 14.5996L5.86664 17.2663L9.06664 19.9329"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M4 14.067V7.66699L18.1557 7.66753"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M20 10.8662V17.2662H5.86664"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
