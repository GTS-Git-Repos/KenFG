import React, {useState, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Text,
  ToastAndroid,
} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {upcommingMatchesandBannersRemote} from '../../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../../store/selectors';
import {
  updateSelectedContestAction,
  updateSelectedMatchAction,
} from '../../../../store/actions/appActions';

interface PropTypes {
  data: [];
  status: string;
}

const ImageSlider = (props: any) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<any>();
  const swiperRef = useRef();
  const dispatch = useDispatch();
  const userInfoSelector = useSelector(userInfo);

  const [height, setHeight] = useState(95);

  const upcommingMatches = useQuery(
    ['upcomingMatches', userInfoSelector?.mobile],
    upcommingMatchesandBannersRemote,
  );

  const calcHeight = (e: any) => {
    const {height} = e.nativeEvent.layout;
    // setHeight(height);
  };

  const navigate = (item: any) => {
    try {
      if (upcommingMatches.data?.matches) {
        const match = upcommingMatches.data?.matches[0];
        let obj = {
          match_key: match.key,
          team_a: match.teams.a.key,
          team_b: match.teams.b.key,
        };
        // console.log(obj);

        dispatch(updateSelectedContestAction(null));
        dispatch(updateSelectedMatchAction(obj));
        navigation.navigate('ContestListScreen');
      } else {
        throw 'err';
      }
    } catch (err) {
      ToastAndroid.show('Navigation Disabled ', ToastAndroid.SHORT);
    }
  };

  if (!props.data) {
    return null;
  }

  return (
    <Swiper
      loop={true}
      showsButtons={false}
      autoplay={true}
      showsPagination={false}
      removeClippedSubviews={false}
      // loadMinimal={true}
      // loadMinimalSize={2}
      // autoplayTimeout={2}
      // removeClippedSubviews={true}
      activeDotColor={'#d1b45a'}
      activeDot={<ActiveDot />}
      dot={<Dot />}
      width={width}
      style={[tailwind(''), {height: height, overflow: 'visible'}]}>
      {props.data.map((item: any) => {
        return (
          <TouchableOpacity
            onLayout={calcHeight}
            key={item.banner_key}
            activeOpacity={0.7}
            onPress={navigate}
            style={[tailwind('flex-row mx-5 justify-center items-center')]}>
            <FastImage
              fallback={true}
              resizeMode={FastImage.resizeMode.stretch}
              source={{
                uri: item.banner_url,
                priority: FastImage.priority.low,
                cache: FastImage.cacheControl.immutable,
              }}
              style={{
                width: '100%',
                borderRadius: 10,
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
