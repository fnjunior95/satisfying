import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  //valida email
  const validarEmail = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  };

  //TODO: mensagem de erro do login
  const handleError = () => {
    setErrorMessage('E-mail e/ou senha inválidos.');
  };

  const showCreateAccount = () => {
    props.navigation.navigate('CreateAccount')
  }

  const showForgotPassword = () => {
    props.navigation.navigate('ForgotPassword')
  }

  const showHome = (email, password) => {
    if(validarEmail(email) && password != '') {
      props.navigation.navigate('Drawer', {email: email});
    }
    else {
      handleError();
    }
  }

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}><Text style={styles.logo}> Satisfying.you  </Text>
        <Icon name="mood"size={50} color='white' /></View>
        
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
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <TouchableOpacity
        style={styles.button}
        onPress={() => {showHome(email, password)}}
        >
        <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.linkButton1}
        onPress={showCreateAccount} 
        >
        <Text style={styles.linkText}>Criar nova conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.linkButton2}
        onPress={showForgotPassword}
        >
        <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
         
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: 'darkslateblue'
        
    },
    logo: {
        fontSize: 35,
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 50,
        color: 'white'
    },
    label: {
      marginRight:180,
      fontSize: 18,
      color: 'white',
      fontFamily: 'AveriaLibre-Regular'
    },
    input: {
      width: '60%',
      marginBottom: 2,
      backgroundColor: 'white',
      fontFamily: 'AveriaLibre-Regular',
      height: 40,
      paddingHorizontal: 15,
      paddingVertical: 5
    },
    errorMessage: {
      color: 'tomato',
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 15
    },
    button: {
      backgroundColor: '#5cdb95',
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25
    },
    linkButton1: {
      width: '60%',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 13,
      backgroundColor: '#4dc6e8'
    },
    linkButton2: {
      width: '60%',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d1d1d1'
  },
    linkText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20
    },
});

export default Login;
