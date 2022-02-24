import React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#0D1320" />
      <Path
        d="M20 25H10.625V13.75H27.5V20.9375"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M10.625 13.75L19.0625 20.1875L27.5 13.75"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M26.875 24.6875H22.5M24.6875 22.5V26.875V22.5Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M24.6875 29.375C27.2763 29.375 29.375 27.2763 29.375 24.6875C29.375 22.0987 27.2763 20 24.6875 20C22.0987 20 20 22.0987 20 24.6875C20 27.2763 22.0987 29.375 24.6875 29.375Z"
        stroke="white"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
