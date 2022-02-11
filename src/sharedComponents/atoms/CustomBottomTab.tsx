import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import tailwind from '../../../tailwind';
import assets from '../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {
  ContestsBottomTabOff,
  ContestsBottomTabOn,
  HomeBottomTabOff,
  HomeBottomTabOn,
  LeaderBottomTabOff,
  LeaderBottomTabOn,
  MoreBottomTabOff,
  MoreBottomTabOn,
} from '../../assets/newIcons';
import {useDispatch, useSelector} from 'react-redux';
import {updateEnableDarkMode} from '../../store/actions/appActions';

export default function CustomBottomTab({state, descriptors, navigation}: any) {
  const isDarkModeEnable = useSelector<any>(state => state.app.darkModeEnabled);
  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(true);

  // useEffect(() => {
  //   const show = Keyboard.addListener('keyboardDidShow', () => {
  //     setShowTab(false);
  //   });
  //   const close = Keyboard.addListener('keyboardDidHide', () => {
  //     setShowTab(true);
  //   });
  //   return () => {
  //     show.remove();
  //     close.remove();
  //   };
  // }, []);

  function changeDarkMode() {
    dispatch(updateEnableDarkMode(!isDarkModeEnable));
  }

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (showTab === false) {
    return null;
  }

  return (
    <View>
      {/* <DebugThemeSwitcher
        isDarkModeEnable={isDarkModeEnable}
        changeDarkMode={changeDarkMode}
      /> */}

      <View
        style={[
          tailwind('flex flex-row py-1 bg-secondary items-center'),
          {backgroundColor: '#BCA04D'},
        ]}>
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
              <View
                style={tailwind('flex flex-col justify-center items-center')}>
                {index === 0 ? (
                  isFocused ? (
                    <HomeBottomTabOn />
                  ) : (
                    <HomeBottomTabOff />
                  )
                ) : index === 1 ? (
                  isFocused ? (
                    <ContestsBottomTabOn />
                  ) : (
                    <ContestsBottomTabOff />
                  )
                ) : index === 2 ? (
                  isFocused ? (
                    <LeaderBottomTabOn />
                  ) : (
                    <LeaderBottomTabOff />
                  )
                ) : isFocused ? (
                  <MoreBottomTabOn />
                ) : (
                  <MoreBottomTabOff />
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
      </View>
    </View>
  );
}

function DebugThemeSwitcher(props: any) {
  return (
    <TouchableOpacity
      onPress={props.changeDarkMode}
      style={[tailwind('p-2 bg-blue-800')]}>
      {props.isDarkModeEnable ? (
        <Text style={[tailwind('font-regular text-white font-15')]}>
          Dark Mode Active
        </Text>
      ) : (
        <Text style={[tailwind('font-regular text-white font-15')]}>
          Dark Mode InActive
        </Text>
      )}
    </TouchableOpacity>
  );
}
