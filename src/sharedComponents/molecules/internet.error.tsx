import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import assets from '../../../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import {ButtonComponent, TopBar} from '..';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  referch(): any;
}

// full screen no internet error

export default function InternetError(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[tailwind('h-full bg-dark justify-between')]}>
      <TopBar text={''} />
      <View style={[tailwind('items-center')]}>
        <Icon name="cloud-offline-outline" size={100} color="white" />
        <Text style={[tailwind('font-regular text-white font-20')]}>
          Failed to connect KenFg
        </Text>
        <Text
          style={[
            tailwind('font-regular text-center text-white py-3 font-13'),
            {width: 200},
          ]}>
          Please check your internet connection and try again
        </Text>
      </View>
      <TouchableOpacity onPress={props.referch} style={[tailwind('m-4')]}>
        <ButtonComponent text={'TRY AGAIN'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
