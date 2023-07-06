import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 FlatList,
 TouchableOpacity,
 Text,
 Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
export const flightIcon = <Entypo name="aircraft" size={20} color="#0089d0" />;
export const busIcon = <FontAwesome5 name="bus-alt" size={20} color="#0089d0" />;
export const trainIcon = <MaterialIcons name="train" size={20} color="#0089d0" />;
export const boatIcon = <Fontisto name="ship" size={20} color="#0089d0" />;
export default class TransportationServices extends Component {
 render() {
   return (
     <View style={styles.container}>
       <FlatList
         contentContainerStyle={styles.listItem}
         data={[
           { key: 'Plane', page: 'Book', icon:flightIcon },
           { key: 'Train', page: 'Availability',icon:trainIcon  },
           { key: 'Bus', page: 'Faq', icon:busIcon },
           { key: 'Ship', page: 'Links',icon:boatIcon },
         ]}
         onPress={() => this.props.navigation.navigate('Book')}
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
   margin:10,
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
