import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {BottomLine} from '../../../../sharedComponents';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function PlayerContests(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CompletedMatchScreen')}
      style={[tailwind('rounded bg-dark-3 mr-2')]}>
      <NewTop />
      <NewPoints />
      <Footer />
    </TouchableOpacity>
  );
}

const NewTop = () => {
  return (
    <View style={[tailwind('flex-row justify-between pt-3 pb-1 px-2')]}>
      <View>
        <View style={[tailwind('flex-row  items-center')]}>
          <View style={[tailwind('flex-col justify-center items-center')]}>
            {/* <Image
              resizeMode="contain"
              source={assets.s_flag1}
              style={[tailwind(''), {width: 40, height: 20}]}
            /> */}
            <View
              style={[
                tailwind(''),
                {width: 45, height: 25, aspectRatio: 16 / 9},
              ]}>
              <Image
                resizeMode="contain"
                source={assets.AUS}
                style={[{aspectRatio: 16 / 9}]}
              />
            </View>
            <Text style={[tailwind('font-bold px-2 text-light py-1 font-13')]}>
              AUS
            </Text>
          </View>

          <Text
            style={[
              tailwind(
                'font-bold px-3 text-light font-13 py-2 relative bottom-2',
              ),
            ]}>
            VS
          </Text>

          <View style={[tailwind('flex-col items-center')]}>
            <View
              style={[
                tailwind(''),
                {width: 45, height: 25, aspectRatio: 16 / 9},
              ]}>
              <Image
                resizeMode="contain"
                source={assets.ENG}
                style={[{aspectRatio: 16 / 9}]}
              />
            </View>
            <Text style={[tailwind('font-bold px-2 text-light py-1 font-13')]}>
              ENG
            </Text>
          </View>
        </View>
        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-regular py-1 text-dark-1 font-10')]}>
            Aus Beat Eng by 98 Runs
          </Text>
          <BottomLine />
        </View>
      </View>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row pl-12 items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.winning_cup}
            style={{width: 17, height: 17}}
          />
          <Text
            style={[
              tailwind('font-regular text-white text-secondary pl-2 font-15'),
            ]}>
            YOU WON
          </Text>
        </View>
        <Text
          style={[tailwind('font-regular text-right py-1 text-white font-15')]}>
          {'\u20B9'} 16,353
        </Text>
      </View>
    </View>
  );
};

const NewPoints = () => {
  return (
    <View style={[tailwind('flex-row items-center justify-between px-2 pb-2')]}>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          Highest Point
        </Text>
        <Text style={[tailwind('font-regular text-secondary pt-2 font-13')]}>
          807.4 (T1)
        </Text>
      </View>
      <View style={[tailwind('')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          Teams Created
        </Text>
        <Text
          style={[tailwind('font-regular text-white pt-2 text-right font-13')]}>
          20
        </Text>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-3 py-2  px-2 items-center'),
        {backgroundColor: '#121D2E'},
      ]}>
      <Text style={[tailwind('font-regular text-light font-12')]}>
        Ken Team: 929pts
      </Text>
    </View>
  );
};
