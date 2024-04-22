import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const CreateAccount = ({ onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro
    // Por enquanto, apenas exibirei uma mensagem de erro para ilustração
    setErrorMessage('O campo repetir senha difere da senha');
  };

  const handleGoBack = () => {
    // Chama a função fornecida pelo prop onCancel
    onCancel();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6A5ACD' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Nova Conta</Text>
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
      <TouchableOpacity
        style={{ backgroundColor: 'red', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        onPress={handleGoBack}
      >
        <Text style={{ color: 'white' }}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;
