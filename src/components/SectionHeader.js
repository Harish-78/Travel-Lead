import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SectionHeader = ({text, link}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{text}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#448EE4',
  },
  h1: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'bold',
  },
});
