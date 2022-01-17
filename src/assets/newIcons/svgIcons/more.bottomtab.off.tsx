import React from 'react';
import Svg, {SvgProps, Path, Defs, Rect, G, Circle} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Circle cx="7.25" cy="12.5" r="1.5" stroke="#3A2B13" />
      <Circle cx="12.25" cy="12.5" r="1.5" stroke="#3A2B13" />
      <Circle cx="17.25" cy="12.5" r="1.5" stroke="#3A2B13" />
    </Svg>
  );
}

export default Icon;
