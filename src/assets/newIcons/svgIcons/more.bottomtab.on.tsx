import React from 'react';
import Svg, {SvgProps, Path, Defs, Rect, G, Circle} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="7" cy="12" r="1.5" fill="#172338" stroke="#0D1320" />
      <Circle cx="12" cy="12" r="1.5" fill="#172338" stroke="#0D1320" />
      <Circle cx="17" cy="12" r="1.5" fill="#172338" stroke="#0D1320" />
    </Svg>
  );
}

export default Icon;
