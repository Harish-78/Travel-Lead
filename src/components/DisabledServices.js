import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 FlatList,
 TouchableOpacity,
 Text,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const deafIcon = <FontAwesome name="assistive-listening-systems" size={20} color="#2a9039" />;
export const wheelChairIcon = (
 <FontAwesome5 name="wheelchair" size={20} color="#2a9039" />
);
export const blindIcon = <FontAwesome name="low-vision" size={20} color="#2a9039" />;
export const dumbIcon = <FontAwesome name="american-sign-language-interpreting" size={20} color="#2a9039" />;


export default class DisabledServices extends Component {
 render() {
   return (
     <View style={styles.container}>
       <FlatList
         contentContainerStyle={styles.listItem}
         data={[
           { key: 'Deaf', page: 'Book', icon: deafIcon },
           { key: 'Handicap', page: 'Availability', icon: wheelChairIcon },
           { key: 'Blind', page: 'Faq', icon: blindIcon },
           { key: 'Dumb', page: 'Links', icon: dumbIcon },
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
   marginVertical:20,
 },
 icons: {
  marginHorizontal:10,
  marginVertical:20,
   alignItems: 'center',
   backgroundColor: '#FFF',
   borderRadius: 10,
   padding: 10,
   width: 62,
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
