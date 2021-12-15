import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import assets from '../../constants/assets_manifest';
import {BackIcon} from '../../sharedComponents';

interface Props {
  teams?: Array<string>;
  text: string;
  closeicon?: boolean;
}

export default function TopBar(props: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={['#BCA04D', '#D8C872']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-4'),
          {paddingVertical: 18},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack}>
            <BackIcon />
          </TouchableOpacity>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
              {props.text}
            </Text>
            {props.teams && (
              <Text
                style={[tailwind('font-bold text-brown-4 uppercase font-12')]}>
                {props.teams[0]} vs {props.teams[1]}
              </Text>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

{
  /* <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<Path d="M4.25 12.2744L19.25 12.2744" stroke="url(#paint0_linear_554_3541)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.2998 18.299L4.2498 12.275L10.2998 6.25" stroke="url(#paint1_linear_554_3541)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Defs>
<LinearGradient x1="19.25" y1="12.2744" x2="4.25" y2="12.2744" gradientUnits="userSpaceOnUse">
<Stop stop-color="#816D2E"/>
<Stop offset="1" stop-color="#614920"/>
</LinearGradient>
<LinearGradient  x1="10.2998" y1="12.2745" x2="4.2498" y2="12.2745" gradientUnits="userSpaceOnUse">
<Stop stop-color="#816D2E"/>
<Stop offset="1" stop-color="#614920"/>
</LinearGradient>
</Defs>
</Svg> */
}
