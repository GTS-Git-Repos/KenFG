import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M11.0781 11H10.1465V5.63319C10.1465 5.20921 10.1725 4.69038 10.2246 4.07671H10.2022C10.113 4.43747 10.033 4.69596 9.96235 4.85216L7.22874 11H6.77128L4.04324 4.89679C3.96514 4.71827 3.88518 4.44491 3.80336 4.07671H3.78104C3.81079 4.39656 3.82567 4.91911 3.82567 5.64435V11H2.92191V3H4.1604L6.61507 8.5788C6.80475 9.00651 6.92748 9.32636 6.98327 9.53835H7.01675C7.17667 9.09949 7.30498 8.7722 7.40168 8.55649L9.90656 3H11.0781V11Z"
        fill="#8797B1"
      />
      <Rect
        x="0.25"
        y="0.25"
        width="13.5"
        height="13.5"
        rx="6.75"
        stroke="#8797B1"
        stroke-width="0.5"
      />
    </Svg>
  );
}

export default Icon;
