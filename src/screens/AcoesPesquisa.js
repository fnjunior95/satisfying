import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = (props) => {

  const titulo = props.route.params.screen;

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>{titulo}</Text>
      </View>
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ModifySearch')}>
            <Icon name="edit-document" size={30} color="white" />
            <Text style={styles.buttonText}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Coleta', { screen: titulo })}>
            <Icon name="library-add-check" size={30} color="white" />
            <Text style={styles.buttonText}>Coletar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Relatorio')}>
            <Icon name="donut-large" size={30} color="white" />
            <Text style={styles.buttonText}>Relatório</Text>
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
    marginBottom: 5,
    backgroundColor: 'darkslateblue',
    height: 65,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 50
  },
  button: {
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
    height: '90%',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default AcoesPesquisa;
