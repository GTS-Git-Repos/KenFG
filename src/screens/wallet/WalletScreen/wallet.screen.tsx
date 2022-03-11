import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent, TopBar} from '../../../sharedComponents';
import Actions from './atoms/Actions';
import AmountStatusWallet from './atoms/amount.status.wallet';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
// import {
//   toRecentTransactions,
//   toManagePayments,
//   toVerifyAccount,
// } from '../../../navigations/wallet.links';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';

const log = console.log;

export default function WalletScreen() {
  const navigation = useNavigation<any>();
  const dT = useSelector(getAppThemeSelector);
  const userMeta: any = useSelector(userInfo);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'My Balance'} helpIcon={true} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <AmountStatusWallet
          balance={userMeta.un_utilized}
          winnigs={userMeta.winnings}
          bonus={userMeta.bonus}
          earned={userMeta.winnings}
          isVerified={true}
          dT={dT}
        />
        <View style={[tailwind('')]}>
          <Actions
            text={'My Recent Transactions'}
            goto={'TransactionListScreen'}
            dT={dT}
          />
          <Actions
            text={'Manage Payments'}
            subText="Add / Remove Care, Wallets, etc"
            goto="ManagePaymentsScreen"
            dT={dT}
          />
          <Actions
            text={'Verify Account'}
            subText="To eligable to withdrawal"
            goto="VerifyAccountScreen"
            dT={dT}
          />
          <Actions text={'Refer and Earn'} goto="InviteScreen" dT={dT} />
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

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
