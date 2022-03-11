import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {SecondaryButton} from '../../../../sharedComponents';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  loading: boolean;
  error: boolean;
  refetch(): void;
}

export default function NoNotification(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[ss.noContest]}>
      <Text style={[ss.txt]}>No Notifications found</Text>
      <Text style={[ss.subText]}>
        There is no notifications found try other filters
      </Text>
      <View style={[ss.image]}>
        <Image
          source={assets.cricketGame}
          style={[{height: 100}]}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={[ss.btn]}>
        <SecondaryButton text={'Go back'} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  noContest: {
    paddingVertical: 70,
    marginHorizontal: 36,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'gadugi-regular',
    fontSize: 12,
    color: '#FFFFFF',
    paddingVertical: 18,
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
  },
  btn: {
    marginVertical: 40,
  },
});
