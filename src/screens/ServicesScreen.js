import React, {useEffect } from 'react'
import { Text, StyleSheet, View,Image,ScrollView } from 'react-native'
import { LogBox } from 'react-native';
import ScreenHeader from '../components/ScreenHeader'
import AccommodationServices from '../components/AccommodationServices'
import TransportationServices from '../components/TransportationServices'
import DisabledServices from '../components/DisabledServices'
import MedicalServices from '../components/MedicalServices'
import ExperienceList from '../components/ExperiencesList'

export default function ServicesScreen() {
    useEffect(() => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    return (
        <ScrollView >
       <View style={styles.container}>
           <Image 
          source={require('../assets/svg/service.svg')}
          resizeMode='contain'
          style={{height:300,width:350}}
          />
           <Text style={styles.h1}>SERVICES</Text>   
         <ScreenHeader header1={"Wake up         "} header2={"          Travel to the edge  !!!"}/>    
         <TransportationServices/>
        <Text style={styles.h2}>No worry on Accomodation...</Text>
         <AccommodationServices/>
         <Image
          source={require('../assets/svg/persons.svg')}
          resizeMode='contain'
          style={{height:200,width:350}}
          />
        <Text style={styles.h3}>"Disability is not an Obstacle ..!"</Text>
        <Text style={styles.h4}>We make your travel dreams come true..</Text>
        <DisabledServices/>
        <Text style={styles.h2}>Wait, You are not alone ..   </Text>
        <MedicalServices />
        <Text style={styles.h5}>Experiences</Text> 
        <Image 
          source={require('../assets/svg/experience.svg')}
          resizeMode='contain'
          style={{height:200,width:300}}
          />  
          <ExperienceList/>
        </View> 
        </ScrollView>
    )
  }

 
 
 
     




const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:"#fff",
  },
  h1:{
    color:'#0089d0',
    fontSize:20,
    fontWeight:'bold',
  },
  h2:{
    color:'#000',
    fontSize:17,
    position:'relative',
    right:80,
    margin:10,
    marginLeft:50,
    fontFamily:'seriff',
  },
  h3:{
    color:'#000',
    fontSize:19,
    fontFamily:'cursive',
  },
  h4:{
    color:'#2a9039',
    fontSize:19,
    margin:10,
  },
  h5:{
    color:'#ad186a',
    fontSize:25,
    fontWeight:'bold',
    marginTop:20,
  },
})
