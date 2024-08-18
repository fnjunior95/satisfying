import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  //valida email
  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  const handleRecoverPassword = (text) => {
    setSucessoMessage('');setErrorMessage('');
    if(validarEmail(text)) {
      setSucessoMessage('Email enviado com sucesso!')
    } else {
      setErrorMessage('E-mail parece ser inválido');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Recuperação de senha</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRecoverPassword(email)}
        >
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: 'darkslateblue',
    height: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
    fontFamily: 'AveriaLibre-Regular'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: 80,
    fontFamily: 'AveriaLibre-Regular'
  },
  input: {
    width: '60%',
    marginBottom: 2,
    backgroundColor: 'white',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily: 'AveriaLibre-Regular'
  },
  errorMessage: {
    color: 'tomato',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    textAlign:'left'
  },
  sucessoMessage: {
    color: 'limegreen',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  },
  button: {
    backgroundColor: '#5cdb95',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
});

export default ForgotPassword
