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
    <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <Path
        d="M11 1L13.8331 7.10054L20.5106 7.90983L15.5841 12.4895L16.8779 19.0902L11 15.82L5.12215 19.0902L6.41591 12.4895L1.48944 7.90983L8.16687 7.10054L11 1Z"
        stroke="#614920"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
