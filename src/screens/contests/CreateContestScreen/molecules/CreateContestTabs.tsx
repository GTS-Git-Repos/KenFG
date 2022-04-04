import React, {Dispatch, SetStateAction} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {QuestionIcon, TabsBottomLine} from '../../../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';
import clr from '../../../../constants/colors';

interface PropTypes {
  activeIndex: number;
  onTabPressed(item: any): any;
  dT: boolean;
}

const TABWIDTH = Dimensions.get('window').width / 4;
const DATA = ['Create', 'Share', 'Join'];

export default function Tabs(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? ss.dBorder : ss.lBorder]}>
      {DATA.map((item: any, index: number) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => props.onTabPressed(index)}
            style={[ss.section]}>
            {dT ? (
              <Text
                style={[
                  ss.txt,
                  index === props.activeIndex ? clr.tw : clr.td2,
                ]}>
                {item}
              </Text>
            ) : (
              <Text
                style={[
                  ss.txt,
                  index === props.activeIndex ? clr.tr : clr.td1,
                ]}>
                {item}
              </Text>
            )}

            {props.activeIndex === index ? (
              <BottomLine dT={dT} />
            ) : (
              <View style={[tailwind('mt-3')]} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomLine = (props: any) => {
  const gradient = props.dT ? ['#816D2E', '#614920'] : ['#9C181E', '#9C181E'];
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('rounded h-0.5 mt-3')]}
      colors={gradient}></LinearGradient>
  );
};

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dBorder: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
    backgroundColor: '#172338',
  },
  lBorder: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    paddingTop: 12,
    flex: 4,
  },
  txt: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Gadugi-Normal',
  },
});
