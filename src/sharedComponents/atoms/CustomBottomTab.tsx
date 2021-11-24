import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import tailwind from '../../../tailwind';
import assets from '../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomBottomTab({state, descriptors, navigation}: any) {
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => {
      setShowTab(false);
    });
    const close = Keyboard.addListener('keyboardDidHide', () => {
      setShowTab(true);
    });
    return () => {
      show.remove();
      close.remove();
    };
  }, []);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (showTab === false) {
    return null;
  }

  return (
    <LinearGradient
      start={{x: 0.0, y: 3.0}}
      end={{x: 0.7, y: 0.1}}
      locations={[0, 0.8, 0.8]}
      colors={['#c5a959', '#c5a959', '#bea14f']}
      style={tailwind('flex flex-row py-1 bg-secondary items-center')}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // console.log(route);
            try {
              navigation.navigate(route.state.routeNames[0]);
            } catch {
              navigation.navigate(route.name);
            }
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              paddingVertical: 2,
              // transform: [{scale: isFocused ? 2 : 1}],
            }}>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              {/* <View
                style={[
                  tailwind(
                    'bg-green-500 h-20 w-10 border-2 border-red-400  absolute top-0 rounded-full',
                  ),
                  {transform: [{scaleY: 2}, {scaleX: 2}]},
                  // {backgroundColor: 'transparent'},
                ]}></View> */}
              {index === 0 ? (
                <Image
                  resizeMode="contain"
                  source={isFocused ? assets.home_tab : assets.home_tab_off}
                  style={[tailwind('w-8 h-8')]}
                />
              ) : index === 1 ? (
                <Image
                  resizeMode="contain"
                  source={
                    isFocused ? assets.contest_tab_on : assets.contest_tab
                  }
                  style={[tailwind('w-8 h-8')]}
                />
              ) : index === 2 ? (
                <Image
                  resizeMode="contain"
                  source={isFocused ? assets.leader_tab_on : assets.leader_tab}
                  style={[tailwind('w-8 h-8')]}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={isFocused ? assets.more_tab_on : assets.more_tab}
                  style={[tailwind('w-8 h-8')]}
                />
              )}

              <Text
                style={[
                  tailwind(
                    `text-white text-center uppercase pt-1  font-bold  ${
                      isFocused
                        ? 'text-red-600 font-10'
                        : 'text-secondary font-10'
                    }`,
                  ),
                  {color: `${isFocused ? '#172339' : '#7e6b2d'}`},
                ]}>
                {label}
              </Text>
              {/* {isFocused && (
                <View
                  style={[
                    tailwind(
                      'rounded-full absolute w-24 h-24 flex-col items-center justify-center',
                    ),
                    {
                      backgroundColor: 'transparent',
                      borderTopColor: '#C4A958',
                      borderTopWidth: 25,
                    },
                  ]}></View>
              )} */}
            </View>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
}

{
  /* <LinearGradient
start={{x: 0.0, y: 0.1}}
end={{x: 0.7, y: 2.0}}
locations={[0, 0.8, 0.7]}
colors={['#4c669f', '#3b5998', '#192f6a']} */
}
