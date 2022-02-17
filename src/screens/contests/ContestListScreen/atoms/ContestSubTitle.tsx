import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../../../store/selectors';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  subText: string;
  actionText?: string;
  discount?: boolean;
}

export default function SubTitle(props: PropTypes) {
  const clr = useSelector(appColorsSelector);

  console.log(tailwind('font-bold py-1 text-light font-17'));

  return (
    <View style={[tailwind('px-3 py-2')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-grow')]}>
          <Text style={[styles.title,clr.txt_1]}>{props.title}</Text>
          <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
            {props.subText}
          </Text>
          {props.discount && (
            <TouchableOpacity
              style={[tailwind('w-24 rounded my-2 bg-secondary p-2')]}>
              <Text
                adjustsFontSizeToFit={true}
                allowFontScaling={true}
                style={[tailwind('font-semibold text-center font-11')]}>
                Discount
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[tailwind('flex flex-row')]}>
          {props.actionText && (
            <TouchableOpacity>
              <Text style={[tailwind('font-regular font-15')]}>
                {props.actionText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 17,
    paddingBottom: 4,
    paddingTop: 4,
  },
});
