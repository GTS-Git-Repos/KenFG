import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="10" height="13" viewBox="0 0 10 13" fill="none">
      <Path
        d="M4 1.88248L4 16"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.37743 4.20215L4.18898 0.999936L1 4.20215"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
