import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function CommentaryPage(props: PropTypes) {
  return (
    <View style={[tailwind('my-3')]}>
      <CommentryByOvers title={4} over={2.3} hasPlayer={true} />
      <View style={[tailwind('bg-dark-4 mx-4 my-3')]}>
        <Text style={[tailwind('font-bold text-dark-1 font-12')]}>
          End of Over 2
        </Text>
      </View>
      <CommentryByOvers title={10} over={2.3} hasPlayer={true} />

      <CommentryByOvers title={'W'} over={2.3} hasPlayer={false} />
      <CommentryByOvers title={'1'} over={2.3} hasPlayer={true} />
    </View>
  );
}

const CommentryByOvers = (props: any) => {
  return (
    <View style={[tailwind('flex-row bg-dark-3 py-3')]}>
      <View style={[tailwind('flex-col pt-2 items-center'), {flex: 2}]}>
        <Title title={props.title} />
        <Text style={[tailwind('font-regular text-light py-2 font-11')]}>
          {props.over}
        </Text>
      </View>
      <View style={[tailwind('mt-1'), {flex: 8}]}>
        <View style={[tailwind('mr-2')]}>
          <Text style={[tailwind('font-regular text-light font-12')]}>
            Mohammad Wasim Jr to Shamim Hossain, no run, shorter and closer to
            off, defended off the back foot to the off-side
          </Text>
        </View>
        {props.hasPlayer && (
          <>
            <Player />
            <Points />
          </>
        )}
      </View>
    </View>
  );
};

const Line = () => {
  return (
    <View
      style={[
        tailwind('h-1 w-4 bg-red-600'),
        {transform: [{rotate: '90deg'}]},
      ]}></View>
  );
};

const Title = ({title}) => {
  return (
    <View
      style={[
        tailwind('bg-secondary flex-col items-center justify-center'),
        {
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 0,
        },
      ]}>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[
          tailwind('font-bold text-center text-brown-5 font-13'),
          {
            fontFamily: 'gadugi-gras',
            lineHeight: 20,
            paddingRight: 3,
          },
        ]}>
        {' '}
        {title}
      </Text>
    </View>
  );
};

const Player = () => {
  return (
    <View
      style={[
        tailwind(
          'flex-row rounded py-2 pr-3 mr-2 bg-dark-4 my-3 justify-between items-center',
        ),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
        <Text style={[tailwind('font-regular px-2 text-light font-14')]}>
          T Seifert
        </Text>
      </View>

      <View style={[tailwind('flex-row  items-center')]}>
        <Text style={[tailwind('font-bold text-light px-2 font-16')]}>
          +9.0
        </Text>
        <Text style={[tailwind('font-regular text-light font-15')]}>pts</Text>
      </View>
    </View>
  );
};

const Points = () => {
  return (
    <View style={[tailwind('flex-row flex-wrap items-center')]}>
      {[2, 3, 5].map((item: any) => {
        return (
          <LinearGradient
            key={item}
            start={{x: 0.8, y: 2.0}}
            end={{x: 0.0, y: 0.5}}
            locations={[0.6, 0.5]}
            style={[
              tailwind(
                'flex-row mr-3 border border-gray-900 items-center justify-between rounded py-1',
              ),
            ]}
            colors={['#25385A', '#172338']}>
            <Text style={[tailwind('font-regular px-1 text-dark-1 font-15')]}>
              T17
            </Text>
            <Text style={[tailwind('font-regular px-1 text-dark-1 font-15')]}>
              +5
            </Text>
          </LinearGradient>
        );
      })}
    </View>
  );
};
