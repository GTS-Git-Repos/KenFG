import Snackbar from 'react-native-snackbar';

export const infoBox = (message: string, secondsDelay: number) => {
  setTimeout(() => {
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
  }, (secondsDelay ??= 0));
};

export const errorBox = (message: string, secondsDelay: number) => {
  setTimeout(() => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#e74c3c',
      action: {
        text: 'OK',
        textColor: 'white',
        onPress: () => {},
      },
    });
  }, (secondsDelay ??= 0));
};

