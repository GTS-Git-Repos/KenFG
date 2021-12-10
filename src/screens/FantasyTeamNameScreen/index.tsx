import React, {useEffect, useState} from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {
  ButtonComponent,
  TopBar,
  BlockScreenByLoading,
} from '../../sharedComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {errorBox} from '../../utils/snakBars';
import assets from '../../constants/assets_manifest';
import {getUserRemote, updateUserRemote} from '../../remote/userRemote';
import {resetDrawerNavigation} from '../../utils/resetNav';
import {updateUserInfoAction} from '../../store/actions/userAction';
import {decodeJwt} from '../../utils/formatters';
import {useDispatch} from 'react-redux';

const log = console.log;

export default function CreateTeamScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch();

  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!route.params?.mobile) {
      errorBox('failed');
    }
  });

  const onPressAction = async () => {
    try {
      if (!teamName) {
        errorBox('Name is Required');
        throw 'name required';
      }
      setLoading(true);
      const response = await updateUserRemote({
        mobile: route.params?.mobile,
        name: teamName,
      });
      if (response) {
        // get user info
        const userResponse = await getUserRemote({
          mobile: route.params?.mobile,
        });
        if (userResponse) {
          dispatch(updateUserInfoAction(userResponse.data));
        }
        resetDrawerNavigation(navigation);
      } else {
        setTimeout(() => {
          errorBox('Invalid Name');
        }, 500);

        throw 'Name is not set';
      }
    } catch (err) {
      log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <TopBar text={'Tell us your Name'} />
      <KeyboardAwareScrollView>
        <View
          style={[tailwind('pt-8 px-4 flex-col items-center justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.winning_cup}
            style={[{width: 40, height: 40}]}
          />
          <Text style={[tailwind('font-bold py-3 text-white font-18')]}>
            You're all set to Play
          </Text>

          <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
            Start your new innings with kenFg
          </Text>
          <Text style={[tailwind('font-regular py-3 text-dark-1 font-15')]}>
            Tell us your Name
          </Text>

          <InputBox teamName={teamName} setTeamName={setTeamName} />

          <Text style={[tailwind('font-regular text-dark-1 py-3 font-13')]}>
            Note: Full name is required to create your team
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.3}
          onPress={onPressAction}
          style={[tailwind('mx-4')]}>
          <ButtonComponent text={'SAVE NAME'} />
        </TouchableOpacity>
      </KeyboardAwareScrollView>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}

const InputBox = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-3 items-center'),
        {
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#B2933D',
          borderWidth: 1,
          borderStyle: 'solid',
        },
      ]}>
      <View
        style={[
          {
            flex: 7,
          },
        ]}>
        <TextInput
          value={props.teamName}
          onChangeText={e => props.setTeamName(e)}
          placeholder="Enter your name"
          placeholderTextColor="white"
          style={[
            tailwind('font-regular flex-grow text-light'),
            {
              height: 50,
            },
          ]}
        />
      </View>
    </View>
  );
};

/**
 * mobile   : in route params is mandatory
 */
