import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ActivityIndicator, Text} from 'react-native';
import LobbyTopBar from './LobbyTopBar';
import LobbyNav from './LobbyNav';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  failed: boolean;
}

export default function LobbyScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <View style={[tailwind('bg-secondary')]}>
        <LobbyTopBar amount={'0,000'} />
        <LobbyNav cricket={true} setCricket={() => {}} name={''} />
      </View>

      <View style={[tailwind('py-5')]}>
        {props.failed ? (
          <View style={[tailwind('items-center')]}>
            <Icon name="warning-outline" size={100} color="#BCA04D" />
            <Text style={[tailwind('font-regular text-white font-20')]}>
              Failed to Load
            </Text>
          </View>
        ) : (
          <ActivityIndicator color="#d1b45a" size={'large'} />
        )}
      </View>
    </View>
  );
}
