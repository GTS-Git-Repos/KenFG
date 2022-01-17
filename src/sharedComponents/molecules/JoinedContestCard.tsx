import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  BottomLine,
  CIcon,
  CupIcon,
  EditIcon,
  MIcon,
  ShareIcon,
  SwitchIcon,
  TeamCode,
  TickIcon,
  VCIcon,
} from '../';
const log = console.log;

interface PropTypes {
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
  teams: Array<any>;
  navigate(contest_key: string): any;
}

export default function ContestCard(props: PropTypes) {
  const navigation = useNavigation<any>();

  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('ContestsLiveMatchScreen')}
      style={[tailwind('rounded mb-2 bg-dark-3')]}>
      <TopSection title={props.title} />
      <Footer />
      <View style={[tailwind('p-2')]}>
        <View style={[tailwind('flex-row items-center justify-between')]}>
          <Text style={[tailwind('font-regular text-white font-14')]}>
            Joined with {props.teams.length} teams
          </Text>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Icon name="chevron-up-outline" size={16} color="#FFFFFF80" />
          </TouchableOpacity>
        </View>

        <JoinedTeams teams={props.teams} />
        {open && (
          <View style={[tailwind('box rounded px-2 bg-dark-4'), styles.border]}>
            <TeamInfo />
            <BottomLine />
            <TeamInfo />
            <BottomLine />
            <TeamInfo />
          </View>
        )}
      </View>
      <ShareContest />
    </TouchableOpacity>
  );
}

const TopSection = (props: any) => {
  return (
    <View style={[tailwind('p-2')]}>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Prize Pool
          </Text>
          <Text style={[tailwind('font-bold pt-1 text-white font-15')]}>
            {'\u20B9'}
            {props.title}
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
        <View style={[{backgroundColor: '#8797B14D', height: 2.5}]}>
          <View
            style={[
              tailwind(''),
              {backgroundColor: '#B2933D', height: 2.5, width: '60%'},
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
        tailwind('flex-row items-center justify-between p-3'),
        {backgroundColor: '#121C2F'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <CupIcon />
          <Text style={[tailwind('font-regular px-1 text-dark-1 font-12')]}>
            Winnings
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center px-2')]}>
          <MIcon />
          <Text style={[tailwind('font-regular px-1 text-dark-1 font-12')]}>
            upto 20
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <TickIcon />
        <Text style={[tailwind('font-regular pl-1 text-dark-1 font-12')]}>
          Guaranteed
        </Text>
      </View>
    </View>
  );
};

const JoinedTeams = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center flex-wrap py-2')]}>
      {props.teams.map((item: any, index: number) => {
        return <TeamCode code={item} key={index} />;
      })}
    </View>
  );
};

const TeamInfo = () => {
  return (
    <View style={[tailwind('flex-row items-center py-2 px-1 justify-between')]}>
      <View style={[tailwind('flex-row items-center')]}>
        {/* Team Code */}
        <View
          style={[
            tailwind('py-0.5 mr-1 mb-1 bg-dark-3'),
            {borderRadius: 2, paddingHorizontal: 6},
          ]}>
          <Text style={[tailwind('font-regular text-white font-12')]}>T2</Text>
        </View>
        <View style={[tailwind('px-2')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <CIcon />
            <Text style={[tailwind('font-regular px-1 text-white font-14')]}>
              Virat kohli
            </Text>
          </View>
          <View style={[tailwind('flex-row pt-1 items-center')]}>
            <VCIcon />
            <Text style={[tailwind('font-regular px-1 text-white font-14')]}>
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

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#8797B14D',
    borderTopColor: '#8797B14D',
    borderLeftColor: '#8797B14D',
    borderRightColor: '#8797B14D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
  },
});
