// used in privat contest share sheet
// team card clone

import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="16" height="16" viewBox="0 0 22 22" fill="none">
      <Path
        d="M5.66667 16.3333H1V1H16.3333V5.66667"
        stroke={props.dT ? 'white' : '#172338'}
        stroke-miterlimit="10"
      />
      <Path
        d="M5.66667 5.66666H21V21H5.66667V5.66666Z"
        stroke={props.dT ? 'white' : '#172338'}
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
