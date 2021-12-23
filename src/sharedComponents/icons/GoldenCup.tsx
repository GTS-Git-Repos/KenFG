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
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.66669 16.042C7.91669 16.042 9.79169 14.792 9.79169 13.542C9.79169 14.792 11.6667 16.042 12.9167 16.042H13.8542C14.1028 16.042 14.3413 16.1408 14.5171 16.3166C14.6929 16.4924 14.7917 16.7309 14.7917 16.9795V17.917H4.79169V16.9795C4.79169 16.7309 4.89046 16.4924 5.06627 16.3166C5.24209 16.1408 5.48055 16.042 5.72919 16.042H6.66669Z"
        stroke="url(#paint0_linear_609_4572)"
        stroke-miterlimit="10"
      />
      <Path
        d="M14.7917 8.78125C14.7917 10.1073 14.2649 11.3791 13.3272 12.3168C12.3895 13.2545 11.1178 13.7813 9.79169 13.7813C8.4656 13.7813 7.19383 13.2545 6.25615 12.3168C5.31847 11.3791 4.79169 10.1073 4.79169 8.78125V2.5H14.7917V8.78125Z"
        stroke="url(#paint1_linear_609_4572)"
        stroke-miterlimit="10"
      />
      <Path
        d="M14.7917 4.34405C16.6667 4.0003 17.9167 5.1253 17.9167 6.84405C17.9167 8.5628 16.5104 10.6253 14.7917 10.6253H14.4479M4.79169 4.34405C2.91669 4.0003 1.66669 5.1253 1.66669 6.84405C1.66669 8.5628 3.07294 10.6253 4.79169 10.6253H5.13544L4.79169 4.34405Z"
        stroke="url(#paint2_linear_609_4572)"
        stroke-miterlimit="10"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_609_4572"
          x1="9.79169"
          y1="13.542"
          x2="9.79169"
          y2="17.917"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#BCA04D" />
          <Stop offset="0.526862" stop-color="#D8C872" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_609_4572"
          x1="9.79169"
          y1="2.5"
          x2="9.79169"
          y2="13.7813"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#BCA04D" />
          <Stop offset="0.526862" stop-color="#D8C872" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_609_4572"
          x1="9.79169"
          y1="4.28223"
          x2="9.79169"
          y2="10.6253"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#BCA04D" />
          <Stop offset="0.526862" stop-color="#D8C872" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;
