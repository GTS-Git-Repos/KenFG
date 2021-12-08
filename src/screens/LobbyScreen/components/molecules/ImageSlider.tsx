import React, {useState, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from '../../../../constants/assets_manifest';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface PropTypes {
  data: [];
  status: string;
}

const ImageSlider = (props: any) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<any>();
  const swiperRef = useRef();

  const [height, setHeight] = useState(150);

  const calcHeight = (e: any) => {
    const {height} = e.nativeEvent.layout;
    setHeight(height);
  };

  const navigate = (item: any) => {
    return 0;
  };

  if (!props.data) {
    return null;
  }

  return (
    <Swiper
      loop={true}
      showsButtons={false}
      autoplay={true}
      showsPagination={true}
      loadMinimal={true}
      loadMinimalSize={2}
      autoplayTimeout={2}
      removeClippedSubviews={true}
      activeDotColor={'#d1b45a'}
      activeDot={<ActiveDot />}
      dot={<Dot />}
      width={width}
      style={[tailwind('my-1'), {height: height, overflow: 'visible'}]}>
      {props.data.map((item: any) => {
        return (
          <TouchableOpacity
            key={item.banner_key}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ContestListScreen')}
            style={[tailwind('flex-row mx-5 justify-center items-center')]}>
            <FastImage
              fallback={true}
              resizeMode={FastImage.resizeMode.contain}
              source={{
                uri: item.banner_url,
                priority: FastImage.priority.low,
                cache: FastImage.cacheControl.immutable,
              }}
              style={{
                width: '100%',
                borderRadius: 10,
                aspectRatio: 2 / 1,
                height: height,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </Swiper>
  );
};

const ActiveDot = () => {
  return (
    <View
      style={{
        position: 'relative',
        top: 25,
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

const Dot = () => {
  return (
    <View
      style={{
        position: 'relative',
        top: 25,
        backgroundColor: '#F3F3F3',
        width: 7,
        height: 7,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 1,
        marginBottom: 1,
      }}
    />
  );
};

export default ImageSlider;
