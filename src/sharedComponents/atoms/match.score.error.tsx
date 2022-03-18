import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import assets from '../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import TopBar from '../atoms/TopBar';
import ButtonComponent from '../atoms/ButtonComponent';

interface PropTypes {
  refetch(): any;
}

export default function MatchScoreError(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[ss.root]}>
      <TopBar text={''} />
      <View style={[ss.iC]}>
        <Image
          resizeMode="contain"
          source={assets.cricketGame}
          style={[ss.image]}
        />
        <Text style={ss.title}>Failed to retrive match score</Text>

        <Text style={[ss.txt]}>
          It may happen if the match score is not ready or internet connecion
          issue Please check your internet connection and try again later
        </Text>
      </View>
      <TouchableOpacity onPress={props.refetch} style={[ss.bSpace]}>
        <ButtonComponent text={'TRY AGAIN'} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#0D1320',
  },
  iC: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  txt: {
    fontFamily: 'gadugi-normal',
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 13,
    width: 300,
    textAlign: 'center',
  },
  bSpace: {
    margin: 16,
  },
});
