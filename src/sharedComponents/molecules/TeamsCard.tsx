/**
 * used on full contest and 2nd innings contests My teams page
 * have a edit and clone toolbar existed
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {CapIcon, VCIcon} from '../../assets/newIcons';
import MyTeamsTopSection from '../atoms/MyTeamTopSection';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  team_key: string;
  canModify: boolean;
  current: boolean;
  cap: any;
  vc: any;
  keepers: any[];
  batsman: any[];
  all_rounder: any[];
  bowler: any[];
  team_a: any;
  team_b: any;
  navigateToPreview(team_key: string): any;
  mutateTeam(team_key: string, edit: boolean, clone: boolean): any;
}
interface TeamContInfoTypes {
  name: string;
  count: number;
}

export default function TeamsCard(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <ImageBackground
        imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
        style={[{width: '100%'}]}
        source={assets.myTeamsBackground}>
        {/* Header */}

        <MyTeamsTopSection
          team_key={props.team_key}
          canModify={props.canModify}
          current={props.current}
          mutateTeam={props.mutateTeam}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigateToPreview(props.team_key)}
          style={[tailwind('flex-row justify-between items-center p-3')]}>
          {/* Players */}
          <View
            style={[
              tailwind('flex-row justify-around items-center'),
              {flex: 6},
            ]}>
            <PlayerProfile cap={true} index={true} name={props.cap.name} />
            <PlayerProfile cap={false} name={props.vc.name} />
          </View>

          {/* Count */}
          <View style={[tailwind('items-end'), {flex: 4}]}>
            <TeamCountInfo name={props.team_a.key} count={props.team_a.count} />
            <TeamCountInfo name={props.team_b.key} count={props.team_b.count} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <BottomStats
        batsman={props.batsman.length}
        keepers={props.keepers.length}
        all_rounder={props.all_rounder.length}
        bowler={props.bowler.length}
      />
    </View>
  );
}

const TeamCountInfo = (props: TeamContInfoTypes) => {
  return (
    <View style={[ss.teamCountRoot]}>
      <Text style={[ss.teamName]}>{props.name}</Text>
      <Text style={[ss.teamCount]}>{props.count}</Text>
    </View>
  );
};

const PlayerProfile = (props: any) => {
  return (
    <View style={[tailwind('flex-col')]}>
      <View style={[tailwind(''), {width: 55, height: 55}]}>
        <View style={[tailwind('absolute inset-0'), {}]}>
          {props.cap ? <CapIcon white={true} /> : <VCIcon white={true} />}
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
      style={[{padding: 2, borderRadius: 4}]}>
      <Text numberOfLines={1} style={[ss.playerName]}>
        {props.name}
      </Text>
    </LinearGradient>
  );
};

const BottomStats = (props: any) => {
  return (
    <View style={[ss.bottomRoot]}>
      <View style={[ss.itemRoot]}>
        <Text style={[ss.title]}>WK</Text>
        <Text style={[ss.count]}>{props.keepers}</Text>
      </View>

      <View style={[ss.itemRoot]}>
        <Text style={[ss.title]}>BAT</Text>
        <Text style={[ss.count]}>{props.batsman}</Text>
      </View>

      <View style={[ss.itemRoot]}>
        <Text style={[ss.title]}>AR</Text>
        <Text style={[ss.count]}>{props.all_rounder}</Text>
      </View>

      <View style={[ss.itemRoot]}>
        <Text style={[ss.title]}>BOWL</Text>
        <Text style={[ss.count]}>{props.bowler}</Text>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    borderRadius: 8,
    marginVertical: 8,
  },
  teamCountRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2,
  },
  teamName: {
    fontFamily: 'gadugi-normal',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 12,
    color: '#FFFFFF',
  },
  teamCount: {
    borderRadius: 4,
    color: '#FFFFFF',
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  bottomRoot: {
    alignItems: 'center',
    backgroundColor: '#172338',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  itemRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2.5,
  },
  title: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 14,
  },
  count: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    paddingHorizontal: 8,
  },
  playerName: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 9,
    textAlign: 'center',
  },
});
