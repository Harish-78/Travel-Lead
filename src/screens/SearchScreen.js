import { Image, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Searchbar } from 'react-native-paper'
export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Searchbar />
        <Image 
          source={require('../assets/svg/search.svg')}
          resizeMode='contain'
          style={{height:300,width:350}}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:"#fff",
    marginTop:10,
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