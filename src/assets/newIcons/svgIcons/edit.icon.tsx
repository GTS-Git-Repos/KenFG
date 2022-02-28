import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Rect
        width="14"
        height="14"
        rx="7"
        fill={props.dT ? 'white' : '#9C181E'}
      />
      <Path
        d="M10.6684 3.33075C10.4856 3.14798 10.1894 3.1477 10.0062 3.33012L7.25158 6.07423L6.77863 7.22115L7.92555 6.73637L10.6684 3.99353C10.8514 3.81051 10.8514 3.51377 10.6684 3.33075V3.33075Z"
        stroke={props.dT ? '#172338' : '#FFFFFF'}
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M7.78366 4.08803H5C4.44772 4.08803 4 4.53574 4 5.08803V9C4 9.55229 4.44772 10 5 10H8.91197C9.46426 10 9.91197 9.55229 9.91197 9V6.21634"
        stroke={props.dT ? '#172338' : '#FFFFFF'}
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M9.72279 3.61507L10.3849 4.27721"
        stroke={props.dT ? '#172338' : '#FFFFFF'}
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
