import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="16" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.90408 6.2247L2.99998 10.112L6.90408 14"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.0959 13.9989L17 10.1116L13.0959 6.22363"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
