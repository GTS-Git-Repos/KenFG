import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      >
      <Path
        d="M14.9333 10.3333L18.1334 7.6672L14.9333 5"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M9.06667 14.5996L5.86667 17.2663L9.06667 19.9329"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M4 14.067V7.66699L18.1557 7.66753"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M20 10.8662V17.2662H5.86667"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
