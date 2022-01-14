import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon, WalletIcon} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function CreateContestTopBar(props: PropTypes) {
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
            <BackIcon />
          </TouchableOpacity>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
              Private Contest
            </Text>
          </View>
        </View>
        <View>
          <Priceicon />
        </View>
      </View>
    </LinearGradient>
  );
}

const Priceicon = () => {
  return (
    <View style={[tailwind('flex-row items-center'), styles.priceBorder]}>
      <Text style={[tailwind('font-regular text-brown-5 px-2 font-12')]}>
        {'\u20B9'} 2
      </Text>
      <View style={[tailwind('py-1 px-2'), {backgroundColor: '#B2933D'}]}>
        <WalletIcon darkColor={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceBorder: {
    borderBottomColor: '#B2933D',
    borderLeftColor: '#B2933D',
    borderEndColor: '#B2933D',
    borderRightColor: '#B2933D',
    borderRadius: 6,
    borderWidth: 1,
  },
});
