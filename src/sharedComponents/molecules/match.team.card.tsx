import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text, ImageBackground} from 'react-native';
import assets from '../../constants/assets_manifest';
import CIcon from '../icons/CIcon';
import VCIcon from '../icons/VCIcon';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  teamCode: string;
}

export default function MatchTeamCard(props: PropTypes) {
  return (
    <View style={[tailwind('my-2 mt-1 rounded-lg')]}>
      <ImageBackground
        imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
        style={[tailwind('w-full')]}
        source={assets.myTeamsBackground}>
        {/* Start of Top Section */}
        <View
          style={[
            tailwind(`flex-row items-center px-2 justify-center`),
            {backgroundColor: 'rgba(0,0,0,0.2)'},
          ]}>
          <View style={[tailwind('flex-row items-center')]}>
            <Text
              style={[
                tailwind('font-bold py-3 px-2 uppercase text-light font-14'),
              ]}>
              {props.teamCode}
            </Text>
          </View>
        </View>
        {/* Players section */}
        <PlayerSection />
        {/* End of Player section */}
        {/* Start of bottom info */}
      </ImageBackground>
      <BottomStats />
    </View>
  );
}

const PlayerSection = () => {
  return (
    <View style={[tailwind('flex-row justify-between items-center p-3')]}>
      {/* Players */}
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        <PlayerProfile cap={true} name={'Chris Gayle'} />
        <PlayerProfile cap={false} name={'Virat Kohli'} />
      </View>
      <View style={[tailwind('flex-row'), {flex: 3}]}>
        <Points points={232} />
      </View>
    </View>
  );
};

const PlayerProfile = (props: any) => {
  return (
    <View style={[tailwind('flex-col p-2')]}>
      <View style={[tailwind(''), {width: 55, height: 55}]}>
        <View style={[tailwind('absolute inset-0'), {}]}>
          {props.cap ? <CIcon white={true} /> : <VCIcon white={true} />}
        </View>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[tailwind(''), {width: 55, height: 50}]}
        />
        <PlayerName name={props.name} index={props.index} />
      </View>
    </View>
  );
};

const PlayerName = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.index ? ['#254987', '#172338'] : ['#172338', '#6C221E']}
      style={[tailwind('bg-blue-500'), {padding: 2, borderRadius: 4}]}>
      <Text
        numberOfLines={1}
        style={[tailwind('font-regular text-center text-white font-9')]}>
        {props.name}
      </Text>
    </LinearGradient>
  );
};

const Points = (props: any) => {
  return (
    <View>
      <Text style={[tailwind('font-regular text-white font-14')]}>POINTS</Text>
      <Text style={[tailwind('font-bold text-white font-20 py-3')]}>
        {props.points}
      </Text>
    </View>
  );
};

const BottomStats = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 rounded-b-lg p-3 flex-row items-center justify-between',
        ),
      ]}>
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>WK</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>2</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>BAT</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>4</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>AR</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>1</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>BOWL</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>4</Text>
      </View>
    </View>
  );
};
