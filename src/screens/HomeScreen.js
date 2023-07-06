import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet,View} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/SectionHeader';
import TripList from '../components/TripList';

function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar animated={true} backgroundColor="#2a9039" />
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }} >
        <View>
        <MainHeader title="Travel App" />
        <ScreenHeader header1="Find your" header2="dream trip ..." />
        <SectionHeader text="Popular Trips" link="See All" />
        <ScrollView horizontal={true} style={{ width: "100%" }}>
        <TripList />
        </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:"#fff",
  },
});
export default HomeScreen;
