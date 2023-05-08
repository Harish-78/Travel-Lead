import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Carosel extends Component {
  render() {
    return (
      <Swiper
        showsButtons={false}
        autoplay={true}
        showsPagination={false}
        style={styles.container}>
        <View style={styles.imagebox}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.wallpaperscraft.com/image/single/road_asphalt_marking_130996_300x168.jpg',
            }}
          />
          <View style={styles.textbox} />
        </View>
        <View style={styles.imagebox}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_300x168.jpg',
            }}
          />
          <View style={styles.textbox} />
        </View>
        <View style={styles.imagebox}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.wallpaperscraft.com/image/single/ocean_beach_aerial_view_134429_300x168.jpg',
            }}
          />
          <View style={styles.textbox} />
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 250,
  },
  imagebox: {
    overFlow: 'hidden',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
// eslint-disable-next-line no-undef
AppRegistry.registerComponent('Appname', () => Traveller);
