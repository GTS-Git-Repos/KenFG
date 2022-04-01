import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import ProgressBarRefer from '../molecules/progressbar.refer';
import {CompletedIcon} from '../../../../sharedComponents';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  received: number;
  completed: boolean;
  tm: AppThemeType;
}

export default function Person(props: PropTypes) {
  return (
    <View style={[tailwind('p-4 mb-0.5 flex-row items-center'), props.tm.bg2]}>
      <View>
        <Image
          resizeMode="contain"
          source={assets.person}
          style={[tailwind(''), {width: 40, height: 40}]}
        />
      </View>
      <View style={[tailwind('pl-2'), {flex: 1}]}>
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <Text style={[tailwind('font-regular font-15'), props.tm.txt2]}>
            Jenny Wilson
          </Text>
          {props.completed && <CompletedIcon />}
        </View>

        <ProgressBarRefer completed={props.completed} />
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <Text style={[tailwind('font-regular  font-14'), props.tm.txt2]}>
              Received
            </Text>
            <Text style={[tailwind('font-bold px-2 font-16'), props.tm.txt2]}>
              {'\u20B9'} {props.received}
            </Text>
          </View>
          <Text style={[tailwind('font-bold px-2 font-16'), props.tm.txt2]}>
            {'\u20B9'} 500
          </Text>
        </View>
      </View>
    </View>
  );
}
