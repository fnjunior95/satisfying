import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6A5ACD' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Recuperação de senha</Text>
      <TextInput
        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={{ backgroundColor: '#00FF7F', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        onPress={handleRecoverPassword}
      >
        <Text style={{ color: 'white' }}>RECUPERAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'red', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        onPress={voltar}
      >
        <Text style={{ color: 'white' }}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
