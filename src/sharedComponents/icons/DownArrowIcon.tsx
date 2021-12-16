import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg
      width="7"
      height="14"
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.49994 13.0204L3.49994 0.979355"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.41595 10.0926L3.49995 13.0206L0.583955 10.0926"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
