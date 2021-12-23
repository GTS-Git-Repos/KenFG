import React, {useRef} from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  goto: string;
  type: number;
  text: string;
}

export default function LeaderBoardBannerSlider(props: PropTypes) {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<any>();
  const sliderRef = useRef();

  const navigate = () => {
    if (props.type === -1) {
      navigation.navigate(props.goto);
    } else if (props.type === 0) {
      navigation.navigate('MonthlyLeaderBoardScreen', {
        name: 'Weekly Leaderboard',
        type: 0,
      });
    } else {
      navigation.navigate('MonthlyLeaderBoardScreen', {
        name: 'Montly Leaderboard',
        type: 1,
      });
    }
  };

  return (
    <View style={[tailwind('')]}>
      <Carousel
        ref={sliderRef}
        data={[1, 2, 4]}
        renderItem={() => {
          return <Banner navigate={navigate} />;
        }}
        inactiveSlideScale={0.9}
        sliderWidth={width}
        itemWidth={width - 70}
      />
      <Pagination
        dotsLength={3}
        activeDotIndex={0}
        containerStyle={tailwind('p-0 pt-3  m-0')}
        dotStyle={{
          width: 15,
          height: 6,
          borderRadius: 5,
          backgroundColor: '#BCA04D',
        }}
        inactiveDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 8,
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

const Banner = (props: any) => {
  return (
    <TouchableOpacity onPress={props.navigate}>
      <Image
        resizeMode="stretch"
        source={assets.banner1}
        style={[tailwind('w-full'), {height: 120}]}
      />
    </TouchableOpacity>
  );
};
