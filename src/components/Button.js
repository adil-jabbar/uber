import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: width / 1.4,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Button;
