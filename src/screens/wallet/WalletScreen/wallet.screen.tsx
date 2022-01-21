import React, {useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent, TopBar} from '../../../sharedComponents';
import {Modalize} from 'react-native-modalize';
import Actions from './atoms/Actions';
import AmountStatusWallet from './atoms/amount.status.wallet';

import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function WalletScreen() {
  const addMoneySheet = useRef(null);
  const navigation = useNavigation<any>();

  const userInfoSelector: any = useSelector(userInfo);

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Balance'} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <AmountStatusWallet
          balance={userInfoSelector.un_utilized}
          winnigs={userInfoSelector.winnings}
          bonus={userInfoSelector.bonus}
          earned={userInfoSelector.winnings}
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
      <TouchableOpacity
        onPress={() => navigation.navigate('AddCashScreen')}
        style={[tailwind('mx-4 my-2')]}>
        <ButtonComponent text={'ADD CASH'} />
      </TouchableOpacity>
      {/* <AddMoneyButton addMoneySheet={addMoneySheet} /> */}
    </View>
  );
}
