import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {DownloadIcon, ShareIcon} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function ShareContest(props: PropTypes) {
  return (
    <View style={[tailwind('px-4 py-2 flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-white font-12')]}>
        Be the first in the network to join the contest
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('mr-2')]}>
          <ShareIcon />
        </View>

        <DownloadIcon />
      </View>
    </View>
  );
}
