import React, { Component } from 'react';
import {
StyleSheet,
View,
FlatList,
TouchableOpacity,
Text,
Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class ExperienceList extends Component {
render() {
  return (
    <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listItem}
          data={[
            { key: 'Taj Mahal', location:'Agra, New Delhi' , page: 'Book',image: require("../assets/images/taj_mahal.webp"), }, 
            { key: 'Pink City',location:'Jaipur, Rajasthan', page: 'Availability',image:require('../assets/images/Pink_travel.jpg'),},
            { key: 'Kerala',location:'Padanna Backwaters',page: 'Faq', image:require('../assets/images/Kerala_travel.jpg'), },
            { key: 'Goa', location:'Carols, vindaloo', page: 'Links', image:require('../assets/images/Goa_travel.jpg'),},
          ]}
          onPress={() => this.props.navigation.navigate('Book')}
          renderItem={({ item }) => {
            return (
             <View style=
             {styles.box}> 
                <Image
                style={{ height:'60%', width: '60%'}}
                  source={item.image}
                     resizeMode="contain"/>
                <Text style={styles.text}>
                  {item.key}
                </Text>
        
                <Text style={styles.text1}>
                  {item.location}
                </Text>
                <TouchableOpacity style={styles.button}
                 onPress={() => ('')}>
                    <Text style={styles.buttontext}>View </Text>
              </TouchableOpacity>
             <View style={styles.position}>
              <Text style={{color:'#000'}}>Disablility</Text>
              <Text style={styles.text3}>never bothered..</Text>
             <FontAwesome5
              name="grin-beam"
              color={'#ffbd03'}
              size={26}
              style={styles.icon2}
            />
             </View>
                </View>
    
            );
          }}
        />
    </View>
);
}
}




const styles = StyleSheet.create({
container: {
  alignItems:'center',
  flex: 1,
},
box:{
  alignItems:'flex-start',
  backgroundColor:'#fff',
   shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
   borderRadius:10,
   padding:10,
   width:300,
   height:200,
   margin:10,
   overflow:'hidden',
},
listItem: {
  flex: 1,
},
flex:{
flexDirection:'row',
justifyContent:'space-between',
},
text:{
  marginTop:20,
  marginHorizontal:20,
  color:'#ad186a',
  fontSize:20,
  fontFamily:'sans-serif-light',
},
text1:{
  color:'#745dc5',
  fontFamily:'cursive',
  margin:10,
  marginLeft:20,
  fontSize:20,
},
text3:{
  color:'#000',
  fontStyle:'italic',
  fontSize:15,
},
position:{
  position:'absolute',
  bottom:80,
  left:200,

},
icon2:{
  margin:3,
  marginLeft:30,
},
buttontext: {
  color: '#fff',
  fontSize: 15,
},
button: {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#e21744',
  borderRadius: 25,
  position:'absolute',
  top:150,
  right:30,
  width:60,
  height:30,
},
});
