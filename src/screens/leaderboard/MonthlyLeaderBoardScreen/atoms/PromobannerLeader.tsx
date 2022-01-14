import React, {useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {}

export default function LeaderBoardBannerSlider(props: PropTypes) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<any>();
  const sliderRef = useRef();

  return (
    <View style={[tailwind('my-3')]}>
      <Carousel
        ref={sliderRef}
        data={[1, 2, 4]}
        renderItem={() => {
          return <Banner />;
        }}
        inactiveSlideScale={0.9}
        sliderWidth={width}
        itemWidth={width - 60}
      />
      <Pagination
        dotsLength={3}
        activeDotIndex={0}
        containerStyle={tailwind('p-0 pt-3  m-0')}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 5,
          backgroundColor: '#006A4D',
        }}
        inactiveDotStyle={{
          width: 7,
          height: 7,
          borderRadius: 7,
          backgroundColor: '#8797B1',
          marginHorizontal: 0,
          paddingHorizontal: 0,
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const Banner = () => {
  return (
    <View
      style={[
        tailwind('w-full rounded-lg bg-blue-600'),
        {height: 120, backgroundColor: '#9B51E0'},
      ]}></View>
  );
};
