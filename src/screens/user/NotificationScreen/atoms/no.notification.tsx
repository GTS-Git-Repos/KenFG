import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {SecondaryButton} from '../../../../sharedComponents';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  data: any;
  loading: boolean;
  error: boolean;
  refetch(): void;
}

export default function NoNotification(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  if (props?.data?.length > 0) {
    return null;
  }

  if (props.loading) {
    return (
      <View style={[tailwind('mt-6')]}>
        <ActivityIndicator size="large" color="#C5A858" />
      </View>
    );
  }
  // when not in loading and data length equal to 0
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
      <TouchableOpacity onPress={props.refetch} style={[ss.btn]}>
        <SecondaryButton text={'TRY AGAIN'} />
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
