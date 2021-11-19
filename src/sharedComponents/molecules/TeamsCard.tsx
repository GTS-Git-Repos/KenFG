import React from 'react';
import tailwind from '../../../tailwind';
import {View, Dimensions, Image, Text, ImageBackground} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}
interface TeamContInfoTypes {
  name: string;
  count: number;
}

const CARDWIDTH = Dimensions.get('window').width;

export default function TeamsCard(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('ml-4 my-2 bg-red-300 rounded-lg'),
        {width: CARDWIDTH / 1.2},
      ]}>
      <ImageBackground
        imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
        style={[tailwind('w-full')]}
        source={assets.ground}>
        {/* Header */}
        <View style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <Text style={[tailwind('font-bold p-3  text-light font-16')]}>
            Team 1{' '}
            <Text style={[tailwind('font-regular font-15')]}>(Current)</Text>
          </Text>
        </View>
        {/* Player Info */}
        <View style={[tailwind('flex-row justify-between items-center p-3')]}>
          {/* Count */}
          <View
            style={[
              tailwind('flex-row justify-around items-center'),
              {flex: 4},
            ]}>
            <TeamCountInfo name={'NZ'} count={6} />
            <TeamCountInfo name={'IN'} count={4} />
          </View>
          {/* Players */}
          <View
            style={[
              tailwind('flex-row justify-around items-center'),
              {flex: 6},
            ]}>
            <PlayerProfile />
            <PlayerProfile />
          </View>
        </View>
      </ImageBackground>
      <BottomStats />
    </View>
  );
}

const TeamCountInfo = (props: TeamContInfoTypes) => {
  return (
    <View style={[tailwind('')]}>
      <Text style={[tailwind('font-bold text-light text-center font-15')]}>
        {props.name}
      </Text>
      <Text
        style={[tailwind('font-bold text-center  py-1 text-light font-20')]}>
        {props.count}
      </Text>
    </View>
  );
};

const PlayerProfile = () => {
  return (
    <View style={[tailwind('flex-col')]}>
      <Image
        resizeMode="contain"
        source={assets.playerImage}
        style={[tailwind(''), {width: 80, height: 60}]}
      />
      <View style={[tailwind('p-0.5 bg-gray-200 rounded')]}>
        <Text style={[tailwind('font-regular text-center font-13')]}>
          M.Dhoni
        </Text>
      </View>
      <View
        style={[
          tailwind(
            'absolute border-2 rounded-full p-0.5 border-gray-800 bg-gray-100 top-0 left-0',
          ),
        ]}>
        <Text style={[tailwind('font-regular font-12')]}>VC</Text>
      </View>
    </View>
  );
};

const BottomStats = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-primary rounded-b-lg p-3 flex-row items-center justify-between',
        ),
      ]}>
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-light font-16')]}>WK</Text>
        <Text style={[tailwind('font-bold text-light px-2 font-16')]}>1</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-light font-16')]}>BAT</Text>
        <Text style={[tailwind('font-bold text-light px-2 font-16')]}>3</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-light font-16')]}>AR</Text>
        <Text style={[tailwind('font-bold text-light px-2 font-16')]}>2</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-light font-16')]}>BOWL</Text>
        <Text style={[tailwind('font-bold text-light px-2 font-16')]}>5</Text>
      </View>
    </View>
  );
};
