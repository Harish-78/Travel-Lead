import React from 'react'
import { AppRegistry, StyleSheet, Text, View, StatusBar,ImageBackground,Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Login from '../auth/Login'
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContents: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0089d0',
  },
  h2: {
    color: '#000',
    fontFamily: 'cursive',
    fontSize: 20,
  },
  h3: {
    color: '#b30aa5',
    fontSize: 25,
    fontFamily: 'cursive',
    marginRight: 140,
  },
  h4: {
    color: '#e21744',
    fontSize: 25,
    marginLeft: 60,
    margin:10,
  },
  h5: {
    color: '#00d3c0',
    fontSize: 25,
    fontFamily: 'cursive',
    marginLeft: '60%',
  },
  buttontext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 40,
    backgroundColor: '#00a891',
    marginTop: 30,
    marginLeft: 20,
    width: '60%',
  },
})

const Intro=({navigation})=>{
return (
      <Swiper style={styles.wrapper} showsButtons={false} >
        <View style={styles.slide1}>
          <StatusBar backgroundColor={'#0089d0'}/>
          <Image 
          source={require('../assets/svg/1.svg')}
          resizeMode='contain'
          style={{height:'50%',width:'50%'}}
          />
           <Text style={styles.h1}>Discover</Text>
           <Text style={styles.h2}> world with us ... </Text>
        </View>
        <View style={styles.slide2}>
        <Image 
          source={require('../assets/svg/2.svg')}
          resizeMode='contain'
          style={{height:'60%',width:'60%'}}
          /> 
         <Text style={styles.h3}>"Have stories</Text>
        <Text style={styles.h4}>TO TELL,NOT STUFF </Text>
        <Text style={styles.h5}>to show"</Text>       
          </View>
        <View style={styles.slide3}>
        <Image 
          source={require('../assets/svg/3.svg')}
          resizeMode='contain'
          style={{height:'60%',width:'60%'}}
          /> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Login)}>
          <Text style={styles.buttontext}> GET STARTED </Text>
        </TouchableOpacity>
        </View>
      </Swiper>
    )
  }

export default Intro
AppRegistry.registerComponent('myproject', () => SwiperComponent)