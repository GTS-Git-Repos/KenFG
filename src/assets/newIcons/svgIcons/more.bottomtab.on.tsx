import React from 'react';
import Svg, {SvgProps, Path, Defs, Rect, G, Circle} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="7"
        cy="12"
        r="1.5"
        fill={props.dT ? '#172338' : '#9C181E'}
        stroke={props.dT ? '#172338' : '#9C181E'}
      />
      <Circle
        cx="12"
        cy="12"
        r="1.5"
        fill={props.dT ? '#172338' : '#9C181E'}
        stroke={props.dT ? '#172338' : '#9C181E'}
      />
      <Circle
        cx="17"
        cy="12"
        r="1.5"
        fill={props.dT ? '#172338' : '#9C181E'}
        stroke={props.dT ? '#172338' : '#9C181E'}
      />
    </Svg>
  );
}

export default Icon;
