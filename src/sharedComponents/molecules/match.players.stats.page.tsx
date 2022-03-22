import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import assets from '../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';
import StatusIndicator from '../atoms/status.indicator';

interface PropTypes {
  index: number;
  activeIndex: number;
  players: Array<any> | null;
}

const PLAYERWIDTH = 180;
const COLWIDTH = 80;

export default function MatchPlayersStatsPage(props: PropTypes) {
  const ACTIVE = props.index === props.activeIndex;

  const navigation = useNavigation<any>();

  if (!ACTIVE) {
    return <StatusIndicator loading={true} error={false} />;
  }

  if (!props.players) {
    return <StatusIndicator loading={false} error={true} />;
  }

  return (
    <ScrollView>
      <Filter />
      <View style={[ss.container]}>
        <View>
          <View style={[ss.col1]}>
            <Text style={[ss.headTxt]}>PLAYERS</Text>
          </View>
          {props.players.map((item: any) => {
            return (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate('MyMatchPlayerScreen')}
                style={[ss.pContainer]}>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[ss.image]}
                />
                <View style={[ss.space]}>
                  <Text numberOfLines={1} style={[ss.pname]}>
                    {item.name}
                  </Text>
                  <Text style={[ss.role]}>IND-BAT</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* meta */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <TableRow />
            {props.players.map((item: any) => {
              return (
                <TouchableOpacity
                  key={item.name}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('MyMatchPlayerScreen')}
                  style={[ss.colItemC]}>
                  <View style={[ss.colItem]}>
                    <Text style={[ss.metaTxt]}>{item.points}</Text>
                  </View>
                  <View style={[ss.colItem]}>
                    <Text style={[ss.metaTxt]}>N/A</Text>
                  </View>
                  <View style={[ss.colItem]}>
                    <Text style={[ss.metaTxt]}>N/A</Text>
                  </View>
                  <View style={[ss.colItem]}>
                    <Text style={[ss.metaTxt]}>N/A</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const Filter = () => {
  return (
    <View style={[ss.filterRoot]}>
      <TouchableOpacity style={[ss.dOption1, ss.dSelOption]}>
        <Text style={[ss.filTxt, ss.dSelTextClr]}>By Contest</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[ss.dOption2]}>
        <Text style={[ss.filTxt]}>By Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ss.dOption3]}>
        <Text style={[ss.filTxt]}>By Team</Text>
      </TouchableOpacity>
    </View>
  );
};

const TableRow = () => {
  return (
    <View style={[ss.colsC]}>
      <View style={[ss.col]}>
        <Text style={[ss.colText]}>Points</Text>
      </View>
      <View style={[ss.col]}>
        <Text style={[ss.colText]}>Sel by</Text>
      </View>
      <View style={[ss.col]}>
        <Text style={[ss.colText]}>% C by</Text>
      </View>
      <View style={[ss.col]}>
        <Text style={[ss.colText]}>% VC by</Text>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  filterRoot: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
  },

  dOption1: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 120,
    borderColor: '#25385A',
    borderWidth: 1,
    borderRightWidth: 0,
  },
  dOption2: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 110,
    borderColor: '#25385A',
    borderWidth: 1,
  },
  dOption3: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 110,
    borderColor: '#25385A',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
  },

  dSelOption: {
    backgroundColor: '#C5A858',
  },
  filTxt: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dSelTextClr: {
    color: '#3A2B13',
  },
  container: {
    flexDirection: 'row',
  },
  col1: {
    padding: 8,
    width: PLAYERWIDTH,
    borderRightColor: '#172338',
    borderRightWidth: 1,
  },
  headTxt: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    textTransform: 'uppercase',
    fontSize: 12,
    paddingHorizontal: 12,
  },
  pContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    width: PLAYERWIDTH,
    height: 48,
    backgroundColor: '#172338',
    borderRightColor: '#0c1320',
    borderRightWidth: 1,
  },
  image: {
    width: 36,
    height: 36,
  },
  space: {
    paddingHorizontal: 8,
  },
  pname: {
    fontFamily: 'gadugi-bold',
    width: 120,
    color: '#FFFFFF',
  },
  role: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    fontSize: 11,
  },
  colsC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 4,
    backgroundColor: '#0c1320',
  },
  col: {
    width: COLWIDTH,
  },
  colText: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  colItemC: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#172338',
  },
  colItem: {
    width: COLWIDTH,
    paddingHorizontal: 8,
  },
  metaTxt: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    fontSize: 14,
  },
});
