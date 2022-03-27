import React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect y="0.9375" width="40" height="38.125" rx="19.0625"         fill={props.dT ? '#0D1320' : 'rgba(245, 245, 245, 1)'} />
      <Path
        d="M10.625 17.8125L19.375 10.9375L28.125 17.8125H10.625Z"
        stroke={props.dT ? 'white' : '#9C181E'}
        stroke-miterlimit="10"
      />
      <Path
        d="M10 29.0625H28.75M16.875 20.3125H21.875H16.875ZM18.125 20.3125V26.5937V20.3125ZM20.625 20.3125V26.5937V20.3125ZM23.75 20.3125H28.125H23.75ZM24.375 20.3125V26.5937V20.3125ZM26.875 20.3125V26.5937V20.3125ZM10.625 20.3125H15H10.625ZM11.875 20.3125V26.5937V20.3125ZM14.375 20.3125V26.5937V20.3125ZM10.625 26.5937H28.125H10.625Z"
        stroke={props.dT ? 'white' : '#9C181E'}
        stroke-miterlimit="10"
      />
    </Svg>
  );
}

export default Icon;
