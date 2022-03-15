/**
 * no content used in
 * contest list screen, tabs of Contests, (Contests, My Contests, My Teams)
 * private contest create share contest page
 *  */

import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CountdownContest from './countdown.contest';
import assets from '../../constants/assets_manifest';
import SecondaryButton from '../atoms/secondaryButton';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  loading: boolean;
  error: boolean;
  refetch(): void;
  title: string;
  subtitle: string;
  actionText: string;
  noContentAction: any;
}

export default function NoDataContest(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  if (props.error) {
    return (
      <View style={[{padding: 20}]}>
        <Text style={[ss.title, {color: '#FFFFFF'}]}>
          Plese check your internet
        </Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={assets.stadium}
      style={[tailwind('w-full'), {flexGrow: 1}]}
      resizeMode="cover">
      <View style={[{paddingVertical: 59}]}>
        {props.loading ? (
          <ActivityIndicator color="#d1b45a" size="large" />
        ) : (
          <>
            <Text style={[ss.title, dT ? clr.tw : clr.td1]}>{props.title}</Text>
            <CountdownContest timeStamp={''} />
            <Text style={[ss.title, dT ? clr.tw : clr.td1]}>
              {props.subtitle}
            </Text>
            <TouchableOpacity
              onPress={props.noContentAction}
              style={[tailwind('mx-16 my-7')]}>
              <SecondaryButton text={props.actionText} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const ss = StyleSheet.create({
  title: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    textAlign: 'center',
  },
});
