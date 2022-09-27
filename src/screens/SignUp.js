import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Enter your mobile number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 18,
    color: '#000',
  },
  container: {
    paddingHorizontal: '3%',
    marginTop: 10,
  },
});
