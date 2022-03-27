// pencil edit icon used in Teams card top section. joined contest card

import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface PropTypes {
  background: boolean;
  dT: boolean;
}

function Icon(props: PropTypes) {
  if (props.dT === false) {
    return (
      <Svg width={24} height={24} fill="none" {...props}>
        <Rect width={24} height={24} rx={12} fill="rgba(245, 245, 245, 1)" />

        <Path
          d="M15.969 6l-9.467 9.43L6 18l2.57-.538L18 8.032 15.969 6zM13.7 8.084l2.031 2.031"
          stroke="#0D1320"
          strokeMiterlimit={10}
        />
      </Svg>
    );
  }

  return (
    <Svg width={24} height={24} fill="none" {...props}>
      {props.background && (
        <Rect width={24} height={24} rx={12} fill="#172338" />
      )}

      <Path
        d="M15.969 6l-9.467 9.43L6 18l2.57-.538L18 8.032 15.969 6zM13.7 8.084l2.031 2.031"
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Icon;
