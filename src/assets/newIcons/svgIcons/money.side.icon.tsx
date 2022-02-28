import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface PropTypes {
  dT: boolean;
}

function Icon(props: PropTypes) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19.2C15.081 19.2 19.2 15.081 19.2 10C19.2 4.91898 15.081 0.8 10 0.8C4.91898 0.8 0.8 4.91898 0.8 10C0.8 15.081 4.91898 19.2 10 19.2ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill={props.dT ? '#D8C872' : '#9C181E'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4172 5H7V5.9816H8.07975C9.40491 5.9816 10.2147 6.42331 10.4233 7.30675H7V8.06748H10.4724C10.362 9.11043 9.47853 9.79755 7.83436 9.79755H7V10.7423C8.43558 12.2638 9.53988 13.5767 10.7301 15H12.1902C10.9141 13.4417 9.6135 11.8834 8.43558 10.6564C10.3865 10.5951 11.6135 9.6135 11.773 8.06748H13.4172V7.30675H11.7485C11.6626 6.60736 11.3313 6.10429 10.8896 5.76074H13.4049V5H13.4172Z"
        fill={props.dT ? '#D8C872' : '#9C181E'}
      />
    </Svg>
  );
}

export default Icon;
