import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import tailwind from '../../../tailwind';
import RNRestart from 'react-native-restart';

class ErrorBoundary extends React.Component {
  state = {hasError: false, errorInfo: '', error: ''};

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({hasError: true, error: error, errorInfo: errorInfo});
    // this.sendStackTrace = this.sendStackTrace.bind()
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={[tailwind('h-full bg-white')]}>
          <Text style={[tailwind('font-regular text-center font-20 p-4')]}>
            Unexpected error happpend
          </Text>
          <ScrollView>
            <Text
              style={[
                tailwind('font-regular text-gray-900 text-center m-7 font-15'),
              ]}>
              {JSON.stringify(this.state.error)}
            </Text>
            <Text
              style={[
                tailwind('font-regular text-gray-900 text-center m-10 font-15'),
              ]}>
              {JSON.stringify(this.state.error)}
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => RNRestart.Restart()}
            style={[tailwind('border border-blue-700 p-3 m-4')]}>
            <Text
              style={[
                tailwind('font-regular font-15 text-center text-center'),
              ]}>
              Restart
            </Text>
          </TouchableOpacity>
        </View>
      );

    
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
