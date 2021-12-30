import React, {useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import CurrentAmount from './atoms/CurrentAmount';
import {Modalize} from 'react-native-modalize';
import AddMoneyButton from './atoms/AddMoneyButton';
import Actions from './atoms/Actions';
import AddMoneySheet from './molecules/AddMoneySheet';
import LinearGradient from 'react-native-linear-gradient';
import WalletSubTitle from './atoms/WalletSubTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function WalletScreen() {
  const addMoneySheet = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Wallet'} />
      <ScrollView>
        {/* <CurrentAmount amount={38} /> */}
        <NewWallet />
        <View style={[tailwind('')]}>
          <WalletSubTitle text={'Amount Added (UNUTALISED)'} />
          <Text style={[tailwind('font-bold px-4 py-2 text-white font-18')]}>
            {'\u20B9'} 7,323
          </Text>
        </View>

        <WalletSubTitle text={'Winnings'} />
        <View style={[tailwind('flex-row items-center justify-between px-4')]}>
          <Text style={[tailwind('font-bold py-2 text-white font-18')]}>
            {'\u20B9'} 7,323
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyAccountScreen')}
            style={[tailwind('bg-green rounded p-2')]}>
            <Text style={[tailwind('font-regular text-white font-15')]}>
              Verify Now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[tailwind('my-2')]}>
          <Actions
            text={'My Recent Transactions'}
            goto={'TransactionListScreen'}
          />
          <Actions
            text={'Manage Payments'}
            subText="Add / Remove Care, Wallets, etc"
            goto="ManagePaymentsScreen"
          />
          <Actions
            text={'Verify Account'}
            subText="To eligable to withdrawal"
            goto="VerifyAccountScreen"
          />
          <Actions text={'Refer and Earn'} goto="InviteScreen" />
        </View>
      </ScrollView>
      <AddMoneyButton addMoneySheet={addMoneySheet} />

      <Modalize
        ref={addMoneySheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}
        // HeaderComponent={() => (
        //   <View style={[tailwind('bg-red-500 py-2')]}></View>
        // )}
      >
        <View style={[tailwind('')]}>
          <AddMoneySheet />
        </View>
      </Modalize>
    </View>
  );
}

const NewWallet = () => {
  return (
    <View
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 0}}
      // colors={['#172338', '#0D1320']}
      style={[tailwind('px-6 pt-6 pb-2 bg-dark-4 border-b border-gray-800')]}>
      <Text style={[tailwind('font-regular uppercase text-dark-1 font-12')]}>
        Current Balance
      </Text>
      <Text style={[tailwind('font-bold text-white'), {fontSize: 30}]}>
        {'\u20B9'} 7,323
      </Text>
    </View>
  );
};
