import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, useWindowDimensions, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import FastImage from 'react-native-fast-image';

interface PropTypes {
  team_a: string;
  team_b: string;
}


/**
 * is it used anywhere ? 
 * 
 */

export default function TeamsMyMatchCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[tailwind('flex-row items-center items-center justify-between')]}>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View
            style={[
              tailwind('mb-2'),
              {backgroundColor: '#FB7700', height: 50 / 2, width: 10},
            ]}></View>
          <FastImage
            style={{width: 45, height: 25}}
            source={{
              uri: `http://kenfg.com/images/flag/${props.team_a.toUpperCase()}`,
              priority: FastImage.priority.normal,
            }}
            // onError={e =>
            //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
            // }
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text
          style={[
            tailwind('font-regular font-12 ml-3 text-center'),
            {color: '#8797B1'},
          ]}>
          IN
        </Text>
      </View>

      <View style={[tailwind('flex-col justify-between')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <FastImage
            style={{width: 45, height: 25}}
            source={{
              uri: `http://kenfg.com/images/flag/${props.team_b.toUpperCase()}`,
              priority: FastImage.priority.normal,
            }}
            // onError={e =>
            //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
            // }
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[tailwind('font-bold text-white px-1')]}>2h:23:32</Text>
        </View>
        <IsLive />
      </View>

      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="cover"
            source={assets.south_africa_flag}
            style={[tailwind('relative'), {width: 50, height: 50, right: 1}]}
          />
          <View
            style={[
              tailwind('mb-2'),
              {backgroundColor: '#01411B', height: 50 / 2, width: 10},
            ]}></View>
        </View>
        <Text
          style={[
            tailwind('font-regular font-12 mr-3 text-gray-400 text-center'),
            {color: '#8797B1'},
          ]}>
          PAK
        </Text>
      </View>
    </View>
  );
}

const IsLive = () => {
  return (
    <View
      style={[tailwind('flex flex-1 flex-row justify-center items-center')]}>
      <Text
        style={[
          tailwind('font-regular text-center pr-1 font-10'),
          {fontSize: 14, color: '#FEFEFF'},
        ]}>
        LIVE
      </Text>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: 'green', width: 5, height: 5},
        ]}></View>
    </View>
  );
};
