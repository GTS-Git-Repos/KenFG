import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function JoinedContestListPage(props: PropTypes) {
  return (
    <View style={[tailwind('mx-4 bg-dark-3 rounded')]}>
      <ContestItem />
      <ContestItem />
      <ContestItem />
      <ContestItem />
      <ContestItem />
    </View>
  );
}

const ContestItem = () => {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center p-4  justify-between border-b border-gray-800',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white uppercase font-14')]}>
        lpenfold
      </Text>
      <Text style={[tailwind('font-regular text-white uppercase font-15')]}>
        235143551674
      </Text>
    </View>
  );
};
