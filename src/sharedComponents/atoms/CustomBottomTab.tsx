import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import tailwind from '../../../tailwind';

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
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

export default function CustomBottomTab({state, descriptors, navigation}: any) {
  const isDarkModeEnable = useSelector<any>(state => state.app.darkModeEnabled);
  const dispatch = useDispatch();
  const dT = useSelector(getAppThemeSelector);

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
      <DebugThemeSwitcher
        isDarkModeEnable={isDarkModeEnable}
        changeDarkMode={changeDarkMode}
      />

      <View style={[ss.root, dT ? clr.bgg : clr.bgw]}>
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
                    <HomeBottomTabOn dT={dT} />
                  ) : (
                    <HomeBottomTabOff />
                  )
                ) : index === 1 ? (
                  isFocused ? (
                    <ContestsBottomTabOn dT={dT} />
                  ) : (
                    <ContestsBottomTabOff />
                  )
                ) : index === 2 ? (
                  isFocused ? (
                    <LeaderBottomTabOn dT={dT} />
                  ) : (
                    <LeaderBottomTabOff />
                  )
                ) : isFocused ? (
                  <MoreBottomTabOn dT={dT} />
                ) : (
                  <MoreBottomTabOff />
                )}

                {dT ? (
                  <Text
                    style={[
                      ss.txt,
                      {color: `${isFocused ? '#172339' : '#7e6b2d'}`},
                    ]}>
                    {label}
                  </Text>
                ) : (
                  <Text
                    style={[
                      ss.txt,
                      {color: `${isFocused ? '#9C181E' : '#828282'}`},
                    ]}>
                    {label}
                  </Text>
                )}
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

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 4,
    elevation: 4,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    fontSize: 10,
    paddingTop: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
