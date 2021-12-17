import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {BottomLine, CupIcon, EditIcon, MIcon, ShareIcon, SwitchIcon} from '../';
const log = console.log;

interface PropTypes {
  navigate(contest_key: string): any;
  contest_key: string;
  match_key: string;
  title: string;
  total_joined: number;
  total_spots: number;
  amount_letters: string;
  amount: string;
  guaranteed: boolean;
  entry: string;
  max_entry: number;
  bonus: string;
  is_practice: boolean;
  joined?: [];
}

const PROGRESS_BAR_HEIGHT = 3;

export default function ContestCard(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <View style={[tailwind('rounded bg-dark-3')]}>
      <TopSection />
      <Footer />
      <View style={[tailwind('p-2')]}>
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <Text style={[tailwind('font-regular text-white font-14')]}>
            Joined with 20 teams
          </Text>
          <Icon name="chevron-up-outline" size={16} color="white" />
        </View>

        <JoinedTeams />
        <View style={[tailwind('box rounded border-gray-700 px-2 bg-dark-4')]}>
          <TeamInfo />
          <BottomLine />
          <TeamInfo />
          <BottomLine />
          <TeamInfo />
        </View>
      </View>
      <ShareContest />
    </View>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('p-2')]}>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Prize Pool
          </Text>
          <Text style={[tailwind('font-bold pt-1 text-white font-15')]}>
            {'\u20B9'} 12.40 Lacks
          </Text>
        </View>

        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text style={[tailwind('font-bold pt-1 text-dark-1 font-14')]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
      {/* Progress bar */}
      <View style={[tailwind('mt-3 mb-2')]}>
        <View style={[{backgroundColor: '#8797B1', height: 2}]}>
          <View
            style={[
              tailwind(''),
              {backgroundColor: '#BCA04D', height: 2, width: '60%'},
            ]}></View>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <Text style={[tailwind('font-regular text-secondary font-12')]}>
          16,000 Spots left
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          20,000 Spots
        </Text>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between p-2'),
        {backgroundColor: '#121C2F'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <CupIcon />
          <Text style={[tailwind('font-regular px-0.5 text-dark-1 font-12')]}>
            Winnings
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center px-2')]}>
          <MIcon />
          <Text style={[tailwind('font-regular px-0.5 text-dark-1 font-12')]}>
            upto 20
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          Guaranteed
        </Text>
      </View>
    </View>
  );
};

const JoinedTeams = () => {
  return (
    <View style={[tailwind('flex-row items-center flex-wrap py-2')]}>
      {[
        'T1',
        'T1',
        'T3',
        'T1',
        'T1',
        'T3',
        'T1',
        'T1',
        'T3',
        'T1',
        'T1',
        'T3',
      ].map((item: any, index: number) => {
        return (
          <View
            style={[tailwind('py-1 rounded px-2 mr-1 mb-1 bg-dark-4')]}
            key={index}>
            <Text style={[tailwind('font-regular text-dark-1 font-12  ')]}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const TeamInfo = () => {
  return (
    <View style={[tailwind('flex-row items-center py-2 justify-between')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind(
              'font-regular text-white font-12 py-1 px-2 mr-1 mb-1 bg-dark-3',
            ),
          ]}>
          T2
        </Text>
        <View style={[tailwind('px-2')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <Text style={[tailwind('font-regular text-white font-14')]}>
              Virat kohli
            </Text>
          </View>
          <View style={[tailwind('flex-row pt-1 items-center')]}>
            <Text style={[tailwind('font-regular text-white font-14')]}>
              Rohit sharma
            </Text>
          </View>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity style={[tailwind('mx-1')]}>
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity style={[tailwind('mx-1')]}>
          <SwitchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShareContest = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-green p-2 rounded-b-lg flex-row items-center justify-between',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        Share this contest with your friends
      </Text>
      <ShareIcon />
    </View>
  );
};
