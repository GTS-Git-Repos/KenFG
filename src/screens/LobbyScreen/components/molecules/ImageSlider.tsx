import React, {useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import assets from '../../../../constants/assets_manifest';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

interface PropTypes {
  images: [];
  location: number;
}

const ImageSlider = (props: any) => {
  const navigation = useNavigation();
  const [height, setHeight] = useState(150);

  const calcHeight = (e: any) => {
    const {height} = e.nativeEvent.layout;
    setHeight(height);
  };

  const navigate = (item: any) => {
    return 0;
  };

  return (
    <Swiper
      loop={true}
      showsButtons={false}
      autoplay={false}
      showsPagination={true}
      loadMinimal={true}
      loadMinimalSize={2}
      removeClippedSubviews={true}
      activeDotColor={'#d1b45a'}
      activeDot={<ActiveDot />}
      dotColor="#F3F3F3"
      style={[tailwind('my-1'), {height: height}]}>
      <TouchableOpacity style={[tailwind('mx-2')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: '100%', height: height}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[tailwind('mx-2')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: '100%', height: height}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[tailwind('mx-2')]}>
        <Image
          resizeMode="contain"
          source={assets.banner1}
          style={{width: '100%', height: height}}
        />
      </TouchableOpacity>
    </Swiper>
  );
};

const ActiveDot = () => {
  return (
    <View
      style={{
        position: 'relative',
        top: 20,
        backgroundColor: '#D0B55B',
        width: 14,
        height: 7,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 1,
        marginBottom: 1,
      }}
    />
  );
};

export default ImageSlider;
