import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BackIcon, WalletIcon} from '../../../../assets/newIcons';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  wallet: string;
}

export default function CreateContestTopBar(props: PropTypes) {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    // <LinearGradient colors={['#BCA04D', '#D8C872']}>
    <View style={[styles.root]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={true} />
        </TouchableOpacity>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
            Private Contest
          </Text>
        </View>
      </View>
      <View>
        <View style={[tailwind('flex-row items-center'), styles.priceBorder]}>
          <Text style={[tailwind('font-regular text-brown-5 px-2 font-12')]}>
            {'\u20B9'} {props.wallet}
          </Text>
          <View style={[tailwind('py-1 px-2'), {backgroundColor: '#B2933D'}]}>
            <WalletIcon darkColor={true} outline={true} />
          </View>
        </View>
      </View>
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#d1b45a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  priceBorder: {
    borderColor: '#B2933D',
    borderRadius: 6,
    borderWidth: 1,
  },
});
