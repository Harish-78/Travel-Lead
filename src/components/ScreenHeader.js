import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScreenHeader = ({header1, header2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{header1}</Text>
      <Text style={styles.h2}>{header2}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  h1: {
    color: '#2a9039',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    color: '#000',
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'cursive',
  },
});
