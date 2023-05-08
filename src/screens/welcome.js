import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import LoginScreen from '../auth/Login';
const Welcome = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={style.background}
        source={{
          uri: 'https://i.pinimg.com/736x/cf/a1/9a/cfa19a15813795294f9302e6118a262d.jpg',
        }}>
        <Text style={style.h1}>Discover</Text>
        <Text style={style.h2}> world with us ... </Text>
        <Text style={style.h3}>"Have stories</Text>
        <Text style={style.h4}>TO TELL,NOT STUFF </Text>
        <Text style={style.h5}>to show"</Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate(LoginScreen)}>
          <Text style={style.buttontext}> GET STARTED </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const style = StyleSheet.create({
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
    marginTop: 300,
    marginLeft: 20,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  h2: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 40,
    marginLeft: 20,
    marginBottom: 30,
  },
  h3: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'cursive',
    marginLeft: 20,
  },
  h4: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 60,
  },
  h5: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'cursive',
    marginLeft: '60%',
  },
  buttontext: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 20,
    width: '60%',
  },
});
export default Welcome;
