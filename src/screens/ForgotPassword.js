import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRecoverPassword = () => {
    setErrorMessage('E-mail parece ser inválido');
  };

  const voltar = () => {
    props.navigation.goBack()
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50, backgroundColor: 'darkslateblue', height: 80 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Icon name="arrow-back" size={30} color="lightblue" />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: 'white', marginLeft: 10 }}>Recuperação de senha</Text>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 5, paddingHorizontal: 10 }}
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
        <TouchableOpacity
          style={{ backgroundColor: 'green', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
          onPress={handleRecoverPassword}
        >
          <Text style={{ color: 'white' }}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ForgotPassword;
