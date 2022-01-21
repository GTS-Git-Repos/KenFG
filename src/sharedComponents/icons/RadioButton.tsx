import * as React from 'react';
import Svg, {Rect, Path, Circle} from 'react-native-svg';

interface PropTypes {
  selected: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Circle cx="7" cy="7" r="7" fill="#C4C4C4" />
      <Circle
        cx="7"
        cy="7"
        r="5"
        fill={props.selected ? '#006A4D' : '#8797B1'}
      />
    </Svg>
  );
}

export default Icon;
