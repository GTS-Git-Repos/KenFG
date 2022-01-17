import React from 'react';
import Svg, {SvgProps, Path, Defs, Rect, G, ClipPath} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <G clip-path="url(#clip0_1310_2743)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.1156 15.4504C13.5193 15.4504 11.9484 15.4504 10.3586 15.4504C10.3586 17.7978 10.3586 20.1374 10.3586 22.4865C8.40712 22.4865 6.47388 22.4865 4.5277 22.4865C4.5277 19.3505 4.5277 16.2209 4.5277 13.0761C3.36081 13.0761 2.20686 13.0761 1.0535 13.0761C1.04821 13.0655 1.04291 13.0543 1.03821 13.0437C4.93234 9.53308 8.82706 6.02301 12.7347 2.5C16.6359 6.01654 20.533 9.52955 24.4618 13.0708C23.2655 13.0708 22.1122 13.0708 20.9453 13.0708C20.9453 16.2203 20.9453 19.3552 20.9453 22.5C18.9979 22.5 17.0647 22.5 15.1156 22.5C15.1156 20.1574 15.1156 17.8125 15.1156 15.4504Z"
          fill="#172338"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1310_2743">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.75 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
