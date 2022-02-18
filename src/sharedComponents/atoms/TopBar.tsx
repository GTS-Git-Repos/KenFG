import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon} from '../../sharedComponents';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../store/selectors';
import {HelpIcon, PointsIcon} from '../../assets/newIcons';

interface Props {
  teams?: Array<string>;
  text: string;
  helpIcon?: boolean;
  ptsIcon?: boolean;
}

export default function TopBar(props: Props) {
  const clr = useSelector(appColorsSelector);

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={['#BCA04D', '#D8C872']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-4'),
          {paddingVertical: 16},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack}>
            <BackIcon dark={clr.dark} />
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
        {/* Links */}
        <View style={[tailwind('flex-row items-center')]}>
          {props.helpIcon && (
            <TouchableOpacity style={[ss.links]}>
              <HelpIcon isDarkMode={true} />
            </TouchableOpacity>
          )}
          {props.ptsIcon && (
            <TouchableOpacity style={[ss.links]}>
              <PointsIcon isDarkMode={true} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const ss = StyleSheet.create({
  links: {
    paddingHorizontal: 4,
  },
});
