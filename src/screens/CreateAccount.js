import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {auth} from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');

  const handleCadastro = () => {    
    setSucessoMessage('');setErrorMessage('');
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      setSucessoMessage('Cadastro realizado com sucesso:'+ userCredential.user.email);
    })
    .catch((error) => {
      setErrorMessage('Erro ao salvar usuário: '+ error.message);
    });
  };

  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  const validarSenha = (senha, repeteSenha) => {
    return senha != '' && repeteSenha != '' && senha == repeteSenha;
  };

  const handleRegister = (email, senha, repeteSenha) => {
    setErrorMessage('');
    setSucessoMessage('');
    if(validarEmail(email)) {
      if(validarSenha(senha, repeteSenha)) {
        setSucessoMessage('Cadastro realizado com sucesso! (TESTE)')
      } else {
        setErrorMessage('O campo repetir senha difere da senha');
      }
    } else {
      setErrorMessage('E-mail e/ou senha inválidos');
    }
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova conta</Text>
      </View>
      <View style={styles.content}>
       <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.label}>Repetir senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetir senha"
          secureTextEntry
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {sucessoMessage ? <Text style={styles.sucessoMessage}>{sucessoMessage}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {handleCadastro();}}
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
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
    marginBottom: 10,
    backgroundColor: 'darkslateblue',
    height: 60,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 35,
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
    marginHorizontal: 160,
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
    fontFamily: 'AveriaLibre-Regular'
  },
  sucessoMessage: {
    color: 'limegreen',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  },
  button: {
    backgroundColor: '#37BD6D',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
    

  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
});

export default CreateAccount;
