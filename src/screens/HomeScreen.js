import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import Carosel from '../components/Carousel';
import SectionHeader from '../components/SectionHeader';
import TripListScreen from './TripListScreen';
function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar animated={true} backgroundColor="#2a9039" />
      <ScrollView>
        <MainHeader title="Travel App" />
        <ScreenHeader header1="Find your" header2="dream trip ..." />
        <Carosel />
        <SectionHeader text="Popular Trips" link="See All" />
        <TripListScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 35,
    paddingHorizontal: 10,
  },
});
export default HomeScreen;
