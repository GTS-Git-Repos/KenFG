import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import tailwind from 'tailwind-rn';
import clr from '../../../../constants/colors';

const CELL_COUNT = 6;

const App = ({value, onChangeText, dT}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={[styles.codeFieldRoot, tailwind('w-64')]}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={[styles.cellText, dT ? clr.tw : clr.td1]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginVertical: 7,
    marginHorizontal: 30,
  },
  cellRoot: {
    flex: 1,
    marginHorizontal: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B14D',
  },
  cellText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'gadugi-bold',
  },
  focusCell: {
    borderBottomColor: '#816D2E',
    borderBottomWidth: 2,
  },
});

export default App;
