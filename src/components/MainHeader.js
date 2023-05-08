import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const MainHeader = ({title}) => {
  return (
    <View style={style.container}>
      <SimpleLineIcons
        name="menu"
        color={'#000'}
        size={20}
        onPress={() => {}}
      />
      <Text style={style.title}>{title}</Text>
      <SimpleLineIcons
        name="bell"
        color={'#000'}
        size={20}
        onPress={() => {}}
      />
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
