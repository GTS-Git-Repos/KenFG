import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PropTypes {
  verified: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <Path
        d="M3.49917 5.62451L5.74917 8.24951L12.1242 0.374512"
        stroke={props.verified ? 'green' : 'white'}
        stroke-miterlimit="10"
      />
      <Path
        d="M10.5685 5.99952C10.7218 6.984 10.5699 7.99183 10.1331 8.88733C9.69623 9.78283 8.99553 10.523 8.12529 11.0082C7.25505 11.4934 6.25704 11.7003 5.26564 11.601C4.27424 11.5018 3.33704 11.1012 2.58022 10.4532C1.82341 9.80512 1.28331 8.94076 1.03264 7.97646C0.781972 7.01215 0.832773 5.99419 1.1782 5.05963C1.52363 4.12507 2.14711 3.31878 2.96469 2.74931C3.78226 2.17985 4.75469 1.87455 5.75104 1.87452C6.39463 1.87367 7.03196 2.00069 7.62604 2.2482"
        stroke={props.verified ? 'green' : 'white'}
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
