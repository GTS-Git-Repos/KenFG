import React from 'react';
import tailwind from '../../../../../tailwind';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, StyleSheet, Image, Text, ActivityIndicator} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SecondaryButton} from '../../../../sharedComponents/';

interface PropTypes {
  loading: boolean;
  error: boolean;
}

export default function NoLeaderBoardContent(props: PropTypes) {
  // when loading
  if (props.loading) {
    return (
      <View style={[ss.root]}>
        <ActivityIndicator size={35} color="#C5A858" />
      </View>
    );
  }
  // on API error
  if (props.error) {
    return (
      <View style={[ss.root]}>
        <Icon name="cloud-offline-outline" size={60} color="white" />
        <Text style={[ss.txtSubTitle]}>Failed to Retrieve data</Text>
        <TouchableOpacity style={[ss.retrybtn]}>
          <SecondaryButton text={'Retry'} />
        </TouchableOpacity>
      </View>
    );
  }
  // when no results found
  return (
    <View style={[ss.root]}>
      <Text style={[ss.txtTitle]}>No Team Joined this contest Yet</Text>
      <Image
        resizeMode="contain"
        source={assets.cricketGame}
        style={{width: '80%', height: 142}}
      />
      <Text style={[ss.txtSubTitle]}>
        Be the first one to join this contest & start winning !
      </Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  txtTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 15,
    textAlign: 'center',
  },
  txtSubTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    textAlign: 'center',
  },
  retrybtn: {
    width: 100,
    margin: 10,
  },
});
