import React, { Component } from 'react';
import {
StyleSheet,
View,
FlatList,
TouchableOpacity,
Text,
Image,
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const locationIcon = (
<LocationIcon name="location-on" size={20} color="green" />
);





export default class TripList extends Component {
render() {
  return (
    <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listItem}
          data={[
            { key: 'Taj Mahal', location:'Agra, New Delhi' , page: 'Book',image: require("../assets/images/agra.jpg"),icon: locationIcon  }, 
            { key: 'Pink City',location:'Jaipur, Rajasthan', page: 'Availability',image:require('../assets/images/Pink.jpg'),icon: locationIcon },
            { key: 'Kerala',location:'Padanna Backwaters',page: 'Faq', image:require('../assets/images/kerela.jpg'), icon: locationIcon },
            { key: 'Goa', location:'Carols, vindaloo', page: 'Links', image:require('../assets/images/Goa.jpg'),icon: locationIcon },
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
                {item.icon}
                  {item.location}
                </Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => ('')}>
                    <Text style={styles.buttontext}>Book your Ticket </Text>
              </TouchableOpacity>
             <View style={styles.position}>
              <Text style={{color:'#000'}}>HERE IS</Text>
              <Text style={styles.text3}>your dream..</Text>
             <FontAwesome
              name="ticket"
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
  marginLeft:17,
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
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
  color:'#000',
  fontSize:20,
  fontFamily:'sans-serif-light',
},
text1:{
  color:'#000',
  fontFamily:'cursive',
  margin:10,
  fontSize:20,
},
text3:{
  color:'#000',
  fontStyle:'italic',
  fontSize:20,
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
  fontWeight: 'bold',
  fontSize: 10,
},
button: {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#e21744',
  borderRadius: 25,
  marginLeft:50,
  marginBottom:30,
  padding:10,
  position:'absolute',
  top:150,
  right:30,
},
});
