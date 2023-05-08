//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

// create a component
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar style={styles.searchbar} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar: {
    marginTop: 40,
    marginVertical: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

//make this component available to the app
export default SearchScreen;
