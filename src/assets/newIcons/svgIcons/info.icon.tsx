import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface PropTypes {
  isDarkMode: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16.3341 2.75011H7.66511C4.64411 2.75011 2.75011 4.88911 2.75011 7.91611V16.0841C2.75011 19.1111 4.63511 21.2501 7.66511 21.2501H16.3331C19.3641 21.2501 21.2501 19.1111 21.2501 16.0841V7.91611C21.2501 4.88911 19.3641 2.75011 16.3341 2.75011Z"
        stroke={props.isDarkMode ? '#614920' : '#FFFFFF'}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9947 16.0001V12.0001"
        stroke={props.isDarkMode ? '#614920' : '#FFFFFF'}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9899 8.2043H11.9999"
        stroke={props.isDarkMode ? '#614920' : '#FFFFFF'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;
