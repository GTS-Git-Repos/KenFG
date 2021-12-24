import * as React from 'react';
import Svg, {Rect, Path, Circle} from 'react-native-svg';

interface PropTypes {
  selected: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
      <Circle
        cx="6"
        cy="6.5"
        r="5"
        fill="#C4C4C4"
        stroke="#006A4D"
        stroke-width="2"
      />
    </Svg>
  );
}

export default Icon;
