import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Rect,
} from 'react-native-svg';

interface PropTypes {
  selected: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="28" height="15" viewBox="0 0 28 15" fill="none">
      <Rect width="28" height="15" rx="7.5" fill="#0D1320" />

      <Circle cx={props.selected ? '20' : '8'} cy="7.5" r="5" fill="#8797B1" />
    </Svg>
  );
}

export default Icon;
