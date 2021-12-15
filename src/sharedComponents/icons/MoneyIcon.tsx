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
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19.2A9.2 9.2 0 1010 .8a9.2 9.2 0 000 18.4zm0 .8c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        fill="url(#prefix__paint0_linear_296_1356)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.417 5H7v.982h1.08c1.325 0 2.135.441 2.343 1.325H7v.76h3.472c-.11 1.043-.993 1.73-2.638 1.73H7v.945c1.436 1.522 2.54 2.835 3.73 4.258h1.46c-1.276-1.558-2.576-3.117-3.754-4.344 1.95-.06 3.178-1.043 3.337-2.589h1.644v-.76H11.75c-.086-.7-.418-1.203-.86-1.546h2.516V5h.012z"
        fill="url(#prefix__paint1_linear_296_1356)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_296_1356"
          x1={10}
          y1={0}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D8C872" />
          <Stop offset={1} stopColor="#BCA04D" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_296_1356"
          x1={10.209}
          y1={5}
          x2={10.209}
          y2={15}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D8C872" />
          <Stop offset={1} stopColor="#BCA04D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;
