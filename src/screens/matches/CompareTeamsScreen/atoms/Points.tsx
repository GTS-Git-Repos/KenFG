import React from 'react';
import tailwind from '../../../../../tailwind';
import {BottomLine} from '../../../../sharedComponents';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Svg, {Line, Rect} from 'react-native-svg';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  selected_team: any;
  op_team: any;
}

export default function Points(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <Text
        style={[
          tailwind('font-regular pt-1 pb-2 text-center text-dark-1 font-14'),
        ]}>
        Total Points
      </Text>

      <View
        style={[
          tailwind(
            'bg-white mx-24 border border-black flex-row items-center p-2 justify-between',
          ),
          {borderRadius: 2},
        ]}>
        <Text
          style={[
            tailwind('font-bold text-right text-light'),
            {fontSize: 26, color: '#172338'},
          ]}>
          {props.selected_team.points}
        </Text>

        <Svg
          width="3"
          height="24"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Rect
            x="1.5"
            width="20"
            height="1"
            transform="rotate(90 1.5 0)"
            fill="#172338"
          />
        </Svg>

        <Text
          style={[
            tailwind('font-bold text-right text-light'),
            {fontSize: 26, color: '#172338'},
          ]}>
          {props.op_team.points}
        </Text>
      </View>
    </View>
  );
}
