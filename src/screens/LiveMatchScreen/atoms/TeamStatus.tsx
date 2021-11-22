import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function TeamStatus(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 3.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row py-3 items-center')]}
        colors={['#1C2B46', '#172338']}>
        <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
          <Text style={[tailwind('font-bold text-light pl-4 pr-1 font-14')]}>
            IND
          </Text>
          <Text
            style={[
              tailwind(
                'font-regular rounded-full bg-dark-4 px-2 py-1 text-dark-1 mx-3 font-10',
              ),
            ]}>
            Batting
          </Text>
        </View>

        <View
          style={[
            tailwind('flex-row justify-between items-center'),
            {flex: 6},
          ]}>
          <Text style={[tailwind('font-regular text-light font-12')]}>
            (12.5 Overs)
          </Text>
          <Text style={[tailwind('font-bold px-3 text-light font-14')]}>
            43/1
          </Text>
          <Icon
            name="chevron-down"
            size={20}
            style={[tailwind('mr-2')]}
            color="#B2933D"
          />
        </View>
      </LinearGradient>
    </View>
  );
}
