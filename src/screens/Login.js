import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  };

  const showCreateAccount = () => {
    props.navigation.navigate('CreateAccount');
  };

  const showForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const showHome = () => {
    if (!validarEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userLogged) => {
        props.navigation.navigate('Drawer', { email: userLogged.user.email });
      })
      .catch((error) => {
        let errorMsg = '';
        switch (error.code) {
          case 'auth/invalid-email':
            errorMsg = 'E-mail inválido.';
            break;
          case 'auth/user-not-found':
            errorMsg = 'Usuário não encontrado.';
            break;
          case 'auth/wrong-password':
            errorMsg = 'Senha incorreta.';
            break;
          default:
            errorMsg = 'Erro ao fazer login. Por favor, tente novamente.';
        }
        setErrorMessage(errorMsg);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Satisfying.you</Text>
        <Icon name="mood" size={windowWidth > 600 ? 50 : 40} color="white" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@dominio.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={showHome}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.linkButton} onPress={showCreateAccount}>
          <Text style={styles.linkText}>Criar nova conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.linkButton, { backgroundColor: '#d1d1d1' }]} onPress={showForgotPassword}>
          <Text style={styles.linkText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkslateblue',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.05,
  },
  logo: {
    fontSize: windowWidth > 600 ? 35 : 25,
    fontFamily: 'AveriaLibre-Regular',
    marginHorizontal: 10,
    color: 'white',
  },
  inputContainer: {
    width: windowWidth > 600 ? '60%' : '80%',
    marginBottom: windowHeight * 0.02,
  },
  label: {
    fontSize: windowWidth > 600 ? 18 : 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
    height: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  errorMessage: {
    color: 'tomato',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: windowWidth > 600 ? 15 : 12,
  },
  button: {
    backgroundColor: '#5cdb95',
    width: windowWidth > 600 ? '60%' : '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.05,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
  },
  linksContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight * 0.03,
  },
  linkButton: {
    width: windowWidth > 600 ? '60%' : '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4dc6e8',
    marginBottom: 10,
  },
  linkText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
});

export default Login;