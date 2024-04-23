import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CreateAccount = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    setErrorMessage('O campo repetir senha difere da senha');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: 'darkslateblue', height: 80 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: 'white', marginLeft: 10 }}>Nova conta</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Repetir senha"
          secureTextEntry
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
        />
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
        <TouchableOpacity
          style={{ backgroundColor: '#00FF7F', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
          onPress={handleRegister}
        >
          <Text style={{ color: 'white' }}>CADASTRAR</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default CreateAccount;
