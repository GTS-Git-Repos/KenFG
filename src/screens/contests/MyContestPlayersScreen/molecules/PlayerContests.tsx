import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {BottomLine} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function PlayerContests(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 mx-2 px-6 pt-2 rounded')]}>
      <TopSection />
      <Points />
      <Footer />
    </View>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row pt-4')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('flex-row  items-center')]}>
          <View style={[tailwind('flex-col justify-center items-center')]}>
            <Image
              resizeMode="contain"
              source={assets.s_flag1}
              style={[tailwind(''), {width: 40, height: 20}]}
            />
            <Text style={[tailwind('font-bold px-2 text-light font-15 py-2')]}>
              AUS
            </Text>
          </View>

          <Text
            style={[
              tailwind(
                'font-bold px-2 text-light font-15 py-2 relative bottom-2',
              ),
            ]}>
            VS
          </Text>

          <View style={[tailwind('flex-col items-center')]}>
            <Image
              resizeMode="contain"
              source={assets.s_flag2}
              style={[tailwind(''), {width: 40, height: 20}]}
            />
            <Text style={[tailwind('font-bold px-2 text-light font-15 py-2')]}>
              ENG
            </Text>
          </View>
        </View>
        <Text style={[tailwind('font-regular py-2 text-dark-1 font-14')]}>
          Aus Beat Eng by 98 Runs
        </Text>
        <View style={[tailwind('mr-8')]}>
          <BottomLine />
        </View>
      </View>

      <View style={[tailwind('flex-col items-end py-1'), {flex: 6}]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.winning_cup}
            style={{width: 20, height: 20}}
          />
          <Text
            style={[
              tailwind('font-regular px-2 text-secondary uppercase font-12'),
            ]}>
            You won
          </Text>
        </View>
        <Text
          style={[
            tailwind('font-regular px-2 text-light uppercase font-16 pt-0.5'),
          ]}>
          {'\u20B9'}19,002
        </Text>
      </View>
    </View>
  );
};

const Points = () => {
  return (
    <View style={[tailwind('flex-row items-center py-2')]}>
      <View style={[tailwind('border-r border-gray-400'), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          Highest Point
        </Text>
        <Text style={[tailwind('font-regular  pt-3 text-secondary font-16')]}>
          808.4 (T1)
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-right text-dark-1 font-13')]}>
          Teams Created
        </Text>
        <Text
          style={[tailwind('font-regular text-right pt-3 text-light font-16')]}>
          20
        </Text>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={[tailwind('flex-row bg-dark-3 py-1 items-center')]}>
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Ken Team: 929pts
      </Text>
    </View>
  );
};
