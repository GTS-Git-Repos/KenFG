import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {ButtonComponent} from './../../../sharedComponents';

interface PropTypes {
  proceedToCreateContest(): any;
}

export default function CreateContesBanner(props: PropTypes) {
  return (
    <View style={[tailwind('mx-10 mt-4')]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <Image
          resizeMode="contain"
          source={assets.createContestBanner}
          style={{height: 356, width: 281}}
        />
      </View>

      <TouchableOpacity
        onPress={props.proceedToCreateContest}
        style={[tailwind('my-3')]}>
        <ButtonComponent text={'CREATE CONTEST NOW'} />
      </TouchableOpacity>
    </View>
  );
}
