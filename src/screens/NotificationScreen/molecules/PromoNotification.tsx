import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

interface PropTypes {
  text?: string;
}

export default function PromoNotification(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 border-b border-gray-800')]}>
      <View style={[tailwind('flex-row items-center p-3')]}>
        <View>
          <Svg width="39" height="40" viewBox="0 0 39 40" fill="none">
            <Rect width="38.6654" height="40" rx="19.3327" fill="#0D1320" />
            <Path
              d="M27.3321 20.6672V29.9999H11.3332V20.6672H27.3321ZM10 16.6675H28.6654V20.6672H10V16.6675Z"
              stroke="white"
              stroke-miterlimit="10"
            />
            <Path
              d="M16.6662 16.6676V30V16.6676ZM21.9992 16.6676V30V16.6676ZM17.3995 11.0013C17.1619 10.6796 16.8497 10.4205 16.4897 10.2463C16.1297 10.0721 15.7327 9.98802 15.333 10.0014C14.7911 10.0008 14.2619 10.1653 13.8159 10.473C13.3699 10.7807 13.0282 11.217 12.8364 11.7238C12.6445 12.2306 12.6116 12.7837 12.742 13.3097C12.8725 13.8356 13.16 14.3093 13.5664 14.6677C14.9663 15.901 19.3327 16.6676 19.3327 16.6676C19.3327 14.6677 18.1994 11.9012 17.3995 11.0013ZM21.2659 11.0013C21.5035 10.6796 21.8157 10.4205 22.1757 10.2463C22.5357 10.0721 22.9327 9.98802 23.3324 10.0014C23.8743 10.0008 24.4035 10.1653 24.8495 10.473C25.2955 10.7807 25.6372 11.217 25.829 11.7238C26.0209 12.2306 26.0538 12.7837 25.9233 13.3097C25.7929 13.8356 25.5054 14.3093 25.099 14.6677C23.6991 15.901 19.3327 16.6676 19.3327 16.6676C19.3327 14.6677 20.4659 11.9012 21.2659 11.0013Z"
              stroke="white"
              stroke-miterlimit="10"
            />
          </Svg>
          <Elipses />
        </View>
        <View style={[tailwind('px-3'), {flex: 6.5}]}>
          <View>
            <Text style={[tailwind('font-bold text-light font-12')]}>
              You've got 50% discount in select contests!, Hurry join now!
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-12 py-1')]}>
              9 days
            </Text>
          </View>
        </View>
        <View style={[tailwind(''), {flex: 2}]}></View>
      </View>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('')]}
        colors={['#172338', '#8797B1', '#172338']}>
        <View style={[tailwind(''), {height: 1}]}></View>
      </LinearGradient> */}
    </View>
  );
}

const Elipses = () => {
  return (
    <View style={[tailwind('absolute right-0 top-1')]}>
      <Svg width="9" height="8" viewBox="0 0 9 8" fill="none">
        <Circle cx="4.66537" cy="4" r="4" fill="#EB5757" />
      </Svg>
    </View>
  );
};
