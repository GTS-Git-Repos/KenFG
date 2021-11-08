import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamimage1?: string;
  teamimage2?: string;
  teamname1: string;
  teamname2: string;
  teamcount1: number;
  teamcount2: number;
  credits_left: number;
}

export default function TeamInfo(props: PropTypes) {
  return (
    <View style={[tailwind('p-2 flex-row justify-between')]}>
      <View style={[tailwind('flex-col justify-between')]}>
        <Text style={[tailwind('font-regular font-13 text-gray-900')]}>
          Players
        </Text>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-bold text-primary font-20')]}>11</Text>
          <Text style={[tailwind('font-regular font-15')]}>/11</Text>
        </View>
      </View>

      {/* Teams */}
      <View
        style={[tailwind('flex-row flex-grow justify-between items-center')]}>
        <View style={[tailwind('flex-row items-center px-2')]}>
          <Image
            resizeMode="cover"
            source={assets.indianflag}
            style={[{width: 45, height: 45, borderRadius: 100}]}
          />
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-regular font-13 text-gray-900')]}>
              {props.teamname1}
            </Text>
            <Text style={[tailwind('font-bold font-15')]}>
              {props.teamcount1}
            </Text>
          </View>
        </View>

        {/* team 2 */}
        <View style={[tailwind('flex-row items-center px-2')]}>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-regular font-13 text-gray-900')]}>
              {props.teamname2}
            </Text>
            <Text style={[tailwind('font-bold font-15')]}>
              {props.teamcount2}
            </Text>
          </View>
          <Image
            resizeMode="cover"
            source={assets.aus_flag}
            style={[{width: 50, height: 50, borderRadius: 100}]}
          />
        </View>
      </View>

      <View style={[tailwind('flex-col justify-between')]}>
        <Text style={[tailwind('font-regular font-13 text-gray-900')]}>
          Credits left
        </Text>
        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-bold text-primary text-right font-20')]}>
            23.5
          </Text>
        </View>
      </View>
    </View>
  );
}
