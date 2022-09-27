import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Button from './src/components/Button';
import GetStarted from './src/screens/GetStarted';
import SignUp from './src/screens/SignUp';

const App = () => {
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
