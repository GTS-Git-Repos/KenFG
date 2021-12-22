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
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path
        d="M6.90408 6.7247L2.99998 10.612L6.90408 14.5"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.0959 14.4989L17 10.6116L13.0959 6.72363"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
