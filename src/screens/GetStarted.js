import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {Uber, UberImage} from '../assets/Svg';

export default function getStarted() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 100}}>
        <Uber />
      </View>
      <Image style={styles.tinyLogo} source={require('../assets/taxi3d.png')} />
      <Text
        style={{
          marginTop: 20,
          fontSize: 28,
          color: '#fff',
          fontWeight: '600',
        }}>
        Move around safely
      </Text>
      <View style={styles.btnc}>
        <Button text="Get Started" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(71,107,225)',
  },
  btnc: {
    paddingBottom: 15,
    position: 'absolute',
    bottom: 10,
  },
  tinyLogo: {
    marginTop: 60,
    width: '50%',
    height: '25%',
    resizeMode: 'contain',
  },
});
