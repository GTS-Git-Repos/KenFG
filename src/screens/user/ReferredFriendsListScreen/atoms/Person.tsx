import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import ProgressBarRefer from '../molecules/progressbar.refer';
import {CompletedIcon} from '../../../../sharedComponents';

interface PropTypes {
  received: number;
  completed: boolean;
}

export default function Person(props: PropTypes) {
  return (
    <View style={[tailwind('p-4 bg-dark-3 mb-0.5 flex-row items-center')]}>
      <View>
        <Image
          resizeMode="contain"
          source={assets.person}
          style={[tailwind(''), {width: 40, height: 40}]}
        />
      </View>
      <View style={[tailwind('pl-2'), {flex: 1}]}>
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>
            Jenny Wilson
          </Text>
          {props.completed && <CompletedIcon />}
        </View>

        <ProgressBarRefer completed={props.completed} />
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
              Received
            </Text>
            <Text style={[tailwind('font-bold text-dark-1 px-2 font-16')]}>
              {'\u20B9'} {props.received}
            </Text>
          </View>
          <Text style={[tailwind('font-bold text-dark-1 px-2 font-16')]}>
            {'\u20B9'} 500
          </Text>
        </View>
      </View>
    </View>
  );
}
