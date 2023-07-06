import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const MainHeader = ({title}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
      <SimpleLineIcons
        name="menu"
        color={'#000'}
        size={20}
      />
      </TouchableOpacity>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity>
      <SimpleLineIcons
        name="bell"
        color={'#000'}
        size={20}
      />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'bold',
  },
});
