import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  selectedTab: number;
  onTabPressed: any;
}

export default function Tabs(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-3 items-center border-b border-gray-800'),
      ]}>
      <TouchableOpacity
        onPress={() => props.onTabPressed(0)}
        style={[tailwind(''), {flex: 4}]}>
        <Tab tabText={'Upcomming'} active={props.selectedTab === 0} />
        {props.selectedTab === 0 ? (
          <BottomLine />
        ) : (
          <View style={{height: 2}} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(1)}
        style={[tailwind(''), {flex: 4}]}>
        <Tab tabText={'Live'} active={props.selectedTab === 1} />
        {props.selectedTab === 1 ? (
          <BottomLine />
        ) : (
          <View style={{height: 2}} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(2)}
        style={[tailwind(''), {flex: 4}]}>
        <Tab tabText={'Completed'} active={props.selectedTab === 2} />
        {props.selectedTab === 2 ? (
          <BottomLine />
        ) : (
          <View style={{height: 2}} />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[tailwind('flex-row bg-dark-3 items-center')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <TouchableOpacity style={[tailwind('pt-4 pb-3')]}>
          <Text style={[tailwind('font-bold text-center text-white font-14')]}>
            Series
          </Text>
        </TouchableOpacity>
        {props.selectedTab === 0 && <BottomLine />}
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <TouchableOpacity style={[tailwind('pt-4 pb-3')]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Weekly
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Tab = (props: any) => {
  return (
    <View style={[tailwind('pt-4 pb-3')]}>
      <Text
        style={[
          tailwind(
            `font-regular text-center text-dark-1 font-14 ${
              props.active ? 'font-bold text-white' : ''
            }`,
          ),
        ]}>
        {props.tabText}
      </Text>
    </View>
  );
};

const BottomLine = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('')]}
      colors={['#816D2E', '#614920']}>
      <View style={[tailwind(''), {height: 2}]}></View>
    </LinearGradient>
  );
};
