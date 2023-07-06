import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 FlatList,
 TouchableOpacity,
 Text,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const hotelIcon = <FontAwesome5 name="hotel" size={20} color="#0089d0" />;
export const campIcon = (
 <FontAwesome5 name="campground" size={20} color="#0089d0" />
);
export const foodIcon = <MaterialCommunityIcons name="food" size={20} color="#0089d0" />;
export const tvIcon = <FontAwesome5 name="tv" size={20} color="#0089d0" />;


export default class AccommodationServices extends Component {
 render() {
   return (
     <View style={styles.container}>
       <FlatList
         contentContainerStyle={styles.listItem}
         data={[
           { key: 'Hotel', page: 'Hotel', icon: hotelIcon },
           { key: 'Camp', page: 'Availability', icon: campIcon },
           { key: 'Food', page: 'Faq', icon: foodIcon },
           { key: 'Fun', page: 'Links', icon: tvIcon },
         ]}
         renderItem={({ item }) => {
           return (
             <TouchableOpacity
               style={styles.icons}
               onPress={() => ('')}>
               {item.icon}
               <Text style={styles.text}>{item.key}</Text>
             </TouchableOpacity>
           );
         }}
       />
     </View>
   );
 }
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   marginVertical:20,
 },
 icons: {
  marginHorizontal:10,
  marginVertical:20,
   alignItems: 'center',
   backgroundColor: '#FFF',
   borderRadius: 10,
   padding: 10,
   width: 60,
   height: 60,
   shadowColor: '#171717',
    shadowOffset: {width: 5, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation:2.5,
 },
 listItem: {
   flex: 1,
   flexDirection: 'row',
 },
 text: {
  color:"#000",
   fontSize: 10,
   padding: 5,
 },
});
