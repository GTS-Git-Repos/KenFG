/**
 * used on full contest and 2nd innings contests My teams page
 * team selection screen
 * have a edit and clone toolbar existed
 */

import React from 'react';
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
import {CapIcon, VCIcon, PencilEditIcon} from '../../assets/newIcons';
import LinearGradient from 'react-native-linear-gradient';
import CloneIcon from '../icons/CloneIcon';

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
  // NOTE: don't pass empty string
  hasPoints: boolean | string;
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
        <View style={[ss.tsRoot, props.canModify && ss.toolbar]}>
          <Text style={[ss.teamKey]}>{props.team_key}</Text>
          {props.canModify && (
            <View style={[ss.frc]}>
              <TouchableOpacity
                onPress={() => props.mutateTeam(props.team_key, false, true)}
                style={[ss.space]}>
                <CloneIcon dT={true} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.mutateTeam(props.team_key, true, false)}>
                <PencilEditIcon background={false} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigateToPreview(props.team_key)}
          style={[ss.main]}>
          {/* Players */}
          <View style={[ss.playersRoot]}>
            <CapVC cap={true} index={true} name={props.cap.name} />
            <CapVC cap={false} name={props.vc.name} />
          </View>

          {props.hasPoints ? (
            <View style={[ss.section2]}>
              <View style={[ss.teamCountRoot]}>
                <Text style={[ss.teamName]}>POINTS</Text>
                <Text style={[ss.teamCount]}>{props.hasPoints}</Text>
              </View>
            </View>
          ) : (
            <View style={[ss.section2]}>
              <TeamCountInfo
                name={props?.team_a?.key}
                count={props?.team_a?.count}
              />
              <TeamCountInfo
                name={props?.team_b?.key}
                count={props?.team_b?.count}
              />
            </View>
          )}
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

const CapVC = (props: any) => {
  return (
    <View>
      <View style={[ss.capVCroot]}>
        <View style={[ss.iconC]}>
          {props.cap ? <CapIcon white={true} /> : <VCIcon white={true} />}
        </View>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[ss.capVCroot]}
        />
        <View style={[ss.nameC]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={props.cap ? ['#254987', '#172338'] : ['#172338', '#6C221E']}
            style={[{padding: 2, borderRadius: 4}]}>
            <Text numberOfLines={1} style={[ss.playerName]}>
              {props.name}
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
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

  tsRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  toolbar: {
    justifyContent: 'space-between',
  },

  teamKey: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    paddingHorizontal: 8,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingBottom: 24,
  },
  playersRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 6,
  },
  capVCroot: {
    width: 60,
    height: 60,
  },
  iconC: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  nameC: {
    bottom: 6,
  },
  playerName: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    width: 50,
    textAlign: 'center',
  },
  section2: {
    alignItems: 'flex-end',
    flex: 4,
    top: 8,
  },
});
