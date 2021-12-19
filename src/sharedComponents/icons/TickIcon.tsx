import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.95129 5.625L6.20129 8.25L12.5763 0.375"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
      <Path
        d="M11.0205 6C11.1739 6.98449 11.0219 7.99232 10.5851 8.88782C10.1483 9.78332 9.44759 10.5235 8.57735 11.0087C7.7071 11.4938 6.7091 11.7007 5.7177 11.6015C4.7263 11.5023 3.7891 11.1017 3.03228 10.4536C2.27546 9.80561 1.73536 8.94125 1.4847 7.97694C1.23403 7.01264 1.28483 5.99468 1.63026 5.06012C1.97569 4.12556 2.59916 3.31927 3.41674 2.7498C4.23432 2.18034 5.20675 1.87504 6.2031 1.875C6.84668 1.87416 7.48402 2.00118 8.0781 2.24869"
        stroke="#8797B1"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
