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
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.25 12.274h15"
        stroke="url(#prefix__paint0_linear_203_1372)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3 18.299l-6.05-6.024L10.3 6.25"
        stroke="url(#prefix__paint1_linear_203_1372)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_203_1372"
          x1={19.25}
          y1={12.274}
          x2={4.25}
          y2={12.274}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#816D2E" />
          <Stop offset={1} stopColor="#614920" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_203_1372"
          x1={10.3}
          y1={12.274}
          x2={4.25}
          y2={12.274}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#816D2E" />
          <Stop offset={1} stopColor="#614920" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;
