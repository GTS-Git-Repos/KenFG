import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon, WalletIcon} from '../../../sharedComponents';
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
    <LinearGradient
      colors={['#BCA04D', '#D8C872']}
      style={[tailwind('py-2 px-4 flex-row items-center justify-between')]}>
      <View
        style={[tailwind('flex flex-row items-center'), {paddingVertical: 6}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text style={[tailwind('font-regular text-brown-4 font-11')]}>
            Contests
          </Text>
          <Text style={[tailwind('font-bold text-brown-4 pt-1 font-15')]}>
            29m 22s Left
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('mr-2')]}>
          <Priceicon />
        </View>
        <Priceicon />
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
    borderBottomColor: '#604820',
    borderLeftColor: '#604820',
    borderEndColor: '#604820',
    borderRightColor: '#604820',
    borderRadius: 6,
    borderWidth: 1,
  },
});
