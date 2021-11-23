import Snackbar from 'react-native-snackbar';

export const infoBox = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: '#219653',
    action: {
      text: 'OK',
      textColor: 'white',
      onPress: () => {},
    },
  });
};

export const errorBox = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: 'red',
    action: {
      text: 'OK',
      textColor: 'white',
      onPress: () => {},
    },
  });
};
