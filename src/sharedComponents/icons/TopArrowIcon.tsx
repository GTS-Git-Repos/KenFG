import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path
        d="M10 4.38248L10 18.5"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.3774 6.70215L10.189 3.49994L7 6.70215"
        stroke="#27AE60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
