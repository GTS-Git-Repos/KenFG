// used in my contest card team switch, wwitch team screen

import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  // console.log('MOVE TO NEW SWITCH ICON LOCATION');

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect
        width="24"
        height="24"
        rx="12"
        fill={props.dT ? '#172338' : 'rgba(245, 245, 245, 1)'}
      />
      <Path
        d="M14.9333 10.3333L18.1334 7.6672L14.9333 5"
        stroke={props.dT ? '#8797B1' : 'black'}
        stroke-miterlimit="10"
      />
      <Path
        d="M9.06664 14.5996L5.86664 17.2663L9.06664 19.9329"
        stroke={props.dT ? '#8797B1' : 'black'}
        stroke-miterlimit="10"
      />
      <Path
        d="M4 14.067V7.66699L18.1557 7.66753"
        stroke={props.dT ? '#8797B1' : 'black'}
        stroke-miterlimit="10"
      />
      <Path
        d="M20 10.8662V17.2662H5.86664"
        stroke={props.dT ? '#8797B1' : 'black'} 
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
