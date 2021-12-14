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
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function WalletScreen() {
  const addMoneySheet = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Wallet'} />
      <ScrollView>
        <CurrentAmount amount={38} />
        <View style={[tailwind('my-2')]}>
          <Actions
            text={'My Recent Transactions'}
            goto={'TransactionListScreen'}
          />
          {/* <Actions
            text={'Manage Payments'}
            subText="Add / Remove Care, Wallets, etc"
            goto="TransactionListScreen"
          /> */}
          {/* <Actions text={'Refer and Earn'} goto="ReferralScreen" /> */}
        </View>
      </ScrollView>
      <AddMoneyButton addMoneySheet={addMoneySheet} />

      <Modalize
        ref={addMoneySheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('')]}>
          <AddMoneySheet />
        </View>
      </Modalize>
    </View>
  );
}
