import React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect width="40" height="40" rx="20" fill="#0D1320" />
      <Path
        d="M26.6667 11C26.6667 10.7348 26.5613 10.4804 26.3738 10.2929C26.1862 10.1054 25.9319 10 25.6667 10H14.3333C14.0681 10 13.8138 10.1054 13.6262 10.2929C13.4387 10.4804 13.3333 10.7348 13.3333 11V12.6667H26.6667V11ZM26.6667 26V12.6667V26ZM13.3333 12.6667V26V12.6667ZM13.3333 26V29C13.3333 29.2652 13.4387 29.5196 13.6262 29.7071C13.8138 29.8946 14.0681 30 14.3333 30H25.6667C25.9319 30 26.1862 29.8946 26.3738 29.7071C26.5613 29.5196 26.6667 29.2652 26.6667 29V26H13.3333Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.3333 28H20.6667"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Icon;
