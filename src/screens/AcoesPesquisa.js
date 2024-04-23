import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = (props) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#6A5ACD' }}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Drawer')}>
          <Icon name="arrow-back" size={30} color="lightblue" />
        </TouchableOpacity>
        <Text style={styles.title}>Pesquisa selecionada</Text>
      </View>
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
            <Icon name="edit" size={30} color="white" />
            <Text style={styles.buttonText}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Icon name="check" size={30} color="white" />
            <Text style={styles.buttonText}>Coletar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Icon name="assessment" size={30} color="white" />
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
    height: 70,
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
