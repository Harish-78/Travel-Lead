import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tabs from '../screens/Tabs';


const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#7d849b"
          value={name}
          maxLength={10}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7d849b"
          value={email}
          maxLength={20}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile No"
          placeholderTextColor="#7d849b"
          value={phone}
          keyboardType="numeric"
          maxLength={20}
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7d849b"
          value={password}
          maxLength={20}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{navigation.navigate(Tabs)}}>
                    <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 20,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
    padding: 50,
    width: '80%',
    margin:60,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: '#000',
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    height: 40,
    margin: 10,
  },
  button: {
    backgroundColor: '#2a9039',
    borderRadius: 25,
    padding: 10,
    width: '90%',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
};

export default Register;
