import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CountdownContest from './countdown.contest';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {SecondaryButton} from '../../../../sharedComponents';

interface PropTypes {
  timeStamp: any;
}

export default function NoJoinedContest(props: PropTypes) {

  // DEPRECATED
  
  return (
    <ImageBackground
      source={assets.stadium}
      style={[tailwind('w-full'), {flexGrow: 1}]}
      resizeMode="cover">
      <View style={[tailwind(''), {paddingVertical: 59}]}>
        <Text style={[tailwind('font-regular text-center text-white font-14')]}>
          Litle time to get your fortune
        </Text>
        <CountdownContest timeStamp={props.timeStamp} />
        <Text style={[tailwind('font-regular text-center text-white font-14')]}>
          All the best
        </Text>
        <TouchableOpacity style={[tailwind('mx-16 my-7')]}>
          <SecondaryButton text={'JOIN CONTEST'} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
