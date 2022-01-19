import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import CountdownContest from './countdown.contest';
import assets from '../../../../constants/assets_manifest';
import {SecondaryButton} from '../../../../sharedComponents';

interface PropTypes {
  title: string;
  subtitle: string;
  actionText: string;
  noContentAction: any;
}

export default function NoContent(props: PropTypes) {
  return (
    <ImageBackground
      source={assets.stadium}
      style={[tailwind('w-full'), {flexGrow: 1}]}
      resizeMode="cover">
      <View style={[tailwind(''), {paddingVertical: 59}]}>
        <Text style={[tailwind('font-regular text-center text-white font-14')]}>
          {/* The first move to get your fortune */}
          {props.title}
        </Text>
        <CountdownContest value={''} />
        <Text style={[tailwind('font-regular text-center text-white font-14')]}>
          {/* It’s your time where skills & knowledge meets action */}
          {props.subtitle}
        </Text>
        <TouchableOpacity
          onPress={props.noContentAction}
          style={[tailwind('mx-16 my-7')]}>
          <SecondaryButton text={props.actionText} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
