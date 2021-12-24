import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  G,
  ClipPath,
  Rect,
} from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_513_1449)">
        <Path
          d="M16.6291 16.6291C20.2903 12.968 20.2903 7.03204 16.6291 3.37087C12.968 -0.290291 7.03205 -0.290291 3.37088 3.37087C-0.29028 7.03204 -0.29028 12.968 3.37088 16.6291C7.03205 20.2903 12.968 20.2903 16.6291 16.6291Z"
          stroke="#006A4D"
          stroke-miterlimit="10"
        />
        <Path
          d="M6.56189 10.005L9.37189 12.815L14.3753 7.81152"
          stroke="#006A4D"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_513_1449">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
