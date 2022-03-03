// used in notification screen

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.013 8.06065V8.05165"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.013 12.0699V12.0609"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.013 16.0787V16.0697"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Icon;
