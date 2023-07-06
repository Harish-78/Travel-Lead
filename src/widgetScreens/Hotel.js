import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hotel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hotel</Text>
    </View>
  )
}

export default Hotel

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:'#000',
    },
})