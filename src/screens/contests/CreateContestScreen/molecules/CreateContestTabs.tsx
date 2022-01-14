import React, {Dispatch, SetStateAction} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {QuestionIcon, TabsBottomLine} from '../../../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  activeIndex: number;
  onTabPressed(item: any): any;
}

const TABWIDTH = Dimensions.get('window').width / 4;
const DATA = ['Create', 'Share', 'Join'];

export default function Tabs(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 flex-row items-center border border-gray-800 mb-0.5',
        ),
      ]}>
      {DATA.map((item: any, index: number) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => props.onTabPressed(index)}
            style={[tailwind('pt-3'), {flex: 4}]}>
            <Text
              style={[
                tailwind(
                  `text-center font-14 font-regular ${
                    props.activeIndex === index
                      ? 'font-bold text-white'
                      : 'text-dark-1'
                  }`,
                ),
              ]}>
              {item}
            </Text>
            {props.activeIndex === index ? (
              <BottomLine />
            ) : (
              <View style={[tailwind('mt-3')]} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 flex-row items-center border border-gray-800 mb-0.5',
        ),
      ]}>
      <TouchableOpacity
        onPress={() => props.onTabPressed(0)}
        style={[tailwind('pt-3'), {flex: 4}]}>
        <Text
          style={[
            tailwind(
              `text-center font-14 ${
                props.activeIndex === 0
                  ? 'font-bold text-white'
                  : 'font-regular text-dark-1'
              }`,
            ),
          ]}>
          Create
        </Text>
        {props.activeIndex === 0 ? (
          <BottomLine />
        ) : (
          <View style={[tailwind('mt-3')]} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(1)}
        style={[tailwind('pt-3'), {flex: 4}]}>
        <Text
          style={[
            tailwind(
              `text-center  font-14 ${
                props.activeIndex === 1
                  ? 'font-bold text-white'
                  : 'font-regular text-dark-1'
              }`,
            ),
          ]}>
          Share
        </Text>
        {props.activeIndex === 1 ? (
          <BottomLine />
        ) : (
          <View style={[tailwind('mt-3')]} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onTabPressed(2)}
        style={[tailwind('pt-3'), {flex: 4}]}>
        <View style={[tailwind('flex-row items-center justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.help}
            style={[tailwind(''), {width: 20, height: 20}]}
          />
        </View>
        {/* <QuestionIcon/> */}
        {props.activeIndex === 2 ? (
          <BottomLine />
        ) : (
          <View style={[tailwind('mt-3')]} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const BottomLine = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('rounded h-0.5 mt-3')]}
      colors={['#816D2E', '#614920']}></LinearGradient>
  );
};
