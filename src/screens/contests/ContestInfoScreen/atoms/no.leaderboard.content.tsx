import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function NoLeaderBoardContent(props: PropTypes) {
  return (
    <View style={[tailwind('p-4 items-center justify-center')]}>
      <Text style={[tailwind('font-regular text-center text-white font-15')]}>
        No Team Joined this contest Yet
      </Text>
      <Image
        resizeMode="contain"
        source={assets.coin}
        style={{width: '80%', height: 142}}
      />
      <Text style={[tailwind('font-regular text-center text-white font-13')]}>
        Be the first one to join this contest & start winning !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
