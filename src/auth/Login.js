import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { auth } from "../../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

import Register from './register';
import Tabs from '../screens/Tabs';
const Login = () => {
  const [initializing, setInitializing] = useState(true);
  const [email, Setmail] = useState(null);
  const [password, Setpassword] = useState(null);
  const navigation = useNavigation();
//   const login = () => {
//     signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
//        console.log("user credential", userCredential);
//        const user = userCredential.user;
//        console.log("user details", user);
//     })
// }
// useEffect(() => {
//   try {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         navigation.replace(Tabs);
//       }
//     });

//     return unsubscribe;
//   } catch (e) {
//     console.log(e);
//   }
// }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>Welcome!</Text>
        <Text style={styles.h2}>Back ...</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#7d849b"
          autoCapitalize="none"
          value={email}
          onChangeText={text => Setmail(text)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#7d849b"
          autoCapitalize="none"
          value={password}
          onChangeText={text => Setpassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{navigation.navigate(Tabs)}}>
          <Text style={styles.buttontext}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.h3}>Doesn't have any account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate(Register)}>
        <Text style={styles.h4}> create new account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
    padding: 30,
    width: '80%',
    marginHorizontal: 30,
    marginTop: '40%',
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  h1: {
    color: '#2a9039',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  h2: {
    color: '#000',
    fontFamily: 'cursive',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
  },
  h3: {
    fontWeight: 'bold',
    marginTop: 70,
    color: '#000',
  },
  h4: {
    color: '#00bfff',
    margin:10,
  },
  input: {
    color: '#000',
    width: '100%',
    height: 40,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  buttontext: {
    color: '#dfe4ea',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#2a9039',
    borderRadius: 25,
    marginTop: 40,
  },
});

export default Login;
