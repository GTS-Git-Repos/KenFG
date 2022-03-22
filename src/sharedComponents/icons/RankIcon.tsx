import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface PropTypes {
  golden: boolean;
}

function Icon(props: PropTypes) {
  console.log('moved to new SVG location path rank');
  
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 12.2L14 9.7V0.75H2V9.7L8 12.2ZM7.05 5.25L8 2.375L8.95 5.25H12L9.525 7.025L10.475 9.925L8 8.125L5.525 9.925L6.475 7.025L4 5.25H7.05Z"
        fill={props.golden ? '#BCA04D' : '#8797B1'}
      />
      <Path
        d="M8 13.2998L2 10.7998V12.7498L8 15.2498L14 12.7498V10.7998L8 13.2998Z"
        fill={props.golden ? '#BCA04D' : '#8797B1'}
      />
    </Svg>
  );
}

export default Icon;
