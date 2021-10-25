import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import tailwind from 'tailwind';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native';
import assets from 'assets';

export default function CustomBottomTab({ state, descriptors, navigation }: any) {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={tailwind('flex flex-row bg-green-200 items-center')}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
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
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1, paddingVertical: 7 }}>
                        <View style={tailwind('flex flex-col justify-center items-center')}>
                            <Text>Test</Text>
                            <Text
                                style={[
                                    tailwind(
                                        `text-white pt-1 text-xs appRegularFont  ${isFocused ? 'text-red-600' : 'appGrayColor'
                                        }`,
                                    ),
                                ]}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}