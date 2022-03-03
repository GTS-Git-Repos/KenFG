import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="9" height="16" viewBox="0 0 9 18" fill="none">
      <Path
        d="M4 15.6175L4 1.5"
        stroke="#EB5757"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.37743 13.2979L4.18898 16.5001L1 13.2979"
        stroke="#EB5757"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
