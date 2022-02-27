import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PropTypes {
  dark: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="180" height="63" viewBox="0 0 157 65" fill="none">
      <Path
        d="M102.217 65L157 0H-26V65H102.217Z"
        fill={props.dark ? '#172338' : 'white'}
      />
    </Svg>
  );
}

export default Icon;
