import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  //TODO: mensagem de erro do login
  const handleLogin = () => {
    setErrorMessage('E-mail e/ou senha inválidos.');
  };

  const showCreateAccount = () => {
    props.navigation.navigate('CreateAccount')
  }

  const showForgotPassword = () => {
    props.navigation.navigate('ForgotPassword')
  }

  const showHome = () => {
    props.navigation.navigate('Drawer')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkslateblue' }}>
        <Text style={{ fontSize: 40, marginBottom: 20, color: 'white'}}>
          Satisfying.you    <Icon name="mood" size={60} color='white' />
        </Text>
        
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
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}

        <TouchableOpacity
        style={{ backgroundColor: 'green', width: '80%', height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 25 }}
        onPress={showHome}
        >
        <Text style={{ color: 'white', fontSize: 25 }}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{ width: '80%', height: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 5, backgroundColor: 'royalblue' }}
        onPress={showCreateAccount} 
        >
        <Text style={{ color: 'white', fontSize: 20  }}>Criar nova conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{ width: '80%', height: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 5, backgroundColor: 'gray' }}
        onPress={showForgotPassword}
        >
        <Text style={{ color: 'white', fontSize: 20 }}>Esqueci minha senha</Text>
        </TouchableOpacity>

        
        
    </View>
  );
};

export default Login;
