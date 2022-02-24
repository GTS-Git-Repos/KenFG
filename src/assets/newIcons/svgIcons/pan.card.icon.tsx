import React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#0D1320" />
      <Path
        d="M22.75 11.5625H12.5V28.4375H27.5V11.5625H21.25"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M21.25 25.5625H16.25M23.75 23.0625H16.25H23.75Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M20 17.75C21.0355 17.75 21.875 16.9105 21.875 15.875C21.875 14.8395 21.0355 14 20 14C18.9645 14 18.125 14.8395 18.125 15.875C18.125 16.9105 18.9645 17.75 20 17.75Z"
        stroke="white"
        stroke-miterlimit="10"
      />
      <Path
        d="M23.125 20.875C23.125 20.0462 22.7958 19.2513 22.2097 18.6653C21.6237 18.0792 20.8288 17.75 20 17.75C19.1712 17.75 18.3763 18.0792 17.7903 18.6653C17.2042 19.2513 16.875 20.0462 16.875 20.875H23.125Z"
        stroke="white"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
