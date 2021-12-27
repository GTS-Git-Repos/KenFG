import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="9" height="18" viewBox="0 0 9 18" fill="none">
      <Path
        d="M4 2.38248L4 16.5"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.37743 4.70215L4.18898 1.49994L1 4.70215"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
