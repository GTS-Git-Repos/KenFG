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
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9.09169 11.5766L9.09169 2.5459"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.2787 9.38086L9.09169 11.5769L6.90469 9.38086"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5662 6.0957H13.266C14.7922 6.0957 16.029 7.33245 16.029 8.85945V12.5225C16.029 14.045 14.7952 15.2787 13.2727 15.2787L4.91774 15.2787C3.39149 15.2787 2.15399 14.0412 2.15399 12.515L2.15399 8.8512C2.15399 7.32945 3.38849 6.0957 4.91024 6.0957H5.61674"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
