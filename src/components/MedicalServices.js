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
import AntDesign from 'react-native-vector-icons/AntDesign';
export const userIcon = <FontAwesome5 name="user-shield" size={20} color="#2a9039" />;
export const medicalIcon = (
 <FontAwesome5 name="user-md" size={20} color="#2a9039" />
);
export const communicationIcon = <AntDesign name="customerservice" size={20} color="#2a9039" />;
export const fileIcon = <FontAwesome name="file-text" size={20} color="#2a9039" />;


export default class MedicalServices extends Component {
 render() {
   return (
     <View style={styles.container}>
       <FlatList
         contentContainerStyle={styles.listItem}
         data={[
           { key: 'Personal Assistent', page: 'Book', icon: userIcon },
           { key: 'Medical Support', page: 'Availability', icon: medicalIcon },
           { key: 'Customer Support', page: 'Faq', icon: communicationIcon },
           { key: 'Document Verify', page: 'Links', icon: fileIcon },
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
