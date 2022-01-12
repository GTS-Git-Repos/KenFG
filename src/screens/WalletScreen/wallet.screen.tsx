import React, {useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents/';
import {Modalize} from 'react-native-modalize';
import AddMoneyButton from './atoms/addmoney.btn.wallet';
import Actions from './atoms/Actions';
import AddMoneySheet from './molecules/addmoney.sheet.wallet';
import AmountStatusWallet from './atoms/amount.status.wallet';

import {useSelector} from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function WalletScreen() {
  const addMoneySheet = useRef(null);
  const navigation = useNavigation();

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Balance'} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <AmountStatusWallet
          balance={0}
          winnigs={0}
          bonus={0}
          earned={0}
          isVerified={false}
        />
        <View style={[tailwind('')]}>
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
        closeOnOverlayTap={true}>
        <View>
          <AddMoneySheet />
        </View>
      </Modalize>
    </View>
  );
}
