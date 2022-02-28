import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

interface PropTypes {
  dark: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.25 12.2743L19.25 12.2743"
        stroke={props.dark ? '#614920' : '#FFFFFF'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969"
        stroke={props.dark ? '#614920' : '#FFFFFF'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;
