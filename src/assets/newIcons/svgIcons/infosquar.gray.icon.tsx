import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6117 2.29102H6.38758C3.87008 2.29102 2.29175 4.07352 2.29175 6.59602V13.4027C2.29175 15.9252 3.86258 17.7077 6.38758 17.7077H13.6109C16.1367 17.7077 17.7084 15.9252 17.7084 13.4027V6.59602C17.7084 4.07352 16.1367 2.29102 13.6117 2.29102Z"
        stroke="#8797B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99558 13.3333V10"
        stroke="#8797B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9916 6.83659H9.99993"
        stroke="#8797B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;
